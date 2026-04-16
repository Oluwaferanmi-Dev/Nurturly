import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@nurturlyheritage.com'
const COMPANY_NAME = 'Nurturly Heritage'

// Brand colors for emails
const colors = {
  primary: '#00535b',
  secondary: '#8c4e35',
  accent: '#006d77',
  background: '#fcf9f4',
  text: '#1c1c19',
  textLight: '#3e494a',
}

export async function sendInquiryEmail(data: {
  name: string
  email: string
  phone?: string | null
  care_type?: string | null
  message: string
}) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: ${colors.text};
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: ${colors.background};
            padding: 40px;
            border-radius: 8px;
          }
          .header {
            border-bottom: 3px solid ${colors.primary};
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            margin: 0;
            color: ${colors.primary};
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 5px 0 0 0;
            color: ${colors.textLight};
            font-size: 14px;
          }
          .content {
            margin-bottom: 30px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            color: ${colors.secondary};
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
          }
          .field-value {
            color: ${colors.text};
            font-size: 15px;
            padding: 12px;
            background-color: rgba(0, 83, 91, 0.05);
            border-left: 3px solid ${colors.primary};
            border-radius: 4px;
          }
          .message-box {
            background-color: rgba(0, 83, 91, 0.08);
            border: 1px solid ${colors.primary}33;
            border-radius: 6px;
            padding: 16px;
            margin-top: 20px;
          }
          .footer {
            border-top: 1px solid ${colors.primary}22;
            padding-top: 20px;
            margin-top: 30px;
            color: ${colors.textLight};
            font-size: 12px;
            text-align: center;
          }
          .cta-button {
            display: inline-block;
            background-color: ${colors.primary};
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Inquiry Received</h1>
            <p>A new inquiry has been submitted through your website</p>
          </div>

          <div class="content">
            <div class="field">
              <span class="field-label">Sender Name</span>
              <div class="field-value">${escapeHtml(data.name)}</div>
            </div>

            <div class="field">
              <span class="field-label">Email Address</span>
              <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>

            ${data.phone ? `
            <div class="field">
              <span class="field-label">Phone Number</span>
              <div class="field-value">${escapeHtml(data.phone)}</div>
            </div>
            ` : ''}

            ${data.care_type ? `
            <div class="field">
              <span class="field-label">Care Type Interest</span>
              <div class="field-value">${escapeHtml(data.care_type)}</div>
            </div>
            ` : ''}

            <div class="field">
              <span class="field-label">Message</span>
              <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
            <p>This is an automated message from your inquiry form.</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <noreply@nurturlyheritage.com>`,
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
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: ${colors.text};
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: ${colors.background};
            padding: 40px;
            border-radius: 8px;
          }
          .header {
            background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
            color: white;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 30px;
          }
          .header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 0;
            font-size: 14px;
            opacity: 0.95;
          }
          .content {
            margin-bottom: 30px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            color: ${colors.secondary};
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid ${colors.primary}33;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-label {
            color: ${colors.secondary};
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
            display: block;
          }
          .field-value {
            color: ${colors.text};
            font-size: 15px;
            padding: 10px 12px;
            background-color: rgba(0, 83, 91, 0.05);
            border-left: 3px solid ${colors.primary};
            border-radius: 4px;
          }
          .message-box {
            background-color: rgba(0, 83, 91, 0.08);
            border: 1px solid ${colors.primary}33;
            border-radius: 6px;
            padding: 16px;
          }
          .resume-link {
            display: inline-block;
            background-color: ${colors.primary};
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            margin-top: 10px;
          }
          .footer {
            border-top: 1px solid ${colors.primary}22;
            padding-top: 20px;
            margin-top: 30px;
            color: ${colors.textLight};
            font-size: 12px;
            text-align: center;
          }
          .badge {
            display: inline-block;
            background-color: ${colors.accent};
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Career Application</h1>
            <p>A new application has been submitted for the ${formatJobTitle(data.job_slug)} position</p>
          </div>

          <div class="content">
            <div class="section">
              <div class="section-title">Applicant Information</div>
              
              <div class="field">
                <span class="field-label">Full Name</span>
                <div class="field-value">${escapeHtml(data.name)}</div>
              </div>

              <div class="field">
                <span class="field-label">Email Address</span>
                <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>

              <div class="field">
                <span class="field-label">Phone Number</span>
                <div class="field-value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
              </div>

              ${data.location ? `
              <div class="field">
                <span class="field-label">Preferred Location</span>
                <div class="field-value">${escapeHtml(data.location)}</div>
              </div>
              ` : ''}
            </div>

            <div class="section">
              <div class="section-title">Professional Details</div>
              
              ${data.experience ? `
              <div class="field">
                <span class="field-label">Experience</span>
                <div class="field-value">${escapeHtml(data.experience)}</div>
              </div>
              ` : ''}

              ${data.certifications ? `
              <div class="field">
                <span class="field-label">Certifications</span>
                <div class="field-value">${escapeHtml(data.certifications)}</div>
              </div>
              ` : ''}
            </div>

            ${data.message ? `
            <div class="section">
              <div class="section-title">Cover Letter / Additional Information</div>
              <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}

            ${data.resume_url ? `
            <div class="section">
              <div class="section-title">Resume</div>
              <a href="${escapeHtml(data.resume_url)}" class="resume-link">Download Resume</a>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            <p>© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
            <p>This is an automated message from your career application form.</p>
          </div>
        </div>
      </body>
    </html>
  `

  try {
    const response = await resend.emails.send({
      from: `${COMPANY_NAME} <noreply@nurturlyheritage.com>`,
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

// Helper functions
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
