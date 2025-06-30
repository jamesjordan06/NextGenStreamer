import AmazonProductCard from '@/components/AmazonProductCard'
import { getProductByAsin } from '@/lib/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Streaming Setup Guide 2025 | Professional Equipment for Content Creators',
  description: 'Build the ultimate streaming setup with our comprehensive 2025 guide. Professional equipment recommendations for microphones, cameras, lighting, and Stream Deck controllers.',
  keywords: 'streaming setup 2025, streaming equipment, streaming microphone, streaming camera, stream deck, content creator setup, professional streaming gear',
  alternates: {
    canonical: 'https://nextgenstreamer.com/guides/complete-streaming-setup-2025'
  }
}

export default function CompleteStreamingSetupGuidePage() {
  // Starter Setup Products
  const starterMicrophone = getProductByAsin('B08KFL3SFV') // HyperX SoloCast
  const starterWebcam = getProductByAsin('B085TFF7M1') // Logitech HD Pro
  const starterLighting = getProductByAsin('B0CH9KZXWR') // Weilisi Ring Light
  const starterStreamDeck = getProductByAsin('B09738CV2G') // Stream Deck MK.2

  // Pro Setup Products
  const proMicrophone = getProductByAsin('B00N1YPXW2') // Blue Yeti
  const proMicrophoneElite = getProductByAsin('B0002E4Z8M') // Shure SM7B
  const proWebcam = getProductByAsin('B01N5UOYC4') // Logitech Brio 4K
  const proLighting = getProductByAsin('B083SLZ6JT') // LED Light Panel
  const proStreamDeck = getProductByAsin('B0BJL8SJ59') // Stream Deck Plus
  const proStreamDeckXL = getProductByAsin('B07RL8H55Z') // Stream Deck XL

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Streaming Setup Guide 2025</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Build a professional streaming setup that will captivate your audience and elevate your content. 
            Choose between our starter and pro setups based on your budget and experience level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-sm text-blue-100">Starter Budget:</span>
              <div className="text-2xl font-bold">$300 - $500</div>
            </div>
                         <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
               <span className="text-sm text-blue-100">Pro Budget:</span>
               <div className="text-2xl font-bold">$800 - $1,600</div>
             </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="text-sm text-blue-100">Setup Time:</span>
              <div className="text-2xl font-bold">2-4 Hours</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Setup Comparison Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎯 Choose Your Setup Level</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Starter Setup Overview */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Starter Setup</h3>
                  <p className="text-green-700 font-semibold text-lg">$300 - $500 Total</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎙️ USB Microphone</span>
                    <span className="font-semibold text-green-600">~$60</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">📹 1080p Webcam</span>
                    <span className="font-semibold text-green-600">~$80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">💡 Ring Light</span>
                    <span className="font-semibold text-green-600">~$40</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎛️ Stream Deck</span>
                    <span className="font-semibold text-green-600">~$120</span>
                  </div>
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Perfect if you:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Are new to streaming or content creation</li>
                    <li>• Want to test the waters before investing heavily</li>
                    <li>• Have a limited budget but want quality gear</li>
                    <li>• Stream as a hobby or part-time</li>
                  </ul>
                </div>
              </div>

              {/* Pro Setup Overview */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-center mb-6">
                  <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">Pro Setup</h3>
                  <p className="text-purple-700 font-semibold text-lg">$800 - $1,600 Total</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎙️ Professional Microphone</span>
                    <span className="font-semibold text-purple-600">$100-$400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">📹 4K Webcam</span>
                    <span className="font-semibold text-purple-600">~$200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">💡 Professional Lighting</span>
                    <span className="font-semibold text-purple-600">~$100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎛️ Advanced Stream Deck</span>
                    <span className="font-semibold text-purple-600">$200-$250</span>
                  </div>
                </div>
                
                <div className="bg-purple-100 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Perfect if you:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Stream professionally or full-time</li>
                    <li>• Want the best possible quality for your brand</li>
                    <li>• Have an established audience to impress</li>
                    <li>• Create content for multiple platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Starter Setup Detailed */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                🌱 Starter Setup: Quality on a Budget
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Perfect for beginners who want professional results without breaking the bank. 
                This setup will give you everything needed to start streaming with confidence.
              </p>
              <div className="mt-6 inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold text-lg">
                Total Investment: ~$300
              </div>
            </div>

            {/* Starter Audio */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">1</span>
                Audio: HyperX SoloCast (~$60)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {starterMicrophone && <AmazonProductCard product={starterMicrophone} />}
                </div>
                <div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-4">Why This Microphone?</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>🎙️ <strong>Excellent Value:</strong> Professional sound quality at a fraction of the cost</li>
                      <li>🔌 <strong>Plug & Play:</strong> USB connection with no setup required</li>
                      <li>🤫 <strong>Tap-to-Mute:</strong> LED indicator shows when you're muted</li>
                      <li>📱 <strong>Versatile:</strong> Works with PC, Mac, PS4, PS5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Starter Video */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">2</span>
                Video: Logitech HD Pro (~$80)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {starterWebcam && <AmazonProductCard product={starterWebcam} />}
                </div>
                <div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-4">Solid 1080p Performance</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>📹 <strong>Full HD 1080p:</strong> Crisp, clear video quality</li>
                      <li>🔒 <strong>Privacy Shutter:</strong> Physical cover for security</li>
                      <li>🎤 <strong>Built-in Dual Mics:</strong> Backup audio option</li>
                      <li>💻 <strong>Universal Compatibility:</strong> Works with all platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Starter Lighting */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">3</span>
                Lighting: Desk Ring Light (~$40)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {starterLighting && <AmazonProductCard product={starterLighting} />}
                </div>
                <div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-4">Perfect Desk Solution</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>💡 <strong>10.2" Ring Light:</strong> Even, flattering illumination</li>
                      <li>🗜️ <strong>Desk Clamp:</strong> Saves space, adjustable positioning</li>
                      <li>🎚️ <strong>10 Brightness Levels:</strong> Perfect for any environment</li>
                      <li>🔌 <strong>USB Powered:</strong> No separate power adapter needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Starter Control */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">4</span>
                Control: Stream Deck MK.2 (~$120)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {starterStreamDeck && <AmazonProductCard product={starterStreamDeck} />}
                </div>
                <div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-4">Professional Control</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>⚡ <strong>15 LCD Keys:</strong> Customize with icons and actions</li>
                      <li>🎬 <strong>Scene Switching:</strong> Instant transitions between layouts</li>
                      <li>📱 <strong>Social Integration:</strong> Post to Twitter, Discord instantly</li>
                      <li>🔧 <strong>Easy Setup:</strong> Drag-and-drop configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Setup Detailed */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                👑 Pro Setup: Maximum Quality & Features
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                For serious content creators who want the absolute best quality and most advanced features. 
                This setup will make you stand out from the competition.
              </p>
                             <div className="mt-6 inline-block bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold text-lg">
                 Total Investment: ~$800 - $1,600
               </div>
            </div>

            {/* Pro Audio */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">1</span>
                Audio: Choose Your Level
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">Blue Yeti (~$100)</h4>
                    <p className="text-sm text-gray-600">Perfect for most pro streamers</p>
                  </div>
                  {proMicrophone && <AmazonProductCard product={proMicrophone} />}
                </div>
                <div>
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-purple-700 mb-2">Shure SM7B (~$400)</h4>
                    <p className="text-sm text-gray-600">Ultimate professional choice</p>
                  </div>
                  {proMicrophoneElite && <AmazonProductCard product={proMicrophoneElite} />}
                </div>
                             </div>
               
               <div className="mt-20 bg-purple-50 p-6 rounded-lg">
                 <h4 className="font-bold text-purple-800 mb-4">🎙️ Professional Audio Advantages</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-3">Blue Yeti Benefits:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Broadcast-quality condenser capsules</li>
                      <li>• Four pickup patterns for any situation</li>
                      <li>• Built-in headphone monitoring</li>
                      <li>• Blue VO!CE real-time effects</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-3">Shure SM7B Benefits:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry standard for podcasting</li>
                      <li>• Superior background noise rejection</li>
                      <li>• XLR connection for professional setups</li>
                      <li>• Used by top streamers worldwide</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Video */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">2</span>
                Video: Logitech Brio 4K (~$200)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {proWebcam && <AmazonProductCard product={proWebcam} />}
                </div>
                <div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-4">4K Professional Quality</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>📹 <strong>4K Ultra HD:</strong> Crystal clear detail for professional look</li>
                      <li>🌈 <strong>HDR Technology:</strong> Perfect exposure in any lighting</li>
                      <li>🔍 <strong>Adjustable Field of View:</strong> 65°, 78°, or 90° options</li>
                      <li>⚡ <strong>60fps Streaming:</strong> Smooth motion for action content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Lighting */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">3</span>
                Lighting: Professional LED Panel (~$100)
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {proLighting && <AmazonProductCard product={proLighting} />}
                </div>
                <div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-4">Studio-Grade Lighting</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>💡 <strong>Professional LED Panel:</strong> Even, broadcast-quality lighting</li>
                      <li>🎚️ <strong>Full Control:</strong> Brightness and color temperature</li>
                      <li>📱 <strong>Compact Design:</strong> Professional results in small spaces</li>
                      <li>🔌 <strong>Reliable Power:</strong> Consistent performance for long streams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

                        {/* Pro Control */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">4</span>
                Control: Choose Your Professional Level
              </h3>
              
              {/* Stream Deck Options Side by Side */}
              <div className="grid lg:grid-cols-2 gap-8 mb-20">
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-purple-700 mb-2">Stream Deck + (~$200)</h4>
                    <p className="text-gray-600">Advanced audio mixing with touch strip controls</p>
                  </div>
                  {proStreamDeck && <AmazonProductCard product={proStreamDeck} />}
                </div>
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-indigo-700 mb-2">Stream Deck XL (~$250)</h4>
                    <p className="text-gray-600">Ultimate control with 32 customizable keys</p>
                  </div>
                  {proStreamDeckXL && <AmazonProductCard product={proStreamDeckXL} />}
                </div>
              </div>
              
                             {/* Comparison Section */}
               <div className="mt-24 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                <h4 className="text-2xl font-bold text-purple-800 mb-8 text-center">🎛️ Which Professional Controller Should You Choose?</h4>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h5 className="text-lg font-semibold text-purple-700 mb-4">Choose Stream Deck + if:</h5>
                    <ul className="text-gray-700 space-y-3">
                      <li>• You frequently do live audio mixing or podcasting</li>
                      <li>• You want tactile control over audio levels</li>
                      <li>• You prefer the latest touch strip technology</li>
                      <li>• You need integrated audio mixer functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-indigo-700 mb-4">Choose Stream Deck XL if:</h5>
                    <ul className="text-gray-700 space-y-3">
                      <li>• You stream to multiple platforms simultaneously</li>
                      <li>• You have complex scenes and automation needs</li>
                      <li>• You want maximum customization and control</li>
                      <li>• You prefer traditional button-based workflow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">💻 Essential Software (Both Setups)</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Great hardware needs great software. Here are the essential programs for any streaming setup.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3">OBS Studio</h3>
                <p className="text-gray-600 mb-3">Free, open-source streaming software</p>
                <p className="text-sm text-gray-500 mb-3">Perfect for: Advanced users who want complete control</p>
                <p className="text-sm font-medium text-green-600">100% Free</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Streamlabs ⭐</h3>
                <p className="text-gray-600 mb-4">User-friendly streaming software with built-in widgets, alerts, and overlays</p>
                <p className="text-sm text-gray-500 mb-4">Perfect for: Beginners and streamers who want everything included</p>
                <a 
                  href="https://streamlabs.pxf.io/6yzXgq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Streamlabs Free
                </a>
                <p className="text-sm text-blue-600 font-medium mt-2">Free/Premium Options</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-3">NVIDIA Broadcast</h3>
                <p className="text-gray-600 mb-3">AI-powered background removal and noise suppression</p>
                <p className="text-sm text-gray-500 mb-3">Perfect for: NVIDIA GPU owners who want AI enhancement</p>
                <p className="text-sm font-medium text-green-600">Free (Requires NVIDIA GPU)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Tips Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🛠️ Pro Setup Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-3">🎙️ Audio Setup</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Position microphone 6-8 inches from your mouth</li>
                    <li>• Use cardioid pattern to focus on your voice</li>
                    <li>• Always monitor with headphones while streaming</li>
                    <li>• Test audio levels before going live</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-3">📹 Video Setup</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Mount camera at eye level for natural look</li>
                    <li>• Position 2-3 feet away from your face</li>
                    <li>• Use 1080p 60fps for streaming (save 4K for recording)</li>
                    <li>• Center yourself in the frame</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-3">💡 Lighting Setup</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Position light directly in front of you</li>
                    <li>• Start with 4000K color temperature</li>
                    <li>• Adjust brightness to 60-80% initially</li>
                    <li>• Avoid backlighting from windows</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-3">🎛️ Stream Deck Setup</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Start with basic scene switching</li>
                    <li>• Add social media integration gradually</li>
                    <li>• Use folders to organize complex setups</li>
                    <li>• Create shortcuts for common tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📈 Your Upgrade Path</h2>
            <p className="text-gray-600 mb-8 text-lg text-center">
              Start with the Starter Setup and upgrade individual components as your channel grows.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-green-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-green-800 mb-2">Month 1-3</h3>
                <p className="text-green-700">Start with Starter Setup</p>
                <p className="text-sm text-green-600">Learn the basics, build audience</p>
              </div>
              
              <div className="text-gray-400 text-2xl">→</div>
              
              <div className="bg-blue-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-blue-800 mb-2">Month 3-6</h3>
                <p className="text-blue-700">Upgrade Microphone</p>
                <p className="text-sm text-blue-600">Audio quality is most important</p>
              </div>
              
              <div className="text-gray-400 text-2xl">→</div>
              
              <div className="bg-purple-100 rounded-lg p-6 text-center">
                <h3 className="font-bold text-purple-800 mb-2">Month 6+</h3>
                <p className="text-purple-700">Full Pro Setup</p>
                <p className="text-sm text-purple-600">Complete professional setup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">🚀 Ready to Start Your Streaming Journey?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Choose your setup level and start building your streaming empire today. 
              Your audience will immediately notice the difference in quality!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://streamlabs.pxf.io/6yzXgq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Get Streamlabs Free
              </a>
              <a 
                href="/products" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Products
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 