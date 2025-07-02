import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-text-on-dark font-sans">
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
            <p className="text-gray-400 text-sm"> {/* Using a specific gray for slightly less emphasis vs text-on-dark */}
              Your trusted source for creator gear recommendations and reviews.
            </p>
          </div>

          {/* Software & Tools */}
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark mb-4">Software & Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://streamlabs.pxf.io/6yzXgq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-light transition-colors">
                  Streamlabs Software
                </a>
              </li>
              <li>
                <Link href="/gear-hardware/complete-streaming-setup-2025" className="text-gray-300 hover:text-brand-light transition-colors">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/gear-hardware/xlr-vs-usb-microphones-2025" className="text-gray-300 hover:text-brand-light transition-colors">
                  Microphone Guide
                </Link>
              </li>
              <li>
                <Link href="/gear-hardware/headphones-vs-earbuds-2025" className="text-gray-300 hover:text-brand-light transition-colors">
                  Audio Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-heading font-semibold text-text-on-dark mb-4">Company & Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-brand-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-300 hover:text-brand-light transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/contact" className="text-gray-300 hover:text-brand-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NextGenStreamer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}