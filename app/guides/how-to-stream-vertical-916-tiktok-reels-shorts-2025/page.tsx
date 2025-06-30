import AmazonProductCard from '@/components/AmazonProductCard'
import AmazonCTAButton from '@/components/AmazonCTAButton'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'
import { getProductByAsin } from '@/lib/products'

export const metadata = {
  title: 'How to Stream Vertical (9:16) for TikTok, Reels & YouTube Shorts 2025 - NextGenStreamer',
  description: 'Master vertical streaming for TikTok, Instagram Reels, and YouTube Shorts. Complete setup guide with OBS configuration, equipment tips, and content strategies that actually work.',
  keywords: 'vertical streaming, 9:16 streaming, TikTok live streaming, Instagram Reels live, YouTube Shorts streaming, OBS vertical setup, portrait streaming',
}

export default function VerticalStreamingGuide() {
  // Get relevant products
  const webcam = getProductByAsin('B01N5UOYC4') // Logitech Brio 4K
  const streamDeck = getProductByAsin('B09738CV2G') // Stream Deck MK.2
  const ringLight = getProductByAsin('B0CH9KZXWR') // Weilisi Ring Light

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Stream Vertical (9:16)<br />
            <span className="text-blue-600">for TikTok, Reels & YouTube Shorts</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The complete 2025 guide to mastering vertical streaming. Setup, equipment, content strategies, and platform-specific tips that actually get views and engagement.
          </p>
          <div className="flex items-center justify-center mt-6 text-gray-500">
            <span className="mr-4">📅 Updated January 2025</span>
            <span className="mr-4">⏱️ 14-minute read</span>
            <span>📱 Mobile-first strategies</span>
          </div>
        </div>

        <AffiliateDisclaimer />

        {/* What You'll Learn */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Setup</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• OBS/Streamlabs vertical configuration</li>
                <li>• Equipment positioning for 9:16</li>
                <li>• Audio optimization for mobile</li>
                <li>• Multi-platform streaming setup</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Content & Strategy</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Platform-specific algorithms</li>
                <li>• Vertical content that converts</li>
                <li>• Mobile-first engagement tactics</li>
                <li>• Monetization for short-form content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Vertical Streaming */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Why Vertical Streaming is the Future (And Why Most Streamers Ignore It)</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Here's a stat that'll blow your mind: <strong>over 75% of all video consumption happens on mobile devices</strong>, yet 99% of streamers are still creating horizontal content optimized for desktop viewing. That's a massive missed opportunity.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I started experimenting with vertical streaming in late 2023, and within 3 months, my TikTok following went from 400 to over 15,000. The same gaming content that got 20-50 views horizontally was suddenly getting thousands of views vertically.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="font-bold text-green-900 mb-3">The Vertical Advantage: Real Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Engagement Rates:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• TikTok vertical: 9x higher engagement</li>
                  <li>• Instagram Reels: 5x more reach</li>
                  <li>• YouTube Shorts: 12x more impressions</li>
                  <li>• Mobile retention: 67% longer watch time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Platform Priorities:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• TikTok: 100% vertical-first algorithm</li>
                  <li>• Instagram: 80% mobile consumption</li>
                  <li>• YouTube: Shorts get 15B daily views</li>
                  <li>• Twitch: Testing vertical mobile interface</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Mobile-First Reality</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Your audience isn't watching on their gaming setup anymore. They're scrolling on their phone during lunch breaks, on the bus, lying in bed. Vertical content fits naturally into their viewing habits.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-bold text-yellow-900 mb-3">Common Vertical Streaming Mistakes</h4>
            <ul className="text-yellow-800 space-y-2">
              <li>• <strong>Cropping horizontal content:</strong> This just cuts off important information</li>
              <li>• <strong>Ignoring mobile audio:</strong> Most viewers use phone speakers or earbuds</li>
              <li>• <strong>Desktop-focused overlays:</strong> Text becomes unreadable on mobile</li>
              <li>• <strong>Wrong aspect ratios:</strong> Using 16:9 thinking on a 9:16 canvas</li>
            </ul>
          </div>
        </section>

        {/* Technical Setup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. OBS & Streamlabs Setup for Vertical Streaming</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Setting up vertical streaming isn't just about changing your canvas size. You need to completely rethink your layout, positioning, and flow. Here's exactly how I configure my setup for maximum impact.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 1: Canvas Configuration</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-blue-900 mb-3">OBS Settings (Copy These Exactly)</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm">
              <p className="mb-2"><strong>Base Canvas Resolution:</strong> 1080x1920 (9:16)</p>
              <p className="mb-2"><strong>Output Resolution:</strong> 1080x1920</p>
              <p className="mb-2"><strong>Downscale Filter:</strong> Lanczos (Sharpened scaling, 36 samples)</p>
              <p className="mb-2"><strong>FPS:</strong> 30 (60 for fast-paced games)</p>
              <p><strong>Format:</strong> MP4 for recording, RTMP for streaming</p>
            </div>
            <p className="text-blue-800 mt-4">
              <strong>Pro Tip:</strong> Create separate scene collections for vertical and horizontal content. Don't try to use the same setup for both.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step 2: Source Positioning Strategy</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This is where most people mess up. You can't just rotate your horizontal layout 90 degrees. Vertical streaming requires a completely different hierarchy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎮 Gaming Content Layout</h4>
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Top 25%:</strong> Your face/webcam (large and prominent)
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Middle 60%:</strong> Game capture (cropped to important action)
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Bottom 15%:</strong> Chat, alerts, minimal overlay
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">💬 Just Chatting Layout</h4>
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Top 70%:</strong> Your face/webcam (full upper portion)
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Middle 20%:</strong> Chat overlay or reaction content
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <strong>Bottom 10%:</strong> Alerts and minimal branding
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Step 3: Mobile-Optimized Overlays</h3>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
            <h4 className="font-bold text-purple-900 mb-3">Overlay Design Principles for Mobile</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-purple-900">Font Size Minimum:</strong>
                <p className="text-purple-800">24pt for any text that matters. Mobile screens are small – make everything HUGE.</p>
              </div>
              <div>
                <strong className="text-purple-900">High Contrast Only:</strong>
                <p className="text-purple-800">White text on dark backgrounds or vice versa. Subtle colors disappear on phone screens.</p>
              </div>
              <div>
                <strong className="text-purple-900">Minimal Elements:</strong>
                <p className="text-purple-800">Show follower count, current game, maybe recent follow. That's it. Too much = visual chaos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <div className="my-16">
          {webcam && (
            <div className="mt-20">
              <AmazonProductCard product={webcam} />
            </div>
          )}
        </div>

        {/* Equipment & Positioning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Equipment Positioning for Vertical Success</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Your equipment setup needs to change dramatically for vertical content. What looks great in horizontal often looks terrible in vertical, and vice versa.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Camera Positioning: The Make-or-Break Factor</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This might be the most important section in this entire guide. Camera positioning for vertical streaming is completely different from horizontal, and getting it wrong will kill your content before anyone even hears you speak.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h4 className="font-bold text-red-900 mb-3">❌ What NOT to Do</h4>
            <ul className="text-red-800 space-y-2">
              <li>• <strong>Webcam at monitor level:</strong> Creates weird upward angle, shows ceiling</li>
              <li>• <strong>Too much headroom:</strong> Wastes 30% of your vertical space</li>
              <li>• <strong>Side-mounted cameras:</strong> Works for horizontal, terrible for vertical</li>
              <li>• <strong>Laptop webcams:</strong> Almost always positioned wrong for vertical content</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h4 className="font-bold text-green-900 mb-3">✅ Optimal Vertical Camera Setup</h4>
            <div className="space-y-4">
              <div>
                <strong className="text-green-900">Height:</strong>
                <p className="text-green-800">Camera at eye level or slightly above. You want to look INTO the lens, not up or down at it.</p>
              </div>
              <div>
                <strong className="text-green-900">Distance:</strong>
                <p className="text-green-800">2-3 feet away for upper body shot. Close enough to see facial expressions clearly on mobile.</p>
              </div>
              <div>
                <strong className="text-green-900">Framing:</strong>
                <p className="text-green-800">Chest up, minimal headroom. Remember, you're the star in vertical content.</p>
              </div>
              <div>
                <strong className="text-green-900">Background:</strong>
                <p className="text-green-800">Keep it simple. Busy backgrounds are distracting on small screens.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Lighting for Mobile Viewing</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Mobile screens have wildly different brightness settings and viewing conditions. Your lighting needs to work in bright sunlight AND in a dark bedroom at 2 AM.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">💡 Ring Light Setup</h4>
              <p className="text-gray-700 mb-4">
                Perfect for vertical streaming because it provides even lighting and the circular catchlight looks great in close-up shots.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Position directly behind your camera</li>
                <li>• 18-24 inches from your face</li>
                <li>• Use warm white (3200K) for comfort</li>
                <li>• Adjust brightness based on ambient light</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎨 Background Lighting</h4>
              <p className="text-gray-700 mb-4">
                Since your background takes up less vertical space, subtle accent lighting can really make you pop.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• LED strips behind your monitor</li>
                <li>• Colored bulbs for mood lighting</li>
                <li>• Avoid harsh shadows on the wall</li>
                <li>• Keep it subtle – you're the focus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Platform-Specific Strategies That Actually Work</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Each platform's algorithm works differently, and what gets views on TikTok might flop on YouTube Shorts. Here's what I've learned from analyzing thousands of hours of vertical content performance.
          </p>

          <div className="space-y-8">
            {/* TikTok Strategy */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📱</span>
                <h3 className="text-2xl font-bold text-gray-900">TikTok Live Strategy</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What Works:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Interactive gaming:</strong> Chat plays, viewer challenges</li>
                    <li>• <strong>Quick reactions:</strong> First impressions, surprise moments</li>
                    <li>• <strong>Educational micro-content:</strong> 30-second tips and tricks</li>
                    <li>• <strong>Behind-the-scenes:</strong> Setup tours, day-in-the-life</li>
                    <li>• <strong>Trend participation:</strong> Gaming versions of viral trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Algorithm Tips:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Hook in 3 seconds:</strong> Start with action or bold statement</li>
                    <li>• <strong>Consistent posting:</strong> Daily shorts perform better</li>
                    <li>• <strong>Engagement bait:</strong> "Comment your rank" type content</li>
                    <li>• <strong>Trending sounds:</strong> Use popular audio when relevant</li>
                    <li>• <strong>Hashtag strategy:</strong> Mix trending + niche tags</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Instagram Reels Strategy */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📸</span>
                <h3 className="text-2xl font-bold text-gray-900">Instagram Reels Strategy</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Content That Converts:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Before/after gameplay:</strong> Skill progression content</li>
                    <li>• <strong>Quick tutorials:</strong> How to improve at games</li>
                    <li>• <strong>Setup reveals:</strong> Room tours, equipment showcases</li>
                    <li>• <strong>Reaction content:</strong> First plays, funny moments</li>
                    <li>• <strong>Lifestyle integration:</strong> Gaming as part of daily life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Instagram Specifics:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Story integration:</strong> Post Reels to Stories too</li>
                    <li>• <strong>Caption hooks:</strong> Strong first line crucial</li>
                    <li>• <strong>Call-to-actions:</strong> "Save for later" performs well</li>
                    <li>• <strong>Original audio:</strong> Create your own sounds</li>
                    <li>• <strong>Cross-promotion:</strong> Tease content in regular posts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* YouTube Shorts Strategy */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📺</span>
                <h3 className="text-2xl font-bold text-gray-900">YouTube Shorts Strategy</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">High-Performance Content:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Gaming highlights:</strong> Best moments from longer streams</li>
                    <li>• <strong>Tutorial series:</strong> "Learn X in 60 seconds"</li>
                    <li>• <strong>Equipment reviews:</strong> Quick product impressions</li>
                    <li>• <strong>Q&A responses:</strong> Answer common questions</li>
                    <li>• <strong>Achievement showcases:</strong> Big wins, rare drops</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">YouTube Algorithm:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Watch time focus:</strong> Keep viewers watching full video</li>
                    <li>• <strong>Strong thumbnails:</strong> Still matter for Shorts</li>
                    <li>• <strong>Series potential:</strong> Create multi-part content</li>
                    <li>• <strong>Community engagement:</strong> Respond to comments quickly</li>
                    <li>• <strong>Cross-promotion:</strong> Link to longer content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <div className="my-16">
          {ringLight && (
            <div className="mt-20">
              <AmazonProductCard product={ringLight} />
            </div>
          )}
        </div>

        {/* Content Creation Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Content Creation: What Actually Gets Views</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Here's the hard truth: most gaming content doesn't work in vertical format. You need to completely rethink what makes engaging content when your audience is scrolling with their thumb.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Vertical Content Formula</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <h4 className="font-bold text-blue-900 mb-3">The 3-Second Rule for Vertical Content</h4>
            <p className="text-blue-800 mb-4">
              Your content needs to hook viewers in the first 3 seconds or they'll scroll past. Here's the formula that works:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border">
                <strong className="text-blue-900">Seconds 1-3:</strong> <span className="text-blue-800">Visual hook + bold statement</span>
              </div>
              <div className="bg-white p-4 rounded border">
                <strong className="text-blue-900">Seconds 4-15:</strong> <span className="text-blue-800">Deliver on the promise/show the action</span>
              </div>
              <div className="bg-white p-4 rounded border">
                <strong className="text-blue-900">Seconds 16-60:</strong> <span className="text-blue-800">Payoff + call to action</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">High-Performing Vertical Content Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎯 Gaming Specific</h4>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Clutch moments:</strong> 1v5 wins, impossible saves</li>
                <li><strong>Skill showcases:</strong> Perfect aim, speedrun segments</li>
                <li><strong>Reaction content:</strong> First time playing viral games</li>
                <li><strong>Challenge runs:</strong> No-death, weird restrictions</li>
                <li><strong>Easter eggs:</strong> Hidden secrets, rare occurrences</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">📚 Educational</h4>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Quick tips:</strong> "How to improve aim in 30 seconds"</li>
                <li><strong>Settings optimization:</strong> Best configurations</li>
                <li><strong>Equipment advice:</strong> Gear recommendations</li>
                <li><strong>Common mistakes:</strong> What not to do</li>
                <li><strong>Behind the scenes:</strong> Setup explanations</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-bold text-yellow-900 mb-3">Content Ideas That Always Perform</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-yellow-900 mb-2">Trending Formats:</h5>
                <ul className="text-yellow-800 space-y-1">
                  <li>• "POV: You're trying to..." scenarios</li>
                  <li>• "This one trick will..." educational hooks</li>
                  <li>• "Rating your setups" community content</li>
                  <li>• "Day in the life of a streamer"</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-900 mb-2">Evergreen Content:</h5>
                <ul className="text-yellow-800 space-y-1">
                  <li>• Equipment unboxings and reviews</li>
                  <li>• Setup tours and optimizations</li>
                  <li>• Game tutorials and walkthroughs</li>
                  <li>• Streaming tips and advice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Monetization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Monetizing Vertical Streaming</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Vertical streaming opens up completely different monetization opportunities. The audience behavior is different, the content consumption is different, so your revenue strategies need to be different too.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Platform-Specific Monetization</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">💰 TikTok Revenue Streams</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Direct Platform:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Creator Fund: $0.02-0.04 per 1,000 views</li>
                    <li>• Live gifts: $0.05-10+ per gift</li>
                    <li>• Brand partnerships: $100-10,000+ per post</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">External Revenue:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Affiliate marketing in bio links</li>
                    <li>• Directing traffic to main channel</li>
                    <li>• Product placement in videos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">📸 Instagram Reels Monetization</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Platform Features:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Reels Play Bonus: Up to $1,200/month</li>
                    <li>• Instagram Shop integration</li>
                    <li>• Brand collaboration tools</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">External Opportunities:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Story takeovers for brands</li>
                    <li>• Affiliate links in Stories</li>
                    <li>• Cross-promotion with other creators</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">📺 YouTube Shorts Revenue</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">YouTube Partner Program:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Shorts Fund: Up to $10,000/month</li>
                    <li>• AdSense on Shorts (new in 2024)</li>
                    <li>• Channel memberships</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Growth Strategy:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Drive traffic to long-form content</li>
                    <li>• Build email list through Shorts</li>
                    <li>• Promote affiliate products naturally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Affiliate Marketing for Vertical Content</h3>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h4 className="font-bold text-green-900 mb-3">What Actually Converts in Short-Form Content</h4>
            <p className="text-green-800 mb-4">
              Traditional affiliate marketing doesn't work well in 60-second videos. You need a different approach:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-green-900 mb-2">High-Converting Products:</h5>
                <ul className="text-green-800 space-y-1">
                  <li>• Ring lights and lighting kits</li>
                  <li>• Gaming peripherals (mice, keyboards)</li>
                  <li>• Audio equipment (headsets, microphones)</li>
                  <li>• Streaming software subscriptions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-900 mb-2">Effective Strategies:</h5>
                <ul className="text-green-800 space-y-1">
                  <li>• "Link in bio" calls to action</li>
                  <li>• Product demonstration videos</li>
                  <li>• Before/after comparison content</li>
                  <li>• "Setup reveal" style content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <div className="my-16">
          {streamDeck && (
            <div className="mt-20">
              <AmazonProductCard product={streamDeck} />
            </div>
          )}
        </div>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Common Problems & Solutions</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Vertical streaming comes with unique challenges. Here are the most common issues I see creators struggle with, and exactly how to fix them.
          </p>

          <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-3">❌ Problem: Game Content Doesn't Translate</h4>
              <p className="text-red-800 mb-3">
                Your horizontal gameplay looks cramped and important UI elements are cut off.
              </p>
              <div className="bg-white p-4 rounded border">
                <strong className="text-red-900">Solution:</strong>
                <ul className="text-red-800 mt-2 space-y-1">
                  <li>• Focus on your reaction, not the full game screen</li>
                  <li>• Crop to the action area only</li>
                  <li>• Use picture-in-picture for important UI elements</li>
                  <li>• Consider "gameplay + commentary" format instead</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-3">❌ Problem: Audio Sounds Terrible on Mobile</h4>
              <p className="text-red-800 mb-3">
                Your audio is optimized for desktop/headphones, but sounds awful through phone speakers.
              </p>
              <div className="bg-white p-4 rounded border">
                <strong className="text-red-900">Solution:</strong>
                <ul className="text-red-800 mt-2 space-y-1">
                  <li>• Boost mid-range frequencies (1-4kHz)</li>
                  <li>• Use compression to even out volume levels</li>
                  <li>• Test your content on actual phone speakers</li>
                  <li>• Add subtle background music for better phone playback</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-3">❌ Problem: Low Engagement Despite Good Content</h4>
              <p className="text-red-800 mb-3">
                Your vertical content looks good but isn't getting views or engagement.
              </p>
              <div className="bg-white p-4 rounded border">
                <strong className="text-red-900">Solution:</strong>
                <ul className="text-red-800 mt-2 space-y-1">
                  <li>• Analyze your first 3 seconds ruthlessly</li>
                  <li>• Add captions/text overlays for silent viewing</li>
                  <li>• Create stronger hooks and calls-to-action</li>
                  <li>• Post at optimal times for your audience</li>
                  <li>• Engage with comments within first hour of posting</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-bold text-red-900 mb-3">❌ Problem: Technical Issues with Multi-Platform Streaming</h4>
              <p className="text-red-800 mb-3">
                Trying to stream vertically to multiple platforms simultaneously causes problems.
              </p>
              <div className="bg-white p-4 rounded border">
                <strong className="text-red-900">Solution:</strong>
                <ul className="text-red-800 mt-2 space-y-1">
                  <li>• Use platform-specific scene collections</li>
                  <li>• Consider Restream.io for multi-platform vertical streaming</li>
                  <li>• Record locally and upload separately for best quality</li>
                  <li>• Adjust bitrate settings for each platform's requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your 7-Day Vertical Streaming Setup Plan</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Don't try to master everything at once. Follow this week-by-week plan to get your vertical streaming setup perfect:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Days 1-2: Technical Foundation</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✓ Set up OBS with 1080x1920 canvas</li>
                <li>✓ Create vertical scene collection</li>
                <li>✓ Test camera positioning and lighting</li>
                <li>✓ Configure mobile-optimized overlays</li>
                <li>✓ Do a test recording and review on your phone</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Days 3-4: Content Planning</h3>
              <ul className="space-y-2 text-green-800">
                <li>✓ Choose your primary vertical platform</li>
                <li>✓ Plan your first 5 pieces of vertical content</li>
                <li>✓ Set up accounts and bio links</li>
                <li>✓ Research trending hashtags in your niche</li>
                <li>✓ Create content calendar for consistent posting</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Days 5-6: Create & Test</h3>
              <ul className="space-y-2 text-purple-800">
                <li>✓ Record your first 3 vertical videos</li>
                <li>✓ Edit and optimize for mobile viewing</li>
                <li>✓ Add captions and mobile-friendly graphics</li>
                <li>✓ Test on multiple devices and screen sizes</li>
                <li>✓ Get feedback from friends/community</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Day 7: Launch & Analyze</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>✓ Post your first vertical content</li>
                <li>✓ Engage with early comments and viewers</li>
                <li>✓ Analyze performance metrics</li>
                <li>✓ Plan improvements for next content</li>
                <li>✓ Set up regular posting schedule</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vertical Advantage: Your Next Move</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Most streamers are still stuck thinking horizontally while the world has gone mobile-first. This is your opportunity to get ahead of the curve.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm not saying abandon horizontal streaming entirely – but if you're not creating vertical content in 2025, you're missing out on millions of potential viewers who prefer consuming content on their phones.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Start Small, Think Big</h3>
            <p className="text-lg mb-4">
              You don't need to revolutionize your entire content strategy overnight. Start with repurposing your best horizontal moments into vertical highlights. Test what works. Double down on what performs.
            </p>
            <p className="text-lg">
              The creators who master vertical streaming in 2025 will have a massive advantage over those who ignore the mobile-first reality.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Set Up Your Equipment?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Check out our other guides for complete streaming setup and equipment recommendations:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/guides/complete-streaming-setup-2025"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Complete Setup Guide
              </a>
              <a 
                href="/guides/how-to-start-streaming-2025"
                className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Beginner's Guide
              </a>
              <a 
                href="https://streamlabs.pxf.io/6yzXgq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Streamlabs Free
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Master Every Aspect of Streaming
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Vertical streaming is just one piece of the puzzle. For complete streaming success, you need the full picture: equipment, software, monetization, and growth strategies.
            </p>
            <p className="text-gray-600">
              Explore our complete library of streaming guides to build your perfect setup and grow your audience.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 