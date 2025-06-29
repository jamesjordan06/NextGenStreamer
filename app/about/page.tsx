import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'About NextGenStreamer - Your Creator Gear Experts',
  description: 'Learn about NextGenStreamer and our mission to help content creators find the best equipment for their journey.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About NextGenStreamer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're passionate about helping content creators find the perfect gear to bring their vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Content creation has never been more accessible, but finding the right equipment can be overwhelming. 
              With thousands of microphones, webcams, and lighting setups available, creators often struggle to 
              make informed decisions about their gear investments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That's where we come in. NextGenStreamer curates and reviews the best creator equipment, providing 
              honest recommendations based on real-world testing and community feedback. We believe great content 
              deserves great tools, regardless of your budget or experience level.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Research</h3>
                <p className="text-gray-600 text-sm">
                  We thoroughly research and test products across different price ranges and use cases to provide 
                  comprehensive recommendations for every type of creator.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Honest Reviews</h3>
                <p className="text-gray-600 text-sm">
                  Our reviews include real pros and cons, helping you understand exactly what you're getting 
                  before making a purchase decision.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Price Tracking</h3>
                <p className="text-gray-600 text-sm">
                  We help you find the best deals on quality creator gear, ensuring you get the most value 
                  for your investment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Buying Guides</h3>
                <p className="text-gray-600 text-sm">
                  Our comprehensive guides help you understand what to look for in creator equipment, 
                  from technical specifications to practical considerations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Promise */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Honest Recommendations</h3>
                  <p className="text-gray-600 text-sm">We only recommend products we genuinely believe in, regardless of commission rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Transparent Affiliate Relations</h3>
                  <p className="text-gray-600 text-sm">We clearly disclose all affiliate relationships and earn commission at no extra cost to you.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Regular Updates</h3>
                  <p className="text-gray-600 text-sm">We continuously update our recommendations as new products are released and tested.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about creator gear or suggestions for products to review? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 