// app/getting-started/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started with Streaming | NextGenStreamer',
  description: 'Essential guides and tips for new streamers to begin their journey, from setup to first live stream.',
};

// This data would ideally be fetched or managed centrally in a real app.
// For now, it's based on the articles we just created placeholders for.
const articles = [
  {
    href: '/getting-started/how-to-start-streaming-2025',
    title: "How to Start Streaming in 2025: The ULTIMATE Beginner's Guide",
    description: "Ready to go live in 2025? This ultimate, in-depth guide covers everything new and young streamers need to know, from essential gear and software to platform choices, crucial first steps, troubleshooting, and building your community.",
  },
  {
    href: '/getting-started/your-first-stream-a-complete-setup-checklist',
    title: 'Your First Stream: A Complete Setup Checklist',
    description: 'A comprehensive checklist to ensure your first stream goes smoothly.',
  },
  {
    href: '/getting-started/twitch-for-beginners-setting-up-your-channel',
    title: 'Twitch for Beginners: Setting Up Your Channel',
    description: 'A step-by-step guide for new streamers on how to set up their Twitch channel.',
  },
  {
    href: '/getting-started/how-to-choose-your-first-streaming-game',
    title: 'How to Choose Your First Streaming Game',
    description: 'Tips and strategies for selecting the right game to start your streaming journey.',
  },
  {
    href: '/getting-started/free-streaming-software-obs-vs-streamlabs',
    title: 'Free Streaming Software: OBS Studio vs. Streamlabs Desktop',
    description: 'A comparison of OBS Studio and Streamlabs Desktop for new streamers.',
  },
  {
    href: '/getting-started/budget-streaming-gear-guide',
    title: 'Budget Streaming Gear Guide (Under $X)',
    description: 'Find the best budget-friendly streaming gear to get started.',
  },
];

export default function GettingStartedCategoryPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Getting Started with Streaming
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            New to streaming? These guides will walk you through everything you need to know, from choosing your gear to going live for the first time.
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
