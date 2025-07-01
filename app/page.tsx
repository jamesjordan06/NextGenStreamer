import Link from 'next/link'
import AmazonProductCard from '@/components/AmazonProductCard'
import HeroSection from '@/components/homepage/HeroSection' // Import the new HeroSection component
import FeaturedGuidesSection from '@/components/homepage/FeaturedGuidesSection'; // Correctly import FeaturedGuidesSection
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

      {/* Get Started CTA */}
      <section className="bg-brand-primary py-20 md:py-28 text-center"> {/* Using brand-primary for a strong CTA background */}
        <div className="container">
          <div className="max-w-3xl mx-auto text-white">
            {/* Optional: A simple, relevant icon here if desired */}
            {/* <LightBulbIcon className="w-16 h-16 mx-auto mb-6 opacity-75" /> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-6 sm:mb-8">
              Ready to Start Your Streaming Journey?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Join thousands of creators who started with our guides. From complete beginners to full-time streamers - your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/guides/how-to-start-streaming-2025"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white transition-colors duration-150">
                Start Learning Free
              </Link>
              <a 
                href="https://streamlabs.pxf.io/6yzXgq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={lightOutlineButtonClasses}
              >
                Get Streamlabs Free
              </a>
              <Link href="/guides/complete-streaming-setup-2025" className={lightOutlineButtonClasses}>
                Equipment Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}