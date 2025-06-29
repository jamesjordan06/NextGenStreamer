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
    // Only track if consent given and gtag is loaded
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-P9TMPE87N7', {
        page_path: pathname,
      })
      console.log('📊 Page view tracked:', pathname)
    }
  }, [pathname])

  return null
} 