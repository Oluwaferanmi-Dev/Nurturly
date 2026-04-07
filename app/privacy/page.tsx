import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Privacy Policy & Accessibility | Nurturly',
  description: 'Nurturly\'s commitment to transparency, data protection, and accessibility. Learn how we safeguard your privacy and maintain digital inclusivity.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground font-body">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
              <div className="lg:col-span-8">
                <span className="text-secondary/60 font-semibold tracking-widest text-xs uppercase mb-6 block">
                  Trust & Governance
                </span>
                <h1 className="font-headline text-6xl md:text-7xl font-bold italic tracking-tight text-primary leading-tight">
                  Transparency<br/>& Stewardship
                </h1>
              </div>
              <div className="lg:col-span-4 border-l border-border/30 pl-8">
                <p className="text-muted-foreground font-light leading-relaxed italic text-lg">
                  &quot;In every touchpoint of care, privacy and dignity are the foundations of our sanctuary.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <nav className="space-y-8">
              <div>
                <p className="text-xs font-bold text-muted-foreground/50 uppercase tracking-tighter mb-6">
                  Documentation
                </p>
                <ul className="space-y-4 text-sm font-body">
                  <li>
                    <a
                      className="text-primary font-bold border-b-2 border-primary/20 pb-1 flex items-center gap-2 transition-all"
                      href="#privacy"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      href="#accessibility"
                    >
                      Accessibility Statement
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      href="#rights"
                    >
                      Your Rights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border/20">
                <div className="bg-card p-6 rounded-xl border border-border/20">
                  <p className="text-xs font-semibold text-primary mb-2">Need Assistance?</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Our legal team is here to help clarify any terminology.
                  </p>
                  <a
                    className="text-xs font-bold underline underline-offset-4 text-secondary hover:text-secondary-foreground transition-colors"
                    href="mailto:privacy@nurturly.care"
                  >
                    Contact Privacy Officer
                  </a>
                </div>
              </div>
            </nav>
          </aside>

          {/* Document Canvas */}
          <article className="lg:col-span-9 bg-card rounded-2xl p-12 shadow-sm border border-border/20">
            {/* Privacy Policy Section */}
            <section className="mb-24" id="privacy">
              <h2 className="text-4xl font-headline text-primary mb-8 font-bold">Privacy Policy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <strong>Last updated: December 2024.</strong> Your trust is our most valued asset. At Nurturly, we curate a digital environment that reflects the safety of the homes we care for.
              </p>

              <div className="space-y-12">
                {/* Data Collection */}
                <div>
                  <h3 className="text-2xl font-headline text-secondary mb-6 flex items-center gap-3 font-bold">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                    Data Collection & Purpose
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body mb-6">
                    We collect information that you voluntarily provide when engaging with our services, including health history and preference profiles. This data is strictly utilized to provide personalized care solutions and is never shared with third-party marketers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background p-8 rounded-lg border border-border/20">
                      <h4 className="font-headline text-lg font-bold mb-3 text-foreground">Client Protection</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All personal health information (PHI) is encrypted using industry-leading protocols, ensuring your family&apos;s history remains within our sanctuary.
                      </p>
                    </div>
                    <div className="bg-background p-8 rounded-lg border border-border/20">
                      <h4 className="font-headline text-lg font-bold mb-3 text-foreground">Service Refinement</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Usage data helps us refine our interface and navigation to better serve families and aging demographics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Sharing */}
                <div className="pt-8 border-t border-border/20">
                  <h3 className="text-2xl font-headline text-secondary mb-6 flex items-center gap-3 font-bold">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      security
                    </span>
                    Information Sharing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    Nurturly only shares data with authorized caregivers and medical professionals designated by you. We strictly adhere to HIPAA and GDPR standards to ensure a global standard of care and protection.
                  </p>
                </div>
              </div>
            </section>

            {/* Accessibility Section */}
            <section className="pt-16 border-t border-border/20 mb-24" id="accessibility">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-headline text-primary mb-8 font-bold">Accessibility Statement</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We believe care should be boundless. Our digital sanctuary is designed to be inclusive, ensuring that every senior and their family can navigate our services with dignity and ease.
                  </p>
                  <ul className="space-y-4 font-body text-muted-foreground">
                    <li className="flex items-start gap-4">
                      <span
                        className="material-symbols-outlined text-primary mt-1 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>High-contrast typography for visual clarity across all screen sizes.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span
                        className="material-symbols-outlined text-primary mt-1 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>Screen reader optimization for all imagery and interactive elements.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span
                        className="material-symbols-outlined text-primary mt-1 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>Keyboard-only navigation for those with limited motor functions.</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full bg-background rounded-xl overflow-hidden shadow-md border border-border/20 sticky top-32">
                  <img
                    alt="Close-up of a caregiver's hand gently guiding a senior's hand over a large tablet screen in a sunlit warm room"
                    className="w-full h-48 object-cover opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI9_CPAaG2HkB6jevyXsVwYGkRLnFGsAhip_ZXTDkZdjyYSz_Pe92SJK9HKJmcTPjPKGtjhLiRvwn6QdSYy1ANMy3MxnAD-JRsfLYDXy4JqMA6zIr8d3AaJkqx83pADky_R8Qqev4IOqHju-Nujq3w_mECrZ-GLEe86-8ZC1hOXCQLU_PTHS5AgJ9EhMHrdOur8AfGY9JghxHGnEpeu-nD_IHncDG7b8kDK5BCac9xlBhGXlRuUmaAKRiFjBTlNZHCaBnh99trooaf"
                  />
                  <div className="p-6">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-2">Our Standard</p>
                    <p className="text-xs font-medium italic text-foreground">WCAG 2.1 AA Certified Experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights Section */}
            <section className="pt-16 border-t border-border/20" id="rights">
              <h2 className="text-4xl font-headline text-primary mb-12 font-bold">Your Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 bg-secondary/5 rounded-xl border border-border/20">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    folder_shared
                  </span>
                  <h4 className="font-headline text-xl font-bold mb-3 text-foreground">The Right to Access</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Request a full export of all personal information we hold about your family care profile.
                  </p>
                </div>

                <div className="p-8 bg-secondary/5 rounded-xl border border-border/20">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    edit_note
                  </span>
                  <h4 className="font-headline text-xl font-bold mb-3 text-foreground">The Right to Rectify</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Update health records or preferences at any time through your secure dashboard.
                  </p>
                </div>

                <div className="p-8 bg-secondary/5 rounded-xl border border-border/20">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    delete_forever
                  </span>
                  <h4 className="font-headline text-xl font-bold mb-3 text-foreground">The Right to Erasure</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Request the complete removal of your data from our systems upon termination of service.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <div className="relative rounded-3xl overflow-hidden bg-primary p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                alt="Abstract soft focus of linen fabric texture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1NYrxF5ASzFF7yNan5ZlLcFkgLCDXKCxKQvehM9NM6mrjZFG9q0l1zQuDv3WPBIMk7-i8enHpTmbN1aVAgMPorZQoXONz11c3DlNhlTe1WGq6NXlwiGz4WkG5ihYeUNS9vGRMFErbCZTFGtq3-tJQXi4ZkjsBlv1CdzWVY8MDW5WmRhowvGooe54wgva57pXB3xNAA5M7TSD7kWo24Qi-fvGDvrvE7bbs1cC5x2j4IKSh4XJ2AVR4kzt0xO6nxmmAxcyg_CFNAo-N"
                />
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-headline text-white font-bold mb-6 italic">
                Secure your legacy with Nurturly
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Ready to experience the next generation of boutique home care? Our team is standing by to curate a personalized plan for your loved ones.
              </p>
              <button className="bg-card text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:opacity-90 transition-all">
                Start Your Application
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/5 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <div>
            <div className="font-headline text-3xl italic text-primary font-bold mb-4">Nurturly</div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Curating high-end home care experiences with a heart for heritage and hospitality.
            </p>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 text-sm uppercase tracking-wider">Company</h5>
            <ul className="space-y-4 font-body text-sm text-muted-foreground">
              <li><a className="hover:text-primary transition-colors" href="/">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="/">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="/">Community</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 text-sm uppercase tracking-wider">Support</h5>
            <ul className="space-y-4 font-body text-sm text-muted-foreground">
              <li><a className="hover:text-primary transition-colors" href="/">FAQ</a></li>
              <li><a className="text-primary font-medium" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="/">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-primary font-bold mb-6 text-sm uppercase tracking-wider">Newsletter</h5>
            <p className="text-muted-foreground font-body text-xs mb-4">Stay updated with our seasonal health and wellness insights.</p>
            <div className="flex gap-2">
              <input
                className="bg-input border border-border rounded-lg px-4 py-2 text-xs w-full text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary outline-none"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-all">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 px-6 md:px-12 py-8 max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-body text-xs">
            © 2026 Nurturly Home Care. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
