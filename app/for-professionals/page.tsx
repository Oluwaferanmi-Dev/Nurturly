import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'For Professionals & Referral Partners | Nurturly Houston',
  description: 'Partner with Nurturly to provide trusted, hospitality-informed home care solutions for your clients in Houston, TX.',
}

export default function ForProfessionals() {
  const partners = [
    { icon: 'local_hospital', text: 'Hospitals and discharge planners' },
    { icon: 'support_agent', text: 'Case managers and social workers' },
    { icon: 'domain', text: 'Senior living communities' },
    { icon: 'stethoscope', text: 'Physicians and therapists' },
    { icon: 'volunteer_activism', text: 'Churches and community organizations' },
    { icon: 'article', text: 'Estate planners and attorneys' },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'For Professionals', item: 'https://nurturlycare.com/for-professionals' },
    ],
  }

  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white border-b border-nurturly-soft-teal/10 pt-32 pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <span className="text-nurturly-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Partnerships · Houston, TX
              </span>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-nurturly-deep-indigo mb-8">
                For Professionals &<br />
                <span className="italic font-light text-nurturly-soft-teal">Referral Partners</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-nurturly-deep-indigo/80 leading-relaxed max-w-lg mb-10">
                A seamless continuation of your care. We partner with professionals to provide a reliable, elevated home care experience for your clients.
              </p>
              <Link
                href="/contact"
                className="bg-nurturly-soft-teal shadow-lg text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-nurturly-deep-indigo transition-all inline-block"
              >
                Discuss a Referral
              </Link>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-nurturly-soft-teal/10">
                <img
                  alt="Two professionals having a thoughtful discussion"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-nurturly-soft-teal/10 mb-16">
              <div className="w-16 h-16 bg-nurturly-soft-teal/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-nurturly-soft-teal text-3xl">handshake</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-nurturly-deep-indigo mb-6">
                A Trusted Extension of Your Team
              </h2>
              <div className="space-y-6 text-lg text-nurturly-deep-indigo/80 font-light leading-relaxed">
                <p>
                  We work closely with hospitals, case managers, social workers, senior communities, and other professionals to support clients who wish to remain safely and comfortably at home.
                </p>
                <p>
                  We understand the importance of reliability, proactive communication, and professionalism when accepting referrals. Our team acts as an extension of yours — ensuring smooth transitions from hospital to home, and steadfast ongoing support.
                </p>
              </div>
            </div>

            <h3 className="font-headline text-2xl md:text-3xl font-bold text-nurturly-deep-indigo mb-8 text-center">
              We welcome partnerships with:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-nurturly-soft-teal/10 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-nurturly-bg flex items-center justify-center flex-shrink-0 text-nurturly-calm-blue">
                    <span className="material-symbols-outlined">{partner.icon}</span>
                  </div>
                  <p className="text-nurturly-deep-indigo font-medium text-lg leading-snug">{partner.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-nurturly-deep-indigo text-white p-12 md:p-16 rounded-[2rem] text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="font-headline text-3xl font-bold mb-6 relative z-10">
                Looking for a trusted home care partner?
              </h3>
              <p className="text-xl text-white/80 font-light mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
                Connect with our coordination team today to see how we can support your clients with premium, relationship-centered care.
              </p>
              <Link
                href="/contact"
                className="bg-nurturly-soft-teal text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 shadow-lg transition-all inline-block relative z-10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
