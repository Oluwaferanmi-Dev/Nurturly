import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nurturly | Coming Soon - Redefining Care, Redefining Time',
  description: 'We are curating a new sanctuary of support—where heritage hospitality meets the precision of modern care. Join the waitlist for our exclusive launch.',
  keywords: ['home care', 'elderly care', 'caregiver', 'in-home care', 'coming soon'],
  openGraph: {
    title: 'Nurturly | Coming Soon',
    description: 'We are curating a new sanctuary of support—where heritage hospitality meets the precision of modern care.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      {/* Header with prominent centered logo */}
      <header className="w-full pt-16 pb-8 md:pt-24 md:pb-12 px-8 flex justify-center items-center">
        <div className="max-w-7xl w-full flex justify-center">
          <img
            alt="Nurturly Logo"
            className="h-20 md:h-32 w-auto object-contain"
            src="/nurturly-logo.png"
          />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pb-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* Content Column */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-secondary font-label tracking-[0.2em] text-xs uppercase font-semibold">
                Coming Soon
              </span>
              <h1 className="font-headline italic text-5xl lg:text-7xl leading-[1.1] text-primary tracking-tight">
                Redefining Care, <br />
                <span className="text-on-surface">Redefining Time</span>
              </h1>
              <p className="text-on-surface-variant text-lg lg:text-xl max-w-lg leading-relaxed font-light">
                We are curating a new sanctuary of support—where heritage hospitality meets the precision of modern care. Join the waitlist for our exclusive launch.
              </p>
            </div>

            {/* Inquiry Card */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-sm border border-outline-variant/10 max-w-md">
              <h3 className="font-headline text-2xl text-on-surface mb-2">Be the first to know</h3>
              <p className="text-on-surface-variant text-sm mb-8">Register your interest for our private launch.</p>
              <form action="mailto:care@nurturlycare.com" className="space-y-6" encType="text/plain" method="post">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest text-outline font-bold mb-1 ml-1" htmlFor="email">Email Address</label>
                  <input className="w-full bg-surface-container-high border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 py-3 px-1 transition-all placeholder:text-outline/40 text-on-surface" id="email" placeholder="email@example.com" type="email" />
                </div>
                <button className="signature-gradient text-white w-full py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                  Inquire
                </button>
              </form>
              <div className="mt-8 flex items-center gap-3 text-[10px] text-outline font-bold tracking-[0.2em] uppercase">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <span>care@nurturlycare.com</span>
              </div>
            </div>
          </div>

          {/* Image Gallery Trio (Smaller, Overlapping, Soft Shadows) */}
          <div className="relative h-[450px] lg:h-[550px] order-1 lg:order-2 flex items-center justify-center">
            {/* Top Right Image */}
            <div className="absolute top-0 right-4 md:right-10 w-[55%] aspect-[4/5] z-10 rounded-2xl overflow-hidden shadow-xl shadow-on-surface/5 border border-surface-container-high">
              <img
                className="w-full h-full object-cover"
                alt="Elderly man and caregiver sharing a meal together"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42b3fbd6-d104-44e0-a6ce-4689a68d4b0d.jpeg"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-4 left-4 md:left-10 w-[50%] aspect-square z-30 rounded-2xl overflow-hidden shadow-2xl shadow-on-surface/10 border-[6px] border-surface">
              <img
                className="w-full h-full object-cover"
                alt="Two people holding hands with health monitoring smartwatch"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b1bac61e-8ad4-4812-910c-bcb6c1bfbac3.jpeg"
              />
            </div>

            {/* Middle Floating Detail */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35%] aspect-[3/4] z-20 rounded-xl overflow-hidden shadow-xl shadow-on-surface/5 border-[4px] border-surface hidden sm:block">
              <img
                className="w-full h-full object-cover"
                alt="Caregiver in blue scrubs with elderly woman on couch"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46555651-34a3-4a3b-81f5-f539f4d4db3f.jpeg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-low mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 max-w-7xl mx-auto gap-8 w-full">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline text-lg font-semibold text-primary">Nurturly</span>
            <p className="font-body text-sm tracking-wide text-on-surface/60 text-center md:text-left">
              © 2026 Nurturly. Redefining Care, Redefining Time.
            </p>
          </div>
          <nav className="flex gap-8">
            <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-colors" href="#">
              Philosophy
            </a>
            <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-colors" href="#">
              Heritage
            </a>
            <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-colors" href="#">
              Our Service
            </a>
            <a className="font-body text-sm tracking-wide text-on-surface/60 hover:text-primary transition-colors" href="#">
              Contact
            </a>
          </nav>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary text-xl cursor-pointer hover:opacity-70 transition-opacity" data-icon="mail">
              mail
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
