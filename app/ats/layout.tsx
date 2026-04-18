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
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <ATSSidebar />
      <div className="pl-64 min-h-screen flex flex-col">{children}</div>
    </div>
  )
}
