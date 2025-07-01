import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import AmazonCTAButton from './AmazonCTAButton'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

interface AmazonProductCardProps {
  product: Product
}

export default function AmazonProductCard({ product }: AmazonProductCardProps) {
  const secondaryButtonClasses = "inline-flex items-center justify-center w-full text-sm font-medium text-center rounded-md px-4 py-2 border border-border-neutral hover:bg-gray-50 text-text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-150";

  return (
    <div className="bg-brand-light border border-border-neutral-light rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group h-full overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden rounded-t-lg bg-gray-50"> {/* Simplified background */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" // Simplified hover effect
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col p-4 sm:p-5"> {/* Adjusted padding */}
        <div className="mb-2 flex flex-wrap gap-1.5"> {/* Adjusted margin and gap */}
          {product.categories.slice(0, 2).map((category) => (
            <span
              key={category}
              className="inline-block text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-text-secondary"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-base sm:text-lg font-semibold font-heading text-text-primary mb-1 sm:mb-2 line-clamp-2">
          <Link 
            href={`/products/${product.slug}`}
            className="hover:text-brand-primary transition-colors duration-150"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-text-secondary mb-3 flex-1 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Key Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
              Key Features
            </h4>
            <ul className="text-xs sm:text-sm text-text-secondary space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-4 h-4 text-brand-accent mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Price Note */}
        {product.priceNote && (
          <div className="mb-3 sm:mb-4 p-2 bg-yellow-50 rounded-md border border-yellow-200">
            <p className="text-xs sm:text-sm text-yellow-700 font-medium">
              {product.priceNote}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto pt-3 sm:pt-4 border-t border-border-neutral-light flex flex-col gap-2.5"> {/* Added top border */}
          <AmazonCTAButton url={product.amazonUrl} size="md" productName={product.name} className="w-full" />
          <Link 
            href={`/products/${product.slug}`}
            className={`${secondaryButtonClasses} group/btn`}
          >
            <span>View Details</span>
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}