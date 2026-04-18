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
    <>
      <Header />
      <main className="bg-background text-foreground font-body">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-headline text-6xl md:text-8xl text-primary leading-[1.1] tracking-tight mb-8 font-bold">
                Why Nurturly
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                There are many home care companies. What makes Nurturly different is how we approach care.
              </p>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  alt="Warm interior sanctuary with soft natural light"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_MBU6Nj-XvM64xRZUNFjIqFQkLWrJ2Qhpuao_bM-1Jy7R1p1nYP-A_rKt7jYVV-6CzE9EC_DA18neUO3q6QUvWiz9MEnGLJeCuBE1kga3bDdBDqXpPNfoFDDcZB3aDV2MT_M9RZn7pdSqFdyi_PkkVvZIO35MNxUS7QqUIRyYWZHEh7Scu9t6zWofuf6CqCX2xSg0rufZBoAn5Xxp7dpbMB8L-EnIoQOqmPB8uC-oQNbhQdePtrZ_rwikUf3ppap-Fmy0y6_STu3y"
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
                <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    alt="Dignified elderly man looking out window with soft light"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAK9R_x_mtNKNSWUdoGpNd6lAu6mCN5F7ObNLNQcrqAUbtePhCPp80gk-t7v3wou3EbR5igBCEdL4QnQaZ1ujuitZ0JxfpA597E_jV9OI04HXhxse_Z9iWk9rEiHSaqnmkqFfMNb89b_Exk7amTQkNzhBhDR616BCfU4OG7y3y_3Ds7TOxKvMTLIl0b4vcS3z9KHIQVaVluFdV-9djiQNVvrM5wK_RTgXUHfZuhjwc0Pw7YCA-NiM1IZoS1TPPP4nq4jfGMjqAHGgy"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 lg:offset-1 order-1 lg:order-2">
                <span className="text-secondary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">
                  01 — The Standard
                </span>
                <h2 className="font-headline text-5xl text-primary mb-6 font-bold">
                  Dignity in Every Moment
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe care is more than assistance; it is a sacred preservation of self. Every interaction is designed to honor the history, preferences, and personal agency of those we serve, ensuring that aging is met with reverence rather than just routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators 2 & 3: Reliability & Relationship */}
        <section className="bg-secondary/5 py-24 md:py-32 mb-32 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Reliability */}
              <div className="flex flex-col">
                <span className="text-secondary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">
                  02 — The Promise
                </span>
                <h2 className="font-headline text-5xl text-primary mb-6 font-bold">
                  Reliability Builds Trust
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                  The foundation of a sanctuary is stability. Our systems are engineered for impeccable consistency, ensuring that our presence is a constant comfort you can count on, day after day, without exception.
                </p>
                <div className="rounded-xl overflow-hidden h-80 shadow-lg">
                  <img
                    alt="Two people's hands clasped together showing gentle support"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlApuT7vjhc06HZ2kSZnv5zu36ekbaBWUICVp2AnQ8lFl8oZ8ns_R_WMoh2ok_ilE0qX6lriYPcmQGurIN2HXkMuvqMk09X5ziOPpkFsb0sG4u4yqcs-qJrqf9aUiuvryLk82IatmswM1XchUA14cm00RxIt4_bQB0NaF1xoTLvxQBT33apcfOln-_8XeKYcD0wRNoL7z2ugxsx1RB6BPdlDeJIH2iyv4dDC50CAZaYSa9owaXYkMMd2Ncauvckwztn7KDl8i_9a8_"
                  />
                </div>
              </div>

              {/* Relationship-Centered */}
              <div className="flex flex-col lg:pt-32">
                <span className="text-secondary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">
                  03 — The Connection
                </span>
                <h2 className="font-headline text-5xl text-primary mb-6 font-bold">
                  Relationship-Centered Care
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                  We don&apos;t just match caregivers to schedules; we match hearts to homes. By prioritizing emotional compatibility and shared interests, we cultivate deep bonds that transform service into genuine companionship.
                </p>
                <div className="rounded-xl overflow-hidden h-80 shadow-lg">
                  <img
                    alt="Two people sitting together on sofa sharing a book and laughing"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTTb-eXfOtVnwUnkb3vDi8gkuEadPoc5AZ96Xjnctx_e3RsbOY31Maog7JAsm1wbQ-B8R-7x7EL-wfL2rGnLx9xcnZ7AppfLhJMOojxq2WnfG-fgadn3bDWkmtY-s6tG5bCqfU81T52Sy8yLBJB_VH8UPKNjLFjn2Q-fvXGAtJFqiovFT2jaAbI4YLll-_Ta-gVBEpzA5xCTvII_WlDapeB3eG0M0xNOFERspwFS8ngSZEKxv94Ts97vDsHp8dY0SPirR5mN0Ni_je"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator 4: Hospitality */}
        <section className="mb-32 md:mb-40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:flex items-center gap-12">
            <div className="lg:w-7/12 relative z-10">
              <div className="bg-card p-12 md:p-16 lg:p-20 shadow-xl rounded-2xl border border-border/20">
                <span className="text-secondary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">
                  04 — The Feeling
                </span>
                <h2 className="font-headline text-5xl text-primary mb-8 font-bold">
                  The Warmth of Hospitality
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground italic font-headline mb-8">
                  &quot;Home care should feel like the finest boutique hotel—where needs are anticipated before they are spoken, and every detail is handled with effortless grace.&quot;
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We bring the elevated standards of high-end hospitality into the home environment, creating a curated experience that focuses on comfort, aesthetic peace, and the small touches that make life delightful.
                </p>
              </div>
            </div>
            <div className="lg:w-6/12 -ml-0 lg:-ml-24 mt-8 lg:mt-0">
              <div className="rounded-xl overflow-hidden aspect-video shadow-xl">
                <img
                  alt="Beautifully set tea tray with flowers and morning sunlight"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDisQ_R36uE5t13xlq8lFZk31dc6gse9TxggqaIoIhWEIM7Q5Mv_I0J_1xbOb4Q55mBkelWseASf9E_IAn04sQuKxtCtTMSm3bTBY1f2SM7CUeO4QrTH-QTTuduLtcV2td2Vbf4WAQdmVULN60a6ifQ4f_XVeVuhYbQOzpP5PGcLPHaGWCEsvKW7MsnshnEHu9iGSHr09XbpkC_H5_TEXtQ_ezwJaA5IbGuAj5Zh0pWVYUSOpeS7xSW-MFZg0Nzgza0las3WaXxCtsv"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator 5: Innovation */}
        <section className="mb-32 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <span className="text-secondary/60 font-semibold tracking-widest uppercase text-xs mb-4 block">
                  05 — The Future
                </span>
                <h2 className="font-headline text-5xl text-primary mb-6 font-bold">
                  Innovation with Purpose
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-10">
                  Technology should be felt, not seen. We utilize discreet, state-of-the-art innovations to enhance safety and communication without disrupting the tranquility of the home. Our tools serve the human connection, never replace it.
                </p>
                <div className="flex gap-6">
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    devices
                  </span>
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    health_metrics
                  </span>
                  <span
                    className="material-symbols-outlined text-primary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield_with_heart
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="rounded-xl overflow-hidden aspect-square shadow-lg">
                  <img
                    alt="Modern digital tablet showing healthcare dashboard on marble surface"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJyH3gu3qwAwqecQ7o5e9ZWbuNWU0ENkr-C3VtdOfUGPXRg-QOYAwsRdwfsEm1mlvbDKTOfvVDjLHkTUFevrmuaT6nb8Tb1yNBV0QumGcb1nGeR_XPQgd6dz6e0EPFWDEVqBpasGO3kUjyZTRRqVagWB65Grh4FJZilrDg3xr2UcCTy5gKHWPTYOyy6yEE5B-AYyRlu1DWn8OONqHk8WcAxWSrWsfPlCFDRvfTiyoqG8k-B9pYJHnDikOt_Fs9p_qpJjBH_JUX2CSb"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-32">
          <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 text-center shadow-xl">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 font-bold">
              Ready to experience a different kind of care?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-foreground text-primary px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
