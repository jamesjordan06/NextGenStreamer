import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | NextGenStreamer',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you are looking for could not be found.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link href="/products" className="text-blue-600 hover:text-blue-800 underline">
              Browse Products
            </Link>
            {' • '}
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 