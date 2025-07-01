'use client'

import { ArrowUpRightIcon } from '@heroicons/react/20/solid' // Using a more common external link icon

interface AmazonCTAButtonProps {
  url: string
  text?: string
  // variant?: 'primary' | 'secondary'; // Simplified variants for now
  size?: 'sm' | 'md' | 'lg'
  productName?: string
  className?: string // Allow passing additional classes
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export default function AmazonCTAButton({ 
  url, 
  text = "View on Amazon", // Updated default text
  // variant = 'primary', // Defaulting to one style for now
  size = 'md',
  productName = 'Unknown Product',
  className = ''
}: AmazonCTAButtonProps) {
  
  // Base classes for all buttons
  const baseClasses = "inline-flex items-center justify-center font-semibold border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";

  // Styling for the primary Amazon button (using brand-accent)
  const primaryStyleClasses = "bg-brand-accent hover:bg-brand-accent-hover text-white focus:ring-brand-accent";
  // Example for a secondary/outline style if needed later:
  // const secondaryStyleClasses = "bg-transparent hover:bg-brand-accent/10 text-brand-accent border-brand-accent focus:ring-brand-accent";

  const currentStyle = primaryStyleClasses; // Default to primary style

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs", // Adjusted for smaller text
    md: "px-4 py-2 text-sm",   // Standard size
    lg: "px-6 py-3 text-base"  // Larger size
  }

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag && GA_ID) {
      window.gtag('event', 'affiliate_click', {
        event_category: 'affiliate_link',
        event_label: productName,
        product_name: productName,
        link_url: url,
        // button_variant: variant, // Can be simplified or kept if variants are expanded
        button_size: size
      })
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
      className={`${baseClasses} ${currentStyle} ${sizeClasses[size]} ${className} group`}
    >
      <span>{text}</span>
      <ArrowUpRightIcon className="w-4 h-4 ml-2 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}