// app/software-tools/beginners-guide-to-davinci-resolve-for-streamers/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Beginner's Guide to DaVinci Resolve for Streamers | NextGenStreamer",
  description: "A beginner-friendly guide to using DaVinci Resolve for editing your stream VODs and creating highlights.",
};

export default function DavinciResolveGuidePage() {
  return (
    <div className="container py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>Beginner's Guide to DaVinci Resolve for Streamers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed content for "Beginner's Guide to DaVinci Resolve for Streamers" will be available soon. Learn the basics of this powerful free video editor.
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
