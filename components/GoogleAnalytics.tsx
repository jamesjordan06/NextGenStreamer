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
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pathname
        })
        
        console.log('📊 GA Page View tracked:', pathname)
      }
    }
  }, [pathname])

  return null
} 