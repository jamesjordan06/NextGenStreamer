// app/getting-started/your-first-stream-a-complete-setup-checklist/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your First Stream: A Complete Setup Checklist | NextGenStreamer',
  description: 'A comprehensive checklist to ensure your first stream goes smoothly. Covers gear, software, and pre-live checks.',
};

export default function YourFirstStreamChecklistPage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Your First Stream: A Complete Setup Checklist</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Your First Stream: A Complete Setup Checklist" will be available soon. This guide will walk you through everything you need to prepare for a successful first live stream.
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
