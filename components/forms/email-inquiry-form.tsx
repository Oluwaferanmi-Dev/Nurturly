'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailInquirySchema, type EmailInquiry } from '@/lib/schemas'
import { toast } from 'sonner'

export function EmailInquiryForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailInquiry>({
    resolver: zodResolver(emailInquirySchema),
  })

  const onSubmit = async (data: EmailInquiry) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        toast.error(result.error || 'Failed to submit your email')
        return
      }

      toast.success('Thank you! Check your email for updates.')
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#bec8ca] text-[#1c1c19] placeholder-[#1c1c19]/50 focus:outline-none focus:ring-2 focus:ring-[#006d77] transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-nurturly-soft-teal shadow-md text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? 'Sending...' : 'Notify Me'}
          </button>
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
    </form>
  )
}
