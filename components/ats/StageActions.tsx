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

export default function StageActions({
  applicantId,
  currentStage,
  applicantName,
}: StageActionsProps) {
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
    <div className="fixed bottom-0 left-64 right-0 bg-surface/90 backdrop-blur-xl border-t border-surface-container px-10 py-5 flex items-center justify-between z-20 shadow-lg">
      <button
        onClick={handleArchive}
        disabled={isPending}
        className="px-5 py-2.5 text-error font-body text-sm font-bold hover:bg-error/5 rounded-full transition-colors disabled:opacity-50"
      >
        Archive Candidate
      </button>

      <div className="flex items-center gap-3">
        <button
          disabled={isPending}
          className="px-6 py-2.5 rounded-full text-on-surface font-body text-sm font-semibold hover:bg-surface-container-high transition-all disabled:opacity-50"
          onClick={() => {
            const modal = document.getElementById('email-modal')
            if (modal) modal.style.display = 'flex'
          }}
        >
          Send Email
        </button>
        <button
          disabled={isPending}
          className="px-6 py-2.5 rounded-full text-on-surface font-body text-sm font-semibold hover:bg-surface-container-high transition-all disabled:opacity-50"
        >
          Schedule Interview
        </button>
        {nextStage ? (
          <button
            onClick={handleMove}
            disabled={isPending}
            className="px-8 py-2.5 rounded-full text-on-primary font-body text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
          >
            {isPending ? 'Moving...' : `→ Move to ${getStageLabel(nextStage)}`}
          </button>
        ) : (
          <span className="px-8 py-2.5 rounded-full bg-surface-container-high text-secondary font-body text-sm font-semibold">
            Final Stage
          </span>
        )}
      </div>
    </div>
  )
}
