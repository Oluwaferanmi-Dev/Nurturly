import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import ScrollDepthTracker from '@/components/ScrollDepthTracker'
import './globals.css'

const robotoHeadline = Roboto({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['300', '400', '700'],
})

const robotoBody = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://yourcaredomain.com'),
  title: {
    default: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
    template: '%s | [YOUR_AGENCY_NAME]',
  },
  description: '[YOUR_META_DESCRIPTION]',
  keywords: [
    'home care [YOUR_CITY], [YOUR_STATE]',
    'non-medical home care [YOUR_CITY], [YOUR_STATE] TX',
    'senior care [YOUR_CITY], [YOUR_STATE]',
    'companion care [YOUR_CITY], [YOUR_STATE]',
    'personal care services [YOUR_CITY], [YOUR_STATE]',
    'respite care [YOUR_CITY], [YOUR_STATE]',
    'elderly care [YOUR_CITY], [YOUR_STATE] Texas',
    'CareBase',
  ],
  authors: [{ name: 'CareBase Care', url: 'https://yourcaredomain.com' }],
  creator: 'CareBase Care',
  publisher: 'CareBase Care',
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
    url: 'https://yourcaredomain.com',
    siteName: 'CareBase Home Care',
    title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
    description: '[YOUR_META_DESCRIPTION]',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CareBase Home Care — Premier care in [YOUR_CITY], [YOUR_STATE]',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[YOUR_AGENCY_NAME] | [YOUR_TAGLINE] in [YOUR_CITY], [YOUR_STATE]',
    description: '[YOUR_META_DESCRIPTION]',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://yourcaredomain.com',
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
          .glass-nav {
            background: rgba(252, 249, 244, 0.85);
            backdrop-filter: blur(20px);
          }
        `}</style>
      </head>
      <body
        className={`${robotoHeadline.variable} ${robotoBody.variable} bg-background text-deep-indigo antialiased selection:bg-soft-teal selection:text-white`}
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
