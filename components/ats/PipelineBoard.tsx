'use client'

import Link from 'next/link'
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

interface PipelineBoardProps {
  columns: Column[]
}

function KanbanCard({ card, stageId }: { card: Card; stageId: string }) {
  const [isPending, startTransition] = useTransition()
  const nextStage = getNextStage(stageId)

  const handleMove = () => {
    if (!nextStage) return
    startTransition(() => moveToNextStage(card.id, nextStage))
  }

  return (
    <div className="bg-surface-container-lowest p-5 rounded-2xl group hover:shadow-md transition-all cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold font-body text-sm flex-shrink-0">
            {card.initials}
          </div>
          <div>
            <Link
              href={`/ats/applicants/${card.id}`}
              className="font-headline text-lg leading-none hover:text-primary transition-colors"
            >
              {card.name}
            </Link>
            <p className="text-xs text-secondary mt-1 font-body">{card.role}</p>
          </div>
        </div>
        {nextStage && (
          <button
            onClick={handleMove}
            disabled={isPending}
            title="Move to next stage"
            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full hover:bg-primary/10 text-primary transition-all disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isPending ? 'hourglass_empty' : 'arrow_forward'}
            </span>
          </button>
        )}
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-surface-container/30">
        <span className="text-[10px] uppercase font-body tracking-tight text-secondary">
          {card.days === 0 ? 'Today' : `${card.days}d in stage`}
        </span>
        <div className={`w-2.5 h-2.5 rounded-full ${card.urgencyClass}`} />
      </div>
    </div>
  )
}

export default function PipelineBoard({ columns }: PipelineBoardProps) {
  return (
    <div className="flex-1 overflow-x-auto px-8 pb-12 mt-2">
      <div className="flex gap-5 min-w-max h-full">
        {columns.map((col) => (
          <div
            key={col.id}
            className="w-72 flex flex-col bg-surface-container-low/60 rounded-2xl p-4"
          >
            {/* Column Header */}
            <div className="flex justify-between items-center mb-5 px-1">
              <h3 className="font-body text-[10px] uppercase tracking-widest text-secondary font-bold">
                {col.label}
              </h3>
              <span className="text-xs font-body bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">
                {col.cards.length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-3 flex-1 overflow-y-auto">
              {col.cards.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center opacity-40">
                  <span className="material-symbols-outlined text-3xl text-outline mb-2">
                    inbox
                  </span>
                  <p className="text-xs font-body text-secondary">No applicants</p>
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
