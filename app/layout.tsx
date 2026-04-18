import type { Metadata, Viewport } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import ScrollDepthTracker from '@/components/ScrollDepthTracker'
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
  maximumScale: 5,
}

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://nurturlycare.com'),
  title: {
    default: 'Nurturly | Premier Home Care Services in Houston, TX',
    template: '%s | Nurturly Home Care',
  },
  description:
    'Nurturly provides premium non-medical home care services in Houston, Texas. Companionship, personal care, meal prep, and more — delivered with dignity, warmth, and consistency.',
  keywords: [
    'home care Houston',
    'non-medical home care Houston TX',
    'senior care Houston',
    'companion care Houston',
    'personal care services Houston',
    'respite care Houston',
    'elderly care Houston Texas',
    'Nurturly',
  ],
  authors: [{ name: 'Nurturly Care', url: 'https://nurturlycare.com' }],
  creator: 'Nurturly Care',
  publisher: 'Nurturly Care',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nurturlycare.com',
    siteName: 'Nurturly Home Care',
    title: 'Nurturly | Premier Home Care Services in Houston, TX',
    description:
      'Premium non-medical home care in Houston, TX. Delivered with dignity, warmth, and consistency. Schedule a free consultation today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nurturly Home Care — Premier care in Houston, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurturly | Premier Home Care Services in Houston, TX',
    description:
      'Premium non-medical home care in Houston, TX. Delivered with dignity, warmth, and consistency.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://nurturlycare.com',
  },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
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
      <body
        className={`${newsreader.variable} ${manrope.variable} bg-[#fcf9f4] text-[#1c1c19] antialiased selection:bg-[#006d77] selection:text-white`}
      >
        {children}
        <Analytics />
        <ScrollDepthTracker />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
