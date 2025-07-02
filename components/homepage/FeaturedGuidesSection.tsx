import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid'; // Assuming this will be used in buttons

// Button Styles (can be moved to a shared constants file)
// const primaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";
const secondaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-border-neutral text-base font-medium rounded-md text-text-primary bg-brand-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";


export default function FeaturedGuidesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">Level Up Your Know-How</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4 sm:mb-6">
            Your Go-To Streaming Playbook
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From first stream to pro strats: find clear guides on gear, growth, and making great content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Guide Card 1 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg shadow-sm p-6 text-center flex flex-col fade-in-up hover:shadow-md transition-shadow duration-200">
            {/* Optional: Icon can be added here e.g. <AcademicCapIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" /> */}
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Complete Beginner's Guide</h3>
            <p className="text-text-secondary text-sm mb-4 flex-grow">
              New to streaming? We'll take you from zero to hero, covering platforms, audience growth, and how to start earning.
            </p>
            <Link href="/getting-started/how-to-start-streaming-2025" className={`${secondaryButtonClasses} text-sm w-full mt-auto`}>
              Begin Your Adventure <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Guide Card 2 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg shadow-sm p-6 text-center flex flex-col fade-in-up stagger-1 hover:shadow-md transition-shadow duration-200">
            {/* Optional: Icon e.g. <CogIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" /> */}
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Complete Setup Guide</h3>
            <p className="text-text-secondary text-sm mb-4 flex-grow">
              Build a killer stream setup on any budget ($300-$1600+). Get our top gear picks, setup tips, and troubleshooting steps.
            </p>
            <Link href="/gear-hardware/complete-streaming-setup-2025" className={`${secondaryButtonClasses} text-sm w-full mt-auto`}>
              Build Your Setup <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Guide Card 3 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg shadow-sm p-6 text-center flex flex-col fade-in-up stagger-2 hover:shadow-md transition-shadow duration-200">
            {/* Optional: Icon e.g. <AdjustmentsHorizontalIcon className="w-12 h-12 text-brand-primary mx-auto mb-4" /> */}
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Streamlabs vs OBS</h3>
            <p className="text-text-secondary text-sm mb-4 flex-grow">
              The ultimate Streamlabs vs. OBS showdown. We break down features, performance, and who wins for *your* streaming style.
            </p>
            <Link href="/software-tools/streamlabs-vs-obs-2025" className={`${secondaryButtonClasses} text-sm w-full mt-auto`}>
              Compare Software <ArrowRightIcon className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-text-secondary mb-6 text-base sm:text-lg">Ready for more? Dive into guides on making money, streaming to TikTok, choosing mics, and other advanced tips.</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/growth-monetization/how-to-monetize-streaming-low-viewers-2025" className={`${secondaryButtonClasses} text-sm py-2 px-4`}>
              Monetization Guide
            </Link>
            <Link href="/gear-hardware/xlr-vs-usb-microphones-2025" className={`${secondaryButtonClasses} text-sm py-2 px-4`}>
              XLR vs USB Mics
            </Link>
            <Link href="/software-tools/how-to-stream-vertical-916-tiktok-reels-shorts-2025" className={`${secondaryButtonClasses} text-sm py-2 px-4`}>
              Vertical Streaming
            </Link>
            <Link href="/gear-hardware/headphones-vs-earbuds-2025" className={`${secondaryButtonClasses} text-sm py-2 px-4`}>
              Audio Equipment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
