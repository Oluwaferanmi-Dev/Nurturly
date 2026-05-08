'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { moveToNextStage } from '@/lib/ats/actions'
import { getNextStage } from '@/lib/ats/constants'

interface Card {
  id: string
  name: string
  role: string
  initials: string
  days: number
  urgencyClass: string
}

interface Column {
  id: string
  label: string
  short: string
  cards: Card[]
}

function urgencyColor(days: number) {
  if (days <= 3) return '#22c55e'
  if (days <= 7) return '#f59e0b'
  return '#ef4444'
}

function KanbanCard({ card, stageId }: { card: Card; stageId: string }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const nextStage = getNextStage(stageId)

  const handleMove = () => {
    if (!nextStage) return
    startTransition(async () => {
      await moveToNextStage(card.id, nextStage)
      router.refresh()
    })
  }

  return (
    <div
      className="p-4 rounded-2xl group cursor-default transition-shadow hover:shadow-md"
      style={{ background: '#ffffff', border: '1px solid #e4e2dc' }}
    >
      <div className="flex justify-between items-start gap-2 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: '#d0f0f3', color: '#00363b' }}
          >
            {card.initials}
          </div>
          <div className="min-w-0">
            <Link
              href={`/ats/applicants/${card.id}`}
              className="font-semibold text-sm leading-tight block truncate hover:underline"
              style={{ color: '#1c1c19' }}
            >
              {card.name}
            </Link>
            <p className="text-xs truncate mt-0.5" style={{ color: '#4a6367' }}>{card.role}</p>
          </div>
        </div>
        {nextStage && (
          <button
            onClick={handleMove}
            disabled={isPending}
            title="Advance to next stage"
            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full transition-all flex-shrink-0 disabled:opacity-40"
            style={{ background: '#d0f0f3', color: '#006d77' }}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isPending ? 'hourglass_empty' : 'arrow_forward'}
            </span>
          </button>
        )}
      </div>
      <div
        className="flex justify-between items-center pt-3"
        style={{ borderTop: '1px solid #f0ede8' }}
      >
        <span className="text-[9px] uppercase font-bold" style={{ color: '#72706b' }}>
          {card.days === 0 ? 'Today' : `${card.days}d in stage`}
        </span>
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: urgencyColor(card.days), boxShadow: `0 0 0 3px ${urgencyColor(card.days)}30` }}
        />
      </div>
    </div>
  )
}

export default function PipelineBoard({ columns }: { columns: Column[] }) {
  return (
    <div className="flex-1 overflow-x-auto px-4 md:px-8 pb-12 mt-2">
      <div className="flex gap-4 min-w-max pb-4">
        {columns.map((col) => (
          <div
            key={col.id}
            className="flex flex-col rounded-2xl p-3"
            style={{ width: 272, background: '#f6f3ee', border: '1px solid #e4e2dc' }}
          >
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4 px-1">
              <h3
                className="text-[9px] uppercase tracking-widest font-bold"
                style={{ color: '#72706b' }}
              >
                {col.label}
              </h3>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: '#eae7e2', color: '#42413e' }}
              >
                {col.cards.length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-2 flex-1 overflow-y-auto max-h-[calc(100vh-260px)]">
              {col.cards.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-10 text-center rounded-xl"
                  style={{ border: '2px dashed #e4e2dc' }}
                >
                  <span className="material-symbols-outlined text-2xl mb-1" style={{ color: '#c4c2bc' }}>inbox</span>
                  <p className="text-xs" style={{ color: '#72706b' }}>Empty</p>
                </div>
              ) : (
                col.cards.map((card) => (
                  <KanbanCard key={card.id} card={card} stageId={col.id} />
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
