import { Metadata } from 'next'
import Link from 'next/link'
import AffiliateDisclaimer from '../../../components/AffiliateDisclaimer'

export const metadata: Metadata = {
  title: 'Your First Stream Command Center: A Complete Setup Guide for New Streamers | NextGenStreamer',
  description: 'Ready to assemble your first streaming station? This step-by-step guide walks new and young streamers through setting up their PC, mic, webcam, lighting, and managing cables for a clean, efficient command center.',
  keywords: 'streaming setup, beginner setup, stream desk, pc setup, microphone setup, webcam setup, cable management, ergonomics, complete streaming guide',
  openGraph: {
    title: 'Your First Stream Command Center: A Complete Setup Guide for New Streamers',
    description: 'Ready to assemble your first streaming station? This step-by-step guide walks new and young streamers through setting up their PC, mic, webcam, lighting, and managing cables for a clean, efficient command center.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://nextgenstreamer.com/guides/complete-streaming-setup-2025'
  }
}

export default function CompleteStreamingSetupPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-purple-600/50 to-blue-600/50"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">⚙️ Complete Setup Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your First Stream Command Center: A Complete Setup Guide
              </h1>
              <p className="text-xl text-gray-200">
                Step-by-step assembly guide for new streamers to build their perfect streaming station
              </p>
            </div>
            <div className="relative">
              <img 
                src="/setup.png" 
                alt="Complete streaming setup command center" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Intro */}
        <div className="prose prose-xl max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Hey NextGen Streamers!
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            You've got your vision, your platform chosen, and even some awesome gear picked out. Now comes the exciting part: putting it all together! Setting up your streaming "command center" doesn't have to be complicated or expensive. It's about making your space functional, comfortable, and ready for you to go live.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This guide will walk you through setting up your complete streaming station, from your PC to your peripherals, focusing on efficiency and a clean look that will make you feel like a pro from day one. Let's build it!
          </p>
        </div>

        {/* Step 1: Prepare Your Space */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Prepare Your Space – The Foundation</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Before unboxing anything, clear and prepare your streaming area.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Clear Your Desk:</strong> Remove clutter! You want a clean slate. A tidy desk looks better on camera and helps you focus.</li>
              <li><strong>Clean Up:</strong> Give your desk and surrounding area a quick wipe-down.</li>
              <li><strong>Check Power Outlets:</strong> Ensure you have enough accessible power outlets for your PC, monitor(s), and peripherals. Use a <strong>surge protector</strong> for all your valuable electronics.
                <br/><strong>Recommended:</strong> <a href="https://amzn.to/3ZZXJd8" className="text-blue-600 hover:text-blue-800 underline">Amazon Basics 6-Outlet Power Strip with Surge Protector</a></li>
              <li><strong>Consider Your Background:</strong> What will viewers see behind you? A plain wall, some cool lighting, or a tidy shelf of collectibles can look great. Avoid messy rooms or distracting elements.</li>
            </ol>
          </div>
        </section>

        {/* Step 2: Set Up Your PC & Monitor(s) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Set Up Your PC & Monitor(s)</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              This is the core of your streaming setup.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Place Your PC:</strong> Decide if your PC tower goes on top of or under your desk. Consider airflow (don't block vents!) and accessibility for plugging in cables. Keep it relatively close to your monitor(s).</li>
              <li><strong>Position Your Monitor(s):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Main Monitor:</strong> Place your primary monitor directly in front of you at arm's length. The top of the screen should be roughly at eye level to prevent neck strain.</li>
                  <li><strong>Second Monitor (Optional):</strong> If you have a second monitor, place it to the side of your primary screen. This is great for monitoring chat, OBS, or other stream tools.</li>
                  <li><strong>Consider Monitor Arms:</strong> These free up desk space and allow for more flexible positioning.
                    <br/><strong>Great option:</strong> <a href="https://amzn.to/3ZVoEH4" className="text-blue-600 hover:text-blue-800 underline">HUANUO Single Monitor Arm (Desk Mount)</a></li>
                </ul>
              </li>
              <li><strong>Connect PC to Monitor(s):</strong> Use HDMI, DisplayPort, or DVI cables. Ensure they're securely plugged into both your graphics card (on the PC) and your monitor(s).</li>
              <li><strong>Connect Power:</strong> Plug your monitor(s) into your surge protector. Plug your PC's power cable into the surge protector.</li>
            </ol>
          </div>
        </section>

        {/* Step 3: Install Your Microphone */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Install Your Microphone</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your voice is paramount! A dedicated mic makes a huge difference.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Mount Your Microphone:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>USB Desktop Mics (e.g., Blue Yeti):</strong> Place it on its included stand, usually about 6-12 inches from your mouth, slightly off to the side to avoid breathing noises.</li>
                  <li><strong>Boom Arm (Recommended for all mics):</strong> If you have a boom arm (great for keeping your desk clear and positioning the mic optimally), clamp it securely to your desk. Screw your microphone onto the arm. Position the mic so it's close to your mouth (about 6-12 inches away) but out of the way of your monitor and keyboard.
                    <br/><strong>Great option:</strong> <a href="https://amzn.to/3I6puus" className="text-blue-600 hover:text-blue-800 underline">NEEWER Adjustable Microphone Arm Stand</a></li>
                </ul>
              </li>
              <li><strong>Connect Your Mic to PC:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>USB Mics:</strong> Plug the USB cable directly into an available USB port on your PC.</li>
                  <li><strong>XLR Mics (e.g., Shure MV7 via XLR, Shure SM7B):</strong>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Plug one end of an XLR cable into your microphone.</li>
                      <li>Plug the other end of the XLR cable into your <strong>audio interface</strong> (e.g., <a href="https://amzn.to/45Q3wps" className="text-blue-600 hover:text-blue-800 underline">Focusrite Scarlett Solo</a>).</li>
                      <li>Connect the audio interface to your PC via its USB cable.</li>
                      <li><em>If using a gain booster (like for an SM7B):</em> Mic → Booster → Audio Interface → PC.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Add Pop Filter/Windscreen (if needed):</strong> If your mic didn't come with one or you still hear "popping" sounds, add an external pop filter onto the boom arm, directly in front of your mic.
                <br/><strong>Recommended:</strong> <a href="https://amzn.to/3Tj9JT9" className="text-blue-600 hover:text-blue-800 underline">Neewer Microphone Pop Filter</a></li>
            </ol>
          </div>
        </section>

        {/* Step 4: Position Your Webcam */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Position Your Webcam</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Let your viewers see that awesome face!
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Clip to Monitor:</strong> Most webcams, like the <a href="https://amzn.to/40vsSoM" className="text-blue-600 hover:text-blue-800 underline">Logitech C920</a>, have a clip that securely attaches to the top of your monitor. Position it centrally, just above your main screen.</li>
              <li><strong>Adjust Angle:</strong> Angle the webcam so it captures your face clearly, from the chest up, with good headroom. Avoid pointing it too far up (showing your ceiling) or too far down (showing too much desk).</li>
              <li><strong>Connect to PC:</strong> Plug the webcam's USB cable into an available USB port on your PC.</li>
            </ol>
          </div>
        </section>

        {/* Step 5: Set Up Your Lighting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 5: Set Up Your Lighting (Optional, but Highly Recommended)</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Good lighting makes a HUGE difference to your webcam quality.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Position Your Light(s):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Ring Light:</strong> Place a ring light directly in front of you, just behind your webcam. This creates even, flattering light on your face.
                    <br/><strong>Great option:</strong> <a href="https://amzn.to/3TDY81n" className="text-blue-600 hover:text-blue-800 underline">Small USB Ring Light with Tripod Stand</a></li>
                  <li><strong>Two-Point Lighting:</strong> If using two desk lamps or small LED panels, position one slightly to your left and one slightly to your right, both angled towards your face. This reduces harsh shadows.
                    <br/><strong>Popular choice:</strong> <a href="https://amzn.to/4kslNgc" className="text-blue-600 hover:text-blue-800 underline">Neewer USB LED Video Light 2-Pack</a></li>
                </ul>
              </li>
              <li><strong>Test the Look:</strong> Turn on your webcam (you can usually preview it in your streaming software or even a simple app like Windows Camera) and adjust the lighting until your face is well-lit, evenly, and without harsh shadows. Avoid backlighting (light coming from behind you) as this will make your face dark!</li>
            </ol>
          </div>
        </section>

        {/* Step 6: Connect Keyboard, Mouse & Headphones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 6: Connect Keyboard, Mouse & Headphones</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              These are your primary interaction tools.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Connect Keyboard & Mouse:</strong> Plug their USB cables (or connect wirelessly) to your PC. Position them comfortably for long gaming or typing sessions.</li>
              <li><strong>Connect Headphones:</strong> Plug your headphones into your PC's audio jack, your audio interface, or your gaming console controller (depending on your setup). Ensure you can clearly hear both your game and any desktop audio.
                <br/><strong>Budget-friendly option:</strong> <a href="https://amzn.to/4laIBSJ" className="text-blue-600 hover:text-blue-800 underline">HyperX Cloud Stinger Core Gaming Headset</a></li>
            </ol>
          </div>
        </section>

        {/* Step 7: Cable Management */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 7: Conquer Cable Management (The Secret to a Clean Setup!)</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Messy cables look bad on camera and are a pain to deal with. Good cable management makes your setup feel truly complete.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Gather Your Tools:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Velcro Cable Ties:</strong> Reusable and easy to adjust.
                    <br/><strong>Great choice:</strong> <a href="https://amzn.to/3TlMDeG" className="text-blue-600 hover:text-blue-800 underline">VELCRO Brand ONE-WRAP Cable Ties</a></li>
                  <li><strong>Cable Sleeves/Wraps:</strong> For bundling multiple cables together.</li>
                  <li><strong>Adhesive Cable Clips:</strong> For routing cables along desk edges or legs.
                    <br/><strong>Recommended:</strong> <a href="https://amzn.to/4knhzq3" className="text-blue-600 hover:text-blue-800 underline">Cable Clips Adhesive Backed</a></li>
                </ul>
              </li>
              <li><strong>Bundle & Route:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Short Cables:</strong> Use Velcro ties to bundle excess cable length neatly.</li>
                  <li><strong>Long Runs:</strong> Route cables along the back edge of your desk, down desk legs, or behind your PC tower.</li>
                  <li><strong>Power & Data Separation:</strong> Try to keep power cables separate from data cables (USB, HDMI) to reduce potential interference.</li>
                  <li><strong>Under-Desk Management:</strong> Consider an under-desk cable tray or net to hide power strips and bundled cables.
                    <br/><strong>Popular option:</strong> <a href="https://amzn.to/4lCcMCe" className="text-blue-600 hover:text-blue-800 underline">Under Desk Cable Management Tray</a></li>
                </ul>
              </li>
              <li><strong>Zip It Up:</strong> Use your ties and clips to secure cables in place, minimizing visible wires.</li>
            </ol>
          </div>
        </section>

        {/* Step 8: Software Checks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 8: Perform Initial Software Checks</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Before you even open OBS, make sure your operating system recognizes everything.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Check Device Manager (Windows):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Right-click the Start button → "Device Manager."</li>
                  <li>Look under "Audio inputs and outputs" and "Sound, video and game controllers" to ensure your microphone and webcam are listed without any yellow exclamation marks.</li>
                </ul>
              </li>
              <li><strong>Check Sound Settings (Windows/macOS):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Windows:</strong> Right-click the speaker icon in your taskbar → "Sound settings." Make sure your headphones are set as the "Output device" and your dedicated microphone is set as the "Input device." Test your mic here!</li>
                  <li><strong>macOS:</strong> Go to System Settings → Sound. Select your input and output devices and test.</li>
                </ul>
              </li>
              <li><strong>Install Streaming Software:</strong> If you haven't already, download and install your chosen streaming software (OBS Studio, <a href="https://streamlabs.pxf.io/6yzXgq" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:text-blue-800 underline">Streamlabs Desktop</a>, or Twitch Studio).</li>
            </ol>
          </div>
        </section>

        {/* Step 9: Ergonomics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 9: Fine-Tune Ergonomics & Comfort</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You'll be spending hours here, so comfort is key!
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Chair Comfort:</strong> Ensure your chair provides good lumbar support. Adjust the height so your feet are flat on the floor (or use a footrest) and your knees are at a 90-degree angle.</li>
              <li><strong>Keyboard & Mouse Position:</strong> Keep them at a comfortable height so your wrists are straight, not bent up or down.</li>
              <li><strong>Breaks:</strong> Even with a perfect setup, remember to take short breaks every hour to stretch, walk around, and rest your eyes.</li>
            </ol>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your First Stream Command Center: Ready for Action!</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Congratulations! You've assembled your first complete streaming setup. You've got the gear, it's connected, and your space is ready for you to start creating amazing content.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This organized, functional setup will not only make your life easier but also present a more professional and inviting image to your viewers. Now, it's time to dive into the software configuration and hit that "Go Live" button!
            </p>
            
            <div className="text-center mb-8">
              <Link 
                href="/guides/how-to-start-streaming-2025"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
              >
                🚀 Continue to Our "How to Start Streaming" Guide!
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More NextGen Streamer Resources</h2>
          
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/guides/how-to-start-streaming-2025" className="text-blue-600 hover:text-blue-800 underline">How to Start Streaming in 2025: The ULTIMATE Beginner's Guide</Link></li>
              <li><Link href="/guides/shure-sm7b-review-worth-it" className="text-blue-600 hover:text-blue-800 underline">The Shure SM7B: Is This Legendary Mic Worth It for a New Streamer?</Link></li>
              <li><Link href="/guides/logitech-c920-review-worth-it" className="text-blue-600 hover:text-blue-800 underline">Logitech C920 Webcam Review: The King of Budget Streaming?</Link></li>
              <li><Link href="/guides/streamlabs-vs-obs-2025" className="text-blue-600 hover:text-blue-800 underline">Streamlabs vs OBS: Which Streaming Software is Right for You?</Link></li>
            </ul>
          </div>
        </section>

        <AffiliateDisclaimer />
      </div>
    </article>
  )
} 