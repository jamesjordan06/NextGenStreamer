import Link from 'next/link';
import { LightBulbIcon } from '@heroicons/react/24/outline';

// Button Styles (can be moved to a shared constants file)
const lightOutlineButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-brand-light text-base font-medium rounded-md text-brand-light hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light transition-colors duration-150";
const primaryWhiteButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white transition-colors duration-150";


export default function FinalCTASection() {
  return (
    <section className="bg-brand-primary py-20 md:py-28 text-center">
      <div className="container">
        <div className="max-w-3xl mx-auto text-white">
          <LightBulbIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-75" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-6 sm:mb-8">
            Your Next Level Stream Awaits
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Thousands of creators, from first-timers to full-time pros, have launched their channels with our help. Your journey to a better stream begins now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/guides/how-to-start-streaming-2025" className={primaryWhiteButtonClasses}>
              Jump Into Our Free Guides
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
              Find Your Perfect Gear
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
