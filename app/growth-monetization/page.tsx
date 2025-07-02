// app/growth-monetization/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stream Growth & Monetization Strategies | NextGenStreamer',
  description: 'Learn how to grow your audience, engage your community, and monetize your stream effectively.',
};

const articles = [
  {
    href: '/growth-monetization/how-to-monetize-streaming-low-viewers-2025',
    title: 'How to Monetize Your Stream in 2025 (Even with Low Viewers)',
    description: 'Discover proven strategies to start earning money from streaming, even with a small audience. Learn affiliate marketing, sponsorships, donations, and alternative revenue streams.',
  },
  {
    href: '/growth-monetization/strategies-for-gaining-more-twitch-viewers',
    title: 'Strategies for Gaining More Twitch Viewers',
    description: 'Actionable strategies and tips to help you grow your audience on Twitch.',
  },
  {
    href: '/growth-monetization/understanding-twitch-affiliate-partner-requirements',
    title: 'Understanding Twitch Affiliate & Partner Requirements',
    description: 'A clear explanation of the requirements to become a Twitch Affiliate and Partner.',
  },
  {
    href: '/growth-monetization/diversifying-stream-income-subs-donations-merch',
    title: 'Diversifying Your Stream Income: Subs, Donations, & Merch',
    description: 'Learn how to diversify your streaming income through various avenues.',
  },
  {
    href: '/growth-monetization/effective-social-media-promotion-for-streamers',
    title: 'Effective Social Media Promotion for Streamers',
    description: 'Learn how to effectively use social media to promote your stream.',
  },
  {
    href: '/growth-monetization/building-a-loyal-community-beyond-live-stream',
    title: 'Building a Loyal Community Beyond the Live Stream',
    description: 'Strategies for engaging your audience and building a loyal community.',
  },
  {
    href: '/growth-monetization/seo-for-streamers-getting-found-youtube-gaming',
    title: 'SEO for Streamers: Getting Found on YouTube Gaming',
    description: 'Learn SEO techniques tailored for streamers to improve discoverability.',
  },
];

export default function GrowthMonetizationCategoryPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            Stream Growth & Monetization
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Strategies and guides to help you expand your audience, build a strong community, and successfully monetize your content.
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
