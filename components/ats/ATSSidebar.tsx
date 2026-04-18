'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/ats', icon: 'dashboard', label: 'Dashboard', exact: true },
  { href: '/ats/applicants', icon: 'group', label: 'Applicants', exact: false },
  { href: '/ats/pipeline', icon: 'view_kanban', label: 'Pipeline Board', exact: false },
  { href: '/ats/settings', icon: 'settings', label: 'Settings', exact: false },
]

export default function ATSSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const sidebar = (
    <div
      className="flex flex-col h-full py-8 px-6"
      style={{ background: '#fcf9f4', borderRight: '1px solid #e4e2dc' }}
    >
      {/* Logo */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: '#006d77', fontFamily: 'Georgia, serif' }}
          >
            Nurturly
          </h1>
          <p
            className="text-[10px] uppercase tracking-[0.2em] mt-1"
            style={{ color: '#4a6367', opacity: 0.6 }}
          >
            Recruiter Portal
          </p>
        </div>
        {/* Close button — mobile only */}
        <button
          className="md:hidden p-1 rounded-lg"
          style={{ color: '#42413e' }}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
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
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
              style={{
                color: isActive ? '#006d77' : '#4a6367',
                background: isActive ? '#d0f0f3' : 'transparent',
                fontWeight: isActive ? 700 : 400,
                borderLeft: isActive ? '3px solid #006d77' : '3px solid transparent',
              }}
            >
              <span
                className="material-symbols-outlined flex-shrink-0"
                style={{
                  fontSize: 22,
                  fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300",
                }}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <Link
          href="/careers"
          target="_blank"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)' }}
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Applicant
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-40 shadow-sm"
        style={{ background: '#fcf9f4', borderBottom: '1px solid #e4e2dc' }}
      >
        <h1
          className="text-lg font-bold"
          style={{ color: '#006d77', fontFamily: 'Georgia, serif' }}
        >
          Nurturly ATS
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg"
          style={{ color: '#006d77', background: '#d0f0f3' }}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setOpen(false)}
          style={{ background: 'rgba(0,0,0,0.4)' }}
        >
          <div
            className="absolute left-0 top-0 h-full w-72"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebar}
          </div>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex md:flex-col fixed left-0 top-0 h-screen w-64 z-40 shadow-sm">
        {sidebar}
      </aside>
    </>
  )
}
