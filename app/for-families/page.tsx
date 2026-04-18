import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'For Families | Nurturly Home Care Houston',
  description:
    'We help families in Houston navigate home care with confidence. Discover how Nurturly supports your loved one at home with dignity, consistency, and warmth.',
}

export default function ForFamilies() {
  const concerns = [
    {
      icon: 'security',
      title: 'Is my loved one safe?',
      answer:
        'All Nurturly caregivers are carefully screened, background-checked, and trained to provide safe, attentive support in the home environment.',
    },
    {
      icon: 'people',
      title: 'Will they actually connect with the caregiver?',
      answer:
        'We match caregivers based on personality, communication style, and shared interests — not just availability. A good relationship is central to good care.',
    },
    {
      icon: 'schedule',
      title: 'What if needs change over time?',
      answer:
        'Care plans are flexible. We stay in close contact with families and adjust support as circumstances change — so you\'re never navigating it alone.',
    },
    {
      icon: 'verified',
      title: 'How do I know they\'re reliable?',
      answer:
        'Reliability is one of our core standards. We show up consistently, communicate proactively, and have backup support in place so care is never interrupted.',
    },
  ]

  const steps = [
    { num: '01', title: 'Start with a conversation', body: 'Call or email us. We listen first — no pressure, no scripts.' },
    { num: '02', title: 'We assess your needs', body: 'We take time to understand routines, preferences, and what would make life easier and more comfortable.' },
    { num: '03', title: 'We match & begin', body: 'We pair the right caregiver with your loved one and stay closely involved from the first day.' },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: concerns.map((c) => ({
      '@type': 'Question',
      name: c.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: c.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'For Families', item: 'https://nurturlycare.com/for-families' },
    ],
  }

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary/60 font-semibold tracking-widest text-xs uppercase mb-6 block">
                For Families
              </span>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary mb-8 font-bold">
                You shouldn&apos;t have<br />
                <span className="italic font-normal">to figure this out alone.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                Deciding to bring home care into your family is a big step. We make it easier by being honest, thorough, and genuinely helpful from the very first conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTALink
                  href="/contact"
                  label="For Families Hero — Start a Conversation"
                  className="signature-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-[1.02] transition-transform text-center"
                >
                  Start a Conversation
                </CTALink>
                <Link
                  href="/how-it-works"
                  className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface-container-low transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbmnMCi6vytQLWtyHzq74NZ31akP82omyaliWGGJ6ntaIdrfwbGbRBy7ifFMRbf8YBKaE8G1HgQ5S7vOo7er47Y0ubRnBUVnUj2s76T4JAyxuFwtAnc6wV_PYTUBGozTJh4j16_4jKWpf6XJzbJHfIbUC5gu6idZJiQbekwIzzbgylakGbgzITPUFW3XeQ8eJ9uqupJwkydjlg5st88NrXEQYJ0FV2nUReoc4umcMEB_zT3C6rkVfqNTqm5oJW9OGEtOiUnZGMHAv"
                  alt="Family and caregiver sharing a warm moment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Family Concerns */}
        <section className="bg-surface-container-low py-20 md:py-28 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">
                Questions families ask us
              </h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
                These are the things families worry about most. We take every question seriously.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {concerns.map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 hover:shadow-md transition-shadow"
                >
                  <span
                    className="material-symbols-outlined text-primary text-3xl mb-5 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Starts */}
        <section className="py-20 md:py-28 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
              How it starts
            </h2>
            <p className="text-on-surface-variant text-lg">
              Simple, honest, and at your pace.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full signature-gradient text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
              We&apos;re here so you can breathe a little easier.
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Reach out whenever you&apos;re ready. There&apos;s no obligation, no pressure — just a genuine conversation about what your family needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors inline-block"
            >
              Start a Conversation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
