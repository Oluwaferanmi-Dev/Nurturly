import type { Metadata } from 'next'
import Header from '@/components/Header'
import CareersForm from '@/components/CareersForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Careers | Nurturly Home Care Houston',
  description:
    'Join the Nurturly team in Houston, TX. We provide thoughtful, relationship-based home care. Meaningful work for people who care deeply.',
}

export default function Careers() {
  const responsibilities = [
    {
      icon: 'calendar_today',
      title: 'Support Daily Routines',
      description:
        'Assist with activities of daily living and everyday routines, helping clients remain independent and comfortable.',
    },
    {
      icon: 'favorite',
      title: 'Companionship & Emotional Support',
      description:
        'Provide genuine companionship and emotional presence that makes each day feel meaningful and connected.',
    },
    {
      icon: 'home',
      title: 'Create a Calm Environment',
      description:
        'Help create a calm, safe, and comfortable home environment where clients feel secure and at ease.',
    },
    {
      icon: 'handshake',
      title: 'Build Trust with Families',
      description:
        'Develop consistent, reliable relationships with clients and their families built on honesty and care.',
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
      description:
        'We treat every person with respect, protect their independence, and honor their choices.',
    },
    {
      icon: 'eco',
      title: 'Reliability Builds Trust',
      description:
        'Families depend on us, and we take that seriously. We show up, stay consistent, and follow through.',
    },
    {
      icon: 'volunteer_activism',
      title: 'Relationship-Centered Care',
      description:
        'Care should feel familiar. We prioritize consistency and real relationships.',
    },
    {
      icon: 'spa',
      title: 'The Warmth of Hospitality',
      description:
        'We bring attentiveness and thoughtful service into the home so every interaction feels personal.',
    },
  ]

  const process = [
    { step: '01', title: 'Application', description: 'Submit your application and tell us about yourself.' },
    { step: '02', title: 'Phone Interview', description: 'A brief call to learn more about you and answer your questions.' },
    { step: '03', title: 'Reference Check', description: 'We reach out to your references to confirm your background.' },
    { step: '04', title: 'In-Person Interview', description: 'Meet the team and get a feel for who we are.' },
    { step: '05', title: 'Shadow Shift', description: 'Spend time with an experienced caregiver to see care in action.' },
    { step: '06', title: 'Final Decision', description: 'We make our decision and welcome you to the Nurturly team.' },
  ]

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Caregiver',
    description:
      'Nurturly is hiring compassionate, reliable caregivers in the Houston, TX area. Provide non-medical home care including companionship, personal care, meal preparation, and mobility support. We prioritize relationships over task-based care.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Nurturly',
      sameAs: 'https://nurturlycare.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    },
    employmentType: ['FULL_TIME', 'PART_TIME'],
    datePosted: '2026-04-01',
    validThrough: '2027-04-01',
    applicantLocationRequirements: {
      '@type': 'City',
      name: 'Houston',
    },
    jobBenefits: 'Flexible scheduling, meaningful work, supportive team environment',
    qualifications:
      'Experience in home care, personal care, or a related field preferred. CNA, HHA certification a plus. Must be patient, reliable, and empathetic.',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://nurturlycare.com/careers' },
    ],
  }

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] lg:h-[870px] flex items-center overflow-hidden mt-16">
          <div className="absolute inset-0 z-0">
            <img
              alt="Nurturly caregiver at work"
              className="w-full h-full object-cover brightness-[0.75]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjGcWAI3g1cyeI962zZIEE6o92o0vt1ZH2_gKsa0hqCHpIoT25DP_lxPYZciutWDlQHHU99XPOMFhyzeynMuAAD4Fk_ijpPdi8NVZqw3cj3h9-r9MkRYQdbZsLnqsjVXZcK3Wg053FaS-ZTV2zPNe1dmIKz-gRNnMcEIO0FLopdOnwsPkw6012pe7stO9VodhAFcv7rHTZ1yKjKNiefrwBQhfaQaXAdz1UP2YK6ECg8Z7UWxnfdoc7Vcdrw3lGdslEBTc8-ii8dcd7"
            />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8">
                Work That Feels <br />
                <span className="italic">Meaningful</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 md:mb-10 max-w-xl">
                Care for people, not just tasks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply-form"
                  className="px-8 md:px-10 py-3 md:py-4 signature-gradient text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95 text-center"
                >
                  View Open Roles
                </a>
                <a
                  href="#apply-form"
                  className="px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* We Care Differently */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative">
                <div className="bg-surface-container-low p-8 md:p-12 rounded-xl relative z-10">
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary mb-6 md:mb-8 leading-tight">
                    We Care <span className="italic font-medium">Differently</span>
                  </h2>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-4 md:mb-6">
                    At Nurturly, we provide thoughtful, relationship-based care designed to feel calm, personal, and human.
                  </p>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                    You care for one family deeply instead of many clients quickly. We prioritize relationships over rushed, task-based care. This isn&apos;t just a job &mdash; it&apos;s meaningful work done well.
                  </p>
                </div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <img
                  alt="Caregiver with client"
                  className="rounded-xl w-full h-60 sm:h-72 md:h-80 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_2g6RlTgQM1xMynhJu-Q3TIZit3mVpaI9mS1xCuq2z0nCB0otRmD9TT_iEhBv5j0j2gHcggAFdV6_3l8PWiA1ZzJAWq3v-H2juxjq-I2Kw6p5nhOKZdun7d_4NAJcv_IDY7ozPU1cn2dea0uhV4m270Axs45iEhYJay_yllODWHqYnVO-YSgPG8HSrMzOhZbRPtdtKa5yu8XUPAUbCiyhZ0vw5Bov-rBcyMR9dT_dSNJG4mBoCB0RY0jnTXQ3uj_xpkg9yoO3Ia0x"
                />
                <img
                  alt="Home care environment"
                  className="rounded-xl w-full h-60 sm:h-72 md:h-80 object-cover sm:mt-12"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZe5jnvVDkHZKhxkBzdCQy_quzm1TjQ3pGyabKEp32spzsn43LoaxJ_ha1_JH6tHEFtB9mDRSPBpj7n9qvs0rVlao_k-glVWPGbWjquLroDhJKOhTV4i6GvbmPUvoY7kAJA0A8yN1jT3W_H2knPW-vD-gcDdZW5b4L1tvQh2IkW-p0nuIbXd5e_ATzyzBkZdPTQ-FJFv-bgpoyGL2xr6Fs1IZtVj6XhSBRuDhoVXJQSEZC6Z2S7PJrdWgLPyPlMcaRHO3lTWFMj79"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Do & Who We Look For */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
              {/* What You'll Do */}
              <div className="lg:col-span-4 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
                <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">
                  The Role
                </span>
                <h3 className="font-headline text-3xl md:text-4xl mb-8">What You&apos;ll Do</h3>
                <div className="space-y-8">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-12 h-12 flex-shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Look For */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div className="signature-gradient text-white p-8 md:p-12 rounded-xl flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl mb-6 leading-tight">
                      Who We <br />
                      <span className="italic">Look For</span>
                    </h3>
                    <p className="text-white/80 mb-8 text-sm md:text-base">
                      This role is designed for people who value patience, consistency, and meaningful connection.
                    </p>
                  </div>
                  <ul className="space-y-4 font-medium text-base md:text-lg">
                    {qualities.map((quality, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span
                          className="material-symbols-outlined text-white/80"
                          style={{ fontVariationSettings: "'FILL' 1", fontSize: '20px' }}
                        >
                          check_circle
                        </span>
                        <span>{quality}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary-container/30 p-6 md:p-8 rounded-xl border border-secondary/10">
                  <p className="font-headline text-xl md:text-2xl text-secondary italic">
                    &ldquo;Care should feel personal, consistent, and human.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Standards */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-6 lg:px-12 text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-4">Our Standards</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
              The values that guide everything we do.
            </p>
          </div>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-surface-container-high p-8 md:p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-300"
                >
                  <span
                    className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {standard.icon}
                  </span>
                  <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{standard.title}</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-20 text-center">
              Our Process
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 z-0"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 relative z-10">
                {process.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm border-4 rounded-full transition-all ${
                        index === process.length - 1
                          ? 'signature-gradient text-white border-transparent'
                          : 'bg-surface-container-lowest border-surface group-hover:border-primary-container'
                      }`}
                    >
                      <span
                        className={`font-headline text-2xl md:text-3xl ${
                          index === process.length - 1 ? 'text-white' : 'text-primary'
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>
                    <h5 className="font-bold text-base md:text-lg mb-2">{item.title}</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-20 md:py-32 bg-surface-container-low">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 md:mb-16 text-center">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                  Join Nurturly
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto">
                  If you believe care should feel personal, consistent, and human &mdash; we&apos;d love to hear from you.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
                <CareersForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
