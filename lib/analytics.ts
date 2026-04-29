/**
 * GA4 event tracking utilities.
 * All custom events are defined here to keep tracking consistent
 * and avoid magic strings scattered across components.
 *
 * Usage:
 *   import { trackEvent } from '@/lib/analytics'
 *   trackEvent('contact_form_submit', { care_type: 'companionship' })
 */

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: string | number | boolean | undefined
}

// Type-safe wrapper around window.gtag
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', action, {
    event_category: params?.category ?? 'engagement',
    ...params,
  })
}

// ─── Predefined events ────────────────────────────────────────────────────────

/** Fired when a family contact form is successfully submitted */
export function trackContactFormSubmit(careType?: string) {
  trackEvent('contact_form_submit', {
    category: 'lead_generation',
    label: 'contact_page',
    care_type: careType ?? 'not_specified',
  })
}

/** Fired when a job application is successfully submitted */
export function trackApplicationSubmit(experience?: string) {
  trackEvent('application_submit', {
    category: 'recruitment',
    label: 'careers_page',
    experience_level: experience ?? 'not_specified',
  })
}

/** Fired when a primary CTA button/link is clicked */
export function trackCTAClick(label: string, destination: string) {
  trackEvent('cta_click', {
    category: 'engagement',
    label,
    destination,
  })
}

/** Fired at scroll depth milestones (25%, 50%, 75%, 100%) */
export function trackScrollDepth(depth: number, page: string) {
  trackEvent('scroll_depth', {
    category: 'engagement',
    label: page,
    value: depth,
    percent_scrolled: depth,
  })
}
