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
      title: 'Will they actually connect?',
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
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white border-b border-soft-teal/10 pt-32 pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                  For Families
                </span>
                <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight text-deep-indigo mb-8 font-bold">
                  You shouldn't have<br />
                  <span className="italic font-light text-soft-teal">to figure this out alone.</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-deep-indigo/80 leading-relaxed mb-10 max-w-lg">
                  Deciding to bring home care into your family is a big step. We make it easier by being honest, thorough, and genuinely helpful from the very first conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTALink
                    href="/contact"
                    label="For Families Hero — Start a Conversation"
                    className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg text-center"
                  >
                    Start a Conversation
                  </CTALink>
                  <Link
                    href="/how-it-works"
                    className="bg-background text-deep-indigo border border-soft-teal/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all text-center"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-soft-teal/10">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                    alt="Family and caregiver sharing a warm moment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Family Concerns */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-deep-indigo mb-6">
                Questions families ask us
              </h2>
              <p className="text-deep-indigo/80 font-light text-xl max-w-2xl mx-auto">
                These are the things families worry about most. We take every question seriously.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {concerns.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-10 md:p-12 rounded-3xl border border-soft-teal/10 shadow-sm"
                >
                  <div className="w-14 h-14 bg-soft-teal/10 rounded-2xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-soft-teal text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-deep-indigo mb-4">{item.title}</h3>
                  <p className="text-deep-indigo/80 font-light leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Starts */}
        <section className="py-32 bg-white border-y border-soft-teal/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-deep-indigo mb-6">
              How it starts
            </h2>
            <p className="text-deep-indigo/80 font-light text-xl">
              Simple, honest, and at your pace.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-10 px-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 items-start bg-background p-8 md:p-10 rounded-3xl border border-soft-teal/10">
                <div className="w-16 h-16 rounded-full bg-deep-indigo shadow-md text-white flex items-center justify-center font-headline font-bold text-xl flex-shrink-0">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-headline text-2xl font-bold text-deep-indigo mb-3">{step.title}</h3>
                  <p className="text-deep-indigo/80 font-light text-lg leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto bg-deep-indigo rounded-[2rem] p-16 md:p-24 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-br-full pointer-events-none"></div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
              We're here so you can breathe a little easier.
            </h2>
            <p className="text-white/80 font-light text-xl mb-12 leading-relaxed max-w-2xl mx-auto relative z-10">
              Reach out whenever you're ready. There's no obligation, no pressure — just a genuine conversation about what your family needs.
            </p>
            <div className="relative z-10">
              <Link
                href="/contact"
                className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg inline-block"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
