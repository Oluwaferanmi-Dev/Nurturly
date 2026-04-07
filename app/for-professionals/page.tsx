import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'For Professionals & Referral Partners | Nurturly',
  description: 'Partner with Nurturly to provide trusted home care solutions for your clients.',
}

export default function ForProfessionals() {
  const partners = [
    'Hospitals and discharge planners',
    'Case managers and social workers',
    'Senior living communities',
    'Physicians and therapists',
    'Churches and community organizations',
    'Estate planners and attorneys',
  ]

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              For Professionals & Referral Partners
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                We work closely with hospitals, case managers, social workers, senior communities, and other professionals to support clients who wish to remain safely and comfortably at home.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                We understand the importance of reliability, communication, and professionalism when accepting referrals. Our team works closely with families and professionals to ensure smooth transitions from hospital to home and ongoing support when needed.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">We welcome partnerships with:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <span className="text-primary font-headline text-xl flex-shrink-0">•</span>
                    <p className="text-on-surface leading-relaxed">{partner}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <p className="text-lg text-on-surface leading-relaxed font-medium">
                If you are a professional looking for a trusted home care partner, we would be happy to connect.
              </p>
            </div>

            <button className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get in Touch
            </button>
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
