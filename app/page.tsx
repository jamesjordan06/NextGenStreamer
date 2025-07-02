import Link from 'next/link'
// import AmazonProductCard from '@/components/AmazonProductCard' // Removed as component is deleted
import HeroSection from '@/components/homepage/HeroSection' // Import the new HeroSection component
import FeaturedGuidesSection from '@/components/homepage/FeaturedGuidesSection'; // Correctly import FeaturedGuidesSection
import WhyLearnWithUsSection from '@/components/homepage/WhyLearnWithUsSection';
import RecommendedEquipmentSection from '@/components/homepage/RecommendedEquipmentSection';
import FinalCTASection from '@/components/homepage/FinalCTASection';
// import AmazonCTAButton from '@/components/AmazonCTAButton' // Not directly used on this page from initial import
import { getFeaturedProducts } from '@/lib/products'
import type { Metadata } from 'next'
import { ArrowRightIcon } from '@heroicons/react/20/solid'


export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nextgenstreamer.com/'
  }
}

// Button Styles - define them once (can be moved to a shared file later if needed)
const primaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";
const secondaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-border-neutral text-base font-medium rounded-md text-text-primary bg-brand-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";
const lightOutlineButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-brand-light text-base font-medium rounded-md text-brand-light hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light transition-colors duration-150";


export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen bg-brand-bg"> {/* Base page background */}
      <HeroSection /> {/* Use the new HeroSection component */}
      <FeaturedGuidesSection /> {/* Use the new FeaturedGuidesSection component */}
      <WhyLearnWithUsSection /> {/* Use the new WhyLearnWithUsSection component */}
      <RecommendedEquipmentSection /> {/* Use the new RecommendedEquipmentSection component */}
      <FinalCTASection /> {/* Use the new FinalCTASection component */}
    </div>
  )
}