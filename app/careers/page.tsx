import type { Metadata } from 'next'
import Header from '@/components/Header'
import CareersForm from '@/components/CareersForm'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
  description: '[YOUR_META_DESCRIPTION]',
}

export const revalidate = 60
export const dynamic = 'force-dynamic'

interface JobListing {
  _id: string
  title: string
  slug: { current: string }
  location: string
  type: string
  shortDescription: string
}

async function getJobListings(): Promise<JobListing[]> {
  try {
    return await client.fetch(`
      *[_type == "jobListing" && isActive == true] | order(publishedAt desc) {
        _id,
        title,
        slug,
        location,
        type,
        shortDescription
      }
    `)
  } catch (error) {
    console.error('Failed to fetch job listings:', error)
    return []
  }
}

export default async function Careers() {
  const jobListings = await getJobListings()
  const responsibilities = [
    {
      icon: 'calendar_today',
      title: 'Support Daily Routines',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'favorite',
      title: 'Companionship & Emotional Support',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'home',
      title: 'Create a Calm Environment',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'handshake',
      title: 'Build Trust with Families',
      description: '[YOUR_META_DESCRIPTION]',
    },
  ]

  const qualities = [
    'Calm and patient',
    'Reliable and consistent',
    'Observant and detail-oriented',
    'Emotionally steady',
    'Respectful and professional',
  ]

  const standards = [
    {
      icon: 'workspace_premium',
      title: 'Dignity in Every Moment',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'eco',
      title: 'Reliability Builds Trust',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'volunteer_activism',
      title: 'Relationship-Centered Care',
      description: '[YOUR_META_DESCRIPTION]',
    },
    {
      icon: 'spa',
      title: 'The Warmth of Hospitality',
      description: '[YOUR_META_DESCRIPTION]',
    },
  ]

  const process = [
    { step: '01', title: 'Application', description: '[YOUR_META_DESCRIPTION]' },
    { step: '02', title: 'Phone Interview', description: '[YOUR_META_DESCRIPTION]' },
    { step: '03', title: 'Reference Check', description: '[YOUR_META_DESCRIPTION]' },
    { step: '04', title: 'In-Person Interview', description: '[YOUR_META_DESCRIPTION]' },
    { step: '05', title: 'Shadow Shift', description: '[YOUR_META_DESCRIPTION]' },
    { step: '06', title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]' },
  ]

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Caregiver',
    description: '[YOUR_META_DESCRIPTION]',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'CareBase',
      sameAs: 'https://yourcaredomain.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '[YOUR_CITY], [YOUR_STATE]',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    datePosted: '2026-04-01',
    validThrough: '2027-04-01',
    applicantLocationRequirements: {
      '@type': 'City',
      name: '[YOUR_CITY], [YOUR_STATE]',
    },
    jobBenefits: 'Flexible scheduling, meaningful work, supportive team environment',
    qualifications:
      'Experience in home care, personal care, or a related field preferred. CNA, HHA certification a plus. Must be patient, reliable, and empathetic.',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourcaredomain.com' },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://yourcaredomain.com/careers' },
    ],
  }

  return (
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 flex items-center overflow-hidden bg-white border-b border-soft-teal/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 relative">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
                Careers at CareBase
              </span>
              <h1 className="font-headline font-bold text-5xl md:text-6xl text-deep-indigo leading-[1.1] mb-6">
                Work That Feels <br />
                <span className="italic font-light text-soft-teal">Meaningful</span>
              </h1>
              <p className="text-deep-indigo/80 text-xl font-light leading-relaxed mb-10 max-w-xl">
                Care for people, not just tasks. Join us in bringing comfort, trust, and human connection back into home care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply-form"
                  className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg text-center"
                >
                  View Open Roles & Apply
                </a>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[4/5]">
              {/* TODO: Replace with your own images */}
                <img
                alt="Caregiver in a natural, welcoming setting"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1641723345378-a701b30b2d36?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </section>

        {/* We Care Differently */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="bg-white border border-soft-teal/10 p-12 rounded-3xl shadow-sm relative z-10">
                <h2 className="font-headline font-bold text-4xl md:text-5xl text-deep-indigo mb-8 leading-tight">
                  We Care <span className="italic font-light text-soft-teal">Differently</span>
                </h2>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed mb-6">
                  At CareBase, we provide thoughtful, relationship-based care designed to feel calm, personal, and human.
                </p>
                <p className="text-lg text-deep-indigo/80 font-light leading-relaxed">
                  You care for one family deeply instead of many clients quickly. We prioritize relationships over rushed, task-based care. This isn't just a job — it's meaningful work done well.
                </p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-warm-yellow/20 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* TODO: Replace with your own images */}
                <img
                alt="Caregiver providing attentive care"
                className="rounded-2xl w-full h-64 sm:h-80 object-cover shadow-sm"
                src="https://plus.unsplash.com/premium_photo-1661549534902-df85d8d1b943?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              {/* TODO: Replace with your own images */}
                <img
                alt="Caregiver in warm interaction with client"
                className="rounded-2xl w-full h-64 sm:h-80 object-cover shadow-sm sm:mt-16"
                src="https://plus.unsplash.com/premium_photo-1665203568927-bf0e58ee3d20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </section>

        {/* What You'll Do & Who We Look For */}
        <section className="py-24 bg-white border-y border-soft-teal/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* What You'll Do */}
              <div className="bg-background p-10 md:p-14 rounded-3xl shadow-sm border border-soft-teal/10">
                <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-4 block">
                  The Role
                </span>
                <h3 className="font-headline font-bold text-3xl md:text-4xl text-deep-indigo mb-10">
                  What You'll Do
                </h3>
                <div className="space-y-8">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-12 h-12 flex-shrink-0 bg-white shadow-sm text-soft-teal flex items-center justify-center rounded-xl">
                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-deep-indigo mb-2">{item.title}</h4>
                        <p className="text-deep-indigo/70 font-light text-sm md:text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Look For */}
              <div className="flex flex-col gap-8">
                <div className="bg-deep-indigo shadow-lg text-white p-10 md:p-14 rounded-3xl flex-grow flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-soft-teal/20 rounded-bl-full pointer-events-none -z-0"></div>
                  <div className="relative z-10">
                    <h3 className="font-headline font-bold text-3xl md:text-4xl mb-6">
                      Who We Look For
                    </h3>
                    <p className="text-white/80 font-light mb-10 text-lg leading-relaxed">
                      This role is designed for people who value patience, consistency, and meaningful connection.
                    </p>
                    <ul className="space-y-5 font-light text-lg">
                      {qualities.map((quality, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-sage">check_circle</span>
                          <span>{quality}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-32 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-deep-indigo mb-16 text-center">
              Our Journey Together
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-soft-teal/20 z-0"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                {process.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6 shadow-sm border-[3px] rounded-full transition-all ${
                        index === process.length - 1
                          ? 'bg-soft-teal text-white border-soft-teal shadow-lg'
                          : 'bg-white border-soft-teal/20 group-hover:border-soft-teal text-deep-indigo'
                      }`}
                    >
                      <span className="font-headline font-bold text-2xl">{item.step}</span>
                    </div>
                    <h5 className="font-bold text-base text-deep-indigo mb-2">{item.title}</h5>
                    <p className="text-xs text-deep-indigo/70 font-light leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-32 bg-white border-t border-soft-teal/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <span className="text-calm-blue font-bold tracking-widest text-xs uppercase mb-4 block">
                Currently Hiring
              </span>
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-deep-indigo mb-6">
                Open Roles
              </h2>
              <p className="text-deep-indigo/80 text-lg font-light max-w-2xl mx-auto">
                Explore the opportunities available at CareBase right now.
              </p>
            </div>

            {jobListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobListings.map((job) => (
                  <div
                    key={job._id}
                    className="bg-background border border-soft-teal/10 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-soft-teal/30 transition-all"
                  >
                    <div className="mb-6 flex flex-wrap gap-2">
                      <span className="inline-block bg-soft-teal/10 text-soft-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="inline-block bg-deep-indigo/10 text-deep-indigo text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-deep-indigo mb-3 leading-tight">
                      {job.title}
                    </h3>
                    <p className="text-deep-indigo/70 font-light text-sm leading-relaxed mb-8">
                      {job.shortDescription}
                    </p>
                    <a
                      href="#apply-form"
                      className="bg-white text-soft-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg inline-block"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-cream rounded-2xl p-12 text-center border border-soft-teal/10">
                <span className="material-symbols-outlined text-5xl text-muted-text/30 block mb-4">briefcase</span>
                <p className="text-deep-indigo/70 text-lg font-light">
                  No open roles right now — check back soon, or send a general inquiry via the form below.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-12 text-center">
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-deep-indigo mb-6">
                Ready to Care?
              </h2>
              <p className="text-deep-indigo/80 text-lg font-light max-w-2xl mx-auto">
                If you believe care should feel personal, consistent, and human — we'd love to hear from you.
              </p>
            </div>
            <div className="bg-background rounded-3xl p-10 md:p-14 shadow-sm border border-soft-teal/10">
              <CareersForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
