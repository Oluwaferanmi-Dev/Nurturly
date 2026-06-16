import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import {
  STAGES, getStageLabel, formatJobTitle, getInitials, formatDate, daysInStage, STAGE_IDS,
} from '@/lib/ats/constants'
import StageActions from '@/components/ats/StageActions'
import EmailModal from '@/components/ats/EmailModal'

interface PageProps { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()
  const { data } = await supabase.from('applications').select('name').eq('id', id).single()
  return { title: data?.name ?? 'Applicant Profile' }
}

const STAGE_COLORS: Record<string, { bg: string; text: string }> = {
  application_received: { bg: '#e4e2dc', text: '#42413e' },
  phone_interview:      { bg: '#cde8ec', text: '#051f23' },
  reference_check:      { bg: '#d0f0f3', text: '#00363b' },
  in_person_interview:  { bg: '#f5e0a9', text: '#2d1f00' },
  shadow_shift:         { bg: '#d0f0f3', text: '#00363b' },
  decision_made:        { bg: '#006d77', text: '#ffffff' },
}

export default async function ApplicantProfile({ params }: PageProps) {
  const { id } = await params
  const supabase = await createClient()
  const { data: app, error } = await supabase.from('applications').select('*').eq('id', id).single()
  if (error || !app) notFound()

  const currentStageIdx = STAGE_IDS.indexOf((app.stage ?? 'application_received') as never)
  const days = daysInStage(app.stage_updated_at)
  const sc = STAGE_COLORS[app.stage ?? 'application_received'] ?? { bg: '#e4e2dc', text: '#42413e' }

  return (
    <>
      <EmailModal applicantId={app.id} applicantName={app.name} applicantEmail={app.email} currentStage={app.stage ?? ''} />

      {/* Header */}
      <header
        className="flex items-center justify-between px-4 md:px-10 py-4 sticky top-0 z-30 backdrop-blur-md flex-wrap gap-3"
        style={{ borderBottom: '1px solid #e4e2dc', background: 'rgba(252,249,244,0.9)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/ats/applicants"
            className="p-2 rounded-full flex-shrink-0"
            style={{ color: '#006d77', background: '#d0f0f3' }}>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>
          <div className="min-w-0">
            <p className="text-xs" style={{ color: '#4a6367' }}>
              <Link href="/ats/applicants" className="hover:underline">Applicants</Link>
              <span className="mx-1">/</span>
              <span style={{ color: '#1c1c19', fontWeight: 600 }}>{app.name}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{ background: sc.bg, color: sc.text }}>
            {getStageLabel(app.stage ?? 'application_received').toUpperCase()}
          </span>
          {days > 0 && <span className="text-xs hidden sm:block" style={{ color: '#4a6367' }}>{days}d in stage</span>}
        </div>
      </header>

      {/* Scrollable body */}
      <div className="px-4 md:px-10 pb-44 overflow-y-auto" style={{ background: '#fcf9f4' }}>

        {/* Hero */}
        <section className="py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex gap-4 md:gap-6 items-center">
            <div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center flex-shrink-0 text-2xl md:text-3xl font-bold shadow-lg"
              style={{ background: '#d0f0f3', color: '#00363b', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              {getInitials(app.name)}
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif' }}>
                {app.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-base font-medium" style={{ color: '#006d77' }}>{formatJobTitle(app.job_slug ?? '')}</span>
                <span className="w-1 h-1 rounded-full" style={{ background: '#c4c2bc' }} />
                <span className="text-sm" style={{ color: '#42413e' }}>Applied {formatDate(app.created_at)}</span>
              </div>
            </div>
          </div>
          {app.resume_url && (
            <a href={app.resume_url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold self-start md:self-auto"
              style={{ background: '#eae7e2', color: '#1c1c19' }}>
              <span className="material-symbols-outlined text-[18px]">description</span>
              View Resume
            </a>
          )}
        </section>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: 'mail', label: 'Email', value: app.email },
            { icon: 'phone', label: 'Phone', value: app.phone || '—' },
            { icon: 'location_on', label: 'Location', value: app.location || '[YOUR_CITY], [YOUR_STATE]' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: '#f6f3ee' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#eae7e2', color: '#006d77' }}>
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#72706b' }}>{item.label}</p>
                <p className="text-sm font-medium truncate" style={{ color: '#1c1c19' }}>{item.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Stage Tracker */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-xl" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif' }}>Application Journey</h3>
          </div>
          {/* Mobile: vertical steps */}
          <div className="sm:hidden flex flex-col gap-4">
            {STAGES.map((stage, i) => {
              const isCompleted = i < currentStageIdx
              const isCurrent = i === currentStageIdx
              return (
                <div key={stage.id} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: isCurrent || isCompleted ? '#006d77' : '#e4e2dc',
                      boxShadow: isCurrent ? '0 0 0 4px rgba(0,109,119,0.2)' : 'none',
                    }}>
                    {(isCurrent || isCompleted) && (
                      <span className="material-symbols-outlined text-white text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: isCurrent ? '#006d77' : isCompleted ? '#42413e' : '#c4c2bc' }}>
                    {stage.label}
                  </p>
                </div>
              )
            })}
          </div>
          {/* Desktop: horizontal bar */}
          <div className="relative hidden sm:block">
            <div className="flex justify-between relative z-10">
              {STAGES.map((stage, i) => {
                const isCompleted = i < currentStageIdx
                const isCurrent = i === currentStageIdx
                return (
                  <div key={stage.id} className="flex flex-col items-center gap-2">
                    <div className="rounded-full border-4 border-transparent flex items-center justify-center transition-all"
                      style={{
                        width: isCurrent ? 24 : 20,
                        height: isCurrent ? 24 : 20,
                        background: isCurrent || isCompleted ? '#006d77' : '#e4e2dc',
                        boxShadow: isCurrent ? '0 0 0 6px rgba(0,109,119,0.15)' : 'none',
                      }} />
                    <span className="text-[9px] font-bold uppercase tracking-wide text-center max-w-[60px] leading-tight"
                      style={{ color: isCurrent ? '#006d77' : isCompleted ? '#42413e' : '#c4c2bc' }}>
                      {stage.label.split(' ')[0]}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="absolute top-[10px] left-0 w-full h-[2px]" style={{ background: '#e4e2dc', zIndex: 0 }} />
            <div className="absolute top-[10px] left-0 h-[2px] transition-all"
              style={{
                width: `${(currentStageIdx / (STAGES.length - 1)) * 100}%`,
                background: 'linear-gradient(90deg, #00535b, #006d77)',
                zIndex: 1,
              }} />
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-8">

            {/* Cover Message */}
            {app.message && (
              <div>
                <h4 className="font-bold text-lg mb-4 pb-2" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif', borderBottom: '1px solid #e4e2dc' }}>
                  Cover Message
                </h4>
                <blockquote className="p-6 rounded-2xl italic leading-relaxed" style={{ background: '#f6f3ee', color: '#42413e', fontFamily: 'Georgia, serif', fontSize: '1.05rem' }}>
                  &ldquo;{app.message}&rdquo;
                </blockquote>
              </div>
            )}

            {/* Experience & Skills */}
            <div>
              <h4 className="font-bold text-lg mb-5 pb-2" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif', borderBottom: '1px solid #e4e2dc' }}>
                Experience &amp; Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.experience && (
                  <div className="p-5 rounded-2xl" style={{ background: '#f6f3ee' }}>
                    <span className="text-[9px] font-bold uppercase tracking-widest block mb-2" style={{ color: '#72706b' }}>Experience</span>
                    <p className="text-sm" style={{ color: '#1c1c19' }}>{app.experience}</p>
                  </div>
                )}
                {app.certifications && (
                  <div className="p-5 rounded-2xl" style={{ background: '#f6f3ee' }}>
                    <span className="text-[9px] font-bold uppercase tracking-widest block mb-2" style={{ color: '#72706b' }}>Certifications</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {app.certifications.split(',').map((c: string) => (
                        <span key={c} className="px-3 py-1 text-xs font-bold rounded-full"
                          style={{ background: '#eae7e2', color: '#1c1c19' }}>
                          {c.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            {app.notes && (
              <div>
                <h4 className="font-bold text-lg mb-4 pb-2" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif', borderBottom: '1px solid #e4e2dc' }}>
                  Internal Notes
                </h4>
                <div className="p-5 rounded-2xl" style={{ background: '#f6f3ee' }}>
                  <pre className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: '#42413e' }}>{app.notes}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Activity Log */}
          <div>
            <h4 className="font-bold text-lg mb-6 pb-2" style={{ color: '#1c1c19', fontFamily: 'Georgia, serif', borderBottom: '1px solid #e4e2dc' }}>
              Activity Log
            </h4>
            <div className="flex flex-col gap-5 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px"
              style={{ '--tw-before-bg': '#e4e2dc' } as React.CSSProperties}>
              <style>{`.activity-line::before { background: #e4e2dc; }`}</style>
              {STAGES.slice(0, currentStageIdx + 1).reverse().map((stage, i) => (
                <div key={stage.id} className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full z-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: i === 0 ? '#006d77' : '#eae7e2', boxShadow: `0 0 0 4px #fcf9f4` }}>
                    <span className="material-symbols-outlined text-[11px]"
                      style={{ color: i === 0 ? '#fff' : '#72706b', fontVariationSettings: "'FILL' 1" }}>
                      {i === 0 ? 'check' : 'circle'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#1c1c19' }}>{stage.label}</p>
                    <p className="text-xs" style={{ color: '#72706b' }}>{i === 0 ? 'Current stage' : 'Completed'}</p>
                  </div>
                </div>
              ))}
              {currentStageIdx > 0 && (
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full z-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#eae7e2', boxShadow: `0 0 0 4px #fcf9f4` }}>
                    <span className="material-symbols-outlined text-[11px]" style={{ color: '#72706b', fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#1c1c19' }}>Application Received</p>
                    <p className="text-xs" style={{ color: '#72706b' }}>{formatDate(app.created_at)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <StageActions applicantId={app.id} currentStage={app.stage ?? 'application_received'} applicantName={app.name} />
    </>
  )
}
