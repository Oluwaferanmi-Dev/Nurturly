import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Resources & Insights | Nurturly',
  description: 'Resources and insights about home care and wellness.',
}

export default function Resources() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Resources & Insights
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <p className="text-lg text-on-surface leading-relaxed mb-8">
              Coming soon. We&apos;re developing resources and insights about home care, wellness, and living with dignity.
            </p>
            <button className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Contact Us to Learn More
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
