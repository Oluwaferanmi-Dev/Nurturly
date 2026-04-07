import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Why Nurturly | Redefining Home Care',
  description: 'Discover what makes Nurturly different in the home care industry.',
}

export default function WhyNurturly() {
  const reasons = [
    {
      title: 'Dignity in Every Moment',
      description: 'We treat every person with respect, protect their independence, and honor their choices in how they live and are cared for.',
    },
    {
      title: 'Reliability builds Trust',
      description: 'Families depend on us, and we take that seriously. We show up, stay consistent, and follow through every time.',
    },
    {
      title: 'Relationship-Centered Care',
      description: 'Care should feel familiar. We prioritize consistency and real relationships so support is stable, personal, and dependable.',
    },
    {
      title: 'The Warmth of Hospitality',
      description: 'We bring the attentiveness, warmth, and thoughtful service of hospitality into the home, so every interaction feels personal and considered.',
    },
    {
      title: 'Innovation with Purpose',
      description: 'We use technology to support our caregivers, strengthen communication, and keep families informed, always enhancing care without replacing the human connection.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Why Nurturly
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
              There are many home care companies. What makes Nurturly different is how we approach care.
            </p>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-surface p-8 md:p-10 rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-shadow">
                  <h3 className="font-headline text-2xl md:text-3xl mb-4 text-on-surface">
                    {reason.title}
                  </h3>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
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
