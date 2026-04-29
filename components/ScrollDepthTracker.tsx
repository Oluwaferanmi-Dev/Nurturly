'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackScrollDepth } from '@/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100]

/**
 * Fires GA4 `scroll_depth` events at 25 / 50 / 75 / 100% thresholds.
 * Resets on each route change so every page is tracked independently.
 * Drop once in the root layout — completely invisible to users.
 */
export default function ScrollDepthTracker() {
  const pathname = usePathname()
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    // Reset on route change
    firedRef.current = new Set()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const pct = Math.round((scrollTop / docHeight) * 100)

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold)
          trackScrollDepth(threshold, pathname)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return null
}
