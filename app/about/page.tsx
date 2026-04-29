import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'About Nurturly | Care that feels like home',
  description: 'Learn about Nurturly\'s mission to bring comfort, trust, and human connection back into home care. A sanctuary of service built on hospitality and dignity.',
}

export default function About() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://nurturlycare.com/about' },
    ],
  }

  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      
      <main>
        {/* SECTION 1: HERO */}
        <section className="relative px-6 md:px-12 pt-32 pb-32 overflow-hidden bg-white border-b border-nurturly-soft-teal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-nurturly-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Our Heart & Philosophy
              </span>
              <h1 className="font-headline font-bold text-5xl md:text-7xl leading-[1.1] mb-8 text-nurturly-deep-indigo">
                Care that <br/><span className="italic font-light">feels</span> like home.
              </h1>
              <p className="text-xl md:text-2xl text-nurturly-deep-indigo/80 font-light leading-relaxed mb-12 max-w-xl">
                Nurturly was created to bring comfort, trust, and human connection back into home care.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTALink
                  href="/contact"
                  label="About Hero — Schedule a Consultation"
                  className="bg-nurturly-soft-teal text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-nurturly-deep-indigo transition-all text-center"
                >
                  Schedule a Consultation
                </CTALink>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                alt="Caregiver and senior sharing a warm moment"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-6tEGyMpJPXs?auto=format&fit=crop&q=80&w=1200"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: VALUES/PILLARS */}
        <section className="bg-nurturly-bg py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-nurturly-deep-indigo mb-6">
                A Sanctuary of Service
              </h2>
              <p className="text-nurturly-deep-indigo/80 text-lg font-light">
                We believe exceptional care requires more than clinical skill—it demands hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-nurturly-soft-teal/10 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-nurturly-soft-teal text-4xl mb-6">restaurant</span>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">Nourishing Body & Soul</h3>
                <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed">
                  We view meal preparation as a moment of connection. Our caregivers craft meals that honor personal tastes and cultural heritage, turning nutrition into a shared joy.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm border border-nurturly-soft-teal/10 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-nurturly-calm-blue text-4xl mb-6">bedtime</span>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">The Art of Stillness</h3>
                <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed">
                  True care happens in the quiet moments. Whether it's reading a favorite book or enjoying the garden, we prioritize the unhurried presence that builds real friendship.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm border border-nurturly-soft-teal/10 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-nurturly-deep-indigo text-4xl mb-6">spa</span>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">Dignified Wellness</h3>
                <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed">
                  Our approach to personal care is rooted in the high-touch standards of a boutique spa—maintaining privacy, elegance, and the highest level of human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EDITORIAL/FOUNDING STORY */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2 sticky top-32">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-nurturly-deep-indigo mb-8">
                Our Founding Promise
              </h2>
              <div className="space-y-6 text-lg text-nurturly-deep-indigo/80 font-light leading-relaxed">
                <p>
                  We believe care should feel personal, consistent, and deeply human. Too often, home care feels rushed, impersonal, and transactional. We built Nurturly to be different.
                </p>
                <p>
                  Born from the principles of hospitality, our approach focuses on attentiveness, reliability, and thoughtful service. We pay attention to routines, preferences, personalities, and the small details that make people feel comfortable and at ease.
                </p>
                <div className="pt-8 border-t border-nurturly-soft-teal/20 mt-8">
                  <p className="font-bold text-nurturly-deep-indigo mb-4 uppercase tracking-widest text-sm">Our purpose is simple:</p>
                  <blockquote className="italic font-light text-2xl font-headline text-nurturly-calm-blue leading-relaxed border-l-4 border-nurturly-soft-teal pl-6">
                    "To help people live comfortably, safely, and with dignity at home — while giving families peace of mind."
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-12">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img
                  alt="Older adult enjoying leisure time outdoors"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-y02jEqpRZO0?auto=format&fit=crop&q=80&w=1200"
                />
              </div>

              <div className="bg-[#FCF9F4] p-12 rounded-2xl border border-nurturly-warm-yellow/30">
                <h4 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-6">
                  Why Hospitality Matters
                </h4>
                <p className="text-nurturly-deep-indigo/70 font-light mb-8 leading-relaxed">
                  In a hospital, you are a patient. In a hotel, you are a guest. At Nurturly, you are the host of your own life, and we are here to ensure your environment remains a sanctuary of peace and comfort.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-nurturly-deep-indigo font-bold">
                    <span className="material-symbols-outlined text-nurturly-sage">check_circle</span>
                    Personalized Concierge-Level Support
                  </li>
                  <li className="flex items-center gap-4 text-nurturly-deep-indigo font-bold">
                    <span className="material-symbols-outlined text-nurturly-sage">check_circle</span>
                    Thoughtful Household Management
                  </li>
                  <li className="flex items-center gap-4 text-nurturly-deep-indigo font-bold">
                    <span className="material-symbols-outlined text-nurturly-sage">check_circle</span>
                    Deep Emotional & Cognitive Engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
