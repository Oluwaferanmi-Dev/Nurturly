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
  `Dear ${name},\n\nThank you for your interest in joining the Nurturly team. We have reviewed your application and would love to connect further.\n\nPlease let us know your availability for a brief call at your earliest convenience.\n\nWarm regards,\nThe Nurturly Care Team`

export default function EmailModal({ applicantName, applicantEmail }: EmailModalProps) {
  const [subject, setSubject] = useState(DEFAULT_SUBJECT(applicantName))
  const [message, setMessage] = useState(DEFAULT_MESSAGE(applicantName))
  const [isPending, startTransition] = useTransition()
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    startTransition(async () => {
      try {
        await sendCandidateEmail({ toEmail: applicantEmail, toName: applicantName, subject, message })
        setSent(true)
        setTimeout(() => {
          const modal = document.getElementById('email-modal')
          if (modal) modal.style.display = 'none'
          setSent(false)
        }, 2000)
      } catch {
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
      className="fixed inset-0 z-50 items-center justify-center p-4"
      style={{ background: 'rgba(28,28,25,0.4)', backdropFilter: 'blur(4px)', display: 'none' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col shadow-2xl"
        style={{ background: '#ffffff' }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid #e4e2dc', background: '#f6f3ee' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: '#d0f0f3', color: '#006d77' }}
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            </div>
            <div>
              <h2 className="font-bold" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif' }}>
                Email {applicantName}
              </h2>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: '#4a6367' }}>Candidate Communication</p>
            </div>
          </div>
          <button onClick={handleClose} style={{ color: '#72706b' }} className="p-1 rounded-full hover:opacity-70">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* To */}
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5" style={{ color: '#72706b' }}>To</label>
            <div className="px-4 py-3 rounded-xl text-sm font-medium" style={{ background: '#f6f3ee', color: '#006d77' }}>
              {applicantEmail}
            </div>
          </div>
          {/* Subject */}
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5" style={{ color: '#72706b' }}>Subject</label>
            <input
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
              style={{ background: '#f6f3ee', color: '#1c1c19', border: 'none' }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          {/* Message */}
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest block mb-1.5" style={{ color: '#72706b' }}>Message</label>
            <textarea
              className="w-full px-4 py-4 rounded-xl text-sm focus:outline-none leading-relaxed resize-none"
              style={{ background: '#f6f3ee', color: '#1c1c19', border: 'none' }}
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 flex justify-end gap-3"
          style={{ borderTop: '1px solid #e4e2dc', background: '#f6f3ee' }}
        >
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: '#eae7e2', color: '#1c1c19' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={isPending || sent}
            className="px-8 py-2.5 rounded-full text-sm font-bold text-white flex items-center gap-2 disabled:opacity-60 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {sent ? 'check_circle' : 'send'}
            </span>
            {isPending ? 'Sending…' : sent ? 'Sent!' : 'Send Email'}
          </button>
        </div>
      </div>
    </div>
  )
}
