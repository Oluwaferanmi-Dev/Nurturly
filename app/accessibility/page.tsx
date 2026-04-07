import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Accessibility | Nurturly',
  description: 'Nurturly\'s commitment to accessibility and inclusive design.',
}

export default function Accessibility() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Accessibility
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="prose prose-sm max-w-none text-on-surface">
              <p className="text-lg leading-relaxed mb-8">
                We are committed to making our services and digital platforms accessible to all people, including those with disabilities.
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                For questions about accessibility or to discuss accommodations, please contact us at care@nurturlycare.com.
              </p>
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
