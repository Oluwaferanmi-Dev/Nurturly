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
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Hero Section: Editorial Layout */}
        <section className="relative flex items-start px-6 md:px-12 pt-28 pb-24 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-5 z-10">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-6 block">
                Premium In-Home Care
              </span>
              <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
                Expert Care, In the Comfort of Home.
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Experience the gold standard of care where medical expertise meets boutique hospitality. We curate a sanctuary
                for your loved ones in the space they love most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink
                  href="/contact"
                  label="Hero CTA — Start Your Journey"
                  className="signature-gradient text-on-primary px-10 py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition-transform text-center"
                >
                  Start Your Journey
                </CTALink>
                <Link
                  href="/about"
                  className="bg-surface-container-lowest text-primary border border-outline-variant/30 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-surface-container-low transition-colors flex items-center gap-2 justify-center"
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  View Our Story
                </Link>
              </div>
            </div>

            {/* Image Gallery: Asymmetric & Overlapping */}
            <div className="lg:col-span-7 relative h-[600px] md:h-[700px]">
              <div className="absolute top-0 right-0 w-4/5 h-[85%] rounded-xl overflow-hidden shadow-2xl z-0 transform translate-y-10">
                <img
                  className="w-full h-full object-cover"
                  alt="Caregiver in blue scrubs with elderly woman on couch"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46555651-34a3-4a3b-81f5-f539f4d4db3f.jpeg"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-xl overflow-hidden shadow-2xl z-20 border-8 border-surface transform -translate-y-10 translate-x-4">
                <img
                  className="w-full h-full object-cover"
                  alt="Two people holding hands with health monitoring smartwatch"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b1bac61e-8ad4-4812-910c-bcb6c1bfbac3.jpeg"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute top-20 left-10 w-24 h-24 bg-tertiary-container/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Why Nurturly: Bento Grid Style */}
        <section className="bg-surface-container-low py-24 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Redefining Home Care</h2>
              <p className="text-on-surface-variant text-lg">
                We bridge the gap between clinical excellence and the warmth of high-end service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 signature-gradient rounded-full flex items-center justify-center text-white mb-8">
                  <span className="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">Human-centered</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our approach starts with the person, not the condition. We match caregivers based on personality, shared
                  interests, and clinical needs.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow transform md:translate-y-6">
                <div className="w-14 h-14 signature-gradient rounded-full flex items-center justify-center text-white mb-8">
                  <span className="material-symbols-outlined text-3xl">hotel</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">Healthcare + Hospitality</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Combining medical rigor with the attention to detail found in elite hospitality—from gourmet meal prep to
                  aesthetic home organization.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 signature-gradient rounded-full flex items-center justify-center text-white mb-8">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="font-headline text-2xl mb-4">Vetted Caregivers</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Only the top 5% of applicants join our team. Each professional undergoes rigorous clinical testing and
                  emotional intelligence training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services: High-End Card Layout */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Our Services</h2>
              <p className="text-on-surface-variant text-lg mb-8">
                Comprehensive care tailored to preserve dignity, promote independence, and ensure comfort.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  24/7 Personalized Support
                </li>
                <li className="flex items-center gap-3 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Specialized Memory Care
                </li>
                <li className="flex items-center gap-3 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Post-Surgical Recovery
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <div className="group relative bg-surface-container h-[400px] rounded-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Tranquil garden setting with a caregiver assisting an elderly person"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL5sRtjfPQU8xC_ByNHcUv4oZQVtKbN98stl9_CqPEOnL45X0P_H8pZQKpIZrtM4sq-lUVGcAk2wuqg3x-Ie5fN4BfMAPcTauj3CndUqeIHLOqWxij3saqc_PDOWZlBPNw7F6-8AXcLzW5K2oZ2QvehCsyf8qp643AqsP3id21Ajd8SxV1-Q2h13-ee9Gb1C22QYSB36yXHgu2wTjhukBANB38qHhXnZLQFIFUc8lr6TNPpjmPqNhD3OEZkfxy3J7FsXW8z_FRnFJL"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <h4 className="text-white font-headline text-2xl mb-2">Personal Care</h4>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Dignified assistance with daily rituals, grooming, and specialized clinical needs.
                  </p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="group relative bg-surface-container h-[400px] rounded-xl overflow-hidden cursor-pointer mt-0 sm:mt-12">
                <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-colors"></div>
                <img
                  className="w-full h-full object-cover"
                  alt="Close up detail of a perfectly organized bedside table"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4uVY8TwQhY6YQywNY5xa4sustfcgnGdUk44KCXXWaSPkwD01Mqn57YM82ePyixQ6EczkoOsWGMZJteHOWycMlvDCtSuUbbjJ5Ni_3LVRI0tywXqbsY8w0w7Zn29UVtGQd2PKdXgUmXoS66BcScihJ92QE6DXutpZmoItfPwlZAIXaCrvXNP3eedoKk_Vb-Po09C6t7bXX6V50uFCpuHSiUK3Xst_cUOprTTWrIeleBcXsCK2g5dQ7-UPXjlb1GCw67xoytb5BmB53"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                  <h4 className="text-white font-headline text-2xl mb-2">Companionship</h4>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Meaningful engagement, cognitive stimulation, and accompaniment to social events.
                  </p>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="group relative bg-surface-container h-[400px] rounded-xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-secondary/30 z-10 group-hover:bg-secondary/10 transition-colors"></div>
                <img
                  className="w-full h-full object-cover"
                  alt="Caregiver helping an elderly man browse a tablet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx1efisW1PvAcPhRZxET4xZFdxd6IQWwE2oPvP6olKtqg0haZNydgvLTUDgFHsTywqdMw9u7Ujl4w3-r68DvVThFYOQ-GMfwr2AqIJon0quLweGPrzBCxfI9jTRpc1eupjE8YpPQU2oZO_kW27ouxhx95FPaUfmDar243oLjWAtUF9ViyUuhk_YGQj4md_FQ6CzSCuzzr5HNATyPa1RvTf1_pnPY2RyWr-fm8cWsJL5-8EUvIags8kHBIwpXy7K9Y-XN2Yy9NP7_d3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end z-20">
                  <h4 className="text-white font-headline text-2xl mb-2">Mobility Support</h4>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Safe movement assistance, gentle exercise coordination, and fall prevention.
                  </p>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="group relative bg-surface-container h-[400px] rounded-xl overflow-hidden cursor-pointer mt-0 sm:mt-12">
                <div className="absolute inset-0 bg-stone-900/40 z-10 group-hover:bg-stone-900/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-20">
                  <div>
                    <span className="material-symbols-outlined text-white text-5xl mb-4">more_horiz</span>
                    <h4 className="text-white font-headline text-2xl mb-2">And Much More</h4>
                    <p className="text-white/80 text-sm">Custom care plans built for your unique lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section: High-End Sanctuary Look */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto rounded-3xl bg-primary-container p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <h2 className="font-headline text-4xl md:text-6xl text-white mb-8 relative z-10">
              Ready to experience the Nurturly difference?
            </h2>
            <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Join the families who have found peace of mind and professional care that feels like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <CTALink
                href="/contact"
                label="Bottom CTA — Schedule Free Consultation"
                className="bg-surface-container-lowest text-primary px-12 py-5 rounded-xl text-lg font-bold hover:bg-surface transition-transform hover:scale-105 active:scale-95 text-center"
              >
                Schedule a Free Consultation
              </CTALink>
              <Link
                href="/contact"
                className="border border-white/30 text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors text-center"
              >
                Speak with a Care Manager
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
