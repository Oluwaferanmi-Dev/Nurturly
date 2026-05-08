'use client'

import { useState } from 'react'
import { trackApplicationSubmit } from '@/lib/analytics'

interface FormData {
  fullName: string
  email: string
  phone: string
  experience: string
  whyNurturly: string
  resume: File | null
  roleTitle?: string
}

interface CareersFormProps {
  roleTitle?: string
}

const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export default function CareersForm({ roleTitle }: CareersFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    whyNurturly: '',
    resume: null,
    roleTitle,
  })
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrorMessage('Please upload a PDF or Word document.')
      return
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage('File size must be less than 5MB.')
      return
    }

    setFormData((prev) => ({ ...prev, resume: file }))
    setFileName(file.name)
    setErrorMessage('')
  }

  const uploadResume = async (file: File): Promise<string | null> => {
    try {
      const formDataToUpload = new FormData()
      formDataToUpload.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataToUpload,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      return data.url
    } catch (error) {
      console.error('Resume upload error:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setErrorMessage('')
    setUploadProgress(0)

    try {
      let resumeUrl = null

      // Upload resume if provided
      if (formData.resume) {
        setUploadProgress(50)
        resumeUrl = await uploadResume(formData.resume)
      }

      setUploadProgress(75)

      // Submit application to new Sanity API route
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          roleTitle: formData.roleTitle || null,
          experience: formData.experience,
          whyNurturly: formData.whyNurturly,
          resumeUrl: resumeUrl,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application')
      }

      setUploadProgress(100)
      setSuccessMessage('Thanks for applying — we\'ll be in touch soon.')
      trackApplicationSubmit(formData.experience || undefined)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        whyNurturly: '',
        resume: null,
        roleTitle,
      })
      setFileName('')
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
      setUploadProgress(0)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Hidden input for roleTitle */}
      <input type="hidden" name="roleTitle" value={formData.roleTitle || ''} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Full Name</label>
          <input
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            placeholder="Your full name"
            type="text"
            name="fullName"
            value={formData.fullName}
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
            required
          />
        </div>
        <div className="group relative">
          <label className="block text-sm font-label text-on-surface-variant mb-2">Years of Experience</label>
          <select
            className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">Select experience level</option>
            <option value="Entry Level (0-2 years)">Entry Level (0-2 years)</option>
            <option value="Intermediate (2-5 years)">Intermediate (2-5 years)</option>
            <option value="Experienced (5+ years)">Experienced (5+ years)</option>
          </select>
        </div>
      </div>

      <div className="group relative">
        <label className="block text-sm font-label text-on-surface-variant mb-2">Upload Resume (PDF or Word)</label>
        <div className="relative">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-input"
          />
          <label
            htmlFor="resume-input"
            className="block w-full bg-surface-container-high border-2 border-dashed border-outline-variant/30 px-4 py-6 rounded-lg cursor-pointer hover:bg-surface-container-lowest hover:border-primary transition-all duration-300 text-center"
          >
            {fileName ? (
              <div>
                <span className="material-symbols-outlined text-primary text-3xl block mb-2">check_circle</span>
                <p className="text-sm font-medium text-primary">{fileName}</p>
              </div>
            ) : (
              <div>
                <span className="material-symbols-outlined text-on-surface-variant text-3xl block mb-2">upload_file</span>
                <p className="text-sm text-on-surface-variant">Click to upload or drag and drop</p>
                <p className="text-xs text-on-surface-variant/70">PDF or Word (max 5MB)</p>
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="group relative">
        <label className="block text-sm font-label text-on-surface-variant mb-2">Tell Us About Yourself</label>
        <textarea
          className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300 resize-none"
          placeholder="Share your passion for care and what draws you to Nurturly..."
          rows={5}
          name="whyNurturly"
          value={formData.whyNurturly}
          onChange={handleChange}
        ></textarea>
      </div>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-surface-container-high rounded-full h-2">
          <div
            className="bg-soft-teal shadow-md h-2 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

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
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
