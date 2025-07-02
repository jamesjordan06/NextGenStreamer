// app/getting-started/your-first-stream-a-complete-setup-checklist/page.tsx
import { Metadata } from 'next'
import AffiliateDisclaimer from '../../../components/AffiliateDisclaimer'

export const metadata: Metadata = {
  title: 'Your First Stream: A Complete Setup Checklist | NextGenStreamer',
  description: 'A comprehensive checklist covering hardware, software, and final checks so your debut stream goes smoothly.',
}

export default function YourFirstStreamChecklistPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/setup.png" alt="Streaming setup checklist" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">✅ Setup Checklist</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your First Stream: The Ultimate Setup Checklist</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Follow this step-by-step guide to build a rock-solid foundation before you go live for the very first time.
          </p>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12 prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The thrill of going live for the first time is unmatched, but many new streamers overlook the crucial setup phase. This checklist cuts through the noise so you can start strong, avoid common technical pitfalls, and focus on engaging with your audience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 1: The Non-Negotiables – Core Hardware Essentials</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Your Computer: The Heartbeat of Your Broadcast</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Processor:</strong> Minimum Intel Core i5 8th Gen or AMD Ryzen 5 2nd Gen. Recommended i7/Ryzen&nbsp;7 or better for gaming streams.</li>
              <li><strong>Memory:</strong> 8GB is the absolute minimum. Aim for 16GB to comfortably run your game, OBS, and chat. Heavy multitaskers will appreciate 32GB.</li>
              <li><strong>Graphics Card:</strong> Entry level cards like the GTX&nbsp;1660&nbsp;Super or RX&nbsp;6600 work for 1080p streaming. RTX&nbsp;3060/4060 or RX&nbsp;6700&nbsp;XT hit the sweet spot.</li>
              <li><strong>Storage:</strong> Install your OS and streaming software on an SSD for quick boot times. Use an HDD for large game libraries or archived footage.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Your Voice: The Microphone</h3>
            <p>Clear audio keeps viewers around. USB mics like the Blue Yeti or HyperX QuadCast are beginner friendly. XLR mics such as the Shure SM7B require an audio interface but offer broadcast-quality sound.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Your Face: The Webcam</h3>
            <p>Let viewers connect with you visually. A 1080p webcam at 30&nbsp;fps is the minimum; 60&nbsp;fps looks smoother. Popular models include the Logitech C920/C922 and Elgato Facecam. DSLRs with a capture card can elevate quality even further.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 2: The Unseen Foundations – Connectivity &amp; Software</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">4. Internet Connection: Your Lifeline to Viewers</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Upload speed matters most. Aim for 5–8&nbsp;Mbps for 1080p&nbsp;30&nbsp;fps, or 8–12&nbsp;Mbps for 1080p&nbsp;60&nbsp;fps.</li>
              <li>Use a wired Ethernet connection whenever possible. Wi‑Fi is prone to interference and dropped frames.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">5. Streaming Software: Your Digital Control Booth</h3>
            <p>OBS Studio is free and powerful but has a learning curve. Streamlabs Desktop adds user-friendly features and built-in alerts at the cost of higher resource usage. Choose the one that fits your comfort level.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 3: Elevating Your Presentation – Going Beyond the Basics</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">6. Lighting</h3>
            <p>Good lighting makes any webcam look better. Position a key light slightly off-center, add a fill light to soften shadows, and consider a backlight for depth.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">7. Headphones</h3>
            <p>Use closed-back headphones to monitor your audio and avoid echoes. Comfort is important for long sessions.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">8. Stream Deck or Hotkey Panel</h3>
            <p>A dedicated control surface like the Elgato Stream Deck lets you switch scenes, trigger alerts, and more with a single button press.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">9. Background and Environment</h3>
            <p>Keep your space tidy and add personal touches. A green screen can replace your background entirely if desired.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">10. Audio Interface (for XLR Mics)</h3>
            <p>Interfaces like the Focusrite Scarlett Solo convert your XLR mic&#39;s analog signal to digital, providing clean gain and optional phantom power.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 4: The Crucial Setup – Software Configuration</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">11. Install and Initial Setup of Streaming Software</h3>
            <p>Download OBS Studio or Streamlabs from their official websites and run the auto-configuration wizard for a solid starting point.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">12. Configure Audio Settings</h3>
            <p>Select your microphone, set monitoring to your headphones, and use noise suppression and noise gates to keep your audio clean.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">13. Configure Video Settings</h3>
            <p>Choose your webcam, decide on your output resolution and frame rate, and use your GPU&#39;s hardware encoder if available.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">14. Set Up Scenes and Sources</h3>
            <p>Create scenes for &#34;Starting Soon,&#34; &#34;Gameplay,&#34; &#34;Just Chatting,&#34; and more. Add game capture, webcam, and alert sources as needed.</p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">15. Connect to Your Streaming Platform</h3>
            <p>Retrieve your stream key from Twitch or YouTube and paste it into your software. Integrate alerts and widgets before going live.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 5: The Dress Rehearsal – Your Test Stream</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>Always run a private or unlisted test stream. Check your audio levels, video quality, performance stats, and practice scene switching before broadcasting to the world.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Part 6: The Moment Arrives – Final Pre-Stream Checklist</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>Double-check your internet connection, charge controllers and headsets, close unnecessary programs, and hydrate. Take a deep breath—you&#39;re ready to hit that Go Live button!</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">A Final Thought: Embrace the Journey</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>Your first stream won&#39;t be perfect, and that&#39;s okay. Streaming is a process of learning and improvement. Focus on authenticity and have fun connecting with your new community.</p>
          </div>
        </section>

        <AffiliateDisclaimer />
      </div>
    </article>
  )
}
