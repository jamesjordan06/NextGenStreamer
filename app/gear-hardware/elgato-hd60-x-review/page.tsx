// app/gear-hardware/elgato-hd60-x-review/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elgato HD60 X Review | NextGenStreamer',
  description: 'An in-depth review of the Elgato HD60 X capture card, covering its features, performance, and value for streamers.',
};

export default function ElgatoHD60XReviewPage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Elgato HD60 X Review</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for the "Elgato HD60 X Review" will be available soon. We'll dive into its capabilities, ease of use, and how it compares to other capture cards on the market.
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
