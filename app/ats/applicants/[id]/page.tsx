import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import {
  STAGES,
  getStageBadgeClass,
  getStageLabel,
  formatJobTitle,
  getInitials,
  formatDate,
  daysInStage,
  STAGE_IDS,
} from '@/lib/ats/constants'
import StageActions from '@/components/ats/StageActions'
import EmailModal from '@/components/ats/EmailModal'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()
  const { data } = await supabase.from('applications').select('name').eq('id', id).single()
  return { title: data?.name ?? 'Applicant Profile' }
}

export default async function ApplicantProfile({ params }: PageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data: app, error } = await supabase
    .from('applications')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !app) notFound()

  const currentStageIdx = STAGE_IDS.indexOf((app.stage ?? 'application_received') as never)
  const days = daysInStage(app.stage_updated_at)

  return (
    <>
      <EmailModal
        applicantId={app.id}
        applicantName={app.name}
        applicantEmail={app.email}
        currentStage={app.stage ?? 'application_received'}
      />

      {/* Header */}
      <header className="h-18 px-10 py-5 flex items-center justify-between border-b border-surface-container bg-surface sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link
            href="/ats/applicants"
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <nav className="flex text-sm font-body font-medium">
            <Link href="/ats/applicants" className="text-on-surface-variant hover:text-primary transition-colors">
              Applicants
            </Link>
            <span className="mx-2 text-outline-variant">/</span>
            <span className="text-on-surface">{app.name}</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStageBadgeClass(app.stage ?? 'application_received')}`}>
            {getStageLabel(app.stage ?? 'application_received')}
          </span>
          {days > 0 && (
            <span className="text-xs font-body text-secondary">{days}d in stage</span>
          )}
        </div>
      </header>

      <div className="px-10 pb-40 overflow-y-auto">
        {/* Applicant Header */}
        <section className="py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex gap-6 items-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-3xl font-headline italic shadow-lg flex-shrink-0">
              {getInitials(app.name)}
            </div>
            <div>
              <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">
                {app.name}
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-body text-lg text-primary font-medium">
                  {formatJobTitle(app.job_slug ?? '')}
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant" />
                <span className="font-body text-sm text-on-surface-variant">
                  Applied {formatDate(app.created_at)}
                </span>
              </div>
            </div>
          </div>
          {app.resume_url && (
            <a
              href={app.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-highest text-on-surface font-body text-sm font-bold hover:bg-surface-container-high transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              View Resume
            </a>
          )}
        </section>

        {/* Contact */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: 'mail', label: 'Email', value: app.email },
            { icon: 'phone', label: 'Phone', value: app.phone || '—' },
            { icon: 'location_on', label: 'Location', value: app.location || 'Houston, TX' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter font-body">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-on-surface font-body">{item.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Stage Tracker */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-2xl font-bold">Application Journey</h3>
            <span className="text-sm font-body font-medium text-primary">
              Stage: {getStageLabel(app.stage ?? 'application_received')}
            </span>
          </div>
          <div className="relative">
            <div className="flex justify-between relative z-10">
              {STAGES.map((stage, i) => {
                const isCompleted = i < currentStageIdx
                const isCurrent = i === currentStageIdx
                return (
                  <div key={stage.id} className="flex flex-col items-center gap-2">
                    <div
                      className={`rounded-full border-4 transition-all ${
                        isCurrent
                          ? 'w-6 h-6 border-transparent shadow-lg shadow-primary/30'
                          : isCompleted
                          ? 'w-5 h-5 border-transparent'
                          : 'w-5 h-5 border-surface-container-highest bg-surface'
                      }`}
                      style={
                        isCurrent || isCompleted
                          ? { background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }
                          : {}
                      }
                    />
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wide font-body ${
                        isCurrent
                          ? 'text-primary'
                          : isCompleted
                          ? 'text-on-surface-variant'
                          : 'text-on-surface-variant/40'
                      }`}
                    >
                      {stage.label.split(' ')[0]}
                    </span>
                  </div>
                )
              })}
            </div>
            {/* Track line */}
            <div className="absolute top-[10px] left-0 w-full h-[2px] bg-surface-container-highest -z-10" />
            <div
              className="absolute top-[10px] left-0 h-[2px] -z-10 transition-all"
              style={{
                width: `${(currentStageIdx / (STAGES.length - 1)) * 100}%`,
                background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)',
              }}
            />
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {/* Cover Message */}
            {app.message && (
              <div>
                <h4 className="font-headline text-xl font-bold mb-4 border-b border-outline-variant/20 pb-2 text-on-surface">
                  Cover Message
                </h4>
                <blockquote className="bg-surface-container-lowest p-8 rounded-xl shadow-sm italic text-on-surface/80 leading-relaxed font-headline text-lg">
                  &ldquo;{app.message}&rdquo;
                </blockquote>
              </div>
            )}

            {/* Experience */}
            <div>
              <h4 className="font-headline text-xl font-bold mb-6 border-b border-outline-variant/20 pb-2 text-on-surface">
                Experience &amp; Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.experience && (
                  <div className="p-5 rounded-xl bg-surface-container-low">
                    <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider font-body block mb-2">
                      Experience
                    </span>
                    <p className="text-on-surface font-body">{app.experience}</p>
                  </div>
                )}
                {app.certifications && (
                  <div className="p-5 rounded-xl bg-surface-container-low">
                    <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider font-body block mb-2">
                      Certifications
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {app.certifications.split(',').map((c: string) => (
                        <span
                          key={c}
                          className="px-3 py-1 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface font-body"
                        >
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
                <h4 className="font-headline text-xl font-bold mb-4 border-b border-outline-variant/20 pb-2 text-on-surface">
                  Internal Notes
                </h4>
                <div className="bg-surface-container-low p-6 rounded-xl">
                  <pre className="font-body text-sm text-on-surface-variant whitespace-pre-wrap leading-relaxed">
                    {app.notes}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Activity Log */}
          <div>
            <h4 className="font-headline text-xl font-bold mb-6 border-b border-outline-variant/20 pb-2 text-on-surface">
              Activity Log
            </h4>
            <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/40">
              {/* Dynamic log: show stages completed */}
              {STAGES.slice(0, currentStageIdx + 1)
                .reverse()
                .map((stage, i) => (
                  <div key={stage.id} className="flex gap-4 relative">
                    <div
                      className={`w-6 h-6 rounded-full ring-4 ring-surface z-10 flex items-center justify-center flex-shrink-0 ${
                        i === 0 ? 'bg-primary' : 'bg-surface-container-highest'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[11px] ${i === 0 ? 'text-white' : 'text-on-surface-variant'}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {i === 0 ? 'check' : 'circle'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface font-body">{stage.label}</p>
                      <p className="text-xs text-on-surface-variant font-body">
                        {i === 0 ? 'Current stage' : 'Completed'}
                      </p>
                    </div>
                  </div>
                ))}
              {/* Application received always at bottom */}
              {currentStageIdx > 0 && (
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest ring-4 ring-surface z-10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[11px] text-on-surface-variant">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface font-body">Application Received</p>
                    <p className="text-xs text-on-surface-variant font-body">
                      {formatDate(app.created_at)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <StageActions
        applicantId={app.id}
        currentStage={app.stage ?? 'application_received'}
        applicantName={app.name}
      />
    </>
  )
}
