import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Nurturly | Care that feels like home',
  description: 'Learn about Nurturly\'s mission to bring comfort, trust, and human connection back into home care. A sanctuary of service built on hospitality and dignity.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body">
        {/* Hero Section: Editorial Asymmetry */}
        <section className="relative px-6 md:px-12 pt-24 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 z-10">
              <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-6 block">
                Our Heart & Philosophy
              </span>
              <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8 font-semibold text-primary">
                Care that <br/><span className="italic">feels</span> like home.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed mb-12 max-w-xl">
                Nurturly was created to bring comfort, trust, and human connection back into home care.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="signature-gradient text-on-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:opacity-95 transition-all">
                  Schedule a Consultation
                </button>
                <button className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface-container-low transition-all">
                  Speak With Our Team
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-20 translate-y-8">
                <img
                  alt="Caregiver holding senior's hand"
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46555651-34a3-4a3b-81f5-f539f4d4db3f.jpeg"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 -left-12 w-80 aspect-square rounded-2xl overflow-hidden shadow-xl z-30 hidden md:block border-8 border-surface">
                <img
                  alt="Senior laughing"
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b1bac61e-8ad4-4812-910c-bcb6c1bfbac3.jpeg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hospitality Section: Tonal Shift */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
                A Sanctuary of Service
              </h2>
              <div className="h-1 w-20 bg-secondary/40 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_32px_rgba(28,28,25,0.04)] border border-outline-variant/10 hover:translate-y-[-4px] transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                  restaurant
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">Nourishing Body & Soul</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We view meal preparation as a moment of connection. Our caregivers craft meals that honor personal tastes and cultural heritage, turning nutrition into a shared joy.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_32px_rgba(28,28,25,0.04)] border border-outline-variant/10 hover:translate-y-[-4px] transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bedtime
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">The Art of Stillness</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  True care happens in the quiet moments. Whether it's reading a favorite book or enjoying the garden, we prioritize the unhurried presence that builds real friendship.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_4px_32px_rgba(28,28,25,0.04)] border border-outline-variant/10 hover:translate-y-[-4px] transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                  spa
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">Dignified Wellness</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our approach to personal care is rooted in the high-touch standards of a boutique spa—maintaining privacy, elegance, and the highest level of human dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Section: Editorial Typography */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <h2 className="font-headline text-5xl font-bold text-primary mb-8">
                Our Founding Promise
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Nurturly was born from a simple realization: home care had become too clinical. We saw a world of checklists and schedules, but very little of the "home" in home care. We set out to change that.
                </p>
                <p>
                  We believe that every senior deserves more than just a provider; they deserve a companion who understands their history, respects their independence, and celebrates their individuality. Our model is built on relationship-based care, where we match caregivers not just based on skills, but on personality and shared interests.
                </p>
                <div className="pt-8 border-t border-outline-variant/20">
                  <blockquote className="italic text-2xl font-headline text-secondary mb-4">
                    "We don't just enter a house; we enter a life. That is a sacred trust we never take lightly."
                  </blockquote>
                  <cite className="block font-bold text-on-surface">
                    — The Nurturly Founders
                  </cite>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="group overflow-hidden rounded-2xl">
                <img
                  alt="Caregiver and senior walking"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFLGIThJZmOlM0uRcdvXDLHo43wCzsBg-6lD39yREFQvyZSWucLCsHgg3NjuqscKp5bH_-w24JYgste7JgwawRfB_7mTjp_Jn8qHpsW6KZLxguEWH-Mm9VbnNaI_w5LRb6QZSAYBz2m2xoRV0Se8ryFQxsBqvNpGsVr8WcbXjNlL4wegohhMdfr1JT6JZBTH6W1BuxfZtbT5coowlc7qvUjAlBZwNrVRtWvGtolp-AMmggCJ8po6aQYsYu2ZgmZHl6Z0cGbg2YUpKf"
                />
              </div>

              <div className="bg-tertiary-container/10 p-12 rounded-3xl">
                <h4 className="font-headline text-2xl font-bold text-on-tertiary-container mb-6">
                  Why Hospitality Matters
                </h4>
                <p className="text-on-surface-variant mb-8">
                  In a hospital, you are a patient. In a hotel, you are a guest. At Nurturly, you are the host of your own life, and we are here to ensure your environment remains a sanctuary of peace and comfort.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Personalized Concierge-Level Support
                  </li>
                  <li className="flex items-center gap-4 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Thoughtful Household Management
                  </li>
                  <li className="flex items-center gap-4 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Deep Emotional & Cognitive Engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
                The Nurturly Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">Rigorous Selection</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Only the top 5% of applicants join our team. Each caregiver undergoes extensive clinical testing, background verification, and emotional intelligence assessment.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">Relationship-First Matching</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    We match caregivers with clients based on personality, interests, and values—not just clinical skills. Great relationships are the foundation of great care.
                  </p>
                </div>

                <div className="border-l-4 border-tertiary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">Ongoing Training</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our caregivers participate in continuous education on clinical best practices, emotional intelligence, and the latest in elder care innovation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">White-Glove Coordination</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Your dedicated care manager oversees every detail, coordinates with healthcare providers, and ensures seamless continuity of care.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">Transparency & Trust</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Real-time updates, open communication, and honest conversations ensure you're always informed and confident in your care choices.
                  </p>
                </div>

                <div className="border-l-4 border-tertiary pl-8">
                  <h3 className="font-headline text-2xl font-bold mb-3">Flexibility & Personalization</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Every care plan is uniquely crafted to honor your lifestyle, preferences, and evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA: The Sanctuary Canvas */}
        <section className="mb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] overflow-hidden relative p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <img
                alt="Warm home texture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUhN15gPT31z1dl5rV2ZcSVYMlSWvKvW-7QnOWbqLPDPk9zD1e4UtM9KDe2kUeQPPhq0_znNpjoB6fiJWD37CF5sMYCytbTJMsKs3Kc7eSTqdHYsa32qVbKv8pEPB0WU4vPvdvJGIGMRuT3q3UF5XPR5GQlIPv1q6VeKxqnqBNLeT2ci8eWMVPNK7vj0Enu3bD9prabvhrfh6byH2YumfUT5ETQx5IxLIFUrL44k4sb6-uEXl0C3H7LNQAdbMVZwGFFCtlo9TBSgm"
                />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to experience the Nurturly difference?
              </h2>
              <p className="text-on-primary-container text-xl mb-12 opacity-90 leading-relaxed">
                Join the families who have rediscovered peace of mind through our attentive, hospitality-first approach to home care.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-white transition-all">
                  Schedule a Consultation
                </button>
                <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Speak With Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-headline text-3xl italic text-primary mb-6">Nurturly</div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Redefining the home care experience through the lens of luxury hospitality and human connection.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-on-surface-variant hover:text-primary transition-all text-sm">Home</a></li>
              <li><a href="/services" className="text-on-surface-variant hover:text-primary transition-all text-sm">Services</a></li>
              <li><a href="/contact" className="text-on-surface-variant hover:text-primary transition-all text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              <li><a href="/careers" className="text-on-surface-variant hover:text-primary transition-all text-sm">Careers</a></li>
              <li><a href="/resources" className="text-on-surface-variant hover:text-primary transition-all text-sm">Resources</a></li>
              <li><a href="/how-it-works" className="text-on-surface-variant hover:text-primary transition-all text-sm">How It Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><a href="/privacy" className="text-on-surface-variant hover:text-primary transition-all text-sm">Privacy</a></li>
              <li><a href="/accessibility" className="text-on-surface-variant hover:text-primary transition-all text-sm">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-outline-variant/10 pt-8">
          <p className="text-on-surface-variant text-sm text-center md:text-left">
            © 2026 Nurturly. Redefining Care, Redefining Time.
          </p>
        </div>
      </footer>
    </>
  )
}
