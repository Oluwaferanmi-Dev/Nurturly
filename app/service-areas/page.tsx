import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Service Areas | Nurturly',
  description: 'Learn about the areas where Nurturly provides home care services.',
}

export default function ServiceAreas() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Where We Provide Care
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                Nurturly provides home care services throughout the Greater Houston area.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                Our license allows us to provide services across Texas, and we may expand into additional cities over time.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                If you are unsure whether we serve your area, please contact us and we will be happy to help.
              </p>
            </div>

            <div className="bg-surface p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <h2 className="font-headline text-2xl md:text-3xl mb-6">Ready to learn more?</h2>
              <Link
                href="/contact"
                className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
