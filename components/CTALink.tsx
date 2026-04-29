'use client'

import Link from 'next/link'
import { trackCTAClick } from '@/lib/analytics'

interface CTALinkProps {
  href: string
  label: string        // human-readable label sent to GA4 (e.g. "Schedule Consultation")
  className?: string
  children: React.ReactNode
  id?: string
}

/**
 * Drop-in replacement for <Link> on primary CTA buttons.
 * Fires a GA4 `cta_click` event before navigation.
 *
 * Usage:
 *   <CTALink href="/contact" label="Hero CTA — Schedule Consultation">
 *     Schedule a Consultation
 *   </CTALink>
 */
export default function CTALink({ href, label, className, children, id }: CTALinkProps) {
  return (
    <Link
      href={href}
      id={id}
      className={className}
      onClick={() => trackCTAClick(label, href)}
    >
      {children}
    </Link>
  )
}
