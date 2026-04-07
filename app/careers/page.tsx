import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Careers | Nurturly',
  description: 'Join Nurturly and provide meaningful care that truly makes a difference.',
}

export default function Careers() {
  const responsibilities = [
    'Support daily routines and activities of daily living',
    'Provide companionship and emotional support',
    'Help create a calm, safe, and comfortable environment',
    'Build trust with clients and their families',
  ]

  const qualities = [
    'Calm and patient',
    'Reliable and consistent',
    'Observant and detail-oriented',
    'Emotionally steady',
    'Respectful and professional',
  ]

  const standards = [
    'Dignity in every moment',
    'Reliability builds trust',
    'Consistent, relationship-centered care',
    'The warmth of hospitality',
    'Technology that supports human care',
  ]

  const process = [
    'Application',
    'Phone interview',
    'Reference check',
    'In-person interview',
    'Shadow shift',
    'Final decision',
  ]

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Work That Feels Meaningful
            </h1>
            <p className="text-2xl md:text-3xl text-on-surface-variant font-light">
              Care for people, not just tasks.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                At Nurturly, we provide thoughtful, relationship-based care designed to feel calm, personal, and human.
              </p>
            </div>

            {/* We Care Differently */}
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">We Care Differently</h2>
              <div className="space-y-3">
                <p className="text-lg text-on-surface leading-relaxed">
                  You care for one family deeply instead of many clients quickly.
                </p>
                <p className="text-lg text-on-surface leading-relaxed">
                  We prioritize relationships over rushed, task-based care.
                </p>
              </div>
            </div>

            {/* What You'll Do */}
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">What You&apos;ll Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <span className="text-primary font-headline text-xl flex-shrink-0">•</span>
                    <p className="text-on-surface leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Look For */}
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">Who We Look For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualities.map((quality, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <span className="text-primary font-headline text-xl flex-shrink-0">•</span>
                    <p className="text-on-surface leading-relaxed">{quality}</p>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-on-surface-variant italic">
                This role is designed for people who value patience, consistency, and meaningful connection over speed.
              </p>
            </div>

            {/* Our Standards */}
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">Our Standards</h2>
              <div className="grid grid-cols-1 gap-3">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <span className="text-primary font-headline text-xl flex-shrink-0">•</span>
                    <p className="text-on-surface leading-relaxed">{standard}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">Our Process</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-wrap">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-headline text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-lg">
                      {step}
                    </span>
                    {index < process.length - 1 && (
                      <span className="text-outline-variant hidden md:inline">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-2xl md:text-3xl mb-6">Join Nurturly</h3>
              <p className="text-lg text-on-surface leading-relaxed mb-8">
                If you believe care should feel personal, consistent, and human, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <button className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Apply Now
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-primary/5 transition-all">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface text-surface-container py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-sm tracking-wide text-center md:text-left">
            © 2026 Nurturly. Redefining Care, Redefining Time.
          </p>
        </div>
      </footer>
    </>
  )
}
