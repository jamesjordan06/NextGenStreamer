import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import AmazonProductDetail from '@/components/AmazonProductDetail'
import AmazonProductCard from '@/components/AmazonProductCard'
import { getProductBySlug, getRelatedProducts, getAllProducts } from '@/lib/products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Review & Best Price`,
    description: `${product.description} Check out our detailed review, features, pros & cons, and find the best price on Amazon.`,
    keywords: [product.name, ...product.categories, 'review', 'amazon', 'creator gear'],
    openGraph: {
      title: `${product.name} - Review & Best Price`,
      description: product.description,
      images: [product.imageUrl],
      type: 'article',
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <nav className="flex text-sm text-gray-500">
            <a href="/" className="hover:text-gray-700">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-gray-700">Products</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="bg-white py-12">
        <AmazonProductDetail product={product} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Products
              </h2>
              <p className="text-xl text-gray-600">
                You might also be interested in these products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <AmazonProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Additional Affiliate Disclosure */}
      <div className="bg-blue-50 border-t border-blue-200">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              About Our Recommendations
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              We carefully research and test products before recommending them. Our goal is to help you make informed decisions 
              about creator gear. This page contains affiliate links, and we may earn a commission if you make a purchase 
              through these links at no additional cost to you. This helps us continue providing valuable content and reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 