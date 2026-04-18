import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'Resources & Insights | Nurturly Home Care Houston',
  description:
    'Practical guides and insights for Houston families navigating home care — from recognizing when care is needed to choosing the right caregiver.',
  keywords: [
    'home care guides Houston',
    'when to get home care',
    'how to choose a caregiver Houston',
    'memory care at home',
    'respite care family caregiver Houston',
  ],
}

const articles = [
  {
    category: 'Family Guidance',
    readTime: '5 min read',
    title: 'What Is Non-Medical Home Care? A Family\'s Guide',
    excerpt:
      'Non-medical home care is support that helps people live safely and comfortably at home — without the clinical setting of a hospital or nursing facility. It covers everything from companionship and personal hygiene to meal preparation, transportation, and medication reminders. Unlike skilled nursing, non-medical care focuses on the daily rhythms of life. For many families in the Houston area, it\'s the bridge between full independence and a facility move — one that can be delayed for years with the right support in place.',
    tags: ['Home Care Basics', 'Family Resources'],
  },
  {
    category: 'Family Guidance',
    readTime: '6 min read',
    title: '5 Signs Your Loved One May Need Home Care Support',
    excerpt:
      'It\'s rarely a single dramatic moment. More often, the signs appear gradually: a fridge full of expired food, missed medications, increasing isolation, or a small fall that could have been much worse. If you\'ve noticed your parent or spouse struggling with daily routines — bathing, meal prep, keeping up with household tasks — it may be time to consider home care support. Starting early makes the transition easier and keeps your loved one safer and more independent for longer.',
    tags: ['Warning Signs', 'Caregiver Tips'],
  },
  {
    category: 'Caregiver Tips',
    readTime: '7 min read',
    title: 'How to Choose the Right Caregiver in Houston',
    excerpt:
      'Not all home care agencies are alike. When evaluating options in the Houston metro area, families should ask about caregiver screening processes, how matches are made, what happens if a caregiver is unavailable, and how the agency handles concerns or complaints. Beyond credentials, look for agencies that emphasize consistency — the same caregiver, the same routines. Relationships built on familiarity are what separate good care from great care.',
    tags: ['Choosing Care', 'Houston Resources'],
  },
  {
    category: 'Memory Care',
    readTime: '8 min read',
    title: 'Understanding Memory Care: Alzheimer\'s & Dementia Support at Home',
    excerpt:
      'Caring for someone with Alzheimer\'s or dementia at home requires patience, structure, and a specific skill set. Memory care at home is possible, and for many families it\'s the right choice — familiar environments can reduce confusion and agitation for those living with cognitive decline. Key elements include consistent daily routines, a calm and safe home environment, and a caregiver trained in de-escalation and redirection techniques. Early planning makes a significant difference in outcomes.',
    tags: ['Memory Care', 'Dementia Support'],
  },
  {
    category: 'Caregiver Tips',
    readTime: '5 min read',
    title: 'Respite Care: A Guide for Family Caregivers',
    excerpt:
      'Family caregivers are at high risk for burnout — and burnout makes caring for your loved one harder, not easier. Respite care gives family caregivers planned time away: a few hours, a weekend, or longer. During that time, a professional caregiver steps in so the family member can rest, recharge, and return to their role renewed. If you\'re the primary caregiver for a parent or spouse in the Houston area, respite care isn\'t a luxury — it\'s an essential part of sustainable care.',
    tags: ['Respite Care', 'Family Caregiver'],
  },
]

const categories = ['All', 'Family Guidance', 'Caregiver Tips', 'Memory Care', 'Local Resources']

const categoryColor: Record<string, string> = {
  'Family Guidance': '#006d77',
  'Caregiver Tips': '#c9a84c',
  'Memory Care': '#4a6367',
  'Local Resources': '#00535b',
}

export default function Resources() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16">
          <div className="max-w-3xl">
            <span className="text-secondary/60 font-semibold tracking-widest text-xs uppercase mb-6 block">
              Resources &amp; Insights
            </span>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary mb-6 font-bold">
              Guides for families{' '}
              <span className="italic font-normal">navigating care.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Practical, honest information to help Houston families make confident decisions about home care — without the overwhelm.
            </p>
          </div>
        </section>

        {/* Category Pills */}
        <section className="border-t border-outline-variant/20 sticky top-0 z-10 bg-surface/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all border"
                  style={
                    cat === 'All'
                      ? { background: '#006d77', color: '#fff', borderColor: '#006d77' }
                      : { background: 'transparent', color: '#4a6367', borderColor: '#e4e2dc' }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Category bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: categoryColor[article.category] ?? '#006d77' }}
                />

                <div className="p-8 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        color: categoryColor[article.category] ?? '#006d77',
                        background: `${categoryColor[article.category] ?? '#006d77'}14`,
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-on-surface-variant">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-headline text-xl font-bold text-on-surface mb-4 leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-on-surface-variant text-sm leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more — coming soon state */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary/50 mt-auto cursor-default select-none">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0" }}>
                      article
                    </span>
                    Full article coming soon
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter / Contact CTA */}
        <section className="bg-surface-container-low py-20 md:py-28 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              mail
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Have a question we haven&apos;t answered?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Our care coordinators are happy to talk through any aspect of home care — no obligation, just an honest conversation.
            </p>
            <CTALink
              href="/contact"
              label="Resources Bottom CTA — Talk to a Care Coordinator"
              className="signature-gradient text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform inline-block"
            >
              Talk to a Care Coordinator
            </CTALink>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
