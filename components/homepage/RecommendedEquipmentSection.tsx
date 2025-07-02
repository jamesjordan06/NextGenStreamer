import Link from 'next/link';
// import AmazonProductCard from '@/components/AmazonProductCard'; // Component will be removed
import Image from 'next/image'; // For displaying product images
import { getFeaturedProducts } from '@/lib/products'; // Assuming this path is correct and still useful
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
          <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-2">Gear That Gets Results</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text-primary mb-4 sm:mb-6">
            Our Top Streaming Gear Picks
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We've rigorously tested this gear so you can invest with confidence. These are the products that deliver real value for streamers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <div key={product.slug} className={`fade-in-up ${index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : ''} bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200`}>
              {product.imageUrl && (
                <div className="w-full h-40 relative overflow-hidden mb-3 rounded">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-2"
                  />
                </div>
              )}
              <h3 className="text-md font-semibold text-gray-800 mb-1 truncate" title={product.name}>
                {product.name}
              </h3>
              {product.amazonUrl && (
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-brand-primary hover:text-brand-primary-hover hover:underline"
                >
                  View on Amazon <ArrowRightIcon className="w-4 h-4 inline-block ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Link to a relevant gear guide category page instead of /products */}
        <div className="text-center">
          <Link href="/gear-hardware" className={`${primaryButtonClasses} text-base`}>
            Explore All Gear Guides <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
