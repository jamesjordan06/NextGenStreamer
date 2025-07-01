import Link from 'next/link';
import AmazonProductCard from '@/components/AmazonProductCard';
import { getFeaturedProducts } from '@/lib/products'; // Assuming this path is correct from the new component's location
import { Product } from '@/types/product'; // Assuming this path is correct
import { ArrowRightIcon } from '@heroicons/react/20/solid';

// Button Styles (can be moved to a shared constants file)
const primaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";

export default function RecommendedEquipmentSection() {
  const featuredProducts: Product[] = getFeaturedProducts(); // Ensure Product type is used

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">Premium Gear</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4 sm:mb-6">
            Recommended Equipment
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Carefully tested gear that our guides recommend. Every product is featured because it delivers real value for creators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <div key={product.slug} className={`fade-in-up ${index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : ''}`}>
              <AmazonProductCard product={product} /> {/* This component is already refactored */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className={`${primaryButtonClasses} text-base`}>
            Browse All Recommended Gear <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
