import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nextgenstreamer.com'),
  title: {
    default: 'NextGenStreamer - Best Creator Gear & Equipment 2025',
    template: '%s | NextGenStreamer'
  },
  description: 'Discover the best microphones, webcams, and lighting equipment for content creators. Expert recommendations and reviews for streamers, YouTubers, and podcasters.',
  keywords: ['creator gear', 'streaming equipment', 'microphones', 'webcams', 'lighting', 'content creation'],
  authors: [{ name: 'NextGenStreamer' }],
  creator: 'NextGenStreamer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextgenstreamer.com',
    title: 'NextGenStreamer - Best Creator Gear & Equipment 2025',
    description: 'Discover the best microphones, webcams, and lighting equipment for content creators.',
    siteName: 'NextGenStreamer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextGenStreamer - Best Creator Gear & Equipment 2025',
    description: 'Discover the best microphones, webcams, and lighting equipment for content creators.',
  },
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
  icons: {
    icon: '/NextFav.png',
    shortcut: '/NextFav.png',
    apple: '/NextFav.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Meta Tag for Instant Verification */}
        <meta name="google-adsense-account" content="ca-pub-2724823807720042" />

        {/* AdSense SCRIPT REMOVED FROM HERE */}
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        <Script
          src="//www.ezojs.com/ezoic/sa.min.js"
          strategy="afterInteractive"
          async
        />
        <Script id="ezstandalone-init" strategy="afterInteractive">
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AffiliateDisclaimer />
        <CookieBanner />
      </body>
    </html>
  )
}