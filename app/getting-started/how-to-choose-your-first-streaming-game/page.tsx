// app/getting-started/how-to-choose-your-first-streaming-game/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Choose Your First Streaming Game | NextGenStreamer',
  description: 'Tips and strategies for selecting the right game to start your streaming journey with.',
};

export default function ChooseFirstStreamingGamePage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>How to Choose Your First Streaming Game</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "How to Choose Your First Streaming Game" will be available soon. This guide will help you consider factors like popularity, your interests, and discoverability.
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
