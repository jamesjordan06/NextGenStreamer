// app/gear-hardware/best-laptops-for-on-the-go-streamers/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Laptops for On-the-Go Streamers | NextGenStreamer',
  description: 'Discover the best laptops that offer the power and portability needed for streaming away from your main setup.',
};

export default function BestLaptopsForStreamingPage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Best Laptops for On-the-Go Streamers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Best Laptops for On-the-Go Streamers" will be available soon. We'll review laptops that balance performance, portability, and streaming-specific features.
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
