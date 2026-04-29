import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import {
  STAGES,
  formatJobTitle,
  getInitials,
  daysInStage,
  urgencyDotClass,
} from '@/lib/ats/constants'
import PipelineBoard from '@/components/ats/PipelineBoard'

export const metadata: Metadata = { title: 'Pipeline Board' }

export default async function PipelinePage() {
  const supabase = await createClient()
  const { data: applications } = await supabase
    .from('applications')
    .select('id, name, job_slug, stage, stage_updated_at')
    .eq('status', 'active')
    .order('stage_updated_at', { ascending: true })

  // Group by stage
  const columns = STAGES.map((stage) => ({
    ...stage,
    cards: (applications ?? [])
      .filter((a) => (a.stage ?? 'application_received') === stage.id)
      .map((a) => ({
        id: a.id,
        name: a.name,
        role: formatJobTitle(a.job_slug ?? ''),
        initials: getInitials(a.name),
        days: daysInStage(a.stage_updated_at),
        urgencyClass: urgencyDotClass(daysInStage(a.stage_updated_at)),
      })),
  }))

  const totalActive = applications?.length ?? 0
  const highPriority = (applications ?? []).filter((a) => daysInStage(a.stage_updated_at) > 7).length

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 sticky top-0 bg-surface/80 backdrop-blur-md z-30 border-b border-surface-container">
        <h2 className="font-headline text-3xl text-primary">Pipeline Board</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              className="bg-surface-container-highest border-none rounded-full py-2.5 pl-10 pr-6 text-sm font-body w-56 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
              placeholder="Search pipeline..."
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex gap-3">
          {highPriority > 0 && (
            <span className="bg-tertiary-container/20 text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-body flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">bolt</span>
              High Priority: {highPriority}
            </span>
          )}
          <span className="bg-surface-container-high text-secondary px-4 py-1.5 rounded-full text-xs font-body">
            Total Active: {totalActive}
          </span>
        </div>
      </div>

      <PipelineBoard columns={columns} />
    </>
  )
}
