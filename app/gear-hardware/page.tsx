// app/gear-hardware/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Streaming Gear & Hardware Guides | NextGenStreamer',
  description: 'Find the best streaming gear and hardware. In-depth reviews and setup guides for microphones, webcams, capture cards, PCs, and more.',
};

const articles = [
  // Migrated Content (Prioritized for duplicates)
  {
    href: '/gear-hardware/complete-streaming-setup-2025',
    title: 'Your First Stream Command Center: A Complete Setup Guide for New Streamers',
    description: 'Ready to assemble your first streaming station? This step-by-step guide walks new and young streamers through setting up their PC, mic, webcam, lighting, and managing cables for a clean, efficient command center.',
  },
  {
    href: '/gear-hardware/gaming-headsets-comfort-sound-quality-mic-performance',
    title: 'Gaming Headsets: Comfort, Sound Quality & Mic Performance Compared for the Ultimate Experience',
    description: 'Complete guide to choosing the perfect gaming headset. Compare comfort, sound quality, and microphone performance for competitive gaming, streaming, and immersive experiences.',
  },
  {
    href: '/gear-hardware/headphones-vs-earbuds-2025',
    title: 'Headphones vs Earbuds for Gaming & Streaming 2025',
    description: 'Complete comparison of headphones vs earbuds for gaming, streaming, and content creation. Discover which is better for your needs with detailed pros, cons, and product recommendations.',
  },
  {
    href: '/gear-hardware/logitech-c920-review-worth-it',
    title: 'Logitech C920 Webcam Review: The King of Budget Streaming? (For New Streamers!)',
    description: 'Honest Logitech C920 review for new streamers. Is this legendary webcam still worth it in 2025? We break down the real pros, cons, and whether you should buy it.',
  },
  {
    href: '/gear-hardware/logitech-c920-vs-c922-comparison',
    title: 'Logitech C920x vs. C922: The Definitive Guide to Choosing Your Perfect Webcam',
    description: 'Complete comparison between Logitech C920x and C922 webcams. Detailed breakdown of features, performance, and which webcam is right for your streaming setup.',
  },
  {
    href: '/gear-hardware/shure-sm7b-review-worth-it',
    title: 'The Shure SM7B: Is This Legendary Mic Worth It for a New Streamer?',
    description: 'Honest Shure SM7B review for new streamers. Learn if this legendary microphone is worth the investment, what you really need to make it work, and better alternatives for beginners.',
  },
  {
    href: '/gear-hardware/xlr-vs-usb-microphones-2025', // Migrated, supersedes placeholder
    title: 'XLR vs USB Microphones: Complete Guide 2025',
    description: 'Comprehensive comparison of XLR and USB microphones for streaming, podcasting, and content creation.',
  },
  {
    href: '/gear-hardware/best-microphones-2025', // Migrated from lists, supersedes placeholder
    title: 'Best Microphones for Creators 2025 - Complete Buying Guide',
    description: 'Discover the best microphones for podcasting, streaming, and content creation in 2025.',
  },
  // Original Placeholders (if not superseded by migrated content with similar topic)
  {
    href: '/gear-hardware/top-webcams-for-high-quality-streaming',
    title: 'Top Webcams for High-Quality Streaming', // This might be different enough from C920 review/comparison to keep
    description: 'A review of the best webcams to achieve high-quality video for your stream.',
  },
  {
    href: '/gear-hardware/optimizing-webcam-settings-for-low-light',
    title: 'Optimizing Webcam Settings for Low Light',
    description: 'Learn how to adjust your webcam settings for the best video quality in low-light conditions.',
  },
  {
    href: '/gear-hardware/internal-vs-external-capture-cards',
    title: 'Internal vs. External Capture Cards: Which is Right for You?',
    description: 'A comparison of internal and external capture cards for your streaming needs.',
  },
  {
    href: '/gear-hardware/elgato-hd60-x-review',
    title: 'Elgato HD60 X Review',
    description: 'An in-depth review of the Elgato HD60 X capture card.',
  },
  {
    href: '/gear-hardware/building-a-streaming-pc-component-guide',
    title: 'Building a Streaming PC: Component Guide',
    description: 'A comprehensive guide to selecting components for a powerful streaming PC.',
  },
  {
    href: '/gear-hardware/best-laptops-for-on-the-go-streamers',
    title: 'Best Laptops for On-the-Go Streamers',
    description: 'Discover the best laptops for streaming away from your main setup.',
  },
  {
    href: '/gear-hardware/essential-stream-deck-setups',
    title: 'Essential Stream Deck Setups',
    description: 'Learn how to configure your Stream Deck with essential actions and integrations.',
  },
  {
    href: '/gear-hardware/best-led-lights-for-professional-streams',
    title: 'Best LED Lights for Professional Streams',
    description: 'A guide to the best LED lighting solutions for a professional stream look.',
  },
];

export default function GearHardwareCategoryPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Streaming Gear & Hardware
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your complete guide to choosing, setting up, and troubleshooting streaming equipment. From microphones to capture cards, we cover it all.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="card p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50 group"
            >
              <div>
                <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3 group-hover:text-brand-primary-hover transition-colors">
                  {article.title}
                </h2>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {article.description}
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-block text-brand-primary font-semibold group-hover:underline">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
