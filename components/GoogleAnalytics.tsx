'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined' && window.gtag) {
      // Check if user has accepted cookies
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        try {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: pathname,
            send_to: 'G-P9TMPE87N7'
          })
          
          console.log('📊 Page view tracked:', pathname)
        } catch (error) {
          console.error('❌ Error tracking page view:', error)
        }
      }
    }
  }, [pathname])

  return null
} 