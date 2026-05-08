import { Resend } from 'resend'

// Create Resend lazily per-request to ensure env variables are loaded
const getResend = () => process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nurturlycare.com'
const COMPANY_NAME = 'Nurturly Care'
const LOGO_URL = 'https://nurturlycare.com/nurturly-logo.png'

// ─── Helper functions ────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function formatJobTitle(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

// ─── Shared email styles ──────────────────────────────────────────────────────

const sharedStyles = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap');
    body {
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #f5f5f5;
      color: #1c1c19;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      padding: 0;
    }
    .serif { font-family: 'Newsreader', Georgia, serif; }
  </style>
`

// ─── Inquiry Email ────────────────────────────────────────────────────────────

export async function sendInquiryEmail(data: {
  name: string
  email: string
  phone?: string | null
  care_type?: string | null
  relationship_to_patient?: string | null
  zip_code?: string | null
  urgency?: string | null
  hours_per_week?: string | null
  message?: string | null
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      ${sharedStyles}
    </head>
    <body style="font-family:'Manrope',sans-serif;background-color:#f5f5f5;color:#1c1c19;margin:0;padding:48px 16px;">

      <div style="max-width:640px;margin:0 auto;background-color:#fcf9f4;border-radius:2px;box-shadow:0 10px 30px -5px rgba(0,0,0,0.05);overflow:hidden;border:1px solid rgba(0,109,119,0.1);">

        <!-- Logo Header -->
        <div style="padding:48px 48px 32px 48px;text-align:center;border-bottom:1px solid rgba(0,109,119,0.05);">
          <img alt="Nurturly Care" src="${LOGO_URL}" style="height:48px;width:auto;object-fit:contain;" />
        </div>

        <!-- Main Content -->
        <div style="padding:48px;">

          <!-- Title -->
          <div style="text-align:center;margin-bottom:64px;">
            <h1 style="font-family:'Newsreader',Georgia,serif;font-size:36px;font-weight:300;color:#006D77;margin:0 0 12px 0;letter-spacing:-0.02em;">New Inquiry Received</h1>
            <p style="color:#3e494a;font-weight:300;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0;">Digital Concierge Notification</p>
          </div>

          <!-- Fields -->
          <div style="margin-bottom:40px;">

            <!-- Client Name -->
            <div style="margin-bottom:40px;">
              <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Client Name</span>
              <div style="font-family:'Newsreader',Georgia,serif;font-size:20px;color:#1c1c19;font-style:italic;font-weight:500;">${escapeHtml(data.name)}</div>
              <div style="margin-top:16px;height:1px;background-color:rgba(0,109,119,0.1);"></div>
            </div>

            <!-- Email + Phone grid -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
              <tr>
                <td style="width:50%;padding-right:24px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Email Address</span>
                  <div style="font-size:14px;font-weight:500;color:#006D77;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color:#006D77;text-decoration:none;">${escapeHtml(data.email)}</a>
                  </div>
                </td>
                ${data.phone ? `
                <td style="width:50%;padding-left:24px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Contact Number</span>
                  <div style="font-size:14px;font-weight:500;color:#1c1c19;">${escapeHtml(data.phone)}</div>
                </td>
                ` : '<td></td>'}
              </tr>
            </table>

            <!-- Service Interest + Relationship Grid -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
              <tr>
                ${data.care_type ? `
                <td style="width:50%;padding-right:24px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Type of Care</span>
                  <span style="display:inline-block;padding:6px 16px;background-color:rgba(0,109,119,0.05);border:1px solid rgba(0,109,119,0.1);border-radius:999px;font-size:11px;font-weight:600;color:#006D77;text-transform:uppercase;letter-spacing:0.1em;">${escapeHtml(data.care_type)}</span>
                </td>` : '<td style="width:50%;"></td>'}
                ${data.relationship_to_patient ? `
                <td style="width:50%;padding-left:24px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Relationship to Patient</span>
                  <div style="font-size:14px;font-weight:500;color:#1c1c19;">${escapeHtml(data.relationship_to_patient)}</div>
                </td>` : '<td style="width:50%;"></td>'}
              </tr>
            </table>

            <!-- Location + Urgency + Hours Grid -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
              <tr>
                ${data.zip_code ? `
                <td style="width:33%;padding-right:16px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Location / ZIP</span>
                  <div style="font-size:14px;font-weight:500;color:#1c1c19;">${escapeHtml(data.zip_code)}</div>
                </td>` : '<td style="width:33%;"></td>'}
                ${data.urgency ? `
                <td style="width:33%;padding-right:16px;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Need Care</span>
                  <div style="font-size:14px;font-weight:500;color:#1c1c19;">${escapeHtml(data.urgency)}</div>
                </td>` : '<td style="width:33%;"></td>'}
                ${data.hours_per_week ? `
                <td style="width:33%;vertical-align:top;">
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:8px;display:block;">Hours / Week</span>
                  <div style="font-size:14px;font-weight:500;color:#1c1c19;">${escapeHtml(data.hours_per_week)}</div>
                </td>` : '<td style="width:33%;"></td>'}
              </tr>
            </table>

            <!-- Message -->
            ${data.message ? `
            <div style="margin-bottom:40px;padding-top:16px;">
              <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.2em;color:#8c4e35;font-weight:600;margin-bottom:16px;display:block;">Additional Context</span>
              <div style="font-family:'Newsreader',Georgia,serif;font-size:18px;line-height:1.7;color:#3e494a;background-color:rgba(255,255,255,0.5);padding:32px;border:1px solid rgba(0,109,119,0.05);font-style:italic;">&ldquo;${escapeHtml(data.message).replace(/\n/g, '<br/>')}&rdquo;</div>
            </div>` : ''}

          </div>

          <!-- CTA -->
          <div style="text-align:center;margin-top:64px;">
            <a href="https://supabase.com/dashboard/project/lslsbdbqhfjdonbwpnvd/editor" style="display:inline-block;background-color:#006D77;color:#ffffff;padding:16px 40px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.2em;text-decoration:none;">Review in Dashboard</a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color:rgba(255,255,255,0.5);padding:40px 48px;border-top:1px solid rgba(0,109,119,0.05);text-align:center;">
          <p style="font-size:10px;text-transform:uppercase;letter-spacing:0.3em;color:#8c4e35;font-weight:700;margin:0 0 16px 0;">${COMPANY_NAME}</p>
          <div style="max-width:300px;margin:0 auto 24px auto;height:1px;background-color:rgba(0,109,119,0.1);"></div>
          <p style="font-size:11px;color:rgba(62,73,74,0.7);line-height:1.7;font-weight:300;margin:0;">
            &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.<br/>
            This is an automated correspondence regarding a website submission.
          </p>
        </div>

      </div>
    </body>
    </html>
  `

  try {
    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY missing - skipping inquiry email to admin.');
      return { success: false, error: 'No Resend API Key' };
    }

    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <hello@nurturlycare.com>`,
      to: ADMIN_EMAIL,
      subject: `New Inquiry from ${data.name}`,
      html: htmlContent,
      replyTo: data.email,
    })

    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error('Failed to send inquiry email:', error)
    return { success: false, error }
  }
}

// ─── Inquiry Confirmation (to submitter) ────────────────────────────────────────

export async function sendInquiryConfirmation(data: {
  name: string
  email: string
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      ${sharedStyles}
    </head>
    <body style="font-family:'Manrope',sans-serif;background-color:#f5f5f5;color:#1c1c19;margin:0;padding:48px 16px;">

      <div style="max-width:600px;margin:0 auto;background-color:#fcf9f4;border-radius:2px;box-shadow:0 10px 30px -5px rgba(0,0,0,0.05);overflow:hidden;border:1px solid rgba(0,109,119,0.1);">

        <!-- Logo -->
        <div style="padding:40px 48px;text-align:center;border-bottom:1px solid rgba(0,109,119,0.05);">
          <img alt="Nurturly Care" src="${LOGO_URL}" style="height:44px;width:auto;object-fit:contain;" />
        </div>

        <!-- Content -->
        <div style="padding:48px;">

          <h1 style="font-family:'Newsreader',Georgia,serif;font-size:32px;font-weight:300;color:#006D77;margin:0 0 16px 0;letter-spacing:-0.01em;">We received your message.</h1>
          <p style="font-size:17px;color:#3e494a;margin:0 0 32px 0;line-height:1.7;font-weight:300;">Thank you, ${escapeHtml(data.name)}. A member of our care team will review your inquiry and get back to you within <strong style="color:#006D77;">24 hours</strong>.</p>

          <div style="background-color:rgba(0,109,119,0.04);border-left:3px solid #006D77;padding:24px 28px;margin-bottom:40px;">
            <p style="margin:0 0 12px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#8c4e35;">What happens next</p>
            <ol style="margin:0;padding-left:20px;color:#3e494a;font-size:15px;line-height:2;">
              <li>A care coordinator will call or email you</li>
              <li>We&rsquo;ll discuss your specific needs and questions</li>
              <li>We&rsquo;ll schedule a free in-home consultation</li>
            </ol>
          </div>

          <p style="font-size:14px;color:#3e494a;margin:0 0 8px 0;">In the meantime, feel free to reach us directly:</p>
          <p style="font-size:15px;margin:0;"><a href="mailto:hello@nurturlycare.com" style="color:#006D77;text-decoration:none;font-weight:500;">hello@nurturlycare.com</a></p>

        </div>

        <!-- Footer -->
        <div style="background-color:rgba(255,255,255,0.5);padding:32px 48px;border-top:1px solid rgba(0,109,119,0.05);text-align:center;">
          <p style="font-size:10px;text-transform:uppercase;letter-spacing:0.3em;color:#8c4e35;font-weight:700;margin:0 0 12px 0;">${COMPANY_NAME}</p>
          <p style="font-size:11px;color:rgba(62,73,74,0.7);line-height:1.7;font-weight:300;margin:0;">
            &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.<br/>
            You&rsquo;re receiving this because you submitted a form on nurturlycare.com.
          </p>
        </div>

      </div>
    </body>
    </html>
  `

  try {
    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY missing - skipping inquiry confirmation email.');
      return { success: false, error: 'No Resend API Key' };
    }

    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <hello@nurturlycare.com>`,
      to: data.email,
      subject: `We received your inquiry, ${data.name}`,
      html: htmlContent,
    })
    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error('Failed to send inquiry confirmation:', error)
    return { success: false, error }
  }
}

// ─── Application Confirmation (to applicant) ──────────────────────────────────

export async function sendApplicationConfirmation(data: {
  name: string
  email: string
  job_slug: string
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      ${sharedStyles}
    </head>
    <body style="font-family:'Manrope',sans-serif;background-color:#f5f5f5;color:#1c1c19;margin:0;padding:48px 16px;">

      <div style="max-width:600px;margin:0 auto;background-color:#fcf9f4;border-radius:2px;box-shadow:0 10px 30px -5px rgba(0,0,0,0.05);overflow:hidden;border:1px solid rgba(0,109,119,0.1);">

        <!-- Logo -->
        <div style="padding:40px 48px;text-align:center;border-bottom:1px solid rgba(0,109,119,0.05);">
          <img alt="Nurturly Care" src="${LOGO_URL}" style="height:44px;width:auto;object-fit:contain;" />
        </div>

        <!-- Content -->
        <div style="padding:48px;">

          <h1 style="font-family:'Newsreader',Georgia,serif;font-size:32px;font-weight:300;color:#006D77;margin:0 0 16px 0;letter-spacing:-0.01em;">Application received.</h1>
          <p style="font-size:17px;color:#3e494a;margin:0 0 32px 0;line-height:1.7;font-weight:300;">
            Thank you, ${escapeHtml(data.name)}. We&rsquo;ve received your application for the <strong style="color:#006D77;">${escapeHtml(formatJobTitle(data.job_slug))}</strong> position and are genuinely excited to learn more about you.
          </p>

          <div style="background-color:rgba(0,109,119,0.04);border-left:3px solid #006D77;padding:24px 28px;margin-bottom:40px;">
            <p style="margin:0 0 16px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.15em;font-weight:600;color:#8c4e35;">Your journey with us</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;vertical-align:top;width:28px;"><span style="font-size:13px;font-weight:700;color:#006D77;">01</span></td><td style="padding:6px 0;font-size:14px;color:#3e494a;">Discovery &mdash; Application review by our team</td></tr>
              <tr><td style="padding:6px 0;vertical-align:top;"><span style="font-size:13px;font-weight:700;color:#006D77;">02</span></td><td style="padding:6px 0;font-size:14px;color:#3e494a;">Initial Chat &mdash; A brief values-alignment call</td></tr>
              <tr><td style="padding:6px 0;vertical-align:top;"><span style="font-size:13px;font-weight:700;color:#006D77;">03</span></td><td style="padding:6px 0;font-size:14px;color:#3e494a;">Immersive &mdash; Visit a sanctuary, see our culture</td></tr>
              <tr><td style="padding:6px 0;vertical-align:top;"><span style="font-size:13px;font-weight:700;color:#006D77;">04</span></td><td style="padding:6px 0;font-size:14px;color:#3e494a;">Deep Dive &mdash; Meet your future team</td></tr>
              <tr><td style="padding:6px 0;vertical-align:top;"><span style="font-size:13px;font-weight:700;color:#006D77;">05</span></td><td style="padding:6px 0;font-size:14px;color:#3e494a;">Welcome Home &mdash; Begin your journey</td></tr>
            </table>
          </div>

          <p style="font-size:14px;color:#3e494a;margin:0 0 8px 0;">Our team typically responds within 48 hours. Questions in the meantime?</p>
          <p style="font-size:15px;margin:0;"><a href="mailto:hello@nurturlycare.com" style="color:#006D77;text-decoration:none;font-weight:500;">hello@nurturlycare.com</a></p>

        </div>

        <!-- Footer -->
        <div style="background-color:rgba(255,255,255,0.5);padding:32px 48px;border-top:1px solid rgba(0,109,119,0.05);text-align:center;">
          <p style="font-size:10px;text-transform:uppercase;letter-spacing:0.3em;color:#8c4e35;font-weight:700;margin:0 0 12px 0;">${COMPANY_NAME}</p>
          <p style="font-size:11px;color:rgba(62,73,74,0.7);line-height:1.7;font-weight:300;margin:0;">
            &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.<br/>
            You&rsquo;re receiving this because you applied for a role at nurturlycare.com.
          </p>
        </div>

      </div>
    </body>
    </html>
  `

  try {
    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY missing - skipping application confirmation email.');
      return { success: false, error: 'No Resend API Key' };
    }

    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <hello@nurturlycare.com>`,
      to: data.email,
      subject: `Your application to Nurturly — ${formatJobTitle(data.job_slug)}`,
      html: htmlContent,
    })
    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error('Failed to send application confirmation:', error)
    return { success: false, error }
  }
}

// ─── Application Email ────────────────────────────────────────────────────────

export async function sendApplicationEmail(data: {
  name: string
  email: string
  phone: string
  job_slug: string
  location?: string | null
  experience?: string | null
  certifications?: string | null
  message?: string | null
  resume_url?: string | null
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      ${sharedStyles}
      <style>
        .field-grid {
          display: grid;
          grid-template-columns: 140px 1fr;
          align-items: baseline;
          gap: 20px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 109, 119, 0.08);
        }
        .field-grid:last-child { border-bottom: none; }
      </style>
    </head>
    <body style="font-family:'Manrope',sans-serif;background-color:#f5f5f5;color:#1c1c19;margin:0;padding:0;">

      <div style="max-width:650px;margin:40px auto;background-color:#fcf9f4;box-shadow:0 10px 30px rgba(0,0,0,0.05);overflow:hidden;border:1px solid #f0f0f0;border-radius:2px;">

        <!-- Header -->
        <div style="padding:48px;text-align:center;background-color:#ffffff;border-bottom:1px solid #fcf9f4;">
          <img alt="Nurturly Care" src="${LOGO_URL}" style="height:64px;margin:0 auto 32px auto;object-fit:contain;display:block;" />
          <div style="max-width:300px;margin:0 auto 32px auto;height:1px;background-color:rgba(0,109,119,0.1);"></div>
          <h1 style="font-family:'Newsreader',Georgia,serif;font-style:italic;font-size:36px;color:#006D77;margin:0 0 12px 0;font-weight:500;">New Career Application</h1>
          <p style="color:rgba(28,28,25,0.6);font-weight:300;font-size:11px;text-transform:uppercase;letter-spacing:0.2em;margin:0;">Application Receipt &bull; ${escapeHtml(formatJobTitle(data.job_slug))}</p>
        </div>

        <!-- Body -->
        <div style="padding:40px 48px;">

          <!-- Applicant Information -->
          <section style="margin-bottom:48px;">
            <h2 style="font-family:'Newsreader',Georgia,serif;font-size:20px;color:#006D77;margin:0 0 24px 0;font-weight:500;font-style:italic;border-bottom:1px solid rgba(0,109,119,0.2);padding-bottom:8px;">Applicant Information</h2>

            <!-- Using table for email client compatibility -->
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid rgba(0,109,119,0.08);">
                <td style="width:140px;padding:12px 0;vertical-align:baseline;">
                  <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;">Full Name</span>
                </td>
                <td style="padding:12px 0 12px 20px;vertical-align:baseline;">
                  <span style="font-size:15px;font-weight:500;">${escapeHtml(data.name)}</span>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(0,109,119,0.08);">
                <td style="width:140px;padding:12px 0;vertical-align:baseline;">
                  <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;">Email</span>
                </td>
                <td style="padding:12px 0 12px 20px;vertical-align:baseline;">
                  <a href="mailto:${escapeHtml(data.email)}" style="color:#006D77;text-decoration:none;font-size:15px;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
              <tr style="border-bottom:1px solid rgba(0,109,119,0.08);">
                <td style="width:140px;padding:12px 0;vertical-align:baseline;">
                  <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;">Phone</span>
                </td>
                <td style="padding:12px 0 12px 20px;vertical-align:baseline;">
                  <a href="tel:${escapeHtml(data.phone)}" style="color:#006D77;text-decoration:none;font-size:14px;">${escapeHtml(data.phone)}</a>
                </td>
              </tr>
              ${data.location ? `
              <tr>
                <td style="width:140px;padding:12px 0;vertical-align:baseline;">
                  <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;">Location</span>
                </td>
                <td style="padding:12px 0 12px 20px;vertical-align:baseline;">
                  <span style="font-size:15px;font-weight:500;">${escapeHtml(data.location)}</span>
                </td>
              </tr>
              ` : ''}
            </table>
          </section>

          <!-- Professional Profile -->
          ${(data.experience || data.certifications) ? `
          <section style="margin-bottom:48px;">
            <h2 style="font-family:'Newsreader',Georgia,serif;font-size:20px;color:#006D77;margin:0 0 24px 0;font-weight:500;font-style:italic;border-bottom:1px solid rgba(0,109,119,0.2);padding-bottom:8px;">Professional Profile</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                ${data.experience ? `
                <td style="width:50%;padding-right:16px;vertical-align:top;">
                  <div style="background-color:rgba(255,255,255,0.5);padding:20px;border:1px solid rgba(0,109,119,0.05);">
                    <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;display:block;margin-bottom:8px;">Experience</span>
                    <span style="font-size:18px;font-weight:500;text-transform:capitalize;">${escapeHtml(data.experience)}</span>
                  </div>
                </td>
                ` : '<td style="width:50%;"></td>'}
                ${data.certifications ? `
                <td style="width:50%;padding-left:16px;vertical-align:top;">
                  <div style="background-color:rgba(255,255,255,0.5);padding:20px;border:1px solid rgba(0,109,119,0.05);">
                    <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;color:#8c4e35;opacity:0.8;display:block;margin-bottom:8px;">Certifications</span>
                    <span style="font-size:18px;font-weight:500;">${escapeHtml(data.certifications)}</span>
                  </div>
                </td>
                ` : '<td style="width:50%;"></td>'}
              </tr>
            </table>
          </section>
          ` : ''}

          <!-- Cover Letter / Message -->
          ${data.message ? `
          <section style="margin-bottom:48px;">
            <h2 style="font-family:'Newsreader',Georgia,serif;font-size:20px;color:#006D77;margin:0 0 16px 0;font-weight:500;font-style:italic;border-bottom:1px solid rgba(0,109,119,0.2);padding-bottom:8px;">Additional Remarks</h2>
            <div style="padding:32px;background-color:#ffffff;border:1px solid rgba(0,109,119,0.1);font-family:'Newsreader',Georgia,serif;font-style:italic;color:rgba(28,28,25,0.8);line-height:1.7;font-size:18px;">
              &ldquo;${escapeHtml(data.message).replace(/\n/g, '<br/>')}&rdquo;
            </div>
          </section>
          ` : ''}

          <!-- Resume CTA -->
          ${data.resume_url ? `
          <section style="margin-bottom:24px;text-align:center;">
            <div style="height:1px;background:linear-gradient(to right,transparent,rgba(0,109,119,0.2),transparent);margin:24px 0;"></div>
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.25em;font-weight:600;color:rgba(140,78,53,0.6);margin:0 0 24px 0;">Documentation</p>
            <a href="${escapeHtml(data.resume_url)}" style="display:inline-block;padding:16px 40px;background-color:#006D77;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;text-decoration:none;border-radius:2px;">Review Professional Resume</a>
          </section>
          ` : ''}

        </div>

        <!-- Footer -->
        <footer style="background-color:#ffffff;padding:48px;text-align:center;border-top:1px solid #fcf9f4;">
          <p style="font-size:11px;font-weight:500;color:#006D77;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 16px 0;">${COMPANY_NAME} Management</p>
          <p style="font-size:10px;color:rgba(28,28,25,0.4);font-weight:300;max-width:320px;margin:0 auto;line-height:1.7;">
            &copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.<br/>
            This is an automated notification for the internal talent acquisition team.
          </p>
        </footer>

      </div>
    </body>
    </html>
  `

  try {
    const resend = getResend();
    if (!resend) {
      console.warn('RESEND_API_KEY missing - skipping application email to admin.');
      return { success: false, error: 'No Resend API Key' };
    }

    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <hello@nurturlycare.com>`,
      to: ADMIN_EMAIL,
      subject: `New Application from ${data.name} - ${formatJobTitle(data.job_slug)}`,
      html: htmlContent,
      replyTo: data.email,
    })

    return { success: true, messageId: response.data?.id }
  } catch (error) {
    console.error('Failed to send application email:', error)
    return { success: false, error }
  }
}
