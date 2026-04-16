import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

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
          message: validatedData.message,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to submit inquiry. Please try again.' },
        { status: 500 }
      )
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
    console.error('API error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
