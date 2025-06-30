import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/nextgenstreamer-logo-cropped.png"
                alt="NextGenStreamer Logo"
                height={40}
                width={160}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted source for creator gear recommendations and reviews.
            </p>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=microphones" className="text-gray-400 hover:text-white transition-colors">
                  Microphones
                </Link>
              </li>
              <li>
                <Link href="/products?category=webcams" className="text-gray-400 hover:text-white transition-colors">
                  Webcams
                </Link>
              </li>
              <li>
                <Link href="/products?category=monitors" className="text-gray-400 hover:text-white transition-colors">
                  Monitors
                </Link>
              </li>
              <li>
                <Link href="/products?category=lighting" className="text-gray-400 hover:text-white transition-colors">
                  Lighting
                </Link>
              </li>
              <li>
                <Link href="/products?category=streaming" className="text-gray-400 hover:text-white transition-colors">
                  Streaming
                </Link>
              </li>
              <li>
                <Link href="/products?category=audio" className="text-gray-400 hover:text-white transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/products?category=productivity" className="text-gray-400 hover:text-white transition-colors">
                  Productivity
                </Link>
              </li>
            </ul>
          </div>

          {/* Software & Tools */}
          <div>
            <h3 className="font-semibold mb-4">Software & Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://streamlabs.pxf.io/6yzXgq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Streamlabs Software
                </a>
              </li>
              <li>
                <Link href="/guides/complete-streaming-setup-2025" className="text-gray-400 hover:text-white transition-colors">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/xlr-vs-usb-microphones-2025" className="text-gray-400 hover:text-white transition-colors">
                  Microphone Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/headphones-vs-earbuds-2025" className="text-gray-400 hover:text-white transition-colors">
                  Audio Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-semibold mb-4">Company & Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 NextGenStreamer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 