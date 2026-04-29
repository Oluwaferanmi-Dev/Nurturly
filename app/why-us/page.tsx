import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why Nurturly | Premium Home Care Philosophy',
  description: 'Discover what makes Nurturly different. Our approach to dignity, reliability, relationship-centered care, hospitality, and innovation in home care.',
}

export default function WhyUs() {
  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-nurturly-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Our Philosophy
              </span>
              <h1 className="font-headline text-5xl md:text-7xl text-nurturly-deep-indigo leading-tight tracking-tight mb-8 font-bold">
                Why <span className="italic font-light text-nurturly-soft-teal">Nurturly</span>
              </h1>
              <p className="font-light text-xl md:text-2xl text-nurturly-deep-indigo/80 leading-relaxed max-w-2xl text-balance">
                There are many home care companies. What makes Nurturly different is how we view the people we care for.
              </p>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-nurturly-soft-teal/10">
                <img
                  alt="A beautifully lit, calm home interior"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator 1: Dignity */}
        <section className="mb-32 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-nurturly-soft-teal/10">
                  <img
                    alt="Dignified senior walking outside"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1544027993-37db48d23632?auto=format&fit=crop&q=80"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:offset-1 order-1 lg:order-2 space-y-6">
                <span className="text-nurturly-sage font-bold tracking-widest uppercase text-xs mb-2 block">
                  01 — The Standard
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo font-bold">
                  Dignity in Every Moment
                </h2>
                <p className="text-lg leading-relaxed font-light text-nurturly-deep-indigo/80">
                  We believe care is more than assistance; it is a sacred preservation of self. Every interaction is designed to honor the history, preferences, and personal agency of those we serve, ensuring that aging is met with reverence rather than just routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators 2 & 3: Reliability & Relationship */}
        <section className="bg-white border-y border-nurturly-soft-teal/10 py-32 mb-32 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
              
              {/* Reliability */}
              <div className="flex flex-col space-y-6">
                <span className="text-nurturly-sage font-bold tracking-widest uppercase text-xs mb-2 block">
                  02 — The Promise
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo font-bold">
                  Reliability Builds Trust
                </h2>
                <p className="text-lg leading-relaxed font-light text-nurturly-deep-indigo/80 mb-6">
                  The foundation of a sanctuary is stability. Our systems are engineered for impeccable consistency, ensuring that our presence is a constant comfort you can count on, day after day, without exception.
                </p>
                <div className="rounded-3xl overflow-hidden h-80 shadow-lg border border-nurturly-soft-teal/10 mt-auto">
                  <img
                    alt="Comforting hand holding another"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80"
                  />
                </div>
              </div>

              {/* Relationship-Centered */}
              <div className="flex flex-col lg:pt-32 space-y-6">
                <span className="text-nurturly-sage font-bold tracking-widest uppercase text-xs mb-2 block">
                  03 — The Connection
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo font-bold">
                  Relationship-Centered
                </h2>
                <p className="text-lg leading-relaxed font-light text-nurturly-deep-indigo/80 mb-6">
                  We don't just match caregivers to schedules; we match hearts to homes. By prioritizing emotional compatibility and shared interests, we cultivate deep bonds that transform service into genuine companionship.
                </p>
                <div className="rounded-3xl overflow-hidden h-80 shadow-lg border border-nurturly-soft-teal/10 mt-auto">
                  <img
                    alt="Two people sharing a laugh"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Differentiator 4: Hospitality */}
        <section className="mb-32 md:mb-40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex items-center gap-16">
            <div className="lg:w-7/12 relative z-10 w-full">
              <div className="bg-white p-12 md:p-16 lg:p-20 shadow-xl rounded-3xl border border-nurturly-soft-teal/10">
                <span className="text-nurturly-sage font-bold tracking-widest uppercase text-xs mb-4 block">
                  04 — The Feeling
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo mb-8 font-bold">
                  The Warmth of Hospitality
                </h2>
                <p className="text-2xl leading-relaxed text-nurturly-calm-blue italic font-headline mb-8">
                  "Home care should feel like the finest boutique hotel—where needs are anticipated before they are spoken, and every detail is handled with effortless grace."
                </p>
                <p className="text-lg leading-relaxed font-light text-nurturly-deep-indigo/80">
                  We bring the elevated standards of high-end hospitality into the home environment, creating a curated experience that focuses on comfort, aesthetic peace, and the small touches that make life delightful.
                </p>
              </div>
            </div>
            <div className="lg:w-6/12 mt-12 lg:mt-0 lg:-ml-24 relative z-0 hidden md:block">
              <div className="rounded-3xl overflow-hidden aspect-video shadow-xl border border-nurturly-soft-teal/10">
                <img
                  alt="A beautiful cup of tea prepared thoughtfully"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator 5: Innovation */}
        <section className="mb-32 md:mb-40 py-32 bg-nurturly-bg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-nurturly-sage font-bold tracking-widest uppercase text-xs mb-2 block">
                  05 — The Future
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo font-bold">
                  Innovation with Purpose
                </h2>
                <p className="text-lg leading-relaxed font-light text-nurturly-deep-indigo/80 mb-6">
                  Technology should be felt, not seen. We utilize discreet, state-of-the-art innovations to enhance safety and communication without disrupting the tranquility of the home. Our tools serve the human connection, never replace it.
                </p>
                <div className="flex gap-6">
                  <span className="material-symbols-outlined text-nurturly-calm-blue text-4xl">devices</span>
                  <span className="material-symbols-outlined text-nurturly-soft-teal text-4xl">health_metrics</span>
                  <span className="material-symbols-outlined text-nurturly-sage text-4xl">shield_with_heart</span>
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-lg border border-nurturly-soft-teal/10">
                  <img
                    alt="Digital healthcare communication"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 mb-32">
          <div className="bg-white rounded-3xl p-12 md:p-20 text-center shadow-xl border border-nurturly-warm-yellow/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nurturly-bg rounded-bl-full pointer-events-none -mr-12 -mt-12 opacity-50"></div>
            <h2 className="font-headline text-4xl md:text-5xl text-nurturly-deep-indigo mb-10 font-bold relative z-10">
              Ready to experience Nurturly?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link
                href="/contact"
                className="bg-nurturly-soft-teal text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-nurturly-deep-indigo transition-all text-center shadow-md"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="border border-nurturly-soft-teal/20 bg-nurturly-bg text-nurturly-deep-indigo px-10 py-5 rounded-xl font-bold text-lg hover:bg-white transition-all text-center"
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
