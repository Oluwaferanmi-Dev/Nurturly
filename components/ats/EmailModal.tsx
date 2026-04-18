'use client'

import { useState, useTransition } from 'react'
import { sendCandidateEmail } from '@/lib/ats/actions'

interface EmailModalProps {
  applicantId: string
  applicantName: string
  applicantEmail: string
  currentStage: string
}

const DEFAULT_SUBJECT = (name: string) => `Next Steps — Your Nurturly Application`
const DEFAULT_MESSAGE = (name: string) =>
  `Dear ${name},

Thank you for your interest in joining the Nurturly team. We have reviewed your application and would love to connect further.

Please let us know your availability for a brief call at your earliest convenience.

Warm regards,
The Nurturly Care Team`

export default function EmailModal({
  applicantId,
  applicantName,
  applicantEmail,
  currentStage,
}: EmailModalProps) {
  const [subject, setSubject] = useState(DEFAULT_SUBJECT(applicantName))
  const [message, setMessage] = useState(DEFAULT_MESSAGE(applicantName))
  const [isPending, startTransition] = useTransition()
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    startTransition(async () => {
      try {
        await sendCandidateEmail({
          toEmail: applicantEmail,
          toName: applicantName,
          subject,
          message,
        })
        setSent(true)
        setTimeout(() => {
          const modal = document.getElementById('email-modal')
          if (modal) modal.style.display = 'none'
          setSent(false)
        }, 2000)
      } catch (e) {
        alert('Failed to send email. Please try again.')
      }
    })
  }

  const handleClose = () => {
    const modal = document.getElementById('email-modal')
    if (modal) modal.style.display = 'none'
  }

  return (
    <div
      id="email-modal"
      className="fixed inset-0 z-50 items-center justify-center p-6 bg-on-surface/10 backdrop-blur-sm hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div className="bg-surface w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between bg-surface-container-low">
          <div className="flex items-center gap-4">
            <div className="bg-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
            </div>
            <div>
              <h2 className="font-headline text-xl">Send Message — {applicantName}</h2>
              <p className="text-xs font-body text-secondary uppercase tracking-widest">
                Candidate Communication
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-secondary hover:text-on-surface transition-colors p-2 rounded-full hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-5">
          {/* Composer */}
          <div className="md:col-span-3 p-8 border-r border-outline-variant/10 space-y-6">
            {/* To */}
            <div className="space-y-1.5">
              <label className="text-xs font-body uppercase tracking-widest text-on-surface-variant font-semibold">
                To
              </label>
              <div className="flex items-center bg-surface-container-high px-4 py-3 rounded-lg">
                <span className="text-primary font-medium text-sm">{applicantEmail}</span>
              </div>
            </div>
            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-body uppercase tracking-widest text-on-surface-variant font-semibold">
                Subject
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-body uppercase tracking-widest text-on-surface-variant font-semibold">
                Message
              </label>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/20">
                <div className="flex items-center gap-1 p-2 border-b border-outline-variant/10 bg-surface-container-low">
                  {['format_bold', 'format_italic', 'format_list_bulleted'].map((icon) => (
                    <button
                      key={icon}
                      className="p-1.5 hover:bg-surface-container-high rounded text-secondary"
                    >
                      <span className="material-symbols-outlined text-[18px]">{icon}</span>
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full p-6 border-none focus:ring-0 text-on-surface font-body leading-relaxed bg-transparent text-sm resize-none"
                  rows={9}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="md:col-span-2 bg-surface-container-low p-8">
            <h4 className="text-xs font-body uppercase tracking-widest text-on-surface-variant font-semibold mb-6">
              Branded Preview
            </h4>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="py-6 px-4 text-center" style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}>
                <p className="text-white font-headline text-lg">Nurturly</p>
                <div className="w-8 h-px bg-[#c9a84c] mx-auto mt-2"></div>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  <div className="h-2.5 w-3/4 bg-surface-container-high rounded-full"></div>
                  <div className="h-2.5 w-5/6 bg-surface-container-high rounded-full"></div>
                  <div className="h-2.5 w-1/2 bg-surface-container-high rounded-full"></div>
                  <div className="h-2.5 w-2/3 bg-surface-container-high rounded-full"></div>
                </div>
              </div>
              <div className="px-6 py-4 bg-surface-container-low text-center">
                <p className="text-[10px] text-secondary font-body uppercase tracking-widest">
                  Nurturly Care Team
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-secondary italic">
              <span className="material-symbols-outlined text-[16px]">info</span>
              <p className="text-xs font-body">Sent directly from your Resend account.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-surface-container-high flex justify-end items-center gap-4">
          <button
            onClick={handleClose}
            className="px-8 py-2.5 rounded-full font-body text-sm text-on-surface hover:bg-surface-container-highest transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={isPending || sent}
            className="px-10 py-2.5 rounded-full font-body text-sm text-on-primary font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70"
            style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
          >
            <span className="material-symbols-outlined text-[18px]">
              {sent ? 'check_circle' : 'send'}
            </span>
            {isPending ? 'Sending...' : sent ? 'Sent!' : 'Send Email'}
          </button>
        </div>
      </div>
    </div>
  )
}
