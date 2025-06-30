import Link from 'next/link'
import AmazonProductCard from '@/components/AmazonProductCard'
import AmazonCTAButton from '@/components/AmazonCTAButton'
import { getFeaturedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="floating absolute top-20 left-10 w-32 h-32 bg-white/30 rounded-full blur-xl"></div>
          <div className="floating absolute top-40 right-20 w-24 h-24 bg-pink-300/40 rounded-full blur-lg" style={{animationDelay: '1s'}}></div>
          <div className="floating absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300/30 rounded-full blur-lg" style={{animationDelay: '2s'}}></div>
          <div className="floating absolute bottom-20 right-1/3 w-28 h-28 bg-purple-300/40 rounded-full blur-xl" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Master Your <span className="gradient-text-gaming">Streaming Journey</span>
              </h1>
            </div>
            <div className="fade-in-up stagger-1">
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                Learn from real streamers, get expert guidance, and discover the exact equipment that will take your content to the next level. 🚀
              </p>
            </div>
            <div className="fade-in-up stagger-2 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/guides/how-to-start-streaming-2025" className="btn-neon text-lg">
                <span>🎯 Start Learning Now</span>
              </Link>
              <Link href="/guides/complete-streaming-setup-2025" className="btn-secondary text-lg">
                <span>⚙️ Complete Setup Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <div className="bg-white px-6 py-2 rounded-full">
                <span className="gradient-text font-bold">📚 Education First</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Start Your Streaming Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about streaming, equipment, and building your audience - from complete beginners to advanced creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Complete Beginner Guide */}
            <div className="glow-border fade-in-up">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 floating">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Beginner's Guide</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your step-by-step roadmap from zero to streaming success. Platform selection, audience building, and monetization strategies.
                </p>
                <Link href="/guides/how-to-start-streaming-2025" className="inline-block btn-primary">
                  <span>Start Your Journey →</span>
                </Link>
              </div>
            </div>

            {/* Equipment Setup Guide */}
            <div className="glow-border fade-in-up stagger-1">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 floating" style={{animationDelay: '0.5s'}}>
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Setup Guide</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional streaming setup from $300-$1600. Real equipment recommendations, setup tutorials, and troubleshooting.
                </p>
                <Link href="/guides/complete-streaming-setup-2025" className="inline-block btn-gaming">
                  <span>Build Your Setup →</span>
                </Link>
              </div>
            </div>

            {/* Software Comparison */}
            <div className="glow-border fade-in-up stagger-2">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 floating" style={{animationDelay: '1s'}}>
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamlabs vs OBS</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Honest comparison with performance data, feature breakdown, and recommendations based on your experience level.
                </p>
                <Link href="/guides/streamlabs-vs-obs-2025" className="inline-block btn-secondary">
                  <span>Compare Software →</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8 text-lg">More guides covering monetization, vertical streaming, microphones, and advanced techniques</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/guides/how-to-monetize-streaming-low-viewers-2025" className="btn-neon">
                <span>💰 Monetization Guide</span>
              </Link>
              <Link href="/guides/xlr-vs-usb-microphones-2025" className="btn-secondary">
                <span>🎤 XLR vs USB Mics</span>
              </Link>
              <Link href="/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025" className="btn-gaming">
                <span>📱 Vertical Streaming</span>
              </Link>
              <Link href="/guides/headphones-vs-earbuds-2025" className="btn-secondary">
                <span>🎧 Audio Equipment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <div className="bg-white px-6 py-2 rounded-full">
                <span className="gradient-text font-bold">✨ Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Learn Streaming With Us?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real experience, honest advice, and actionable guidance from creators who've been where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center fade-in-up glass-morphism p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Written by actual streamers who've made every mistake so you don't have to. Learn from real successes and failures.
              </p>
            </div>

            <div className="text-center fade-in-up stagger-1 glass-morphism p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow" style={{animationDelay: '0.5s'}}>
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget-Conscious</h3>
              <p className="text-gray-600 leading-relaxed">
                Starter setups from $300, pro setups explained clearly, and honest warnings about expensive gear you don't need.
              </p>
            </div>

            <div className="text-center fade-in-up stagger-2 glass-morphism p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow" style={{animationDelay: '1s'}}>
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Steps</h3>
              <p className="text-gray-600 leading-relaxed">
                No fluff or theory. Every guide includes specific next steps, exact equipment lists, and troubleshooting help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Equipment */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-block p-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <div className="bg-white px-6 py-2 rounded-full">
                <span className="gradient-text font-bold">🛠️ Premium Gear</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Recommended Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Carefully tested gear that our guides recommend. Every product is featured because it delivers real value for creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <div key={product.slug} className={`fade-in-up ${index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : ''}`}>
                <AmazonProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="btn-primary text-lg">
              <span>🛒 Browse All Recommended Gear →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="floating absolute top-20 right-10 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
          <div className="floating absolute bottom-32 left-20 w-24 h-24 bg-pink-300/50 rounded-full blur-lg" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="floating text-8xl mb-8">🎯</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Start Your Streaming Journey?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Join thousands of creators who started with our guides. From complete beginners to full-time streamers - your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/guides/how-to-start-streaming-2025" className="btn-neon text-lg">
                <span>🚀 Start Learning Free</span>
              </Link>
              <a 
                href="https://streamlabs.pxf.io/6yzXgq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gaming text-lg"
              >
                <span>🎮 Get Streamlabs Free</span>
              </a>
              <Link href="/guides/complete-streaming-setup-2025" className="btn-secondary text-lg">
                <span>⚙️ Equipment Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 