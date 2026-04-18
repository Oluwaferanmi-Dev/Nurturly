'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { moveToNextStage, archiveApplicant } from '@/lib/ats/actions'
import { getNextStage, getStageLabel } from '@/lib/ats/constants'

interface StageActionsProps {
  applicantId: string
  currentStage: string
  applicantName: string
}

export default function StageActions({ applicantId, currentStage, applicantName }: StageActionsProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const nextStage = getNextStage(currentStage)

  const handleMove = () => {
    if (!nextStage) return
    startTransition(async () => {
      await moveToNextStage(applicantId, nextStage)
      router.refresh()
    })
  }

  const handleArchive = () => {
    if (!confirm(`Archive ${applicantName}? They will be removed from the active pipeline.`)) return
    startTransition(async () => {
      await archiveApplicant(applicantId)
      router.push('/ats/applicants')
    })
  }

  return (
    <div
      className="fixed bottom-0 left-0 md:left-64 right-0 z-20"
      style={{ background: 'rgba(252,249,244,0.95)', borderTop: '1px solid #e4e2dc', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={handleArchive}
          disabled={isPending}
          className="text-sm font-bold px-4 py-2 rounded-full transition-colors disabled:opacity-50"
          style={{ color: '#ba1a1a' }}
        >
          Archive
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            disabled={isPending}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors disabled:opacity-50"
            style={{ background: '#eae7e2', color: '#1c1c19' }}
            onClick={() => {
              const modal = document.getElementById('email-modal')
              if (modal) modal.style.display = 'flex'
            }}
          >
            Send Email
          </button>

          {nextStage ? (
            <button
              onClick={handleMove}
              disabled={isPending}
              className="px-5 py-2 rounded-full text-sm font-bold text-white shadow-md hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
            >
              {isPending ? 'Moving…' : `→ Move to ${getStageLabel(nextStage)}`}
            </button>
          ) : (
            <span className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: '#eae7e2', color: '#4a6367' }}>
              Final Stage
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
