import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Nurturly',
  description: 'Get in touch with Nurturly to learn more about our home care services.',
}

export default function Contact() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nurturlycare.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://nurturlycare.com/contact' },
    ],
  }

  return (
    <div className="bg-nurturly-bg text-nurturly-deep-indigo font-body min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Hero / Editorial Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="pt-12">
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-nurturly-deep-indigo mb-8 leading-tight">
                Let's start with a <span className="italic font-light text-nurturly-soft-teal">conversation.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-nurturly-deep-indigo/80 leading-relaxed max-w-lg mb-12">
                We'll listen to your story, understand your family's situation, and help you figure out the best next steps—even if it's not with us.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-nurturly-calm-blue/10 flex items-center justify-center text-nurturly-calm-blue shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-nurturly-deep-indigo/60 mb-1">Phone</p>
                    <p className="text-2xl font-headline font-bold text-nurturly-deep-indigo">1-800-NURTURE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-nurturly-soft-teal/10 flex items-center justify-center text-nurturly-soft-teal shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-nurturly-deep-indigo/60 mb-1">Email</p>
                    <p className="text-2xl font-headline font-bold text-nurturly-deep-indigo">hello@nurturlycare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-nurturly-sage/10 flex items-center justify-center text-nurturly-sage shrink-0">
                    <span className="material-symbols-outlined text-2xl">event_available</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-nurturly-deep-indigo/60 mb-1">In-Home Visit</p>
                    <p className="text-2xl font-headline font-bold text-nurturly-deep-indigo">Care Consultation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Image */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="Warm conversation between caregiver and senior"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-7QXyc8b4Mxc?auto=format&fit=crop&q=80&w=1200"
              />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-64 h-80 bg-nurturly-warm-yellow/20 rounded-2xl -z-0"></div>
            </div>
          </div>

          {/* Form Section */}
          <section className="bg-white rounded-3xl p-10 md:p-20 shadow-lg border border-nurturly-soft-teal/10 relative overflow-hidden">
            <div className="mb-12 relative z-10">
              <h2 className="text-4xl font-headline font-bold text-nurturly-deep-indigo mb-4">Send us a Message</h2>
              <p className="text-nurturly-deep-indigo/70 text-lg font-light max-w-2xl">
                Tell us a bit about your loved one's needs, and our care coordinator will reach out within 24 hours to schedule a complimentary assessment.
              </p>
            </div>
            <div className="relative z-10">
              <ContactForm />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-nurturly-bg rounded-bl-full pointer-events-none -z-0 opacity-50"></div>
          </section>

          {/* Location Section */}
          <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden h-[400px] shadow-lg border border-nurturly-soft-teal/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1531218150217-5afc4900b475?auto=format&fit=crop&q=80" 
                alt="Houston skyline" 
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-nurturly-deep-indigo/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl drop-shadow-md">location_on</span>
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl mt-4">
                  <p className="text-lg font-bold text-nurturly-deep-indigo">Houston, TX</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-4xl md:text-5xl font-headline text-nurturly-deep-indigo font-bold leading-tight">
                Rooted in our community.
              </h3>
              <p className="text-lg text-nurturly-deep-indigo/80 font-light leading-relaxed">
                We provide personalized, hospitality-informed home care across the greater Houston metro area. Our heart is in the homes of our clients — and in the communities they call home.
              </p>
              <div className="pt-6 border-t border-nurturly-soft-teal/10 space-y-2">
                <p className="font-bold text-nurturly-deep-indigo flex items-center gap-2">
                  <span className="material-symbols-outlined text-nurturly-soft-teal text-sm">home_work</span>
                  Greater Houston Area
                </p>
                <p className="text-nurturly-deep-indigo/70 font-light pl-6">
                  Serving Houston, Sugar Land, Katy, Pearland, and The Woodlands.
                </p>
              </div>
            </div>
          </section>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
