'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { STAGES } from '@/lib/ats/constants'

export default function ApplicantFilters({ currentStage }: { currentStage: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setFilter = useCallback(
    (stage: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (stage === 'all') { params.delete('stage') } else { params.set('stage', stage) }
      params.delete('page')
      router.push(`${pathname}?${params.toString()}`)
    },
    [searchParams, router, pathname]
  )

  const filters = [
    { id: 'all', label: 'All' },
    ...STAGES.map((s) => ({ id: s.id, label: s.short })),
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const isActive = f.id === 'all' ? currentStage === 'all' : currentStage === f.id
        return (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors"
            style={{
              background: isActive ? '#006d77' : '#eae7e2',
              color: isActive ? '#ffffff' : '#42413e',
            }}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
