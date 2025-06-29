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

  const GA_ID = 'G-P9TMPE87N7' // Use the actual GA ID

  useEffect(() => {
    // Initialize Google Analytics immediately
    initializeGoogleAnalytics()
    
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
    } else {
      setConsentGiven(consent === 'accepted')
      if (consent === 'accepted') {
        enableAnalytics()
      }
    }
  }, [])

  const initializeGoogleAnalytics = () => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    
    // Initialize gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    
    script.onload = () => {
      // Initialize with timestamp
      gtag('js', new Date())
      
      // Configure GA
      gtag('config', GA_ID, {
        send_page_view: false // We'll control page views manually
      })

      console.log('🔧 Google Analytics loaded')

      // Send initial page view if consent already given
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        sendPageView()
      }
    }
    
    document.head.appendChild(script)
  }

  const sendPageView = () => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      })
      console.log('📊 Page view sent to GA')
    }
  }

  const enableAnalytics = () => {
    console.log('✅ Google Analytics tracking enabled')
    sendPageView()
    
    // Send a test event
    if (window.gtag) {
      window.gtag('event', 'consent_granted', {
        event_category: 'engagement',
        custom_parameter: 'cookie_accepted'
      })
    }
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsentGiven(true)
    setShowBanner(false)
    enableAnalytics()
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