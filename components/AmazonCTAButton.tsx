'use client'

interface AmazonCTAButtonProps {
  url: string
  text?: string
  variant?: 'primary' | 'secondary'
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
  text = "Check it on Amazon →", 
  variant = 'primary',
  size = 'md',
  productName = 'Unknown Product'
}: AmazonCTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "bg-amazon-yellow hover:bg-orange-500 text-black focus:ring-amazon-yellow",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
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
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {text}
    </a>
  )
} 