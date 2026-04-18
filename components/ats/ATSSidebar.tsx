'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/ats', icon: 'dashboard', label: 'Dashboard', exact: true },
  { href: '/ats/applicants', icon: 'group', label: 'Applicants', exact: false },
  { href: '/ats/pipeline', icon: 'view_kanban', label: 'Pipeline Board', exact: false },
  { href: '/ats/settings', icon: 'settings', label: 'Settings', exact: false },
]

export default function ATSSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col py-8 px-6 bg-[#fcf9f4] shadow-sm z-50 border-r border-surface-container">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-headline text-primary tracking-tight">Nurturly</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-body mt-1">
          Recruiter Portal
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 active:scale-[0.98] ${
                isActive
                  ? 'text-primary font-bold border-r-4 border-primary bg-surface-container-low'
                  : 'text-secondary hover:text-primary hover:bg-surface-container-high'
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300",
                }}
              >
                {item.icon}
              </span>
              <span className="font-body text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href="/careers"
          target="_blank"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white font-body text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Applicant
        </Link>
      </div>
    </aside>
  )
}
