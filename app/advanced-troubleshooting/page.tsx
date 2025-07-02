// app/advanced-troubleshooting/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advanced Streaming & Troubleshooting Guides | NextGenStreamer',
  description: 'In-depth guides for experienced streamers covering advanced setups, technical troubleshooting, and optimization.',
};

const articles = [
  {
    href: '/advanced-troubleshooting/solving-dropped-frames-comprehensive-troubleshooting-guide',
    title: 'Solving Dropped Frames: A Comprehensive Troubleshooting Guide',
    description: 'A detailed guide to help you diagnose and solve dropped frames issues.',
  },
  {
    href: '/advanced-troubleshooting/optimizing-your-internet-for-stable-streaming',
    title: 'Optimizing Your Internet for Stable Streaming',
    description: 'Tips and techniques for optimizing your internet connection for a stable stream.',
  },
  {
    href: '/advanced-troubleshooting/dual-pc-streaming-setup-guide',
    title: 'Dual PC Streaming Setup Guide',
    description: 'A comprehensive guide on setting up a dual PC configuration for streaming.',
  },
  {
    href: '/advanced-troubleshooting/advanced-obs-filters-for-audio-quality',
    title: 'Advanced OBS Filters for Audio Quality',
    description: 'Learn how to use advanced audio filters in OBS Studio for professional audio.',
  },
  {
    href: '/advanced-troubleshooting/dealing-with-dmca-claims-twitch-youtube',
    title: 'Dealing with DMCA Claims on Twitch & YouTube',
    description: 'Understanding DMCA, how to avoid claims, and what to do if you receive one.',
  },
  {
    href: '/advanced-troubleshooting/implementing-low-latency-streaming',
    title: 'Implementing Low-Latency Streaming',
    description: 'Techniques and settings to achieve low-latency streaming for better audience interaction.',
  },
];

export default function AdvancedTroubleshootingCategoryPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Advanced Streaming & Troubleshooting
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Take your stream to the next level with these in-depth guides on complex setups, technical problem-solving, and performance optimization.
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
