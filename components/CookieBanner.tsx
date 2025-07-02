'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import GoogleTagManager from './GoogleTagManager'
import GoogleAnalytics from './GoogleAnalytics'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
    adsbygoogle?: object[]
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      setConsentGiven(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    setConsentGiven(true)
    console.log('✅ Cookies accepted - Analytics, GTM & Ads loading')
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'consent_given' })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
    setConsentGiven(false)
    console.log('❌ Cookies rejected - No tracking, GTM or ads')
  }

  return (
    <>
      {consentGiven && (
        <>
          <Script
            id="gtag-script"
            src="https://www.googletagmanager.com/gtag/js?id=G-P9TMPE87N7"
            strategy="afterInteractive"
            onLoad={() => console.log('📊 Google Analytics gtag.js loaded')}
            onError={(e) =>
              console.error('Google Analytics gtag.js script failed to load:', e)
            }
          />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P9TMPE87N7');
              console.log('📊 Google Analytics configured');
            `}
          </Script>

          <GoogleAnalytics />
          <GoogleTagManager />

          <Script
            id="adsense-script"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2724823807720042"
            strategy="afterInteractive"
            async
            crossOrigin="anonymous"
            onLoad={() => {
              console.log('📰 AdSense script loaded successfully')
              try {
                ;(window.adsbygoogle = window.adsbygoogle || []).push({})
              } catch (e) {
                console.error('Error pushing to adsbygoogle:', e)
              }
            }}
            onError={(e) => console.error('AdSense script failed to load:', e)}
          />
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-[100] border-t border-gray-700">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">🍪 We Use Cookies & Analytics</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We use cookies and similar technologies for analytics and advertising. By clicking "Accept All", you consent to their use. {' '}
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
