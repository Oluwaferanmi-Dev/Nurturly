import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { emailInquirySchema } from '@/lib/schemas'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the email
    const validatedData = emailInquirySchema.parse(body)

    // Check if email already exists
    const { data: existingInquiry } = await supabase
      .from('email_inquiries')
      .select('id')
      .eq('email', validatedData.email)
      .single()

    if (existingInquiry) {
      return NextResponse.json(
        { error: 'This email is already registered for updates' },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('email_inquiries')
      .insert([{ email: validatedData.email }])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save your email. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Nurturly <hello@nurturly.care>',
      to: validatedData.email,
      subject: 'Welcome to Nurturly - We\'re Coming Soon!',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #00535b; margin-bottom: 20px;">Welcome to Nurturly</h1>
          <p style="color: #1c1c19; line-height: 1.6; margin-bottom: 16px;">
            Thank you for your interest in Nurturly. We're excited to share our vision of redefining home care with the grace of high-end hospitality.
          </p>
          <p style="color: #1c1c19; line-height: 1.6; margin-bottom: 16px;">
            We'll be launching soon and will notify you with exclusive updates and special early-access opportunities.
          </p>
          <p style="color: #1c1c19; line-height: 1.6; margin-bottom: 16px;">
            In the meantime, if you have any questions, don't hesitate to reach out to <strong>care@nurturlycare.com</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #e5e2dd; margin: 30px 0;">
          <p style="color: #8c4e35; font-size: 14px;">
            Nurturly - Expert Care, In the Comfort of Home
          </p>
        </div>
      `,
    })

    // Send notification to admin
    await resend.emails.send({
      from: 'Nurturly <hello@nurturly.care>',
      to: process.env.NURTURLY_ADMIN_EMAIL || 'care@nurturlycare.com',
      subject: `New Email Inquiry: ${validatedData.email}`,
      html: `
        <p>New inquiry from: ${validatedData.email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Check your email for updates.',
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    if (error instanceof Error && error.message.includes('email')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
