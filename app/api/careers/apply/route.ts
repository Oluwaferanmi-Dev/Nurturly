import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { writeClient } from '@/sanity/lib/client'
import { sendApplicationEmail, sendApplicationConfirmation } from '@/lib/email'

const careerApplicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  roleTitle: z.string().optional().nullable(),
  experience: z.string().optional().nullable(),
  whyNurturly: z.string().optional().nullable(),
  resumeUrl: z.string().url('Invalid resume URL').optional().nullable(),
})

type CareerApplicationData = z.infer<typeof careerApplicationSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the application data
    const validatedData = careerApplicationSchema.parse(body)

    // Create application document in Sanity
    const applicationDoc = await writeClient.create({
      _type: 'application',
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      roleTitle: validatedData.roleTitle || null,
      experience: validatedData.experience || null,
      whyNurturly: validatedData.whyNurturly || null,
      resumeUrl: validatedData.resumeUrl || null,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    // Send email notification to admin
    const emailResponse = await sendApplicationEmail({
      name: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      job_slug: validatedData.roleTitle || 'general',
      experience: validatedData.experience,
    })
    if (!emailResponse.success) {
      console.warn('Failed to send application email:', emailResponse.error)
      // Continue even if email fails - the application is saved
    }

    // Send confirmation to the applicant
    const confirmResponse = await sendApplicationConfirmation({
      name: validatedData.fullName,
      email: validatedData.email,
      job_slug: validatedData.roleTitle || 'general',
    })
    if (!confirmResponse.success) {
      console.warn('Failed to send application confirmation:', confirmResponse.error)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for applying — we\'ll be in touch soon.',
        data: applicationDoc,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Career application API error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Please check your input and try again.' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit your application. Please try again.' },
      { status: 500 }
    )
  }
}
