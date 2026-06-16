import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { STAGES, getStageLabel, formatJobTitle, getInitials, formatDate } from '@/lib/ats/constants'
import TimeGreeting from '@/components/ats/TimeGreeting'

export const metadata: Metadata = { title: 'Dashboard' }

// color map for stages
const STAGE_COLORS: Record<string, { bg: string; text: string }> = {
  application_received: { bg: '#e4e2dc', text: '#42413e' },
  phone_interview:      { bg: '#cde8ec', text: '#051f23' },
  reference_check:      { bg: '#d0f0f3', text: '#00363b' },
  in_person_interview:  { bg: '#f5e0a9', text: '#2d1f00' },
  shadow_shift:         { bg: '#d0f0f3', text: '#00363b' },
  decision_made:        { bg: '#006d77', text: '#ffffff' },
}

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
    supabase.from('applications').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('applications').select('*', { count: 'exact', head: true }).eq('status', 'active').gte('created_at', oneWeekAgo.toISOString()),
    supabase.from('applications').select('*', { count: 'exact', head: true }).eq('status', 'active').in('stage', ['in_person_interview', 'shadow_shift']),
    supabase.from('applications').select('*', { count: 'exact', head: true }).eq('status', 'active').eq('stage', 'decision_made'),
    supabase.from('applications').select('stage').eq('status', 'active'),
    supabase.from('applications').select('*').eq('status', 'active').order('created_at', { ascending: false }).limit(8),
  ])

  const stageCounts = STAGES.map((s) => ({
    ...s,
    count: stageData?.filter((a) => a.stage === s.id).length ?? 0,
  }))

  return { stats: { total: total ?? 0, newThisWeek: newThisWeek ?? 0, interviews: interviews ?? 0, offers: offers ?? 0 }, stageCounts, recent: recent ?? [] }
}

