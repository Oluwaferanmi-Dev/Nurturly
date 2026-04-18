'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function moveToNextStage(id: string, nextStage: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('applications')
    .update({
      stage: nextStage,
      stage_updated_at: new Date().toISOString(),
    })
    .eq('id', id)

  if (error) throw new Error(error.message)

  revalidatePath('/ats')
  revalidatePath('/ats/applicants')
  revalidatePath(`/ats/applicants/${id}`)
  revalidatePath('/ats/pipeline')
}

export async function archiveApplicant(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('applications')
    .update({ status: 'archived' })
    .eq('id', id)

  if (error) throw new Error(error.message)

  revalidatePath('/ats')
  revalidatePath('/ats/applicants')
  revalidatePath('/ats/pipeline')
}

export async function addNote(id: string, note: string) {
  const supabase = await createClient()
  
  // Append to existing notes with timestamp
  const { data: existing } = await supabase
    .from('applications')
    .select('notes')
    .eq('id', id)
    .single()

  const timestamp = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  const newNote = `[${timestamp}] ${note}`
  const combined = existing?.notes ? `${existing.notes}\n${newNote}` : newNote

  const { error } = await supabase
    .from('applications')
    .update({ notes: combined })
    .eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath(`/ats/applicants/${id}`)
}

export async function sendCandidateEmail({
  toEmail,
  toName,
  subject,
  message,
}: {
  toEmail: string
  toName: string
  subject: string
  message: string
}) {
  const { error } = await resend.emails.send({
    from: `Nurturly Care Team <noreply@nurturlycare.com>`,
    to: [toEmail],
    subject,
    html: `
      <div style="font-family: 'Manrope', sans-serif; max-width: 600px; margin: 0 auto; background: #fcf9f4;">
        <div style="background: linear-gradient(135deg, #00535b 0%, #006d77 100%); padding: 32px; text-align: center;">
          <h2 style="color: white; font-family: Georgia, serif; margin: 0; font-size: 28px; font-weight: 400; letter-spacing: -0.5px;">Nurturly</h2>
          <p style="color: rgba(255,255,255,0.7); font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0 0;">Care Team</p>
        </div>
        <div style="padding: 40px 32px; background: #ffffff;">
          <p style="color: #1c1c19; line-height: 1.8; font-size: 15px; white-space: pre-line;">${message}</p>
        </div>
        <div style="background: #f6f3ee; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e2dd;">
          <p style="color: #5f5e5b; font-size: 11px; margin: 0;">Nurturly Home Care &middot; Houston, TX &middot; <a href="mailto:hello@nurturlycare.com" style="color: #00535b;">hello@nurturlycare.com</a></p>
        </div>
      </div>
    `,
  })

  if (error) throw new Error(error.message)
  return { success: true }
}
