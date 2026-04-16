'use client'

import { useState } from 'react'
import { contactFormSchema } from '@/lib/schemas'
import type { z } from 'zod'

type FormData = z.infer<typeof contactFormSchema> & { care_type?: string }

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    care_type: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSuccessMessage('Thank you! Your message has been sent successfully. We\'ll be in touch soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        care_type: '',
        message: '',
      })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Name</label>
          <input
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            placeholder="Your full name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Email</label>
          <input
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            placeholder="example@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Phone</label>
          <input
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            placeholder="(555) 000-0000"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Interested In</label>
          <select
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            name="care_type"
            value={formData.care_type}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="consultation">Consultation Request</option>
            <option value="general">General Inquiry</option>
            <option value="career">Career Opportunities</option>
          </select>
        </div>
      </div>
      <div className="group relative">
        <label className="block text-sm font-label text-on-surface-variant mb-2">Message</label>
        <textarea
          className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300 resize-none"
          placeholder="How can we help your family?"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {successMessage && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {errorMessage}
        </div>
      )}

      <div className="pt-4 flex justify-end">
        <button
          className="signature-gradient text-on-primary px-12 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
