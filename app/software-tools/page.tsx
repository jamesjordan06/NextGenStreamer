// app/software-tools/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Streaming Software & Tools Guides | NextGenStreamer',
  description: 'Master your streaming software, overlays, bots, and editing tools with our expert guides and reviews.',
};

const articles = [
  {
    href: '/software-tools/how-to-stream-vertical-916-tiktok-reels-shorts-2025',
    title: 'How to Stream Vertical (9:16) for TikTok, Reels & YouTube Shorts 2025',
    description: 'Master vertical streaming for TikTok, Instagram Reels, and YouTube Shorts. Complete setup guide with OBS configuration, equipment tips, and content strategies that actually work.',
  },
  {
    href: '/software-tools/streamlabs-vs-obs-2025',
    title: 'Streamlabs vs OBS: Which One Should You Use in 2025?',
    description: 'Honest comparison of Streamlabs vs OBS Studio for streaming in 2025. Get real-world insights on performance, features, and which one is right for your streaming needs.',
  },
  {
    href: '/software-tools/obs-studio-advanced-settings-guide',
    title: 'OBS Studio Advanced Settings Guide',
    description: 'Unlock the full potential of OBS Studio with advanced settings for optimal stream quality.',
  },
  {
    href: '/software-tools/streamlabs-desktop-best-practices',
    title: 'Streamlabs Desktop Best Practices',
    description: 'Learn best practices for using Streamlabs Desktop for engaging live streams.',
  },
  {
    href: '/software-tools/customizing-stream-overlays-streamelements',
    title: 'Customizing Your Stream Overlays with StreamElements',
    description: 'A guide to creating and customizing dynamic stream overlays using StreamElements.',
  },
  {
    href: '/software-tools/animated-alerts-how-to-make-your-stream-pop',
    title: 'Animated Alerts: How to Make Your Stream Pop',
    description: 'Learn how to create or find animated alerts to add excitement to your stream.',
  },
  {
    href: '/software-tools/essential-commands-for-twitch-chat-bot',
    title: 'Essential Commands for Your Twitch Chat Bot',
    description: 'A list of essential commands for your Twitch chat bot for interaction and moderation.',
  },
  {
    href: '/software-tools/using-nightbot-for-stream-moderation',
    title: 'Using Nightbot for Stream Moderation',
    description: 'A guide to setting up and using Nightbot for effective chat moderation.',
  },
  {
    href: '/software-tools/best-video-editing-software-for-stream-highlights',
    title: 'Best Video Editing Software for Stream Highlights',
    description: 'Discover the best video editing software for creating compelling stream highlights.',
  },
  {
    href: '/software-tools/beginners-guide-to-davinci-resolve-for-streamers',
    title: "Beginner's Guide to DaVinci Resolve for Streamers",
    description: "A beginner-friendly guide to using DaVinci Resolve for editing stream VODs.",
  },
  {
    href: '/software-tools/using-discord-for-streamer-community-building',
    title: 'Using Discord for Streamer Community Building',
    description: 'Learn how to effectively use Discord to build and engage with your streaming community.',
  },
  {
    href: '/software-tools/connecting-your-stream-to-ifttt',
    title: 'Connecting Your Stream to IFTTT',
    description: 'Explore ways to automate tasks related to your stream using IFTTT integrations.',
  },
];

export default function SoftwareToolsCategoryPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Streaming Software & Tools
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Guides and reviews to help you master streaming applications, overlays, chat bots, editing software, and other essential tools.
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
