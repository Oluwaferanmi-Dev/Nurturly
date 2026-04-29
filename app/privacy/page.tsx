import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nurturly',
  description: 'Nurturly\'s commitment to transparency, data protection, and privacy. Learn how we safeguard your information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body min-h-screen">
      <Header />
      
      <main className="pt-32 pb-32">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16">
          <span className="text-nurturly-calm-blue font-bold tracking-widest text-xs uppercase mb-6 block">
            Trust & Governance
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl text-nurturly-deep-indigo leading-tight mb-8">
            Transparency<br/>
            <span className="italic font-light text-nurturly-soft-teal">& Stewardship</span>
          </h1>
          <div className="w-24 h-1 bg-nurturly-soft-teal rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-nurturly-deep-indigo/80 font-light leading-relaxed italic">
            "In every touchpoint of care, privacy and dignity are the foundations of our sanctuary."
          </p>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-8 bg-white p-8 rounded-3xl border border-nurturly-soft-teal/10 shadow-sm">
              <h3 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-6">Contents</h3>
              <ul className="space-y-4 font-light text-nurturly-deep-indigo/80">
                <li><a href="#privacy" className="hover:text-nurturly-soft-teal transition-colors">Privacy Policy</a></li>
                <li><a href="#data" className="hover:text-nurturly-soft-teal transition-colors">Data Collection</a></li>
                <li><a href="#sharing" className="hover:text-nurturly-soft-teal transition-colors">Information Sharing</a></li>
                <li><a href="#rights" className="hover:text-nurturly-soft-teal transition-colors">Your Rights</a></li>
              </ul>
              <div className="pt-6 border-t border-nurturly-soft-teal/10 mt-6">
                <p className="text-sm font-bold text-nurturly-deep-indigo mb-2">Need Assistance?</p>
                <p className="text-xs font-light text-nurturly-deep-indigo/70 mb-4">Our legal team is here to help.</p>
                <a href="mailto:privacy@nurturlycare.com" className="text-sm font-bold text-nurturly-soft-teal hover:underline transition-all">
                  Contact Privacy Officer
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="md:col-span-8 lg:col-span-9 bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-nurturly-soft-teal/10">
            <section id="privacy" className="mb-16">
              <h2 className="font-headline text-3xl font-bold text-nurturly-deep-indigo mb-6">Privacy Policy</h2>
              <p className="text-lg font-light text-nurturly-deep-indigo/80 leading-relaxed mb-6">
                <strong>Last updated: December 2024.</strong> Your trust is our most valued asset. At Nurturly, we curate a digital environment that reflects the safety of the homes we care for.
              </p>
            </section>

            <section id="data" className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-nurturly-soft-teal text-3xl">verified_user</span>
                <h3 className="font-headline text-2xl font-bold text-nurturly-deep-indigo">Data Collection & Purpose</h3>
              </div>
              <p className="text-lg font-light text-nurturly-deep-indigo/80 leading-relaxed mb-8">
                We collect information that you voluntarily provide when engaging with our services, including health history and preference profiles. This data is strictly utilized to provide personalized care solutions and is never shared with third-party marketers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-nurturly-bg p-8 rounded-2xl border border-nurturly-soft-teal/10">
                  <h4 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-3">Client Protection</h4>
                  <p className="text-sm font-light text-nurturly-deep-indigo/80 leading-relaxed">
                    All personal health information (PHI) is encrypted using industry-leading protocols, ensuring your family's history remains within our sanctuary.
                  </p>
                </div>
                <div className="bg-nurturly-bg p-8 rounded-2xl border border-nurturly-soft-teal/10">
                  <h4 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-3">Service Refinement</h4>
                  <p className="text-sm font-light text-nurturly-deep-indigo/80 leading-relaxed">
                    Usage data helps us refine our interface and navigation to better serve families and aging demographics.
                  </p>
                </div>
              </div>
            </section>

            <section id="sharing" className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-nurturly-calm-blue text-3xl">security</span>
                <h3 className="font-headline text-2xl font-bold text-nurturly-deep-indigo">Information Sharing</h3>
              </div>
              <p className="text-lg font-light text-nurturly-deep-indigo/80 leading-relaxed">
                Nurturly only shares data with authorized caregivers and medical professionals designated by you. We strictly adhere to HIPAA and GDPR standards to ensure a global standard of care and protection.
              </p>
            </section>

            <section id="rights" className="pt-10 border-t border-nurturly-soft-teal/10">
              <h3 className="font-headline text-3xl font-bold text-nurturly-deep-indigo mb-10">Your Rights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-8 border border-nurturly-soft-teal/20 rounded-2xl shadow-sm text-center">
                  <span className="material-symbols-outlined text-nurturly-soft-teal text-4xl mb-4">folder_shared</span>
                  <h4 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-3">The Right to Access</h4>
                  <p className="text-sm font-light text-nurturly-deep-indigo/80 leading-relaxed">
                    Request a full export of all personal information we hold about your family care profile.
                  </p>
                </div>
                <div className="p-8 border border-nurturly-soft-teal/20 rounded-2xl shadow-sm text-center">
                  <span className="material-symbols-outlined text-nurturly-calm-blue text-4xl mb-4">edit_note</span>
                  <h4 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-3">The Right to Rectify</h4>
                  <p className="text-sm font-light text-nurturly-deep-indigo/80 leading-relaxed">
                    Update health records or preferences at any time through your secure dashboard.
                  </p>
                </div>
                <div className="p-8 border border-nurturly-soft-teal/20 rounded-2xl shadow-sm text-center">
                  <span className="material-symbols-outlined text-nurturly-sage text-4xl mb-4">delete_forever</span>
                  <h4 className="font-headline text-lg font-bold text-nurturly-deep-indigo mb-3">The Right to Erasure</h4>
                  <p className="text-sm font-light text-nurturly-deep-indigo/80 leading-relaxed">
                    Request the complete removal of your data from our systems upon termination of service.
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
