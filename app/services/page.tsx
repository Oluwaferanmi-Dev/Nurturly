import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'Our Services | Nurturly Home Care Houston',
  description: 'Nurturly provides non-medical home care in Houston, TX — companionship, personal care, meal prep, mobility support, memory care, and more. Care that feels personal, consistent, and deeply human.',
  keywords: ['home care Houston', 'non-medical home care', 'in-home caregiver Houston Texas', 'senior care Houston', 'companionship care', 'personal care services'],
}

export default function Services() {
  const mainServices = [
    {
      icon: 'favorite',
      title: 'Companionship',
      description: 'Genuine conversation, shared activities, and a steady presence so your loved one never feels alone — because connection is care too.',
    },
    {
      icon: 'wash',
      title: 'Personal Care',
      description: 'Sensitive, dignified assistance with bathing, dressing, and grooming — delivered with the respect every person deserves.',
    },
    {
      icon: 'assist_walker',
      title: 'Mobility Support',
      description: 'Safe assistance with moving around the home, transfers, and gentle activity to maintain independence and reduce fall risk.',
    },
    {
      icon: 'restaurant',
      title: 'Meal Preparation',
      description: 'Fresh, nourishing meals planned around dietary needs, personal preferences, and cultural comfort — cooked with care, not convenience.',
    },
  ]

  const additionalServices = [
    {
      icon: 'alarm',
      title: 'Medication Reminders',
      description: 'Gentle, consistent reminders to take medications on schedule — keeping health routines intact without clinical pressure.',
    },
    {
      icon: 'cleaning_services',
      title: 'Light Housekeeping',
      description: 'A tidy, safe, and organized home environment so your loved one can move comfortably and live with ease.',
    },
    {
      icon: 'directions_car',
      title: 'Transportation',
      description: 'Reliable, safe rides to medical appointments, errands, and social outings — so life doesn\'t stop at the front door.',
    },
    {
      icon: 'weekend',
      title: 'Respite Care',
      description: 'Planned relief for family caregivers — so you can rest, recharge, and return to your role without burning out.',
    },
    {
      icon: 'psychology',
      title: 'Memory Care Support',
      description: 'Patient, technique-driven support for clients living with Alzheimer\'s or dementia — focused on safety, calm, and dignity.',
    },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'Our Services', item: 'https://nurturlycare.com/services' },
    ],
  }

  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero Section: Editorial */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pb-32 px-6 md:px-12 bg-white border-b border-nurturly-soft-teal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-nurturly-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Non-Medical Home Care · Houston, TX
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-nurturly-deep-indigo leading-[1.1] mb-8">
                Care That Feels
                <em className="block not-italic text-nurturly-soft-teal font-light">Personal</em>
              </h1>
              <p className="text-xl md:text-2xl text-nurturly-deep-indigo/80 font-light leading-relaxed mb-10 max-w-xl">
                We provide non-medical home care and personal assistance across Houston — built around the individual, not a one-size-fits-all package.
              </p>
              <CTALink
                href="/contact"
                label="Services Hero — Request a Personalized Care Plan"
                className="bg-nurturly-soft-teal text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-nurturly-deep-indigo transition-all text-center inline-block"
              >
                Request a Personalized Care Plan
              </CTALink>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform -rotate-2">
                <img
                  alt="A gentle caregiver holding the hand of an elderly woman"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="bg-nurturly-bg py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-nurturly-deep-indigo mb-6">What We Offer</h2>
              <p className="text-nurturly-deep-indigo/80 text-lg font-light leading-relaxed">
                Every care plan is built around the individual — their routines, preferences, and health needs — so your loved one receives consistent, attentive support right where they are most comfortable: home.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-nurturly-soft-teal/10 group hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-nurturly-bg flex items-center justify-center text-nurturly-calm-blue mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 text-nurturly-deep-indigo">
                    {service.title}
                  </h3>
                  <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed text-sm">
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
                  className="bg-white p-8 rounded-2xl shadow-sm border border-nurturly-soft-teal/10 group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-nurturly-bg flex items-center justify-center text-nurturly-sage mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">{service.icon}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-3 text-nurturly-deep-indigo">
                    {service.title}
                  </h3>
                  <p className="text-nurturly-deep-indigo/70 text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Transitional Care Callout */}
            <div className="mt-16 bg-white border border-nurturly-warm-yellow/40 p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm">
              <div className="z-10 max-w-xl">
                <span className="material-symbols-outlined text-nurturly-warm-yellow text-4xl mb-4 block">medical_services</span>
                <h3 className="font-headline text-3xl font-bold mb-4 text-nurturly-deep-indigo">Post-Hospital Transitional Care</h3>
                <p className="text-nurturly-deep-indigo/80 text-lg leading-relaxed font-light">
                  Coming home after a hospital stay is a vulnerable moment. Our team steps in during those critical first days — managing routines, monitoring comfort, and giving families peace of mind when it matters most.
                </p>
              </div>
              <div className="z-10">
                <Link
                  href="/contact"
                  className="bg-nurturly-soft-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-nurturly-deep-indigo transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
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
          <div className="max-w-4xl mx-auto text-center border border-nurturly-soft-teal/20 rounded-3xl p-16 shadow-lg bg-nurturly-bg">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-nurturly-sage/10 text-nurturly-sage rounded-full text-sm font-bold mb-8">
              <span className="material-symbols-outlined text-base">verified_user</span>
              LICENSED & COMPASSIONATE CARE
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-nurturly-deep-indigo mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-nurturly-deep-indigo/70 mb-12 font-light italic max-w-2xl mx-auto">
              "Our mission is to bring peace of mind back to families. We aren't just caregivers — we are an extension of your home."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-nurturly-deep-indigo text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:bg-nurturly-soft-teal transition-all w-full sm:w-auto text-center"
              >
                Request a Personalized Care Plan
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-nurturly-soft-teal/20 text-nurturly-deep-indigo px-10 py-5 rounded-xl font-bold text-lg hover:bg-nurturly-bg transition-all w-full sm:w-auto text-center shadow-sm"
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
