import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Services | Nurturly',
  description: 'Explore our comprehensive non-medical home care and personal assistance services designed to support daily life with comfort and dignity.',
}

export default function Services() {
  const services = [
    'Companionship and social support',
    'Personal care assistance (bathing, dressing, grooming)',
    'Mobility and transfer assistance',
    'Meal preparation and nutrition support',
    'Medication reminders',
    'Light housekeeping and laundry',
    'Transportation to appointments and errands',
    'Post-hospital and recovery support',
    'Respite care for family caregivers',
    'Routine support and daily structure',
  ]

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
              We provide non-medical home care and personal assistance services designed to support daily life at home with comfort, dignity, and consistency.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                Our services include support with activities of daily living and everyday routines, helping people remain independent while receiving the assistance they need.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-headline text-2xl md:text-3xl">Services may include:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-outline-variant/10">
                    <span className="text-primary font-headline text-xl flex-shrink-0">•</span>
                    <p className="text-on-surface leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <p className="text-lg text-on-surface leading-relaxed font-medium">
                Every care plan is personalized to fit individual routines, preferences, and needs.
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
