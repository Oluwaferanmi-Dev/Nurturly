import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'How It Works | Nurturly',
  description: 'Learn our simple process for getting started with Nurturly home care services.',
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Start with a conversation',
      description: 'We begin with a call to understand your situation, needs, and timeline.',
    },
    {
      number: 2,
      title: 'Learn, assess & develop a care plan',
      description: 'We learn routines, preferences, personality, and support needs so care feels natural and comfortable.',
    },
    {
      number: 3,
      title: 'Match with the right caregiver',
      description: 'We carefully match caregivers based on personality, schedule, and needs.',
    },
    {
      number: 4,
      title: 'Begin Care',
      description: 'Care starts, and we stay closely involved to ensure everything feels right.',
    },
    {
      number: 5,
      title: 'Stay connected with ongoing support & communication',
      description: 'We stay in touch with families and adjust care as needs change.',
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
              How Care Begins
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
              Starting home care can feel overwhelming, so we keep the process simple and personal.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6 md:gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full signature-gradient flex items-center justify-center text-white">
                      <span className="font-headline text-2xl md:text-3xl font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow pt-2 md:pt-4">
                    <h3 className="font-headline text-xl md:text-2xl mb-3 text-on-surface">
                      Step {step.number} – {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 md:left-10 w-0.5 h-24 bg-outline-variant/20" style={{ marginTop: '100px' }} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10 mt-8">
              <p className="text-lg text-on-surface leading-relaxed font-medium">
                Our goal is simple: care should feel easy, consistent, and reassuring.
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
