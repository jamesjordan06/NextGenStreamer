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
    if (typeof window !== 'undefined' && window.gtag) {
      const consent = localStorage.getItem('cookie-consent')
      if (consent === 'accepted') {
        window.gtag('config', 'G-P9TMPE87N7', {
          page_path: pathname,
        })
        console.log('📊 Page view tracked:', pathname)
      }
    }
  }, [pathname])

  return null
} 