import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
  description: '[YOUR_META_DESCRIPTION]',
  keywords: ['home care [YOUR_CITY], [YOUR_STATE]', 'non-medical home care', 'in-home caregiver [YOUR_CITY], [YOUR_STATE] Texas', 'senior care [YOUR_CITY], [YOUR_STATE]', 'companionship care', 'personal care services'],
}

export default function Services() {
  const mainServices = [
    {
      icon: 'favorite',
      title: 'Companionship',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'wash',
      title: 'Personal Care',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'assist_walker',
      title: 'Mobility Support',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'restaurant',
      title: 'Meal Preparation',
      description: '[YOUR_META_DESCRIPTION]',
    },
  ]

  const additionalServices = [
    {
      icon: 'alarm',
      title: 'Medication Reminders',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'cleaning_services',
      title: 'Light Housekeeping',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'directions_car',
      title: 'Transportation',
      description: '[YOUR_SERVICE_DESCRIPTION]',
    },
    {
      icon: 'weekend',
      title: 'Respite Care',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'psychology',
      title: 'Memory Care Support',
      description: '[YOUR_SERVICE_DESCRIPTION]',
    },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourcaredomain.com' },
      { '@type': 'ListItem', position: 2, name: 'Our Services', item: 'https://yourcaredomain.com/services' },
    ],
  }

  return (
    <div className="bg-background text-deep-indigo font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero Section: Editorial */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pb-32 px-6 md:px-12 bg-white border-b border-soft-teal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Non-Medical Home Care · [YOUR_CITY], [YOUR_STATE]
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-deep-indigo leading-[1.1] mb-8">
                Care That Feels
                <em className="block not-italic text-soft-teal font-light">Personal</em>
              </h1>
              <p className="text-xl md:text-2xl text-deep-indigo/80 font-light leading-relaxed mb-10 max-w-xl">
                We provide non-medical home care and personal assistance across [YOUR_CITY], [YOUR_STATE] — built around the individual, not a one-size-fits-all package.
              </p>
              <CTALink
                href="/contact"
                label="Services Hero — Request a Personalized Care Plan"
                className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
              >
                Request a Personalized Care Plan
              </CTALink>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform -rotate-2">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Caregiver and client in moment of care"
                  className="w-full h-full object-cover object-center"
                  src="https://plus.unsplash.com/premium_photo-1664475811964-75af7d90ee4b?q=80&w=870&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="bg-background py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-deep-indigo mb-6">What We Offer</h2>
              <p className="text-deep-indigo/80 text-lg font-light leading-relaxed">
                Every care plan is built around the individual — their routines, preferences, and health needs — so your loved one receives consistent, attentive support right where they are most comfortable: home.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-soft-teal/10 group hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-calm-blue mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 text-deep-indigo">
                    {service.title}
                  </h3>
                  <p className="text-deep-indigo/70 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-soft-teal/10 group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-sage mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">{service.icon}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-3 text-deep-indigo">
                    {service.title}
                  </h3>
                  <p className="text-deep-indigo/70 text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Transitional Care Callout */}
            <div className="mt-16 bg-white border border-warm-yellow/40 p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm">
              <div className="z-10 max-w-xl">
                <span className="material-symbols-outlined text-warm-yellow text-4xl mb-4 block">medical_services</span>
                <h3 className="font-headline text-3xl font-bold mb-4 text-deep-indigo">Post-Hospital Transitional Care</h3>
                <p className="text-deep-indigo/80 text-lg leading-relaxed font-light">
                  Coming home after a hospital stay is a vulnerable moment. Our team steps in during those critical first days — managing routines, monitoring comfort, and giving families peace of mind when it matters most.
                </p>
              </div>
              <div className="z-10">
                <Link
                  href="/contact"
                  className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
                >
                  Request Care Now
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center border border-soft-teal/20 rounded-3xl p-16 shadow-lg bg-background">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-sage/10 text-sage rounded-full text-sm font-bold mb-8">
              <span className="material-symbols-outlined text-base">verified_user</span>
              LICENSED & COMPASSIONATE CARE
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-deep-indigo mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-deep-indigo/70 mb-12 font-light italic max-w-2xl mx-auto">
              "Our mission is to bring peace of mind back to families. We aren't just caregivers — we are an extension of your home."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg w-full sm:w-auto text-center"
              >
                Request a Personalized Care Plan
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-soft-teal/20 text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-all w-full sm:w-auto text-center shadow-lg"
              >
                Speak With Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
