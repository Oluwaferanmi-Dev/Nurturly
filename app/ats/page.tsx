import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import {
  STAGES,
  getStageBadgeClass,
  getStageLabel,
  formatJobTitle,
  getInitials,
  formatDate,
} from '@/lib/ats/constants'
import TimeGreeting from '@/components/ats/TimeGreeting'

export const metadata: Metadata = { title: 'Dashboard' }

async function getDashboardData() {
  const supabase = await createClient()
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const [
    { count: total },
    { count: newThisWeek },
    { count: interviews },
    { count: offers },
    { data: stageData },
    { data: recent },
  ] = await Promise.all([
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active'),
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')
      .gte('created_at', oneWeekAgo.toISOString()),
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')
      .in('stage', ['in_person_interview', 'shadow_shift']),
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')
      .eq('stage', 'decision_made'),
    supabase
      .from('applications')
      .select('stage')
      .eq('status', 'active'),
    supabase
      .from('applications')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(8),
  ])

  const stageCounts = STAGES.map((s) => ({
    ...s,
    count: stageData?.filter((a) => a.stage === s.id).length ?? 0,
  }))

  return {
    stats: {
      total: total ?? 0,
      newThisWeek: newThisWeek ?? 0,
      interviews: interviews ?? 0,
      offers: offers ?? 0,
    },
    stageCounts,
    recent: recent ?? [],
  }
}

export default async function ATSDashboard() {
  const { stats, stageCounts, recent } = await getDashboardData()
  const maxCount = Math.max(...stageCounts.map((s) => s.count), 1)

  return (
    <>
      {/* Top Bar */}
      <header className="flex justify-between items-center px-12 py-6 sticky top-0 bg-surface/80 backdrop-blur-md z-30 border-b border-surface-container">
        <div>
          <TimeGreeting />
          <p className="text-secondary text-sm font-body mt-1">
            Here&apos;s what&apos;s happening with your recruitment funnel today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              className="bg-surface-container-highest border-none rounded-full py-2.5 pl-10 pr-6 text-sm font-body w-56 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
              placeholder="Search applicants..."
              type="text"
              readOnly
            />
          </div>
          <Link href="/ats/applicants" className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </Link>
        </div>
      </header>

      <section className="px-12 py-10 space-y-10">
        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-40 hover:bg-surface-container-high transition-colors">
            <span className="text-[10px] font-body uppercase tracking-widest text-secondary">
              Total Applications
            </span>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-headline text-primary">{stats.total}</span>
              {stats.newThisWeek > 0 && (
                <span className="text-xs font-body text-primary font-bold bg-primary/10 px-2 py-1 rounded-full">
                  +{stats.newThisWeek}
                </span>
              )}
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-40 hover:bg-surface-container-high transition-colors">
            <span className="text-[10px] font-body uppercase tracking-widest text-secondary">
              New This Week
            </span>
            <span className="text-4xl font-headline text-primary">{stats.newThisWeek}</span>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-40 hover:bg-surface-container-high transition-colors">
            <span className="text-[10px] font-body uppercase tracking-widest text-secondary">
              Interviews Scheduled
            </span>
            <span className="text-4xl font-headline text-primary">{stats.interviews}</span>
          </div>
          <div className="bg-tertiary-container/10 p-8 rounded-xl border border-tertiary/10 flex flex-col justify-between h-40 hover:bg-tertiary-container/20 transition-colors">
            <span className="text-[10px] font-body uppercase tracking-widest text-on-tertiary-container">
              Offers Pending
            </span>
            <span className="text-4xl font-headline text-tertiary">{stats.offers}</span>
          </div>
        </div>

        {/* Funnel */}
        <div className="bg-surface-container-low p-8 rounded-xl">
          <h3 className="font-headline text-xl mb-8 text-on-surface">
            Recruitment Funnel Overview
          </h3>
          <div className="flex items-center w-full gap-1">
            {stageCounts.map((stage, i) => {
              const flex = Math.max(0.12, stage.count / maxCount)
              const isFirst = i === 0
              const isLast = i === stageCounts.length - 1
              const isTertiary = i >= 4
              const opacity = 1 - i * 0.11

              return (
                <div
                  key={stage.id}
                  title={`${stage.label}: ${stage.count}`}
                  className={`h-14 flex items-center justify-center transition-all ${
                    isFirst ? 'rounded-l-full' : ''
                  } ${isLast ? 'rounded-r-full' : ''}`}
                  style={{
                    flex,
                    background: isTertiary
                      ? i === 4
                        ? 'rgba(201,168,76,0.35)'
                        : '#c9a84c'
                      : `rgba(0, 83, 91, ${opacity})`,
                    color: isTertiary ? '#503d00' : 'white',
                  }}
                >
                  <span className="text-[9px] font-body font-bold whitespace-nowrap px-2 leading-none">
                    {stage.short} ({stage.count})
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-2xl">Recent Applications</h3>
            <Link
              href="/ats/applicants"
              className="text-sm text-primary font-body font-semibold hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl bg-surface-container-low">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high">
                <tr>
                  <th className="px-8 py-4 text-[10px] font-body tracking-widest text-secondary uppercase">
                    Applicant
                  </th>
                  <th className="px-8 py-4 text-[10px] font-body tracking-widest text-secondary uppercase">
                    Role
                  </th>
                  <th className="px-8 py-4 text-[10px] font-body tracking-widest text-secondary uppercase">
                    Date
                  </th>
                  <th className="px-8 py-4 text-[10px] font-body tracking-widest text-secondary uppercase">
                    Stage
                  </th>
                  <th className="px-8 py-4 text-[10px] font-body tracking-widest text-secondary uppercase text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {recent.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-8 py-16 text-center text-secondary text-sm italic font-body"
                    >
                      No applications yet — share your careers page to get started!
                    </td>
                  </tr>
                ) : (
                  recent.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-surface-container-lowest transition-colors"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold font-body text-xs flex-shrink-0">
                            {getInitials(app.name)}
                          </div>
                          <span className="font-headline text-lg text-on-surface">
                            {app.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm font-body text-secondary">
                        {formatJobTitle(app.job_slug ?? '')}
                      </td>
                      <td className="px-8 py-5 text-sm font-body text-secondary">
                        {formatDate(app.created_at)}
                      </td>
                      <td className="px-8 py-5">
                        <span
                          className={`text-[10px] font-bold px-3 py-1 rounded-full ${getStageBadgeClass(
                            app.stage ?? 'application_received'
                          )}`}
                        >
                          {getStageLabel(app.stage ?? 'application_received').toUpperCase()}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <Link
                          href={`/ats/applicants/${app.id}`}
                          className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors inline-flex items-center"
                          title="View profile"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAB */}
      <div className="fixed bottom-10 right-10">
        <Link
          href="/ats/applicants"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-white hover:scale-105 active:scale-95 transition-transform"
          style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
          title="View applicants"
        >
          <span className="material-symbols-outlined text-2xl">group</span>
        </Link>
      </div>
    </>
  )
}
