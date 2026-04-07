import type { Metadata, Viewport } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Nurturly | Expert Care, In the Comfort of Home',
  description: 'Coming Soon - Redefining home care with the grace of high-end hospitality',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          }
          .signature-gradient {
            background: linear-gradient(135deg, #00535b 0%, #006d77 100%);
          }
          .glass-nav {
            background: rgba(252, 249, 244, 0.8);
            backdrop-filter: blur(20px);
          }
        `}</style>
      </head>
      <body className={`${newsreader.variable} ${manrope.variable} bg-[#fcf9f4] text-[#1c1c19] antialiased selection:bg-[#006d77] selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
