import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { sendInquiryEmail } from '@/lib/email'

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().nullable(),
  care_type: z.string().optional().nullable(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type InquiryData = z.infer<typeof inquirySchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('[v0] Inquiry request received:', { name: body.name, email: body.email })

    // Validate the form data
    const validatedData = inquirySchema.parse(body)
    console.log('[v0] Inquiry validation passed')

    // Initialize Supabase server client
    const supabase = await createClient()
    console.log('[v0] Supabase client initialized')

    // Insert inquiry into database
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          care_type: validatedData.care_type || null,
          message: validatedData.message,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Supabase insert error:', error)
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('[v0] Inquiry inserted successfully')

    // Send email notification to admin
    const emailResponse = await sendInquiryEmail(validatedData)
    if (!emailResponse.success) {
      console.warn('[v0] Failed to send inquiry email:', emailResponse.error)
      // Continue even if email fails - the inquiry is saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! We\'ll be in touch soon.',
        data: data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] API error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      console.error('[v0] Validation errors:', error.errors)
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
