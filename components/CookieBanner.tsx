'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [loadGA, setLoadGA] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      setLoadGA(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    setLoadGA(true)
    console.log('✅ Cookies accepted - Google Analytics loading')
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
    console.log('❌ Cookies rejected - No tracking')
  }

  return (
    <>
      {/* Google Analytics - Only load after consent */}
      {loadGA && (
        <>
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
              console.log('📊 Google Analytics loaded and tracking');
            `}
          </Script>
        </>
      )}

      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t border-gray-700">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">🍪 We Use Cookies & Analytics</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We use Google Analytics to improve your experience and measure performance. 
                  Analytics will only be enabled if you accept cookies.{' '}
                  <Link href="/legal/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    Learn more in our Privacy Policy
                  </Link>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 