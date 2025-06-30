import { Metadata } from 'next'
import AmazonProductCard from '@/components/AmazonProductCard'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Best Microphones for Creators 2025 - Complete Buying Guide',
  description: 'Discover the best microphones for podcasting, streaming, and content creation in 2025. Expert reviews and recommendations.',
  keywords: ['best microphones 2025', 'podcast microphone', 'streaming microphone', 'creator gear'],
  openGraph: {
    title: 'Best Microphones for Creators 2025 - Complete Buying Guide',
    description: 'Discover the best microphones for podcasting, streaming, and content creation in 2025.',
    type: 'article',
  },
}

export default function BestMicrophonesPage() {
  const microphones = getProductsByCategory('microphones')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best Microphones for Creators 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're podcasting, streaming, or recording videos, these microphones deliver 
              professional-quality audio that will make your content stand out.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-sm text-gray-700">
                <strong>Last Updated:</strong> January 2025 • <strong>Products Reviewed:</strong> {microphones.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container py-4">
          <nav className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#usb-microphones" className="text-blue-600 hover:text-blue-700 font-medium">
              USB Microphones
            </a>
            <a href="#xlr-microphones" className="text-blue-600 hover:text-blue-700 font-medium">
              XLR Microphones
            </a>
            <a href="#buying-guide" className="text-blue-600 hover:text-blue-700 font-medium">
              Buying Guide
            </a>
            <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium">
              FAQ
            </a>
          </nav>
        </div>
      </div>

      <div className="container py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Audio Quality Matters for Creators
            </h2>
            <p className="text-gray-600 mb-4">
              Great audio can make or break your content. While viewers might forgive average video quality, 
              poor audio will drive them away instantly. A good microphone is one of the most important 
              investments you can make as a content creator.
            </p>
            <p className="text-gray-600">
              We've tested dozens of microphones to bring you this curated list of the best options for 
              different budgets and use cases. Each recommendation includes honest pros and cons to help 
              you make the right choice.
            </p>
          </div>
        </div>

        {/* USB Microphones Section */}
        <section id="usb-microphones" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best USB Microphones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plug-and-play microphones that work great for beginners and pros alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {microphones
              .filter(mic => mic.features.some(feature => feature.toLowerCase().includes('usb')))
              .map((microphone, index) => (
                <div key={microphone.slug} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-4 left-4 z-10">
                      <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
                        #1 PICK
                      </span>
                    </div>
                  )}
                  <AmazonProductCard product={microphone} />
                </div>
              ))
            }
          </div>
        </section>

        {/* XLR Microphones Section */}
        <section id="xlr-microphones" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best XLR Microphones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional microphones that require an audio interface but deliver superior sound quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {microphones
              .filter(mic => mic.features.some(feature => feature.toLowerCase().includes('xlr')))
              .map((microphone, index) => (
                <div key={microphone.slug} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-4 left-4 z-10">
                      <span className="bg-purple-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                        PRO CHOICE
                      </span>
                    </div>
                  )}
                  <AmazonProductCard product={microphone} />
                </div>
              ))
            }
          </div>
        </section>

        {/* Buying Guide */}
        <section id="buying-guide" className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Microphone Buying Guide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">USB vs XLR</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">USB Microphones</h4>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Plug-and-play simplicity</li>
                      <li>• Great for beginners</li>
                      <li>• Built-in headphone monitoring</li>
                      <li>• More affordable overall</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">XLR Microphones</h4>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Professional studio quality</li>
                      <li>• Requires audio interface</li>
                      <li>• More upgrade flexibility</li>
                      <li>• Better for advanced users</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features to Consider</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><strong>Polar Pattern:</strong> Cardioid for solo recording, omnidirectional for groups</li>
                  <li><strong>Frequency Response:</strong> Look for flat response for natural sound</li>
                  <li><strong>Build Quality:</strong> Metal construction lasts longer than plastic</li>
                  <li><strong>Included Accessories:</strong> Pop filter, shock mount, and stand save money</li>
                  <li><strong>Compatibility:</strong> Ensure it works with your computer/device</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the best microphone for podcasting?
                </h3>
                <p className="text-gray-600">
                  For podcasting, we recommend the Blue Yeti for beginners due to its ease of use and great sound quality. 
                  For more professional setups, the Audio-Technica AT2020 with an audio interface delivers superior results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I need an expensive microphone to start?
                </h3>
                <p className="text-gray-600">
                  Not at all! A good USB microphone like the Blue Yeti can produce professional-quality results. 
                  Focus on your content first, then upgrade your equipment as your audience grows.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What accessories do I need with my microphone?
                </h3>
                <p className="text-gray-600">
                  Essential accessories include a pop filter to reduce plosive sounds, a shock mount to minimize vibrations, 
                  and a boom arm for better positioning. Many microphones come with these included.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 