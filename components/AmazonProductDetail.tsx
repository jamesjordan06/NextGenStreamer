import Image from 'next/image'
import { Product } from '@/types/product'
import AmazonCTAButton from './AmazonCTAButton'

interface AmazonProductDetailProps {
  product: Product
}

export default function AmazonProductDetail({ product }: AmazonProductDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Affiliate Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Affiliate Link:</strong> This is an affiliate link. We may earn a commission if you purchase through this link at no additional cost to you.
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span
                key={category}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pros
              </h3>
              <ul className="space-y-2">
                {product.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Cons
              </h3>
              <ul className="space-y-2">
                {product.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 font-medium">{product.priceNote}</p>
          </div>

          {/* CTA Button */}
          <div className="space-y-3">
            <AmazonCTAButton url={product.amazonUrl} size="lg" productName={product.name} />
            <p className="text-xs text-gray-500">
              * Price and availability subject to change. Check Amazon for current pricing.
            </p>
          </div>

          {/* ASIN Info */}
          <div className="text-sm text-gray-500 border-t pt-4">
            <p><strong>ASIN:</strong> {product.asin}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 