import { NextRequest, NextResponse } from 'next/server'
import { emailInquirySchema } from '@/lib/schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the email
    const validatedData = emailInquirySchema.parse(body)

    // TODO: Implement your own email storage and sending logic here
    // For now, just return a success response

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! We\'ll be in touch soon.',
        email: validatedData.email,
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
