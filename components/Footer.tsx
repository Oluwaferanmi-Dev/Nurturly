import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/nurturly-logo.png"
                alt="Nurturly Care"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-body">
              Providing world-class home care that honours the sanctuary of the
              home and the dignity of the individual.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:hello@nurturlycare.com"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
                aria-label="Email us"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <a
                href="tel:+18008687883"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all"
                aria-label="Call us"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Home Care</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Memory Care</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Post-Surgery Care</Link></li>
              <li><Link href="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Companionship</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-on-surface-variant hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/why-us" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Why Nurturly</Link></li>
              <li><Link href="/careers" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/resources" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Contact</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Get in Touch</Link></li>
              <li><Link href="/service-areas" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link href="/for-families" className="text-sm text-on-surface-variant hover:text-primary transition-colors">For Families</Link></li>
              <li><Link href="/for-professionals" className="text-sm text-on-surface-variant hover:text-primary transition-colors">For Professionals</Link></li>
            </ul>
            <div className="pt-4 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-widest text-primary">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/accessibility" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-on-surface-variant">
            © {year} Nurturly Care. Redefining Care, Redefining Time.
          </p>
          <Link
            href="/contact"
            className="text-xs font-semibold text-primary hover:underline underline-offset-4 transition-colors"
          >
            Book a Free Consultation →
          </Link>
        </div>

      </div>
    </footer>
  )
}
