'use client'

interface AmazonCTAButtonProps {
  url: string
  text?: string
  variant?: 'primary' | 'secondary' | 'gaming' | 'neon'
  size?: 'sm' | 'md' | 'lg'
  productName?: string
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export default function AmazonCTAButton({ 
  url, 
  text = "🛒 Check it on Amazon →", 
  variant = 'gaming',
  size = 'md',
  productName = 'Unknown Product'
}: AmazonCTAButtonProps) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    gaming: "btn-gaming",
    neon: "btn-neon"
  }
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  }

  const handleClick = () => {
    // Track affiliate link clicks with Google Analytics
    if (typeof window !== 'undefined' && window.gtag && GA_ID) {
      // Track affiliate link click
      window.gtag('event', 'affiliate_click', {
        event_category: 'affiliate_link',
        event_label: productName,
        product_name: productName,
        link_url: url,
        button_variant: variant,
        button_size: size
      })

      // Track outbound link
      window.gtag('event', 'click', {
        event_category: 'outbound_link',
        event_label: url,
        transport_type: 'beacon'
      })
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noreferrer"
      onClick={handleClick}
      className={`${variantClasses[variant]} ${sizeClasses[size]} text-center group/amazon`}
    >
      <span className="flex items-center justify-center">
        <span>{text}</span>
        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/amazon:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  )
} 