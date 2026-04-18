import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getStageLabel, formatJobTitle, getInitials, formatDate, STAGE_IDS } from '@/lib/ats/constants'
import ApplicantFilters from '@/components/ats/ApplicantFilters'
import { Suspense } from 'react'

export const metadata: Metadata = { title: 'Applicants' }
const PAGE_SIZE = 10

const STAGE_COLORS: Record<string, { bg: string; text: string }> = {
  application_received: { bg: '#e4e2dc', text: '#42413e' },
  phone_interview:      { bg: '#cde8ec', text: '#051f23' },
  reference_check:      { bg: '#d0f0f3', text: '#00363b' },
  in_person_interview:  { bg: '#f5e0a9', text: '#2d1f00' },
  shadow_shift:         { bg: '#d0f0f3', text: '#00363b' },
  decision_made:        { bg: '#006d77', text: '#ffffff' },
}

interface PageProps {
  searchParams: Promise<{ stage?: string; q?: string; page?: string }>
}

export default async function ApplicantsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const stageFilter = params.stage && STAGE_IDS.includes(params.stage as never) ? params.stage : 'all'
  const query = params.q ?? ''
  const page = Math.max(1, parseInt(params.page ?? '1', 10))
  const offset = (page - 1) * PAGE_SIZE

  const supabase = await createClient()
  let dbQuery = supabase
    .from('applications')
    .select('*', { count: 'exact' })
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1)

  if (stageFilter !== 'all') dbQuery = dbQuery.eq('stage', stageFilter)
  if (query) dbQuery = dbQuery.ilike('name', `%${query}%`)

  const { data: applicants, count } = await dbQuery
  const totalPages = Math.ceil((count ?? 0) / PAGE_SIZE)

  return (
    <div style={{ background: '#fcf9f4', minHeight: '100vh' }}>
      {/* Header */}
      <header
        className="flex flex-wrap justify-between items-center gap-4 px-4 md:px-10 py-5 sticky top-0 z-30 backdrop-blur-md"
        style={{ borderBottom: '1px solid #e4e2dc', background: 'rgba(252,249,244,0.85)' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#006d77', fontFamily: 'Georgia, serif' }}>
          Applicants
        </h2>
        <form method="GET" action="/ats/applicants" className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px]" style={{ color: '#72706b' }}>search</span>
          <input
            name="q"
            defaultValue={query}
            className="rounded-full py-2 pl-10 pr-5 text-sm w-44 md:w-56 focus:outline-none"
            style={{ background: '#eae7e2', color: '#1c1c19', border: 'none' }}
            placeholder="Search by name..."
          />
          {stageFilter !== 'all' && <input type="hidden" name="stage" value={stageFilter} />}
        </form>
      </header>

      <div className="px-4 md:px-10 pb-12 mt-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Suspense>
            <ApplicantFilters currentStage={stageFilter} />
          </Suspense>
          <p className="text-xs" style={{ color: '#4a6367' }}>
            <span className="font-bold" style={{ color: '#1c1c19' }}>{count ?? 0}</span> applicant{count !== 1 ? 's' : ''}
            {stageFilter !== 'all' && <span> — <span style={{ color: '#006d77' }}>{getStageLabel(stageFilter)}</span></span>}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-2xl overflow-hidden" style={{ border: '1px solid #e4e2dc' }}>
          <table className="w-full text-left border-collapse">
            <thead style={{ background: '#eae7e2' }}>
              <tr>
                {['Applicant', 'Contact', 'Role', 'Applied', 'Stage', 'Actions'].map((h) => (
                  <th key={h} className="px-5 py-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#4a6367' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!applicants || applicants.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center italic text-sm" style={{ color: '#4a6367' }}>No applicants found.</td>
                </tr>
              ) : (
                applicants.map((app) => {
                  const sc = STAGE_COLORS[app.stage ?? 'application_received'] ?? { bg: '#e4e2dc', text: '#42413e' }
                  return (
                    <tr key={app.id} style={{ borderTop: '1px solid #f0ede8', background: '#fcf9f4' }}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                            style={{ background: '#d0f0f3', color: '#00363b' }}>
                            {getInitials(app.name)}
                          </div>
                          <div>
                            <p className="font-semibold leading-tight" style={{ color: '#1c1c19' }}>{app.name}</p>
                            {app.location && <p className="text-xs" style={{ color: '#4a6367' }}>{app.location}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm" style={{ color: '#4a6367' }}>
                        <p>{app.phone || '—'}</p>
                        <p className="italic text-xs">{app.email}</p>
                      </td>
                      <td className="px-5 py-4 text-sm font-medium" style={{ color: '#1c1c19' }}>{formatJobTitle(app.job_slug ?? '')}</td>
                      <td className="px-5 py-4 text-sm" style={{ color: '#4a6367' }}>{formatDate(app.created_at)}</td>
                      <td className="px-5 py-4">
                        <span className="text-[10px] font-bold px-3 py-1 rounded-full"
                          style={{ background: sc.bg, color: sc.text }}>
                          {getStageLabel(app.stage ?? 'application_received').toUpperCase()}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Link href={`/ats/applicants/${app.id}`}
                          className="p-2 rounded-full inline-flex hover:opacity-70 transition-opacity"
                          style={{ color: '#006d77' }}>
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-4"
              style={{ borderTop: '1px solid #e4e2dc', background: '#f6f3ee' }}>
              <p className="text-xs" style={{ color: '#4a6367' }}>
                Showing {offset + 1}–{Math.min(offset + PAGE_SIZE, count ?? 0)} of {count}
              </p>
              <div className="flex gap-1">
                {page > 1 && (
                  <Link href={`/ats/applicants?page=${page - 1}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className="p-2 rounded-lg" style={{ color: '#4a6367' }}>
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </Link>
                )}
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                  <Link key={p}
                    href={`/ats/applicants?page=${p}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium"
                    style={{ background: p === page ? '#006d77' : 'transparent', color: p === page ? '#fff' : '#42413e' }}>
                    {p}
                  </Link>
                ))}
                {page < totalPages && (
                  <Link href={`/ats/applicants?page=${page + 1}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className="p-2 rounded-lg" style={{ color: '#4a6367' }}>
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {!applicants || applicants.length === 0 ? (
            <p className="text-center py-12 italic text-sm" style={{ color: '#4a6367' }}>No applicants found.</p>
          ) : (
            applicants.map((app) => {
              const sc = STAGE_COLORS[app.stage ?? 'application_received'] ?? { bg: '#e4e2dc', text: '#42413e' }
              return (
                <Link key={app.id} href={`/ats/applicants/${app.id}`}
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{ background: '#f6f3ee', border: '1px solid #e4e2dc' }}>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: '#d0f0f3', color: '#00363b' }}>
                      {getInitials(app.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold truncate" style={{ color: '#1c1c19' }}>{app.name}</p>
                      <p className="text-xs" style={{ color: '#4a6367' }}>{formatJobTitle(app.job_slug ?? '')} · {formatDate(app.created_at)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full hidden sm:inline"
                      style={{ background: sc.bg, color: sc.text }}>
                      {getStageLabel(app.stage ?? '').toUpperCase()}
                    </span>
                    <span className="material-symbols-outlined text-[18px]" style={{ color: '#006d77' }}>chevron_right</span>
                  </div>
                </Link>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
