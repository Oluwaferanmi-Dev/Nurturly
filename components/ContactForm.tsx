'use client'

import { useState } from 'react'
import { trackContactFormSubmit } from '@/lib/analytics'

interface FormData {
  name: string
  email: string
  phone: string
  care_type: string
  relationship_to_patient: string
  zip_code: string
  urgency: string
  hours_per_week: string
  message: string
}

const inputClass =
  'w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300'

const labelClass = 'block text-sm font-label text-on-surface-variant mb-2'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    care_type: '',
    relationship_to_patient: '',
    zip_code: '',
    urgency: '',
    hours_per_week: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSuccessMessage(
        "Thank you! Your message has been sent. A care coordinator will reach out within 24 hours.",
      )
      trackContactFormSubmit(formData.care_type || undefined)
      setFormData({
        name: '',
        email: '',
        phone: '',
        care_type: '',
        relationship_to_patient: '',
        zip_code: '',
        urgency: '',
        hours_per_week: '',
        message: '',
      })
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className={labelClass}>Full Name *</label>
          <input
            className={inputClass}
            placeholder="Your full name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="group relative">
          <label className={labelClass}>Email *</label>
          <input
            className={inputClass}
            placeholder="example@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Row 2: Phone + Relationship */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className={labelClass}>Phone Number</label>
          <input
            className={inputClass}
            placeholder="(713) 000-0000"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="group relative">
          <label className={labelClass}>Your Relationship to the Patient *</label>
          <select
            className={inputClass}
            name="relationship_to_patient"
            value={formData.relationship_to_patient}
            onChange={handleChange}
            required
          >
            <option value="">Select relationship</option>
            <option value="myself">Myself</option>
            <option value="spouse_partner">Spouse / Partner</option>
            <option value="parent">Parent</option>
            <option value="grandparent">Grandparent</option>
            <option value="sibling">Sibling</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 3: Type of Care + ZIP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className={labelClass}>Type of Care Needed</label>
          <select
            className={inputClass}
            name="care_type"
            value={formData.care_type}
            onChange={handleChange}
          >
            <option value="">Select care type</option>
            <option value="companionship">Companionship &amp; Emotional Support</option>
            <option value="personal_care">Personal Care (bathing, grooming)</option>
            <option value="meal_prep">Meal Preparation</option>
            <option value="mobility">Mobility Support</option>
            <option value="medication">Medication Reminders</option>
            <option value="memory_care">Memory Care (Alzheimer&apos;s / Dementia)</option>
            <option value="respite">Respite Care for Family Caregiver</option>
            <option value="transitional">Post-Hospital Transitional Care</option>
            <option value="not_sure">Not sure yet</option>
          </select>
        </div>
        <div className="group relative">
          <label className={labelClass}>ZIP Code / City</label>
          <input
            className={inputClass}
            placeholder="Houston, TX or ZIP code"
            type="text"
            name="zip_code"
            value={formData.zip_code}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 4: Urgency + Hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className={labelClass}>When Do You Need Care? *</label>
          <select
            className={inputClass}
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
          >
            <option value="">Select urgency</option>
            <option value="immediately">Immediately / Within a week</option>
            <option value="within_month">Within the next month</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
        <div className="group relative">
          <label className={labelClass}>Estimated Hours Needed Per Week</label>
          <select
            className={inputClass}
            name="hours_per_week"
            value={formData.hours_per_week}
            onChange={handleChange}
          >
            <option value="">Select hours</option>
            <option value="few_hours">A few hours (1–9 hrs)</option>
            <option value="part_time">Part-time (10–20 hrs)</option>
            <option value="full_time">Full-time (40+ hrs)</option>
            <option value="overnight">Overnight / Live-in</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="group relative">
        <label className={labelClass}>Additional Context</label>
        <textarea
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your loved one's situation, any special needs, or questions you have..."
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
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
          className="bg-soft-teal shadow-md text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
