import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTALink from '@/components/CTALink'

export const metadata: Metadata = {
  title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
  description: '[YOUR_META_DESCRIPTION]',
  keywords: [
    'home care guides [YOUR_CITY], [YOUR_STATE]',
    'when to get home care',
    'how to choose a caregiver [YOUR_CITY], [YOUR_STATE]',
    'memory care at home',
    'respite care family caregiver [YOUR_CITY], [YOUR_STATE]',
  ],
}

const articles = [
  {
    category: 'Family Guidance',
    readTime: '5 min read',
    title: '[YOUR_ARTICLE_TITLE]',
    excerpt:
      'Home care is support that helps people live safely and comfortably at home — without the clinical setting of a hospital or facility. It covers everything from companionship and personal hygiene to meal preparation, transportation, and medication reminders. For many families in the [YOUR_CITY], [YOUR_STATE] area, it\'s the bridge between full independence and a facility move — one that can be delayed for years with the right support.',
    tags: ['Home Care Basics', 'Family Resources'],
  },
  {
    category: 'Family Guidance',
    readTime: '6 min read',
    title: '[YOUR_ARTICLE_TITLE]',
    excerpt:
      'It\'s rarely a single dramatic moment. More often, the signs appear gradually: a fridge full of expired food, missed medications, increasing isolation, or a small fall that could have been much worse. If you\'ve noticed your parent or spouse struggling with daily routines — bathing, meal prep, keeping up with household tasks — it may be time to consider home care support. Starting early makes the transition easier.',
    tags: ['Warning Signs', 'Caregiver Tips'],
  },
  {
    category: 'Caregiver Tips',
    readTime: '7 min read',
    title: '[YOUR_ARTICLE_TITLE]',
    excerpt:
      'Not all home care agencies are alike. When evaluating options in the [YOUR_CITY], [YOUR_STATE] metro area, families should ask about caregiver screening processes, how matches are made, what happens if a caregiver is unavailable, and how the agency handles concerns or complaints. Beyond credentials, look for agencies that emphasize consistency — the same caregiver, the same routines. Relationships built on familiarity separate good care from great care.',
    tags: ['Choosing Care', '[YOUR_CITY], [YOUR_STATE] Resources'],
  },
  {
    category: 'Memory Care',
    readTime: '8 min read',
    title: 'Understanding Memory Care: Support at Home',
    excerpt:
      'Caring for someone with memory loss at home requires patience, structure, and a specific skill set. For many families it\'s the right choice — familiar environments can reduce confusion and agitation for those living with cognitive decline. Key elements include consistent daily routines, a calm safe environment, and a caregiver trained in comforting techniques. Early planning makes a significant difference in outcomes.',
    tags: ['Memory Care', 'Dementia Support'],
  },
  {
    category: 'Caregiver Tips',
    readTime: '5 min read',
    title: 'Respite Care: A Guide for Family Caregivers',
    excerpt:
      'Family caregivers are at high risk for burnout — and burnout makes caring for your loved one harder. Respite care gives family caregivers planned time away: a few hours, a weekend, or longer. During that time, a professional caregiver steps in so the family member can rest, recharge, and return to their role renewed. If you\'re the primary caregiver for a parent or spouse, respite care isn\'t a luxury — it\'s essential.',
    tags: ['Respite Care', 'Family Caregiver'],
  },
]

const categories = ['All', 'Family Guidance', 'Caregiver Tips', 'Memory Care', 'Local Resources']

const categoryColor: Record<string, string> = {
  'Family Guidance': '#00788E', // Soft Teal
  'Caregiver Tips': '#FFDCAA',  // Warm Yellow
  'Memory Care': '#093859',     // Deep Indigo
  'Local Resources': '#00A5B6', // Calm Blue
}

export default function Resources() {
  return (
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-white border-b border-soft-teal/10 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Resources &amp; Insights
              </span>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight text-deep-indigo mb-6 font-bold">
                Guides for families{' '}
                <span className="italic font-light text-soft-teal">navigating care.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-deep-indigo/80 leading-relaxed max-w-2xl">
                Practical, honest information to help [YOUR_CITY], [YOUR_STATE] families make confident decisions about home care — without the overwhelm.
              </p>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-soft-teal/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all border"
                  style={
                    cat === 'All'
                      ? { background: '#00788E', color: '#fff', borderColor: '#00788E' }
                      : { background: 'transparent', color: '#093859', borderColor: 'rgba(0,120,142,0.2)' }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl border border-soft-teal/10 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Category bar */}
                <div
                  className="h-2 w-full transition-all group-hover:opacity-80"
                  style={{ background: categoryColor[article.category] ?? '#00788E' }}
                />

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                      style={{
                        color: categoryColor[article.category] === '#FFDCAA' ? '#093859' : (categoryColor[article.category] ?? '#00788E'),
                        background: `${categoryColor[article.category] ?? '#00788E'}20`,
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs font-medium text-deep-indigo/60">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-headline text-2xl font-bold text-deep-indigo mb-4 leading-tight group-hover:text-soft-teal transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-deep-indigo/80 font-light text-base leading-relaxed flex-1 mb-8">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-4 py-1.5 rounded-full bg-background border border-soft-teal/10 text-deep-indigo/70 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more — coming soon state */}
                  <div className="flex items-center gap-2 text-sm font-bold text-calm-blue mt-auto">
                    <span className="material-symbols-outlined text-xl">article</span>
                    Full article coming soon
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter / Contact CTA */}
        <section className="bg-white border-y border-soft-teal/10 py-32 px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-soft-teal/10">
              <span className="material-symbols-outlined text-soft-teal text-4xl">mail</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-deep-indigo mb-6">
              Have a question we haven't answered?
            </h2>
            <p className="text-deep-indigo/80 text-xl font-light mb-12 leading-relaxed">
              Our care coordinators are happy to talk through any aspect of home care — no obligation, just an honest conversation.
            </p>
            <CTALink
              href="/contact"
              label="Resources Bottom CTA — Talk to a Care Coordinator"
              className="bg-soft-teal text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-deep-indigo transition-all inline-block"
            >
              Talk to a Care Coordinator
            </CTALink>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
