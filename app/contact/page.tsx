import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Contact Us | Nurturly',
  description: 'Get in touch with Nurturly to learn more about our home care services.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-screen-2xl mx-auto px-12">
          {/* Hero / Editorial Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-5 pt-12">
              <h1 className="text-7xl md:text-8xl font-headline italic text-primary leading-none mb-8">Contact Us</h1>
              <p className="text-xl md:text-2xl font-body text-on-surface-variant leading-relaxed max-w-lg">
                Start with a conversation. We&apos;ll listen, understand your situation, and help you figure out next steps.
              </p>
              <div className="mt-16 space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  </div>
                  <div>
                    <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Phone</p>
                    <p className="text-2xl font-headline text-on-surface">1-800-NURTURE</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                    <p className="text-2xl font-headline text-on-surface">hello@nurturly.care</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  </div>
                  <div>
                    <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-1">In-Home Visit</p>
                    <p className="text-2xl font-headline text-on-surface">Consultation Request</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              {/* Image */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="warm scene of a caregiver gently holding an elderly woman's hand in a sunlit living room"
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46555651-34a3-4a3b-81f5-f539f4d4db3f.jpeg"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-12 -left-12 w-64 h-80 bg-secondary-container/20 rounded-xl -z-0"></div>
            </div>
          </div>

          {/* Form Section */}
          <section className="mt-32 max-w-4xl mx-auto bg-surface-container-low rounded-xl p-12 md:p-20 shadow-sm border border-outline-variant/10">
            <div className="mb-12">
              <h2 className="text-4xl font-headline mb-4">Send a Message</h2>
              <p className="text-on-surface-variant">Tell us a bit about your needs, and a care coordinator will reach out within 24 hours.</p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <label className="block text-sm font-label text-on-surface-variant mb-2">Name</label>
                  <input
                    className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
                    placeholder="Your full name"
                    type="text"
                  />
                </div>
                <div className="group relative">
                  <label className="block text-sm font-label text-on-surface-variant mb-2">Email</label>
                  <input
                    className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
                    placeholder="example@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <label className="block text-sm font-label text-on-surface-variant mb-2">Phone</label>
                  <input
                    className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300"
                    placeholder="(555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="group relative">
                  <label className="block text-sm font-label text-on-surface-variant mb-2">Interested In</label>
                  <select className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300">
                    <option>Consultation Request</option>
                    <option>General Inquiry</option>
                    <option>Career Opportunities</option>
                  </select>
                </div>
              </div>
              <div className="group relative">
                <label className="block text-sm font-label text-on-surface-variant mb-2">Message</label>
                <textarea
                  className="w-full bg-surface-container-high border-0 border-b border-outline-variant/30 px-4 py-4 rounded-t-lg focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all duration-300 resize-none"
                  placeholder="How can we help your family?"
                  rows={5}
                ></textarea>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  className="signature-gradient text-on-primary px-12 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          {/* Location Section */}
          <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden h-[400px] shadow-lg border border-outline-variant/20">
              <div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="absolute flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <div className="bg-surface-container-lowest px-4 py-2 rounded-lg shadow-xl mt-2">
                    <p className="text-sm font-bold text-primary">Nurturly HQ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-5xl font-headline text-secondary leading-tight italic">Rooted in our community.</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We provide personalized home care across the greater metropolitan area. While our headquarters is a hub of coordination, our heart is in the homes of our clients.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-on-surface">Main Office</p>
                <p className="text-on-surface-variant">122 Sanctuary Blvd, Ste 400<br/>Portland, OR 97204</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface text-surface-container py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-sm tracking-wide text-center md:text-left">
            © 2026 Nurturly. Redefining Care, Redefining Time.
          </p>
        </div>
      </footer>
    </>
  )
}
