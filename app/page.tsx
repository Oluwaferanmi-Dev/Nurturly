'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export default function Home() {
  const testimonials = [
    {
      quote: "The care provided has been transformative. Our mother feels secure and loved every single day.",
      name: "Margaret Chen",
      location: "Houston, TX"
    },
    {
      quote: "It's rare to find caregivers who genuinely treat your loved one like family. Nurturly does exactly that.",
      name: "James Rodriguez",
      location: "Sugar Land, TX"
    },
    {
      quote: "From the first conversation to the match with our father's caregiver, everything felt intentional and thoughtful.",
      name: "Susan Mitchell",
      location: "The Woodlands, TX"
    }
  ]

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
        {/* SECTION 1: HERO */}
        <section
          className="relative w-full h-screen min-h-[500px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >



          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 md:px-12">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight max-w-4xl mx-auto">
              Care That Feels Like Home.
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-light mb-10 tracking-wide">
              Redefining Care. Redefining Time.
            </p>
            <CTALink
              href="/how-it-works"
              label="Hero CTA — Learn More"
              className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
            >
              Learn More
            </CTALink>
          </div>
        </section>

        {/* SECTION 2: TRUST INTRO */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-bold text-4xl md:text-5xl text-deep-indigo mb-6">
                Confidence begins with absolute trust
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1: Rigorous Vetting */}
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-teal rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="font-bold text-2xl text-deep-indigo mb-4">Rigorous Vetting</h3>
                <p className="text-muted-text font-light leading-relaxed">
                  Only the top 5% of applicants join Nurturly
                </p>
              </div>

              {/* Card 2: Relationship-First Matching */}
              <div className="text-center">
                <div className="w-16 h-16 bg-calm-blue rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h3 className="font-bold text-2xl text-deep-indigo mb-4">Relationship-First Matching</h3>
                <p className="text-muted-text font-light leading-relaxed">
                  We match on personality, not just skills
                </p>
              </div>

              {/* Card 3: Ongoing Training */}
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <h3 className="font-bold text-2xl text-deep-indigo mb-4">Ongoing Training</h3>
                <p className="text-muted-text font-light leading-relaxed">
                  Continuous education in care and emotional intelligence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES OVERVIEW */}
        <section className="py-24 px-6 md:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-bold text-4xl md:text-5xl text-deep-indigo mb-6">
                Comprehensive care, built around your loved one
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Personal Care Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    alt="Caregiver assisting with daily activities"
                    src="https://plus.unsplash.com/premium_photo-1681996629585-88965b0d5c83?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-deep-indigo mb-3">Personal Care</h3>
                  <p className="text-muted-text font-light mb-6 line-clamp-2">
                    Dignified assistance with daily living activities
                  </p>
                  <Link
                    href="/services"
                    className="text-soft-teal font-bold hover:text-calm-blue transition-colors flex items-center gap-2"
                  >
                    Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Companionship Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    alt="Senior and caregiver enjoying time together"
                    src="https://plus.unsplash.com/premium_photo-1681883918271-22c54d47b44b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-deep-indigo mb-3">Companionship</h3>
                  <p className="text-muted-text font-light mb-6 line-clamp-2">
                    Meaningful connection and emotional support
                  </p>
                  <Link
                    href="/services"
                    className="text-soft-teal font-bold hover:text-calm-blue transition-colors flex items-center gap-2"
                  >
                    Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Memory Care Support Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    alt="Caregiver providing compassionate care"
                    src="https://plus.unsplash.com/premium_photo-1663036890782-4c00a3bb3832?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-2xl text-deep-indigo mb-3">Memory Care Support</h3>
                  <p className="text-muted-text font-light mb-6 line-clamp-2">
                    Specialized care for cognitive changes
                  </p>
                  <Link
                    href="/services"
                    className="text-soft-teal font-bold hover:text-calm-blue transition-colors flex items-center gap-2"
                  >
                    Learn More <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS SUMMARY */}
        <section className="py-24 px-6 md:px-12 bg-deep-indigo text-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-bold text-4xl md:text-5xl mb-6">
                Getting started is simpler than you think
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-teal rounded-full flex items-center justify-center text-deep-indigo font-bold text-2xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="font-bold text-2xl mb-4">We have a conversation</h3>
                <p className="text-white/80 font-light">
                  Learn about your needs and concerns in a no-pressure call.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-calm-blue rounded-full flex items-center justify-center text-deep-indigo font-bold text-2xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="font-bold text-2xl mb-4">We build your care plan</h3>
                <p className="text-white/80 font-light">
                  Thoughtfully craft a personalized care plan together.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center text-deep-indigo font-bold text-2xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="font-bold text-2xl mb-4">Care begins</h3>
                <p className="text-white/80 font-light">
                  Seamless onboarding and ongoing support starts immediately.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/how-it-works"
                className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
              >
                See the Full Process
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS */}
        <section className="py-24 px-6 md:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="font-bold text-4xl md:text-5xl text-deep-indigo">
                What families are saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-muted-text font-light leading-relaxed mb-6 italic">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-deep-indigo">{testimonial.name}</p>
                    <p className="text-muted-text text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FINAL CTA */}
        <section className="py-24 px-6 md:px-12 bg-soft-teal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to find the right care?
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light mb-10">
              Speak with a care manager today. No pressure, just an honest conversation.
            </p>
            <CTALink
              href="/contact"
              label="Final CTA — Schedule Free Consultation"
              className="inline-block bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg"
            >
              Schedule a Free Consultation
            </CTALink>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
