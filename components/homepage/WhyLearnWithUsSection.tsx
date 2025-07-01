import { BookOpenIcon, CurrencyDollarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function WhyLearnWithUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4 sm:mb-6">
            Why Learn Streaming With Us?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Real experience, honest advice, and actionable guidance from creators who've been where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Feature Card 1 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg p-6 text-center fade-in-up hover:shadow-md transition-shadow duration-200">
            <BookOpenIcon className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Real Experience</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Written by actual streamers who've made every mistake so you don't have to. Learn from real successes and failures.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg p-6 text-center fade-in-up stagger-1 hover:shadow-md transition-shadow duration-200">
            <CurrencyDollarIcon className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Budget-Conscious</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Starter setups from $300, pro setups explained clearly, and honest warnings about expensive gear you don't need.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-brand-light border border-border-neutral-light rounded-lg p-6 text-center fade-in-up stagger-2 hover:shadow-md transition-shadow duration-200">
            <CheckBadgeIcon className="w-10 h-10 text-brand-accent mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">Actionable Steps</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              No fluff or theory. Every guide includes specific next steps, exact equipment lists, and troubleshooting help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
