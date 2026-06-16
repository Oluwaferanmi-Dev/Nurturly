import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
  description: '[YOUR_META_DESCRIPTION]',
  keywords: ['how home care works', 'starting home care [YOUR_CITY], [YOUR_STATE]', 'home care process', 'caregiver matching [YOUR_CITY], [YOUR_STATE]'],
}

export default function HowItWorks() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourcaredomain.com' },
      { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://yourcaredomain.com/how-it-works' },
    ],
  }

  return (
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-32 px-6 md:px-12 bg-white border-b border-soft-teal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Our Process · [YOUR_CITY], [YOUR_STATE]
              </span>
              <h1 className="font-headline font-bold text-5xl md:text-7xl text-deep-indigo leading-tight mb-8">
                How It Works
              </h1>
              <p className="text-xl md:text-2xl text-deep-indigo/80 font-light leading-relaxed mb-10 max-w-lg">
                Starting care shouldn't be stressful. Here's exactly what happens from your first call to your first care day — step by step, clearly explained.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Caregiver and senior sharing a warm conversation"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1758691462477-976f771224d8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-lg max-w-xs border border-soft-teal/10">
                <p className="font-headline italic text-xl text-deep-indigo">"We built CareBase to feel personal, consistent, and deeply human."</p>
              </div>
            </div>
          </div>
        </section>

        {/* The 5-Step Journey */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 py-32">
          
          {/* Step 1: Conversation */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-soft-teal text-white font-headline font-bold text-2xl shadow-md">01</span>
                  <h2 className="font-headline font-bold text-4xl text-deep-indigo">Start with a conversation</h2>
                </div>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  Reach out through our contact form or give us a call. We'll have a relaxed, no-pressure conversation to understand your situation, answer your questions, and explain exactly how CareBase works.
                </p>
                <ul className="space-y-4 py-4 mt-4 border-t border-soft-teal/10">
                  <li className="flex items-center gap-4 text-deep-indigo font-medium">
                    <span className="material-symbols-outlined text-sage">check_circle</span>
                    No commitment required
                  </li>
                  <li className="flex items-center gap-4 text-deep-indigo font-medium">
                    <span className="material-symbols-outlined text-sage">check_circle</span>
                    Get all your questions answered
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-soft-teal/10">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Caregiver having a conversation with client"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Assessment */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-soft-teal/10 bg-background">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Care assessment and planning process"
                  className="w-full h-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1723161629235-0d2d01c3cfc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-calm-blue text-white font-headline font-bold text-2xl shadow-md">02</span>
                  <h2 className="font-headline font-bold text-4xl text-deep-indigo">We assess your needs</h2>
                </div>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  We take time to properly understand the care needed — daily routines, health considerations, home environment, and personal preferences. Nothing is assumed. Everything is documented and built into your care plan.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-2xl bg-white border border-soft-teal/10 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                    <span className="material-symbols-outlined text-soft-teal text-3xl">assignment_turned_in</span>
                    <p className="text-sm font-bold text-deep-indigo relative z-10">Home Safety Audit</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-soft-teal/10 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                    <span className="material-symbols-outlined text-soft-teal text-3xl">clinical_notes</span>
                    <p className="text-sm font-bold text-deep-indigo relative z-10">Custom Care Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Matching */}
          <div className="bg-white rounded-[2rem] p-10 md:p-20 relative overflow-hidden shadow-lg border border-soft-teal/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-background rounded-bl-full pointer-events-none -mr-12 -mt-12"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-6">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-deep-indigo text-white font-headline font-bold text-2xl shadow-md">03</span>
                  <h2 className="font-headline font-bold text-4xl text-deep-indigo">We match your caregiver</h2>
                </div>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  The right caregiver isn't just qualified — they're the right fit. We hand-select based on experience, personality, and the specific needs documented in your care plan. You meet them before care begins.
                </p>
                <Link href="/about" className="text-soft-teal font-bold flex items-center gap-2 group hover:gap-3 transition-all mt-6 inline-flex">
                  Our matching philosophy
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg transform -rotate-3 z-10 hover:rotate-0 transition-transform duration-500">
                  {/* TODO: Replace with your own images */}
                <img
                    alt="Portrait of a compassionate caregiver"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg transform rotate-3 mt-12 z-0 hover:rotate-0 transition-transform duration-500">
                  {/* TODO: Replace with your own images */}
                <img
                    alt="Another compassionate caregiver"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1765896387387-0538bc9f997e?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Begin Care */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-soft-teal text-white font-headline font-bold text-2xl shadow-md">04</span>
                  <h2 className="font-headline font-bold text-4xl text-deep-indigo">Care begins</h2>
                </div>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  On day one, your Care Manager introduces your caregiver and walks through the care plan with everyone present. We make sure the transition is smooth, comfortable, and clear for your whole family.
                </p>
                <div className="p-8 bg-white rounded-2xl border border-soft-teal/10 shadow-sm mt-8 relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-2 h-full bg-sage"></div>
                  <h4 className="text-deep-indigo font-bold text-lg mb-2">Supervised First Visit</h4>
                  <p className="text-deep-indigo/70 font-light text-sm leading-relaxed">
                    A CareBase Care Manager is present on the first visit — not just to observe, but to ensure everything starts right and everyone feels comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-soft-teal/10">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Caregiver assisting with daily living activities"
                  className="w-full h-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1663091795078-99ab67a5d1e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>

          {/* Step 5: Stay Connected */}
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-soft-teal/10">
                {/* TODO: Replace with your own images */}
                <img
                  alt="Ongoing care support and check-ins"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-calm-blue text-white font-headline font-bold text-2xl shadow-md">05</span>
                  <h2 className="font-headline font-bold text-4xl text-deep-indigo">We stay connected</h2>
                </div>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  Care doesn't end at the door. We check in regularly, update care plans as needs change, and keep families informed every step of the way. You always know how your loved one is doing.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <span className="px-5 py-2.5 rounded-full bg-warm-yellow/20 text-deep-indigo text-xs font-bold uppercase tracking-widest border border-warm-yellow/40">Regular Check-ins</span>
                  <span className="px-5 py-2.5 rounded-full bg-warm-yellow/20 text-deep-indigo text-xs font-bold uppercase tracking-widest border border-warm-yellow/40">24/7 Support Line</span>
                  <span className="px-5 py-2.5 rounded-full bg-warm-yellow/20 text-deep-indigo text-xs font-bold uppercase tracking-widest border border-warm-yellow/40">Plan Reviews</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 mt-20 mb-32">
          <div className="text-center bg-white p-16 rounded-[2rem] shadow-xl border border-soft-teal/10 relative overflow-hidden">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-deep-indigo mb-6 relative z-10">Ready to take the first step?</h2>
            <p className="text-lg md:text-xl text-deep-indigo/70 font-light mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
              The hardest part is often just starting. Our team is here to listen — no pressure, no sales pitch, just an honest conversation about what your family needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <CTALink
                href="/contact"
                label="How It Works Bottom CTA — Start the Conversation"
                className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg text-center"
              >
                Start the Conversation
              </CTALink>
              <Link
                href="/services"
                className="bg-transparent text-deep-indigo border border-soft-teal/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-background transition-all text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
