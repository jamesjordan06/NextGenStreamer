import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'
import AmazonCTAButton from './AmazonCTAButton'

interface AmazonProductCardProps {
  product: Product
}

export default function AmazonProductCard({ product }: AmazonProductCardProps) {
  return (
    <div className="card p-0 h-full flex flex-col group overflow-hidden relative">
      {/* Gradient overlay for extra visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain hover:scale-110 transition-transform duration-500 p-4 group-hover:rotate-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col p-6 relative z-20">
        <div className="mb-3 flex flex-wrap gap-2">
          {product.categories.slice(0, 2).map((category, index) => (
            <span
              key={category}
              className={`inline-block text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white'
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300">
          <Link 
            href={`/products/${product.slug}`}
            className="hover:gradient-text transition-all duration-300"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Key Features */}
        <div className="mb-5">
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></span>
            Key Features
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start group/feature">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="line-clamp-2 group-hover/feature:text-gray-800 transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Note */}
        <div className="mb-5 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
          <p className="text-sm text-amber-800 font-medium flex items-center">
            <span className="text-amber-500 mr-2">💰</span>
            {product.priceNote}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <AmazonCTAButton url={product.amazonUrl} size="md" productName={product.name} />
          <Link 
            href={`/products/${product.slug}`}
            className="btn-secondary text-center text-sm group/btn"
          >
            <span className="flex items-center justify-center">
              <span>View Details</span>
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
} 