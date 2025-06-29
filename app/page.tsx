import Link from 'next/link'
import AmazonProductCard from '@/components/AmazonProductCard'
import AmazonCTAButton from '@/components/AmazonCTAButton'
import { getFeaturedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Level Up Your <span className="gradient-text">Creator Game</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover the best microphones, webcams, and lighting equipment to create professional content that stands out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="btn-primary text-lg px-8 py-4"
              >
                Browse All Gear
              </Link>
              <Link 
                href="/lists/best-microphones-2025"
                className="btn-secondary text-lg px-8 py-4"
              >
                See Best Lists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Creator Gear
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked equipment that creators love. Professional quality without breaking the bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <AmazonProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/products"
              className="btn-secondary"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you need for your content creation setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Microphones */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Microphones</h3>
              <p className="text-gray-600 mb-6">
                Crystal clear audio for podcasts, streaming, and recording.
              </p>
              <Link 
                href="/products?category=microphones"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Browse Microphones →
              </Link>
            </div>

            {/* Webcams */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Webcams</h3>
              <p className="text-gray-600 mb-6">
                HD and 4K cameras for professional video calls and streaming.
              </p>
              <Link 
                href="/products?category=webcams"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Browse Webcams →
              </Link>
            </div>

            {/* Lighting */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lighting</h3>
              <p className="text-gray-600 mb-6">
                Professional lighting setups for better video quality.
              </p>
              <Link 
                href="/products?category=lighting"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Browse Lighting →
              </Link>
            </div>

            {/* Streaming */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Streaming</h3>
              <p className="text-gray-600 mb-6">
                Stream decks and controllers for seamless live streaming.
              </p>
              <Link 
                href="/products?category=streaming"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Browse Streaming →
              </Link>
            </div>

            {/* Audio */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audio</h3>
              <p className="text-gray-600 mb-6">
                Headphones, boom arms, and audio mixing equipment.
              </p>
              <Link 
                href="/products?category=audio"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Browse Audio →
              </Link>
            </div>

            {/* Productivity */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Productivity</h3>
              <p className="text-gray-600 mb-6">
                Mice, keyboards, and tools to enhance your workflow.
              </p>
              <Link 
                href="/products?category=productivity"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Browse Productivity →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Setup?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators who trust our recommendations.
            </p>
            <Link 
              href="/products"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
            >
              Start Shopping Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 