export default async function ATSDashboard() {
  const { stats, stageCounts, recent } = await getDashboardData()
  const maxCount = Math.max(...stageCounts.map((s) => s.count), 1)

  return (
    <div style={{ background: '#fcf9f4', minHeight: '100vh' }}>
      {/* Header */}
      <header
        className="flex flex-wrap justify-between items-start gap-4 px-4 md:px-10 py-5 sticky top-0 z-30 backdrop-blur-md"
        style={{ borderBottom: '1px solid #e4e2dc', background: 'rgba(252,249,244,0.85)' }}
      >
        <div>
          <TimeGreeting />
          <p className="text-sm mt-1" style={{ color: '#4a6367' }}>
            Here&apos;s what&apos;s happening with your recruitment pipeline today.
          </p>
        </div>
        <Link
          href="/ats/applicants"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: '#d0f0f3', color: '#006d77' }}
        >
          <span className="material-symbols-outlined text-[18px]">group</span>
          View All
        </Link>
      </header>

      <div className="px-4 md:px-10 py-8 space-y-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Applications', value: stats.total, badge: stats.newThisWeek > 0 ? `+${stats.newThisWeek}` : null, accent: false },
            { label: 'New This Week', value: stats.newThisWeek, badge: null, accent: false },
            { label: 'In Interview Stage', value: stats.interviews, badge: null, accent: false },
            { label: 'Offers Pending', value: stats.offers, badge: null, accent: true },
          ].map((card) => (
            <div
              key={card.label}
              className="p-5 md:p-7 rounded-2xl flex flex-col justify-between"
              style={{
                background: card.accent ? 'rgba(201,168,76,0.12)' : '#f6f3ee',
                border: card.accent ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent',
                minHeight: 120,
              }}
            >
              <span
                className="text-[9px] font-bold uppercase tracking-widest leading-tight"
                style={{ color: card.accent ? '#2d1f00' : '#4a6367' }}
              >
                {card.label}
              </span>
              <div className="flex items-end justify-between mt-3">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: card.accent ? '#c9a84c' : '#006d77', fontFamily: 'Georgia, serif' }}
                >
                  {card.value}
                </span>
                {card.badge && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: '#d0f0f3', color: '#006d77' }}
                  >
                    {card.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Funnel */}
        <div className="rounded-2xl p-5 md:p-8" style={{ background: '#f6f3ee' }}>
          <h3 className="font-bold text-lg mb-6" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif' }}>
            Recruitment Funnel
          </h3>
          <div className="flex items-end gap-2 w-full" style={{ height: 160 }}>
            {stageCounts.map((stage, i) => {
              const pct = maxCount === 0 ? 0 : (stage.count / maxCount) * 100
              const heightPct = Math.max(pct, stage.count === 0 ? 6 : 10)
              const isGold = i >= 4
              const bg = isGold
                ? i === 4 ? 'rgba(201,168,76,0.5)' : '#c9a84c'
                : `rgba(0, 83, 91, ${1 - i * 0.13})`
              return (
                <div
                  key={stage.id}
                  className="flex flex-col items-center justify-end flex-1 min-w-0 h-full"
                  title={`${stage.label}: ${stage.count}`}
                >
                  {/* Count label above bar */}
                  <span
                    className="text-xs font-bold mb-1"
                    style={{ color: '#1c1c19' }}
                  >
                    {stage.count}
                  </span>
                  {/* Bar */}
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${heightPct}%`,
                      background: bg,
                      opacity: stage.count === 0 ? 0.25 : 1,
                    }}
                  />
                </div>
              )
            })}
          </div>
          {/* Stage labels below */}
          <div className="flex gap-2 w-full mt-2">
            {stageCounts.map((stage) => (
              <div key={stage.id} className="flex-1 min-w-0 text-center">
                <span
                  className="text-[9px] font-bold uppercase tracking-wide leading-tight block truncate"
                  style={{ color: '#4a6367' }}
                  title={stage.label}
                >
                  {stage.short}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif' }}>
              Recent Applications
            </h3>
            <Link href="/ats/applicants" className="text-sm font-semibold hover:underline" style={{ color: '#006d77' }}>
              View all →
            </Link>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden" style={{ border: '1px solid #e4e2dc' }}>
            <table className="w-full text-left border-collapse">
              <thead style={{ background: '#eae7e2' }}>
                <tr>
                  {['Applicant', 'Role', 'Date', 'Stage', ''].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#4a6367' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recent.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-16 text-center italic text-sm" style={{ color: '#4a6367' }}>
                      No applications yet.
                    </td>
                  </tr>
                ) : (
                  recent.map((app) => {
                    const sc = STAGE_COLORS[app.stage ?? 'application_received'] ?? { bg: '#e4e2dc', text: '#42413e' }
                    return (
                      <tr key={app.id} style={{ borderTop: '1px solid #f0ede8' }}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                              style={{ background: '#d0f0f3', color: '#00363b' }}>
                              {getInitials(app.name)}
                            </div>
                            <span className="font-semibold" style={{ color: '#1c1c19' }}>{app.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm" style={{ color: '#4a6367' }}>{formatJobTitle(app.job_slug ?? '')}</td>
                        <td className="px-6 py-4 text-sm" style={{ color: '#4a6367' }}>{formatDate(app.created_at)}</td>
                        <td className="px-6 py-4">
                          <span className="text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap inline-block" style={{ background: sc.bg, color: sc.text }}>
                            {getStageLabel(app.stage ?? 'application_received').toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link href={`/ats/applicants/${app.id}`}
                            className="p-2 rounded-full inline-flex transition-colors hover:opacity-70"
                            style={{ color: '#006d77' }}>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {recent.length === 0 ? (
              <p className="text-center py-12 italic text-sm" style={{ color: '#4a6367' }}>No applications yet.</p>
            ) : (
              recent.map((app) => {
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
                        <p className="text-xs truncate" style={{ color: '#4a6367' }}>{formatJobTitle(app.job_slug ?? '')}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0"
                      style={{ background: sc.bg, color: sc.text }}>
                      {app.stage?.replace(/_/g, ' ').toUpperCase() ?? 'RECEIVED'}
                    </span>
                  </Link>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
