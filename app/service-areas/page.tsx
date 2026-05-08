import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Service Areas | Nurturly Houston Home Care',
  description: 'Learn about the areas where Nurturly provides premium home care services in the Greater Houston region.',
}

export default function ServiceAreas() {
  const areas = [
    'Downtown Houston',
    'The Heights',
    'River Oaks',
    'West University Place',
    'Bellaire',
    'Memorial',
    'Tanglewood',
    'Montrose',
    'Museum District',
    'Medical Center Area',
  ]

  return (
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white border-b border-soft-teal/10 pt-32 pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Local Presence
              </span>
              <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-deep-indigo mb-8">
                Where We <span className="italic font-light text-soft-teal">Provide Care</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-deep-indigo/80 leading-relaxed max-w-lg mb-10">
                Nurturly proudly provides elevated, relationship-centered home care services throughout the Greater Houston area.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-soft-teal shadow-lg text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-deep-indigo transition-all text-center"
                >
                  Check Availability
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
               <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-soft-teal/10 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/80 to-transparent z-10"></div>
                <img
                  alt="Houston skyline"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&q=80"
                />
                <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-white font-headline text-3xl font-bold">Houston, Texas</p>
                  <p className="text-background font-light text-xl mt-2">Our Foundation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
               <h2 className="font-headline text-3xl md:text-4xl font-bold text-deep-indigo">
                Our Focus Regions
              </h2>
              <div className="space-y-6 text-lg text-deep-indigo/80 font-light leading-relaxed">
                <p>
                  We focus our services strategically to ensure we can always maintain our strict standards for reliability and consistency. Our care teams live locally and understand the nuances of providing care within the loop and immediate surrounding areas.
                </p>
                <p>
                  Our license allows us to provide services across Texas, and we may expand into additional cities over time. If you don't see your specific neighborhood listed, please reach out to us. We frequently accommodate families slightly outside these core areas based on caregiver availability.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
               <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-soft-teal/10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-calm-blue text-3xl">location_on</span>
                  <h3 className="font-headline text-2xl font-bold text-deep-indigo">Primary Neighborhoods</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 hover:bg-background rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-sage text-sm">circle</span>
                      <p className="text-deep-indigo font-medium text-lg">{area}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-soft-teal/10">
                   <p className="text-deep-indigo/80 font-light mb-6">
                    If you are unsure whether we serve your area, please contact us and we will be happy to help.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-background text-deep-indigo border border-soft-teal/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-calm-blue hover:text-white hover:border-calm-blue transition-all inline-block"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
