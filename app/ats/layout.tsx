import type { Metadata } from 'next'
import ATSSidebar from '@/components/ats/ATSSidebar'

export const metadata: Metadata = {
  title: {
    default: 'Nurturly ATS',
    template: '%s | Nurturly ATS',
  },
  robots: { index: false, follow: false },
}

export default function ATSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: '#fcf9f4', color: '#1c1c19' }}>
      <ATSSidebar />
      {/* On desktop: offset by sidebar width. On mobile: no offset (sidebar is overlay/drawer) */}
      <div className="md:pl-64 min-h-screen flex flex-col">{children}</div>
    </div>
  )
}
