'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-nurturly-soft-teal/10 shadow-sm transition-all">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            alt="Nurturly Logo"
            className="h-10 w-auto object-contain transition-transform hover:scale-105"
            src="/nurturly-logo.png"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-nurturly-deep-indigo/80 hover:text-nurturly-soft-teal transition-colors tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 bg-nurturly-soft-teal text-white rounded-xl text-sm font-bold shadow-md hover:bg-nurturly-deep-indigo transition-all transform hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-nurturly-deep-indigo transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-nurturly-deep-indigo transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-nurturly-deep-indigo transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-nurturly-soft-teal/10 shadow-lg lg:hidden">
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-bold tracking-wide uppercase text-nurturly-deep-indigo/80 hover:text-nurturly-soft-teal transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-nurturly-soft-teal/10 mt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-nurturly-soft-teal shadow-md text-white rounded-xl text-sm font-bold hover:bg-nurturly-deep-indigo transition-all"
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
