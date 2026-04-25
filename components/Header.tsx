'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/for-families', label: 'For Families' },
    { href: '/for-professionals', label: 'For Professionals' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar with Logo */}
      <div className="bg-warm-yellow py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link href="/" className="flex items-center">
            <img
              alt="Nurturly Logo"
              className="h-12 w-auto object-contain transition-transform hover:scale-105"
              src="/nurturly-logo.png"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-deep-indigo shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white hover:text-calm-blue transition-colors tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-block px-8 py-3 bg-soft-teal text-white rounded-full text-sm font-bold shadow-md hover:bg-calm-blue transition-colors duration-200"
          >
            Book a Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none ml-auto"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-deep-indigo border-t border-soft-teal/20">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-bold tracking-widest uppercase text-white hover:text-calm-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-soft-teal/20 mt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-8 py-3 bg-soft-teal text-white rounded-full text-sm font-bold hover:bg-calm-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
