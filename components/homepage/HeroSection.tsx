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
              Master Your Streaming Journey
            </h1>
          </div>
          <div className="fade-in-up stagger-1">
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Learn from real streamers, get expert guidance, and discover the exact equipment that will take your content to the next level.
            </p>
          </div>
          <div className="fade-in-up stagger-2 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/guides/how-to-start-streaming-2025" className={`${primaryButtonClasses}`}>
              Start Learning Now
            </Link>
            <Link href="/guides/complete-streaming-setup-2025" className={lightOutlineButtonClasses}>
              Complete Setup Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
