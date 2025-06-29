'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null)

  const GA_ID = 'G-P9TMPE87N7'

  useEffect(() => {
    initializeGoogleAnalytics()
    
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
    } else {
      setConsentGiven(consent === 'accepted')
      if (consent === 'accepted') {
        setTimeout(enableTracking, 100) // Small delay to ensure GA is ready
      }
    }
  }, [])

  const initializeGoogleAnalytics = () => {
    // Create dataLayer
    window.dataLayer = window.dataLayer || []
    
    // Create gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    // Load GA script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    
    script.onload = () => {
      // Configure GA
      gtag('js', new Date())
      gtag('config', GA_ID, {
        send_page_view: false,
        allow_google_signals: true,
        allow_ad_personalization_signals: true
      })
      
      console.log('🔧 Google Analytics script loaded')
      
      // If consent already given, start tracking
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        setTimeout(enableTracking, 100)
      }
    }
    
    document.head.appendChild(script)
  }

  const enableTracking = () => {
    if (!window.gtag) {
      console.error('❌ gtag not available')
      return
    }

    try {
      // Send page view
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_to: GA_ID
      })

      // Send custom event to test tracking
      window.gtag('event', 'user_engagement', {
        engagement_time_msec: 1000,
        send_to: GA_ID
      })

      console.log('✅ Analytics tracking enabled and events sent')
      console.log('📊 Page view sent for:', window.location.pathname)
      
    } catch (error) {
      console.error('❌ Error sending GA events:', error)
    }
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsentGiven(true)
    setShowBanner(false)
    
    // Wait a moment for GA to be ready, then enable tracking
    setTimeout(enableTracking, 200)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setConsentGiven(false)
    setShowBanner(false)
    console.log('❌ Google Analytics tracking disabled')
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">🍪 We Use Cookies & Analytics</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use Google Analytics to improve your experience and measure performance. 
              You can change your preferences anytime.{' '}
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
  )
} 