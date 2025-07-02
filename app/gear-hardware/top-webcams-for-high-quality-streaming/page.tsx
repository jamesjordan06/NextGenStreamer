// app/gear-hardware/top-webcams-for-high-quality-streaming/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Webcams for High-Quality Streaming | NextGenStreamer',
  description: 'A review of the best webcams to achieve high-quality video for your stream.',
};

export default function TopWebcamsPage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Top Webcams for High-Quality Streaming</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Top Webcams for High-Quality Streaming" will be available soon. We'll cover webcams offering the best resolution, frame rates, and low-light performance.
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
