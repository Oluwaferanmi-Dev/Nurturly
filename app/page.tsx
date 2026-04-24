'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'HomeHealthCare'],
        '@id': 'https://nurturlycare.com/#business',
        name: 'Nurturly Home Care',
        alternateName: 'Nurturly',
        description:
          'Nurturly provides compassionate, non-medical home care in Houston, Texas. We offer companionship, personal care, meal preparation, mobility support, respite care, memory care, and post-hospital transitional care.',
        url: 'https://nurturlycare.com',
        telephone: '+1-832-000-0000',
        email: 'hello@nurturlycare.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Houston',
          addressLocality: 'Houston',
          addressRegion: 'TX',
          postalCode: '77002',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.7604,
          longitude: -95.3698,
        },
        areaServed: [
          { '@type': 'City', name: 'Houston', sameAs: 'https://en.wikipedia.org/wiki/Houston' },
          { '@type': 'City', name: 'Sugar Land' },
          { '@type': 'City', name: 'Pearland' },
          { '@type': 'City', name: 'Katy' },
          { '@type': 'City', name: 'The Woodlands' },
          { '@type': 'City', name: 'Spring' },
          { '@type': 'City', name: 'Missouri City' },
          { '@type': 'State', name: 'Texas', sameAs: 'https://en.wikipedia.org/wiki/Texas' },
        ],
        serviceType: [
          'Companion Care',
          'Personal Care',
          'Meal Preparation',
          'Mobility Support',
          'Medication Reminders',
          'Light Housekeeping',
          'Transportation',
          'Respite Care',
          'Memory Care Support',
          'Post-Hospital Transitional Care',
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Check',
        sameAs: [
          'https://www.facebook.com/nurturlycare',
          'https://www.instagram.com/nurturlycare',
          'https://www.linkedin.com/company/nurturly',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://nurturlycare.com/#website',
        url: 'https://nurturlycare.com',
        name: 'Nurturly Home Care',
        description: 'Compassionate non-medical home care in Houston, TX',
        publisher: { '@id': 'https://nurturlycare.com/#business' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://nurturlycare.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://nurturlycare.com/services' },
          { '@type': 'ListItem', position: 3, name: 'How It Works', item: 'https://nurturlycare.com/how-it-works' },
          { '@type': 'ListItem', position: 4, name: 'About', item: 'https://nurturlycare.com/about' },
          { '@type': 'ListItem', position: 5, name: 'Careers', item: 'https://nurturlycare.com/careers' },
          { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://nurturlycare.com/contact' },
        ],
      },
    ],
  }

  return (
    <div className="bg-background text-foreground font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* SECTION 1: HERO - What we do, where, for who */}
        <section className="relative px-6 md:px-12 pt-32 pb-32 overflow-hidden bg-[#FCF9F4]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-nurturly-calm-blue font-bold tracking-widest uppercase text-sm mb-6 block">
                Premium In-Home Care — Houston, TX
              </span>
              <h1 className="font-headline font-bold text-5xl md:text-6xl text-nurturly-deep-indigo leading-[1.15] mb-8">
                Your loved ones deserve care that feels like home.
              </h1>
              <p className="text-lg md:text-xl text-nurturly-deep-indigo/80 max-w-lg mb-10 leading-relaxed font-light">
                We provide compassionate, non-medical home care in Houston, Texas. Ensuring dignity, warmth, and consistency for older adults and individuals needing daily support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink
                  href="/contact"
                  label="Hero CTA — Schedule Free Consultation"
                  className="bg-nurturly-soft-teal text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-nurturly-deep-indigo transition-colors text-center shadow-lg"
                >
                  Schedule a Consultation
                </CTALink>
                <Link
                  href="/services"
                  className="bg-white text-nurturly-deep-indigo border border-nurturly-soft-teal/20 px-10 py-4 rounded-xl text-lg font-bold hover:bg-nurturly-bg transition-colors flex items-center gap-2 justify-center shadow-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
              <img
                className="w-full h-full object-cover"
                alt="Caregiver sharing a warm laugh with a senior woman at home"
                src="https://images.unsplash.com/photo-1544027993-37db48d23632?auto=format&fit=crop&q=80"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUST & REASSURANCE - Why families should feel confident */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-nurturly-deep-indigo mb-6">
                Confidence begins with absolute trust
              </h2>
              <p className="text-nurturly-deep-indigo/80 text-lg font-light leading-relaxed">
                Inviting a caregiver into your home is a monumental decision. We go to extraordinary lengths to ensure the safety, character, and competence of every professional on our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="p-8 rounded-2xl bg-nurturly-bg border border-nurturly-soft-teal/10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-nurturly-soft-teal mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">Rigorous Vetting</h3>
                <p className="text-nurturly-deep-indigo/70 leading-relaxed font-light">
                  Only the top 5% of applicants join Nurturly. We require extensive background checks, clinical testing, and emotional intelligence assessments.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-nurturly-bg border border-nurturly-soft-teal/10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-nurturly-calm-blue mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">Relationship-First Matching</h3>
                <p className="text-nurturly-deep-indigo/70 leading-relaxed font-light">
                  We don’t just fill shifts. We purposefully match caregivers with clients based on personalities, shared interests, and specific clinical needs.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-nurturly-bg border border-nurturly-soft-teal/10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-nurturly-deep-indigo mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">shield_person</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-4">Ongoing Training</h3>
                <p className="text-nurturly-deep-indigo/70 leading-relaxed font-light">
                  Our caregivers continuously refine their skills—from Alzheimer's care protocols to elite hospitality training—so they remain the best in the field.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DIFFERENTIATION - What makes Nurturly distinct */}
        <section className="py-32 px-6 md:px-12 bg-[#FCF9F4]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                className="w-full h-full object-cover"
                alt="Caregiver carefully preparing a nutritious meal"
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-nurturly-deep-indigo mb-8 leading-tight">
                Healthcare rigor meets hospitality grace.
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-nurturly-deep-indigo/80 font-light leading-relaxed">
                  Too often, home care feels clinical and rushed. We’ve redefined the experience by infusing evidence-based health support with the warmth and attentiveness of premium hospitality.
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-nurturly-soft-teal mt-1">check_circle</span>
                    <span className="text-lg text-nurturly-deep-indigo/90">Gourmet meal prep tailored to health and taste</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-nurturly-soft-teal mt-1">check_circle</span>
                    <span className="text-lg text-nurturly-deep-indigo/90">Thoughtful household organization and tidiness</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-nurturly-soft-teal mt-1">check_circle</span>
                    <span className="text-lg text-nurturly-deep-indigo/90">Concierge-level coordination with doctors</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-nurturly-soft-teal font-bold text-lg hover:text-nurturly-deep-indigo transition-colors"
                  >
                    Read Our Story <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: EMOTIONAL CONNECTION - How the care feels */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-nurturly-deep-indigo mb-6">
                Preserving independence and dignity
              </h2>
              <p className="text-nurturly-deep-indigo/80 text-lg font-light leading-relaxed">
                We believe true care is found in the unhurried moments: listening to music together, tending to a garden, or simply enjoying a cup of tea in comfortable silence. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <div className="group rounded-2xl overflow-hidden bg-nurturly-bg p-8 hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Caregiver reading a book alongside a senior"
                    src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80"
                  />
                </div>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-3">Companionship</h3>
                <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed">
                  Beyond physical assistance, we provide genuine friendship. Our caregivers engage in meaningful conversation, cognitive activities, and accompany seniors to social outings, preventing isolation and nurturing the soul.
                </p>
              </div>

              <div className="group rounded-2xl overflow-hidden bg-nurturly-bg p-8 hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-8">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Caregiver assisting elderly woman with walking"
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                  />
                </div>
                <h3 className="font-headline font-bold text-2xl text-nurturly-deep-indigo mb-3">Personal Care & Mobility</h3>
                <p className="text-nurturly-deep-indigo/70 font-light leading-relaxed">
                  With the utmost respect for privacy, we assist with daily rituals including bathing, grooming, and mobility. We empower clients to move safely and maintain their daily rhythms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="py-24 px-6 md:px-12 bg-nurturly-bg">
          <div className="max-w-5xl mx-auto rounded-3xl bg-nurturly-soft-teal p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 relative z-10">
              Ready to find the right care?
            </h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto relative z-10 font-light">
              Speak with a care manager securely. We'll answer all your questions and help you determine your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <CTALink
                href="/contact"
                label="Bottom CTA — Schedule Free Consultation"
                className="bg-white text-nurturly-deep-indigo px-10 py-5 rounded-xl text-lg font-bold hover:bg-nurturly-bg transition-colors text-center shadow-lg"
              >
                Schedule Consultation
              </CTALink>
              <Link
                href="/services"
                className="bg-transparent border border-white/50 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors text-center"
              >
                Review Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
