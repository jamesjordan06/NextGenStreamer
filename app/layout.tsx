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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Direct Implementation */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P9TMPE87N7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9TMPE87N7');
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