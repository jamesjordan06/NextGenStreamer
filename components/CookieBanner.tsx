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

  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  const initializeGoogleAnalyticsWithConsentMode = () => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    
    // Initialize gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    // Load Google Analytics script and wait for it to load
    if (!GA_ID) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    
    // Configure GA after script loads
    script.onload = () => {
      // Initialize Google Analytics with timestamp
      gtag('js', new Date())
      
      // Configure Google Analytics
      gtag('config', GA_ID, {
        // Enable conversion modeling
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
        // Send page view immediately if consent already given
        send_page_view: false // We'll send manually after consent check
      })

      // Send initial page view if consent was already granted
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        })
      }
    }
    
    document.head.appendChild(script)
  }

  const setDefaultConsentState = () => {
    // Set default consent state (denied by default for privacy-first approach)
    if (window.gtag) {
      window.gtag('consent', 'default', {
        // Analytics and measurement
        analytics_storage: 'denied',
        
        // Advertising and remarketing  
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        
        // Functionality
        functionality_storage: 'granted',
        security_storage: 'granted',
        
        // Personalization
        personalization_storage: 'denied',
        
        // Wait for update before sending data (500ms)
        wait_for_update: 500,
        
        // Region settings (automatically applies to EEA users)
        region: ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK']
      })
    }
  }

  const updateConsentState = (hasConsent: boolean) => {
    if (!window.gtag) return

    if (hasConsent) {
      // Update consent to granted
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        personalization_storage: 'granted'
      })
      
      // Send page view after consent is granted
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      })
      
      // Send consent granted event
      window.gtag('event', 'consent_granted', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      })

      console.log('✅ Google Analytics tracking enabled')
    } else {
      // Update consent to denied (conversion modeling will still work)
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied', 
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        personalization_storage: 'denied'
      })
      
      // Send consent denied event  
      window.gtag('event', 'consent_denied', {
        event_category: 'engagement',
        event_label: 'cookie_consent'
      })

      console.log('❌ Google Analytics tracking disabled')
    }
  }

  useEffect(() => {
    // Initialize Google Analytics with Consent Mode immediately
    initializeGoogleAnalyticsWithConsentMode()

    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowBanner(true)
      // Set default consent state (denied) for EEA users
      setDefaultConsentState()
    } else {
      setConsentGiven(consent === 'accepted')
      // Update consent based on stored preference
      updateConsentState(consent === 'accepted')
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsentGiven(true)
    setShowBanner(false)
    updateConsentState(true)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setConsentGiven(false)
    setShowBanner(false)
    updateConsentState(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">🍪 We Use Cookies & Analytics</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use Google Analytics and cookies to improve your experience and measure performance. 
              In regions where consent is required, we'll send consent signals to Google for personalized ads and conversion modeling.
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