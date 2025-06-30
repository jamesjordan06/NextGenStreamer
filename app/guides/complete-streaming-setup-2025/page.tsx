import { Metadata } from 'next'
import Link from 'next/link'
import AmazonProductCard from '../../../components/AmazonProductCard'
import AffiliateDisclaimer from '../../../components/AffiliateDisclaimer'
import { getProductByAsin } from '../../../lib/products'

export const metadata: Metadata = {
  title: 'Complete Streaming Setup Guide for Beginners 2025 | NextGenStreamer',
  description: 'Ultimate beginner\'s guide to building a professional streaming setup in 2025. Essential equipment, setup tips, and recommended products for new streamers.',
  keywords: 'streaming setup guide, beginner streaming equipment, best streaming gear 2025, how to start streaming, streaming setup for beginners'
}

const products = [
  {
    asin: "B00N1YPXW2",
    type: "Essential Audio",
    setupPriority: 1
  },
  {
    asin: "B08KFL3SFV",
    type: "Budget Audio",
    setupPriority: 1
  },
  {
    asin: "B085TFF7M1", 
    type: "Essential Video",
    setupPriority: 1
  },
  {
    asin: "B0C63HDHPR",
    type: "Audio Enhancement",
    setupPriority: 2
  },
  {
    asin: "B097QZGRCQ",
    type: "Audio Enhancement", 
    setupPriority: 2
  },
  {
    asin: "B0C5JSHP7M",
    type: "Professional Audio",
    setupPriority: 3
  },
  {
    asin: "B09BYFHL25",
    type: "Audio Enhancement",
    setupPriority: 2
  },
  {
    asin: "B09738CV2G",
    type: "Streaming Control",
    setupPriority: 4
  },
  {
    asin: "B0BJL8SJ59",
    type: "Advanced Streaming Control",
    setupPriority: 4
  }
]

