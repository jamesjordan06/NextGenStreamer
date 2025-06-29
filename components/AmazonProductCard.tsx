import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import AmazonCTAButton from './AmazonCTAButton'

interface AmazonProductCardProps {
  product: Product
}

export default function AmazonProductCard({ product }: AmazonProductCardProps) {
  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          {product.categories.map((category) => (
            <span
              key={category}
              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          <Link 
            href={`/products/${product.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Note */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 italic">{product.priceNote}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <AmazonCTAButton url={product.amazonUrl} size="sm" productName={product.name} />
          <Link 
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
} 