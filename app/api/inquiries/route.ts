import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { sendInquiryEmail, sendInquiryConfirmation } from '@/lib/email'
import { upsertHubSpotContact } from '@/lib/hubspot'

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().nullable(),
  care_type: z.string().optional().nullable(),
  relationship_to_patient: z.string().optional().nullable(),
  zip_code: z.string().optional().nullable(),
  urgency: z.string().optional().nullable(),
  hours_per_week: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
})

type InquiryData = z.infer<typeof inquirySchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = inquirySchema.parse(body)

    // Initialize Supabase server client
    const supabase = await createClient()

    // Insert inquiry into database
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          care_type: validatedData.care_type || null,
          relationship_to_patient: validatedData.relationship_to_patient || null,
          zip_code: validatedData.zip_code || null,
          urgency: validatedData.urgency || null,
          hours_per_week: validatedData.hours_per_week || null,
          message: validatedData.message || null,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save your inquiry. Please try again.' },
        { status: 500 },
      )
    }

    // Send email notification to admin
    const emailResponse = await sendInquiryEmail(validatedData)
    if (!emailResponse.success) {
      console.warn('Failed to send inquiry email:', emailResponse.error)
    }

    // Sync contact to HubSpot CRM (non-blocking)
    upsertHubSpotContact(validatedData).catch((err) =>
      console.warn('HubSpot sync failed (non-blocking):', err),
    )

    // Send confirmation to the submitter
    const confirmResponse = await sendInquiryConfirmation({
      name: validatedData.name,
      email: validatedData.email,
    })
    if (!confirmResponse.success) {
      console.warn('Failed to send inquiry confirmation:', confirmResponse.error)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll be in touch soon.",
        data: data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('API error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Please check your input and try again.' },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
