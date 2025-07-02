import Link from 'next/link';

// Button Styles (can be moved to a shared constants file if used across many homepage sections)
const primaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";
const lightOutlineButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-brand-light text-base font-medium rounded-md text-brand-light hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light transition-colors duration-150";

export default function HeroSection() {
  return (
    <section className="bg-brand-dark py-20 md:py-28 text-center">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-text-on-dark mb-6 sm:mb-8 leading-tight">
              Unlock Your Streaming Potential
            </h1>
          </div>
          <div className="fade-in-up stagger-1">
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Get insights from seasoned streamers, practical advice, and find the right gear to make your stream shine.
            </p>
          </div>
          <div className="fade-in-up stagger-2 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/getting-started/how-to-start-streaming-2025" className={`${primaryButtonClasses}`}>
              Explore Our Guides
            </Link>
            <Link href="/gear-hardware/complete-streaming-setup-2025" className={lightOutlineButtonClasses}>
              Gear Up: Setup Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
