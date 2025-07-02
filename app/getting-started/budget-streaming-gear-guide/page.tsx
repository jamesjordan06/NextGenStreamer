// app/getting-started/budget-streaming-gear-guide/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Streaming Gear Guide (Under $X) | NextGenStreamer',
  description: 'Find the best budget-friendly streaming gear to get started without breaking the bank.',
};

export default function BudgetStreamingGearGuidePage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Budget Streaming Gear Guide (Under $X)</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Budget Streaming Gear Guide (Under $X)" will be available soon. Discover affordable microphones, webcams, and lighting for new streamers.
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
