// app/guides/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Streaming Guides | NextGenStreamer',
  description: 'Browse all our expert guides on streaming, from beginner setups to advanced monetization techniques and equipment selection.',
}

// Actual guide data, mirroring the structure from Navigation.tsx
const guides = [
  { href: "/guides/how-to-start-streaming-2025", title: "Complete Beginner's Guide", description: "Start streaming from zero" },
  { href: "/guides/complete-streaming-setup-2025", title: "Complete Setup Guide", description: "Equipment & configuration" },
  { href: "/guides/how-to-monetize-streaming-low-viewers-2025", title: "Monetization Guide", description: "Earn with low viewers" },
  { href: "/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025", title: "Vertical Streaming", description: "TikTok, Reels & Shorts" },
  { href: "/guides/gaming-headsets-comfort-sound-quality-mic-performance", title: "Gaming Headsets Guide", description: "Comfort, sound & mic performance" },
  // Note: Review articles that were previously under "Guides" dropdown are intentionally kept here if they are guides first, reviews second.
  // Or they can be moved exclusively to the reviews page if that makes more sense organizationally.
  // For this consolidation, we'll keep them associated with their primary category as reflected in the original dropdown.
];

export default function AllGuidesPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            All Streaming Guides
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your ultimate resource for learning everything about streaming. From getting started to mastering advanced techniques, find it all here.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="card p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
            >
              <div>
                <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3 group-hover:text-brand-primary-hover transition-colors">
                  {guide.title}
                </h2>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {guide.description}
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-block text-brand-primary font-semibold group-hover:underline">
                  Read Guide &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
