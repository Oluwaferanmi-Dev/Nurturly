import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { sendApplicationEmail } from '@/lib/email'

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
    console.log('[v0] Application request received:', { name: body.name, email: body.email, job_slug: body.job_slug })

    // Validate the application data
    const validatedData = applicationSchema.parse(body)
    console.log('[v0] Application validation passed')

    // Initialize Supabase server client
    const supabase = await createClient()
    console.log('[v0] Supabase client initialized')

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
      console.error('[v0] Supabase insert error:', error)
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('[v0] Application inserted successfully')

    // Send email notification to admin
    const emailResponse = await sendApplicationEmail(validatedData)
    if (!emailResponse.success) {
      console.warn('[v0] Failed to send application email:', emailResponse.error)
      // Continue even if email fails - the application is saved
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