export default function CompleteStreamingSetupGuidePage() {
  // Get product objects by ASIN
  const blueYeti = getProductByAsin("B00N1YPXW2")
  const hyperxSoloCast = getProductByAsin("B08KFL3SFV")
  const logitechWebcam = getProductByAsin("B085TFF7M1")
  const gamingMonitor = getProductByAsin("B0C63HDHPR")
  const popFilter = getProductByAsin("B097QZGRCQ")
  const audioInterface = getProductByAsin("B0C5JSHP7M")
  const athHeadphones = getProductByAsin("B09BYFHL25")
  const streamDeck = getProductByAsin("B09738CV2G")
  const streamDeckPlus = getProductByAsin("B0BJL8SJ59")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete Streaming Setup Guide for Beginners 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know to build a professional streaming setup from scratch. 
            From essential equipment to advanced tips, this guide covers it all.
          </p>
        </div>

        {/* Quick Start Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-green-500 mr-3">🚀</span>
            Quick Start: Your Streaming Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">Step 1</div>
              <div className="text-sm text-gray-700">Essential Audio & Video</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">Step 2</div>
              <div className="text-sm text-gray-700">Audio Enhancement</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">Step 3</div>
              <div className="text-sm text-gray-700">Professional Upgrade</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 mb-2">Step 4</div>
              <div className="text-sm text-gray-700">Advanced Control</div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">📚 What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Essential Knowledge</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>How to choose the right microphone and webcam for your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Professional audio setup and monitoring techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Optimal streaming software configuration (OBS/Streamlabs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Common streaming problems and how to solve them</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Advanced Techniques</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Professional lighting setup for any environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Multi-monitor streaming configurations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Stream automation and workflow optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✓</span>
                  <span>Building your brand and engaging your audience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1: Essential Equipment */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">1</span>
              Essential Equipment: Start Here
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              These two pieces of equipment are absolutely essential for any streaming setup. 
              Without good audio and video, your audience won't stick around.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {blueYeti && <AmazonProductCard product={blueYeti} />}
              {logitechWebcam && <AmazonProductCard product={logitechWebcam} />}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🎯 Why These First?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Immediate Impact:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Audio quality is #1 factor for viewer retention</li>
                    <li>• Professional appearance builds instant credibility</li>
                    <li>• Clear video helps with audience engagement</li>
                    <li>• Both plug-and-play - no technical setup required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Technical Benefits:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Works with OBS, Streamlabs, XSplit, and more</li>
                    <li>• Compatible with Windows, Mac, and most Linux distros</li>
                    <li>• No drivers required - recognized instantly</li>
                    <li>• Multiple pickup patterns for different environments</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">💡 Quick Setup Guide:</h4>
                <ol className="space-y-1 text-gray-700 text-sm">
                  <li><strong>1.</strong> Connect Blue Yeti via USB - it will auto-install</li>
                  <li><strong>2.</strong> Set to Cardioid mode (front pickup pattern)</li>
                  <li><strong>3.</strong> Connect webcam to USB 3.0 port for best performance</li>
                  <li><strong>4.</strong> Position webcam at eye level, 2-3 feet away</li>
                  <li><strong>5.</strong> Test in your streaming software before going live</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Budget Alternative Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-yellow-300 mr-3">💰</span>
              Budget-Friendly Alternative: Exceptional Value
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              If you're just starting out or have a tighter budget, the HyperX SoloCast delivers professional-quality 
              audio at an incredibly affordable price point. It's perfect for new streamers who want great sound without breaking the bank.
            </p>
            
            <div className="max-w-md mx-auto">
              {hyperxSoloCast && <AmazonProductCard product={hyperxSoloCast} />}
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-300 mr-3">🎯</span>
                Why Choose the HyperX SoloCast?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-200 mb-3">Perfect for Beginners:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Plug-and-play simplicity - no software required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Tap-to-mute sensor with LED indicator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Compact design perfect for smaller desks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Great for Discord, Zoom, and streaming</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-200 mb-3">Professional Features:</h4>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Cardioid pickup pattern for focused audio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>24-bit/96kHz recording capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Compatible with all major platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">✓</span>
                      <span>Excellent sound quality for the price</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                <h4 className="font-bold text-yellow-200 mb-2 flex items-center">
                  <span className="mr-2">💡</span>
                  Quick Setup Guide:
                </h4>
                <ol className="space-y-1 text-white/90 text-sm">
                  <li><strong>1.</strong> Connect via USB-C to USB-A cable (included)</li>
                  <li><strong>2.</strong> Windows/Mac will recognize it instantly</li>
                  <li><strong>3.</strong> Position 6-8 inches from your mouth</li>
                  <li><strong>4.</strong> Tap the top to mute/unmute (LED indicates status)</li>
                  <li><strong>5.</strong> Adjust input levels in your streaming software</li>
                </ol>
                
                <div className="mt-3 p-3 bg-green-400/20 rounded border border-green-400/30">
                  <p className="text-sm text-green-200">
                    <strong>Pro Tip:</strong> The HyperX SoloCast punches way above its weight class. Many streamers are amazed 
                    by how professional it sounds compared to much more expensive microphones!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Audio Enhancement */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">2</span>
              Audio Enhancement: Level Up Your Sound
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Once you have your basic microphone setup, these accessories will dramatically improve your audio quality 
              and give you a more professional streaming experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {popFilter && <AmazonProductCard product={popFilter} />}
              {athHeadphones && <AmazonProductCard product={athHeadphones} />}
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-bold text-purple-800 mb-4">📈 Audio Quality Improvements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Pop Filter Benefits:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Eliminates harsh 'P' and 'B' sounds (plosives)</li>
                    <li>• Protects microphone from moisture and saliva</li>
                    <li>• Improves overall vocal clarity and professionalism</li>
                    <li>• Essential for any serious recording or streaming</li>
                    <li>• Easy to install and adjust on any microphone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 mb-2">Studio Headphones:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Professional monitoring and audio feedback</li>
                    <li>• Accurate sound reproduction for mixing</li>
                    <li>• Comfortable for extended streaming sessions</li>
                    <li>• Industry-standard for content creators</li>
                    <li>• Perfect for real-time audio monitoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-3">🎧 Professional Audio Setup Guide:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Pop Filter Installation:</h5>
                    <ol className="space-y-1 text-gray-700">
                      <li>1. Clamp to boom arm or mic stand</li>
                      <li>2. Position 4-6 inches from microphone</li>
                      <li>3. Adjust height to mouth level</li>
                      <li>4. Test with plosive words ("Peter Piper")</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Headphone Monitoring:</h5>
                    <ol className="space-y-1 text-gray-700">
                      <li>1. Connect to computer or audio interface</li>
                      <li>2. Enable headphone monitoring in OBS</li>
                      <li>3. Adjust monitoring volume (not too loud!)</li>
                      <li>4. Listen for background noise and echo</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800"><strong>Pro Tip:</strong> Always monitor your audio during stream to catch issues early. The ATH-M50x headphones will reveal audio problems that regular headphones might miss!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Professional Upgrade */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">3</span>
              Professional Upgrade: Studio Quality
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to take your stream to the next level? These professional-grade components will give you 
              studio-quality audio, cinematic lighting, and a premium display for managing your stream.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {audioInterface && <AmazonProductCard product={audioInterface} />}
              {gamingMonitor && <AmazonProductCard product={gamingMonitor} />}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">🎬 Professional Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Audio Interface:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Professional XLR microphone support</li>
                    <li>• Zero-latency monitoring</li>
                    <li>• Superior preamps for cleaner sound</li>
                    <li>• Multiple input options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2">Gaming Monitor:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• QHD clarity for stream management</li>
                    <li>• 240Hz for smooth gaming content</li>
                    <li>• Accurate colors for content creation</li>
                    <li>• Multiple inputs for dual PC setups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Advanced Control */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">4</span>
              Advanced Control: Streamline Your Workflow
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              The final piece of your professional streaming setup. Choose between two incredible Stream Deck options 
              that will transform how you interact with your streaming software and give you instant control over your entire setup.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                {streamDeck && <AmazonProductCard product={streamDeck} />}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Perfect for Most Streamers</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 15 customizable LCD keys</li>
                    <li>• Intuitive drag-and-drop setup</li>
                    <li>• Great value for money</li>
                    <li>• Proven reliability</li>
                  </ul>
                </div>
              </div>
              
              <div>
                {streamDeckPlus && <AmazonProductCard product={streamDeckPlus} />}
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-2">Ultimate Control Experience</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 8 LCD keys + 4 touch strip dials</li>
                    <li>• Integrated audio mixer</li>
                    <li>• Advanced production features</li>
                    <li>• Future-proof investment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4">⚡ Workflow Improvements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-orange-700 mb-3">Stream Deck MK.2 Benefits:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">🎬</span>
                      <div>
                        <div className="font-semibold text-gray-700">Scene Management</div>
                        <div className="text-sm text-gray-600">Switch between scenes instantly with 15 keys</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">📱</span>
                      <div>
                        <div className="font-semibold text-gray-700">Social Integration</div>
                        <div className="text-sm text-gray-600">Post to Twitter, Discord, and more</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">⚙️</span>
                      <div>
                        <div className="font-semibold text-gray-700">Automation</div>
                        <div className="text-sm text-gray-600">Multi-actions and macro support</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-purple-700 mb-3">Stream Deck + Advantages:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">🎚️</span>
                      <div>
                        <div className="font-semibold text-gray-700">Touch Strip Controls</div>
                        <div className="text-sm text-gray-600">Precise audio mixing with visual feedback</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">🔊</span>
                      <div>
                        <div className="font-semibold text-gray-700">Integrated Audio Mixer</div>
                        <div className="text-sm text-gray-600">Professional audio control at your fingertips</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">🏭</span>
                      <div>
                        <div className="font-semibold text-gray-700">Production Console</div>
                        <div className="text-sm text-gray-600">Advanced streaming production capabilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">💡</span>
                  Which Stream Deck Should You Choose?
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-1">Choose Stream Deck MK.2 if:</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• You're new to streaming</li>
                      <li>• You want proven reliability</li>
                      <li>• Budget is a consideration</li>
                      <li>• 15 keys meet your needs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-1">Choose Stream Deck + if:</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• You do advanced audio mixing</li>
                      <li>• You want cutting-edge features</li>
                      <li>• You stream professionally</li>
                      <li>• Touch controls appeal to you</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl text-white p-8">
            <h2 className="text-3xl font-bold mb-6">🛠️ Pro Setup Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Audio Optimization</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Position microphone 6-8 inches from your mouth</li>
                  <li>• Use acoustic treatment (even blankets help!)</li>
                  <li>• Test audio levels before going live</li>
                  <li>• Consider your room's natural acoustics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Lighting & Video</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Face your light source for best results</li>
                  <li>• Avoid backlighting (windows behind you)</li>
                  <li>• Keep your webcam at eye level</li>
                  <li>• Clean your camera lens regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Software Recommendations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">💻 Essential Software</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3">OBS Studio</h3>
                <p className="text-gray-600 mb-3">Free, powerful streaming software</p>
                <p className="text-sm text-blue-600 font-medium">100% Free</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Streamlabs</h3>
                <p className="text-gray-600 mb-3">User-friendly OBS alternative</p>
                <p className="text-sm text-blue-600 font-medium">Free/Premium</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3">NVIDIA Broadcast</h3>
                <p className="text-gray-600 mb-3">AI-powered background removal</p>
                <p className="text-sm text-blue-600 font-medium">Free (NVIDIA GPU)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🔧 Common Issues & Solutions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-lg font-bold text-red-700 mb-2">Audio Echo/Feedback</h3>
                <p className="text-gray-600 mb-2">Solution: Use headphones while streaming or enable push-to-talk</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-lg font-bold text-yellow-700 mb-2">Video Lag/Stutter</h3>
                <p className="text-gray-600 mb-2">Solution: Lower resolution/framerate or upgrade internet speed</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Poor Audio Quality</h3>
                <p className="text-gray-600 mb-2">Solution: Check microphone positioning and room acoustics</p>
              </div>
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-lg font-bold text-green-700 mb-2">Stream Drops/Disconnects</h3>
                <p className="text-gray-600 mb-2">Solution: Use ethernet connection and check upload speed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Streaming Journey? 🚀</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with the essentials and upgrade as you grow. Every successful streamer started with their first stream!
          </p>
          <div className="space-y-4">
            <Link 
              href="/products" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors mr-4"
            >
              Shop All Equipment
            </Link>
            <Link 
              href="/products?category=microphones" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Microphones
            </Link>
          </div>
        </div>

        <AffiliateDisclaimer />
      </div>
    </div>
  )
} 