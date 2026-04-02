import { z } from 'zod'

export const emailInquirySchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const careerApplicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Please select a position'),
  resume_url: z.string().url('Please provide a valid resume URL').optional(),
  message: z.string().optional(),
})

export type EmailInquiry = z.infer<typeof emailInquirySchema>
export type ContactForm = z.infer<typeof contactFormSchema>
export type CareerApplication = z.infer<typeof careerApplicationSchema>
