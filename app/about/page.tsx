import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Nurturly | Care that feels like home',
  description: 'Learn about Nurturly\'s mission to bring comfort, trust, and human connection back into home care.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Care that feels like home.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
              Nurturly was created to bring comfort, trust, and human connection back into home care.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                We believe care should feel personal, consistent, and deeply human. Too often, home care feels rushed, impersonal, and transactional. We built Nurturly to be different.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                Born from the principles of hospitality, our approach focuses on attentiveness, reliability, and thoughtful service. We pay attention to routines, preferences, personalities, and the small details that make people feel comfortable and at ease.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                Our caregivers are selected not only for their skills, but for their empathy, emotional intelligence, and reliability. We believe great care comes from relationships built over time, not just tasks completed.
              </p>
            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <h2 className="font-headline text-2xl md:text-3xl mb-6">Our purpose is simple:</h2>
              <p className="text-lg text-on-surface leading-relaxed">
                To help people live comfortably, safely, and with dignity at home, while giving families peace of mind.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <button className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Schedule a Consultation
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-primary/5 transition-all">
                Speak With Our Team
              </button>
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
