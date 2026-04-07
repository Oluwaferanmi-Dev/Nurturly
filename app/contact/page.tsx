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
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light">
              If you&apos;re exploring care for yourself or a loved one, we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface-container-lowest py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-on-surface leading-relaxed">
                Start with a conversation. We&apos;ll listen, understand your situation, and help you figure out next steps.
              </p>
              <p className="text-lg text-on-surface leading-relaxed">
                Call us, email us, or request a consultation and our team will reach out to you.
              </p>
            </div>

            <div className="bg-surface-container p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="font-headline text-lg font-semibold text-on-surface flex items-center gap-3">
                    <span className="material-symbols-outlined">phone</span>
                    Call Us
                  </h3>
                  <p className="text-on-surface-variant">
                    <a href="tel:contact@nurturlycare.com" className="text-primary hover:underline font-medium">
                      care@nurturlycare.com
                    </a>
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-headline text-lg font-semibold text-on-surface flex items-center gap-3">
                    <span className="material-symbols-outlined">mail</span>
                    Email Us
                  </h3>
                  <p className="text-on-surface-variant">
                    <a href="mailto:care@nurturlycare.com" className="text-primary hover:underline font-medium">
                      care@nurturlycare.com
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/10">
                  <button className="signature-gradient text-white px-8 py-4 rounded-xl font-medium tracking-wide shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Request a Consultation
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 md:p-10 rounded-2xl border border-outline-variant/10">
              <p className="text-lg text-on-surface italic">
                We&apos;re here so you can breathe a little easier.
              </p>
            </div>
          </div>
        </section>
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
