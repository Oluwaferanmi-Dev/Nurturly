/**
 * HubSpot CRM integration helper.
 * Uses the HubSpot Contacts API v3 (Private App token auth).
 *
 * Required env var:
 *   HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxxxxxx
 *
 * Scopes needed on the Private App:
 *   crm.objects.contacts.write
 *   crm.objects.contacts.read
 */

const HUBSPOT_API_BASE = 'https://api.hubapi.com'
const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  }
}

/**
 * Splits "First Last" into { firstname, lastname }.
 * Handles single names gracefully.
 */
function splitName(fullName: string): { firstname: string; lastname: string } {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) return { firstname: parts[0], lastname: '' }
  const lastname = parts.pop()!
  return { firstname: parts.join(' '), lastname }
}

/**
 * Formats the structured inquiry fields into a readable note
 * that gets stored in HubSpot's built-in "message" property.
 */
function formatInquiryNote(data: {
  care_type?: string | null
  relationship_to_patient?: string | null
  zip_code?: string | null
  urgency?: string | null
  hours_per_week?: string | null
  message?: string | null
}): string {
  const lines: string[] = ['[CareBase Website Inquiry]', '']
  if (data.care_type) lines.push(`Type of Care: ${data.care_type}`)
  if (data.relationship_to_patient) lines.push(`Relationship to Patient: ${data.relationship_to_patient}`)
  if (data.zip_code) lines.push(`Location / ZIP: ${data.zip_code}`)
  if (data.urgency) lines.push(`Urgency: ${data.urgency}`)
  if (data.hours_per_week) lines.push(`Hours / Week: ${data.hours_per_week}`)
  if (data.message) lines.push('', `Additional Context: ${data.message}`)
  return lines.join('\n')
}

// ─── Upsert a contact (create or update by email) ────────────────────────────

interface HubSpotContactInput {
  name: string
  email: string
  phone?: string | null
  care_type?: string | null
  relationship_to_patient?: string | null
  zip_code?: string | null
  urgency?: string | null
  hours_per_week?: string | null
  message?: string | null
}

export async function upsertHubSpotContact(
  data: HubSpotContactInput,
): Promise<{ success: boolean; contactId?: string; error?: unknown }> {
  if (!TOKEN) {
    console.warn('[HubSpot] HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync')
    return { success: false, error: 'No access token configured' }
  }

  const { firstname, lastname } = splitName(data.name)
  const note = formatInquiryNote(data)

  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
    message: note,
    hs_lead_status: 'NEW',
    lifecyclestage: 'lead',
    lead_source: 'website_contact_form',
  }

  if (data.phone) properties.phone = data.phone
  if (data.zip_code) properties.zip = data.zip_code

  try {
    // Try to create first
    const createRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ properties }),
    })

    if (createRes.ok) {
      const contact = await createRes.json()
      console.log(`[HubSpot] Contact created: ${contact.id}`)
      return { success: true, contactId: contact.id }
    }

    // 409 = contact already exists → update instead
    if (createRes.status === 409) {
      const updateRes = await fetch(
        `${HUBSPOT_API_BASE}/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: getHeaders(),
          body: JSON.stringify({ properties }),
        },
      )

      if (updateRes.ok) {
        const contact = await updateRes.json()
        console.log(`[HubSpot] Contact updated: ${contact.id}`)
        return { success: true, contactId: contact.id }
      }

      const err = await updateRes.json()
      console.error('[HubSpot] Update failed:', err)
      return { success: false, error: err }
    }

    const err = await createRes.json()
    console.error('[HubSpot] Create failed:', err)
    return { success: false, error: err }
  } catch (error) {
    console.error('[HubSpot] Network error:', error)
    return { success: false, error }
  }
}

// ─── Push a job applicant as a contact ───────────────────────────────────────

interface HubSpotApplicantInput {
  name: string
  email: string
  phone?: string | null
  job_slug: string
  experience?: string | null
  location?: string | null
}

export async function upsertHubSpotApplicant(
  data: HubSpotApplicantInput,
): Promise<{ success: boolean; contactId?: string; error?: unknown }> {
  if (!TOKEN) {
    console.warn('[HubSpot] HUBSPOT_ACCESS_TOKEN not set — skipping CRM sync')
    return { success: false, error: 'No access token configured' }
  }

  const { firstname, lastname } = splitName(data.name)

  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
    lifecyclestage: 'other',
    hs_lead_status: 'NEW',
    lead_source: 'website_job_application',
    message: `[CareBase Job Application]\nPosition: ${data.job_slug}\nExperience: ${data.experience ?? 'not specified'}`,
  }

  if (data.phone) properties.phone = data.phone
  if (data.location) properties.city = data.location

  try {
    const createRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ properties }),
    })

    if (createRes.ok) {
      const contact = await createRes.json()
      return { success: true, contactId: contact.id }
    }

    if (createRes.status === 409) {
      const updateRes = await fetch(
        `${HUBSPOT_API_BASE}/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: getHeaders(),
          body: JSON.stringify({ properties }),
        },
      )
      if (updateRes.ok) {
        const contact = await updateRes.json()
        return { success: true, contactId: contact.id }
      }
    }

    return { success: false, error: 'HubSpot sync failed' }
  } catch (error) {
    console.error('[HubSpot] Network error:', error)
    return { success: false, error }
  }
}
