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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaafb3d0-8e58-4063-a89f-0b0da8e8c2c2.jpeg"
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
                  <label className="block text-[10px] uppercase tracking-widest text-outline font-bold mb-1 ml-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 py-3 px-1 transition-all placeholder:text-outline/40 text-on-surface"
                    id="email"
                    placeholder="email@example.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <button className="nurturly-gradient text-white w-full py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                  Inquire
                </button>
              </form>

              <div className="mt-8 flex items-center gap-3 text-[10px] text-outline font-bold tracking-[0.2em] uppercase">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  mail
                </span>
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
                alt="Serene high-end interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIyeXAvWSpBomkaFf6TpQBe7ZtucPhUf7DkmRKNZ58iY2j-BMWr8CFYV9RijjYjhksxze2YyP3KfIVyQYzeluuhuuVrmDmy-rnLwdZLJ45cjQH1KqjUY4jXFjF6Z2IGhBRjEW9eYRAXKaIRhLr8o-mbx-8ERH-fJbcQ2Mr-iQgRzT2xWjBNqyLl8Cv9wHfz-216r_nd2hE2gjdQPxnu3oreMcDo3pdjtifMXPH0hkkPtHNcvl6JCAlSdF1ULS6Qgt_9R_2lwm831Kg"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-4 left-4 md:left-10 w-[50%] aspect-square z-30 rounded-2xl overflow-hidden shadow-2xl shadow-on-surface/10 border-[6px] border-surface">
              <img
                className="w-full h-full object-cover"
                alt="Care-focused close up"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhDSEzxXo68ex6fl8ZIPeduwv85X3m9Aqmov_9VtaLOWbHdBfnyo4KbwAU3PFmIy3UqO2Rak1CNgr4-8K7gh7Xi5imNObnR_7vrakn1Ta6qf1vn-IJ0zauF8RHzsLo3YcrOlANzxOZqIt_3iCnqWbgMvxdwqfBLH4OQJ-e5jNWV5SVZg_WPn4XNVXKECzpNsN-DQG1SyMPaB7g0sHMzlY-SYsT_p8bpUbxMFaxEd_cf1RLPIB0PGZy6Ep1BVNH7wbdl9xLvcPPiyxc"
              />
            </div>

            {/* Middle Floating Detail */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35%] aspect-[3/4] z-20 rounded-xl overflow-hidden shadow-xl shadow-on-surface/5 border-[4px] border-surface hidden sm:block">
              <img
                className="w-full h-full object-cover"
                alt="Sanctuary details"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRQJCGUMF-E2cA-VG7cMhcpLl0t3VVY-hrMPNW5hps7bx8rptJ61BT6RUMX0-pLPQM8f4GGr6iHwNzg7GeH5MPV3p6Pj4BSZsJ-3i7lMQLQ_IaWOz1ob7htIazHCaDn2UB5W4U8BUGngUA-_RTFH0Wcrh0F7W671tmq5ttXJl-kY9d03Ed7cRzqOlk5PeVGsnOeRamVgaEivGQUKJHxQSDbeqlItmzMhViftbclxRdbj3lZM4f7-1KsWCPHEzOGZ4MQdtYz5awyRp"
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
              © 2024 Nurturly. Redefining Care, Redefining Time.
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
