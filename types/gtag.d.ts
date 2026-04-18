// Extends the Window interface to include the GA4 gtag function
// injected by the Google Analytics script in layout.tsx

interface Window {
  gtag: (
    command: 'event' | 'config' | 'js' | 'set',
    targetId: string | Date,
    params?: Record<string, unknown>,
  ) => void
  dataLayer: unknown[]
}
