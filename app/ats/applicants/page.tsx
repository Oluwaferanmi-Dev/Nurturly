import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import {
  getStageBadgeClass,
  getStageLabel,
  formatJobTitle,
  getInitials,
  formatDate,
  STAGE_IDS,
} from '@/lib/ats/constants'
import ApplicantFilters from '@/components/ats/ApplicantFilters'
import { Suspense } from 'react'

export const metadata: Metadata = { title: 'Applicants' }

const PAGE_SIZE = 10

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
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 sticky top-0 bg-surface/80 backdrop-blur-md z-30 border-b border-surface-container">
        <h2 className="font-headline text-3xl text-primary">Applicants</h2>
        <div className="flex items-center gap-4">
          <form method="GET" action="/ats/applicants" className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              name="q"
              defaultValue={query}
              className="bg-surface-container-highest border-none rounded-full py-2.5 pl-10 pr-6 text-sm font-body w-56 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
              placeholder="Search by name..."
              type="text"
            />
            {stageFilter !== 'all' && (
              <input type="hidden" name="stage" value={stageFilter} />
            )}
          </form>
        </div>
      </header>

      <div className="px-10 pb-12 mt-8">
        {/* Filters & Count */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Suspense>
            <ApplicantFilters currentStage={stageFilter} />
          </Suspense>
          <p className="text-sm font-body text-secondary">
            Showing{' '}
            <span className="font-bold text-on-surface">{count ?? 0}</span>{' '}
            applicant{count !== 1 ? 's' : ''}
            {stageFilter !== 'all' && (
              <span className="ml-1">
                in{' '}
                <span className="text-primary font-semibold">
                  {getStageLabel(stageFilter)}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Table */}
        <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold">
                    Applicant
                  </th>
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold">
                    Role
                  </th>
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold">
                    Applied
                  </th>
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold">
                    Stage
                  </th>
                  <th className="px-6 py-4 text-[10px] font-body uppercase tracking-widest text-secondary font-bold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {!applicants || applicants.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-8 py-16 text-center text-secondary text-sm italic font-body"
                    >
                      No applicants found.
                    </td>
                  </tr>
                ) : (
                  applicants.map((app) => (
                    <tr
                      key={app.id}
                      className="bg-surface-container-lowest hover:bg-surface-container-high transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold font-body text-sm flex-shrink-0">
                            {getInitials(app.name)}
                          </div>
                          <div>
                            <p className="font-headline text-lg font-semibold text-on-surface leading-tight">
                              {app.name}
                            </p>
                            {app.location && (
                              <p className="text-xs font-body text-secondary">{app.location}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-body space-y-0.5">
                          <p className="text-on-surface">{app.phone || '—'}</p>
                          <p className="text-secondary italic">{app.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-body font-medium text-on-surface">
                          {formatJobTitle(app.job_slug ?? '')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-body text-secondary">
                          {formatDate(app.created_at)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStageBadgeClass(
                            app.stage ?? 'application_received'
                          )}`}
                        >
                          {getStageLabel(app.stage ?? 'application_received')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-1">
                          <Link
                            href={`/ats/applicants/${app.id}`}
                            className="p-2 rounded-full hover:bg-surface-container text-primary transition-colors"
                            title="View Profile"
                          >
                            <span className="material-symbols-outlined text-xl">visibility</span>
                          </Link>
                          <Link
                            href={`/ats/pipeline`}
                            className="p-2 rounded-full hover:bg-surface-container text-primary transition-colors"
                            title="View on Board"
                          >
                            <span className="material-symbols-outlined text-xl">move_up</span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low border-t border-surface-container">
              <p className="text-sm font-body text-secondary">
                Showing{' '}
                <span className="font-bold text-on-surface">
                  {offset + 1}–{Math.min(offset + PAGE_SIZE, count ?? 0)}
                </span>{' '}
                of {count}
              </p>
              <div className="flex items-center gap-1">
                {page > 1 && (
                  <Link
                    href={`/ats/applicants?page=${page - 1}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-secondary"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </Link>
                )}
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/ats/applicants?page=${p}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${
                      p === page
                        ? 'bg-primary text-on-primary'
                        : 'hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {p}
                  </Link>
                ))}
                {page < totalPages && (
                  <Link
                    href={`/ats/applicants?page=${page + 1}${stageFilter !== 'all' ? `&stage=${stageFilter}` : ''}${query ? `&q=${query}` : ''}`}
                    className="p-2 rounded-lg hover:bg-surface-container-high transition-colors text-secondary"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
