// app/getting-started/twitch-for-beginners-setting-up-your-channel/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Twitch for Beginners: Setting Up Your Channel | NextGenStreamer',
  description: 'A step-by-step guide for new streamers on how to set up their Twitch channel from scratch.',
};

export default function TwitchForBeginnersPage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Twitch for Beginners: Setting Up Your Channel</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Twitch for Beginners: Setting Up Your Channel" will be available soon. Learn how to create your account, customize your profile, and understand key Twitch settings.
        </p>
        {/* Placeholder for actual article content */}
        <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
          <p className="text-center text-gray-500">
            Article content coming soon. Check back for updates!
          </p>
        </div>
      </article>
    </div>
  );
}
