import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-nurturly-deep-indigo text-white w-full border-t border-nurturly-soft-teal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <img
                src="/nurturly-logo.png"
                alt="Nurturly Care"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
              Providing world-class home care that honors the sanctuary of the
              home and the dignity of the individual.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@nurturlycare.com"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-nurturly-soft-teal hover:border-nurturly-soft-teal hover:text-white transition-all shadow-sm"
                aria-label="Email us"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
              <a
                href="tel:+18008687883"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-nurturly-soft-teal hover:border-nurturly-soft-teal hover:text-white transition-all shadow-sm"
                aria-label="Call us"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-nurturly-soft-teal">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm font-light text-white/70 hover:text-white transition-colors">Home Care</Link></li>
              <li><Link href="/services" className="text-sm font-light text-white/70 hover:text-white transition-colors">Memory Care</Link></li>
              <li><Link href="/services" className="text-sm font-light text-white/70 hover:text-white transition-colors">Post-Surgery Care</Link></li>
              <li><Link href="/services" className="text-sm font-light text-white/70 hover:text-white transition-colors">Companionship</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-nurturly-soft-teal">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm font-light text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-sm font-light text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/why-us" className="text-sm font-light text-white/70 hover:text-white transition-colors">Why Nurturly</Link></li>
              <li><Link href="/careers" className="text-sm font-light text-white/70 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/resources" className="text-sm font-light text-white/70 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-nurturly-soft-teal">Contact</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-sm font-light text-white/70 hover:text-white transition-colors">Get in Touch</Link></li>
              <li><Link href="/service-areas" className="text-sm font-light text-white/70 hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/for-families" className="text-sm font-light text-white/70 hover:text-white transition-colors">For Families</Link></li>
              <li><Link href="/for-professionals" className="text-sm font-light text-white/70 hover:text-white transition-colors">For Professionals</Link></li>
            </ul>
            <div className="pt-6 mt-6 border-t border-white/10 space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-nurturly-soft-teal">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-sm font-light text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/accessibility" className="text-sm font-light text-white/70 hover:text-white transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-light text-white/50 tracking-wide">
            © {year} Nurturly Care. Redefining Care, Redefining Time.
          </p>
          <Link
            href="/contact"
            className="text-xs font-bold tracking-widest uppercase text-white hover:text-nurturly-soft-teal transition-colors flex items-center gap-2"
          >
            Book a Consultation
             <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

      </div>
    </footer>
  )
}
