import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { sendApplicationEmail, sendApplicationConfirmation } from '@/lib/email'

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().optional().nullable(),
  experience: z.string().optional().nullable(),
  certifications: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  resume_url: z.string().url('Invalid resume URL').optional().nullable(),
  job_slug: z.string().min(1, 'Job slug is required'),
})

type ApplicationData = z.infer<typeof applicationSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the application data
    const validatedData = applicationSchema.parse(body)

    // Initialize Supabase server client
    const supabase = await createClient()

    // Insert application into database
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          job_slug: validatedData.job_slug,
          location: validatedData.location || null,
          experience: validatedData.experience || null,
          certifications: validatedData.certifications || null,
          resume_url: validatedData.resume_url || null,
          message: validatedData.message || null,
        },
      ])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save your application. Please try again.' },
        { status: 500 }
      )
    }

    // Send email notification to admin
    const emailResponse = await sendApplicationEmail(validatedData)
    if (!emailResponse.success) {
      console.warn('Failed to send application email:', emailResponse.error)
      // Continue even if email fails - the application is saved
    }

    // Send confirmation to the applicant
    const confirmResponse = await sendApplicationConfirmation({
      name: validatedData.name,
      email: validatedData.email,
      job_slug: validatedData.job_slug,
    })
    if (!confirmResponse.success) {
      console.warn('Failed to send application confirmation:', confirmResponse.error)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your application! We\'ll review it and be in touch soon.',
        data: data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Please check your input and try again.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
