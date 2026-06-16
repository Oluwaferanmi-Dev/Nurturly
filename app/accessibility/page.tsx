import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
  description: '[YOUR_META_DESCRIPTION]',
}

export default function Accessibility() {
  return (
    <div className="bg-background text-deep-indigo font-body min-h-screen">
      <Header />
      
      <main className="pt-32 pb-32">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16">
          <h1 className="font-headline font-bold text-5xl md:text-6xl text-deep-indigo mb-6">
            Accessibility
          </h1>
          <div className="w-24 h-1 bg-soft-teal rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-deep-indigo/80 font-light leading-relaxed">
            We are committed to making our services and digital platforms accessible to all people, including those with disabilities.
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-soft-teal/10">
            <h2 className="font-headline text-2xl font-bold text-deep-indigo mb-6">Our Commitment</h2>
            <div className="prose prose-lg max-w-none text-deep-indigo/80 font-light leading-relaxed">
              <p className="mb-6">
                CareBase strives to ensure that its services are accessible to people with disabilities. We have invested a significant amount of resources to help ensure that our website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.
              </p>
              <h3 className="font-headline text-xl font-bold text-deep-indigo mt-8 mb-4">Accessibility on CareBasecare.com</h3>
              <p className="mb-6">
                Our site makes available tools that allow the site to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).
              </p>
              <h3 className="font-headline text-xl font-bold text-deep-indigo mt-8 mb-4">Contact Us</h3>
              <p>
                If you wish to report an accessibility issue, have any questions or need assistance, please contact CareBase Customer Support as follows:
              </p>
              <p className="mt-4 font-medium text-calm-blue">
                Email: care@yourcaredomain.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
