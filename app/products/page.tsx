import { Suspense } from 'react'
import { Metadata } from 'next'
import ProductsClient from './ProductsClient'
import LoadingSpinner from '@/components/LoadingSpinner'

export const metadata: Metadata = {
  title: 'All Creator Gear & Equipment | NextGenStreamer',
  description: 'Browse our complete collection of microphones, webcams, lighting, and streaming equipment for content creators.',
  openGraph: {
    title: 'All Creator Gear & Equipment | NextGenStreamer',
    description: 'Browse our complete collection of microphones, webcams, lighting, and streaming equipment for content creators.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nextgenstreamer.com/products'
  }
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Creator Gear & Equipment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover professional-grade equipment to elevate your content creation game.
          </p>
        </div>

        {/* Products Content with Suspense */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner />
          </div>
        }>
          <ProductsClient />
        </Suspense>
      </div>
    </div>
  )
} 