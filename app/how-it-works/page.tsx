import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How It Works | Nurturly Home Care Houston',
  description: 'Starting home care with Nurturly is simple. Learn our 5-step process — from your first call to ongoing support — and see why Houston families trust us.',
  keywords: ['how home care works', 'starting home care Houston', 'home care process', 'caregiver matching Houston'],
}

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground font-body">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-secondary/60 font-semibold tracking-widest text-xs uppercase mb-6 block">
                Our Process · Houston, TX
              </span>
              <h1 className="font-headline text-6xl md:text-7xl font-bold text-primary leading-tight mb-8">
                How It Works
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
                Starting care shouldn&apos;t be stressful. Here&apos;s exactly what happens from your first call to your first care day — step by step, clearly explained.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Soft morning light filtering through a window as a young caregiver and senior woman share a warm, meaningful conversation in a cozy living room"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6wvMz7C11GFpjkkfCTNYdZDPUKqrSTl4BIpVEDUQIgnnteJg9-vrNwDIcezaEKP3Qfsr_7f_8BVE7YducWUCbfYQUgTglSTe-GsQ1dH6AH-FuzmYiknahyEsQTdButpGwv1pd9_2s85bCEL7jXfXbX11v0nBUY4HhDO-ZFvtQm0E8Kmxf0KyAhORQbAuietpWxNC3pdTf_KXE0GEVjgc2kDPj8uSyWfF5xIUveVAxg1qvl_MyW2wunT5cJyvbm3xdwjv6Z0iJRPcD"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-xl shadow-xl max-w-xs border border-border/20">
                <p className="font-headline italic text-xl text-primary">&quot;We built Nurturly to feel personal, consistent, and deeply human.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* The 5-Step Journey */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {/* Step 1: Conversation */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg">01</span>
                  <h2 className="font-headline text-4xl text-primary">Start with a conversation</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out through our contact form or give us a call. We&apos;ll have a relaxed, no-pressure conversation to understand your situation, answer your questions, and explain exactly how Nurturly works.
                </p>
                <ul className="space-y-3 py-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    No commitment required
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Get all your questions answered
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Hands gently resting on each other during a supportive conversation, warm indoor lighting, feeling of trust and connection"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxgSvy_N-U9KeVVPR7N82nQI2jvfggX7-9lZxmjPbHlfy95gaG-Mq5pWw-4LLF4H9ujOAg2-VhlspW8Qz4DeiI_k6QlDl3F4-YyHsaJLfQFeKkPPWOMGB5swf9wZEwDEzAeRUxpWGSwfq5kHrXsRT44ldeyeE3mH3d44RZbLTFtLFpk3Bw5flQKNkaBcmqO74lKDzJ3MZsrhyjeEFmdN4JrVPulqAn60kD6LJwAVDMhwOUbOhyW5IGB5zy7-6BVpmu9aGqElMJg6k"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Assessment */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-secondary/10">
                <img
                  alt="A professional care coordinator looking at documents and smiling warmly, in a bright home-like office environment with plants"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNwgR7NAg44ifAfVRF8utfibQpLEE78dToUmoF0ZPgo5xrUOFIl929Zvs4eDflEA2L0jaL64egNPOq9ShweyByiJhGouJH_yrRgfjYQft7uH82gP48ws5nAqYkommBfk3quVWT6rcElfaowOuSEgFXKtPorNPtFWyMzDsyH-oAqDgLIMp14r6-o_aFfUeBMTJHpjysfb6xj9ugqf__0CJf2zDISGjtE66AP7uEe_nuu7eZULD4YecItqb2MndyzGkNRNmIstbzovs3"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg">02</span>
                  <h2 className="font-headline text-4xl text-primary">We assess your needs</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We take time to properly understand the care needed — daily routines, health considerations, home environment, and personal preferences. Nothing is assumed. Everything is documented and built into your care plan.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-border/20">
                    <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                      assignment_turned_in
                    </span>
                    <p className="text-sm font-bold text-foreground">Home Safety Audit</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary-foreground/5 border border-border/20">
                    <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                      clinical_notes
                    </span>
                    <p className="text-sm font-bold text-foreground">Custom Care Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Matching */}
          <div className="bg-secondary/5 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg">03</span>
                  <h2 className="font-headline text-4xl text-primary">We match your caregiver</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  The right caregiver isn&apos;t just qualified — they&apos;re the right fit. We hand-select based on experience, personality, and the specific needs documented in your care plan. You meet them before care begins.
                </p>
                <button className="text-secondary font-bold flex items-center gap-2 group hover:gap-3 transition-all">
                  Our matching philosophy
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform rotate-2">
                  <img
                    alt="Portrait of a kind, smiling caregiver in a soft green uniform against a neutral background"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAhdCStrmM-Do-8F1q8XvwP6F8Q8r7C4qxvfJYZU6dfuA5BagqRsdVlxHj_kPlluF5R504CBdhtJKW0uSnwvI9xRZ1QIYOZky3eD4w2BB55R_EEnNqAv4vM1gSZO9LeR5pXxaVWOG_2gdM917bWreMtUIbW52pk37F9yvFGb1S49rgkhE8w7Mf9hnTz9U3Ra0V5vtd0kvjEV1qXWElBn2p2zR3lPcvQEiE7wNu2YnzOB58QHIjxIQSqn5TBlOIOj6ja6jYI9StP8ln"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform -rotate-2 mt-8">
                  <img
                    alt="Portrait of a male healthcare professional with a warm and patient expression"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCweL-CY6XMcD2Ys4H2dJkFtqLvSlsCCvrNlmgCmG17gbxb6S2h0jXnJq87pYBN75TPT0rJK6WlD6cY2lamSo3HOzvvbodLGMB8XjEZXL0JjFeDf9pVhkxKVivL8iCXkoItTk-Ma4zU8MH9WktSWY5aTmIReupzDnX4gqyccQI9qS6O6AyNN0-vncCkQArp16Ov0Q3lXbut3fciU21sXdOMzV25mV37tQtBPkx06rd2ZOexJji6aL6NLdPQYzZAsXvZD-F9mkWbnwnP"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Begin Care */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg">04</span>
                  <h2 className="font-headline text-4xl text-primary">Care begins</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  On day one, your Care Manager introduces your caregiver and walks through the care plan with everyone present. We make sure the transition is smooth, comfortable, and clear for your whole family.
                </p>
                <div className="p-6 bg-card rounded-xl border border-border/20 shadow-sm">
                  <h4 className="text-primary font-bold mb-2">Supervised First Visit</h4>
                  <p className="text-sm text-muted-foreground">
                    A Nurturly Care Manager is present on the first visit — not just to observe, but to ensure everything starts right.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="A caregiver helping a senior woman arrange fresh flowers in a vase, natural light and a feeling of peace"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk_P6jAs1o_TMryeQSjTEFAVMF6pzkOsYxW_SGVdyqn-sN8u8P3lQ2MPqZ1g-ROW1E4lnN3x-3K9J8pssFKUU_9qm8cXXE9JjYIttv_2hPkAlrgdrZa-8CM-D8ApFS4aHBjabmAND3u4vWfLROIayFiqGHwYdTYX57JOKsiSMZnronn0Cqwc8HLgbneaTFIYsawaCixBNnXpF6MAtVch02L9YvhA_Q8lgDrR_83ntV-d82waa92Fy3YGNeF6FcUrEPc96zxaTbLZgw"
                />
              </div>
            </div>
          </div>

          {/* Step 5: Stay Connected */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="A family member smiling while looking at a tablet, showing a connection to a care update portal"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtiKEnPrZ55XFxDCvOzDpw0zoWmFax-iPe3MuRlFxgXRII3AXGEpgBa445EaEf9CywSllSPMpxsOT2bOP2cMr05XMVBLPWiV4Guy0fR_0g3t9cxvRmoR7DbZDdHt5QlBQsKfD8reKzJWzurWG96zxeX2G8tPHA9W2b-EZ5GdpvtiVPMvY8gdFDGs7pQ4whF3jEUI0vpjabgekb0EQASz9UOvvZ15aGuCHyFNovHr_N-qE6EkWqQSkGiHof6fUD_3r8HsH6hkr2McGI"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg">05</span>
                  <h2 className="font-headline text-4xl text-primary">We stay connected</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Care doesn&apos;t end at the door. We check in regularly, update care plans as needs change, and keep families informed every step of the way. You always know how your loved one is doing.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-tertiary text-tertiary-foreground text-xs font-bold uppercase tracking-wider">Regular Check-ins</span>
                  <span className="px-4 py-2 rounded-full bg-tertiary text-tertiary-foreground text-xs font-bold uppercase tracking-wider">24/7 Support Line</span>
                  <span className="px-4 py-2 rounded-full bg-tertiary text-tertiary-foreground text-xs font-bold uppercase tracking-wider">Plan Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mt-48 mb-32 text-center bg-card p-16 rounded-3xl shadow-lg border border-border/20">
          <h2 className="font-headline text-5xl text-primary mb-6">Ready to take the first step?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The hardest part is often just starting. Our team is here to listen — no pressure, no sales pitch, just an honest conversation about what your family needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all text-center"
            >
              Start the Conversation
            </Link>
            <Link
              href="/services"
              className="bg-background text-foreground border border-border px-10 py-4 rounded-xl font-bold text-lg hover:bg-secondary/5 transition-all text-center"
            >
              View Our Services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
