'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { STAGES } from '@/lib/ats/constants'

export default function ApplicantFilters({
  currentStage,
}: {
  currentStage: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setFilter = useCallback(
    (stage: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (stage === 'all') {
        params.delete('stage')
      } else {
        params.set('stage', stage)
      }
      params.delete('page')
      router.push(`${pathname}?${params.toString()}`)
    },
    [searchParams, router, pathname]
  )

  const filters = [{ id: 'all', label: 'ALL' }, ...STAGES.map((s) => ({ id: s.id, label: s.short }))]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = f.id === 'all' ? currentStage === 'all' : currentStage === f.id
        return (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-full text-[10px] font-body tracking-widest transition-colors ${
              isActive
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-secondary hover:bg-surface-container-high'
            }`}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
