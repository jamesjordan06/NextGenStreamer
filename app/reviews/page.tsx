// app/reviews/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Product Reviews | NextGenStreamer',
  description: 'In-depth reviews of streaming equipment, software, and accessories to help you make informed decisions.',
}

// Actual review data, mirroring the structure from Navigation.tsx
const reviews = [
  { href: "/guides/streamlabs-vs-obs-2025", title: "Streamlabs vs OBS", description: "Software comparison" },
  { href: "/guides/shure-sm7b-review-worth-it", title: "Shure SM7B Review", description: "Is the legendary mic worth it?" },
  { href: "/guides/logitech-c920-review-worth-it", title: "Logitech C920 Review", description: "King of budget streaming?" },
  { href: "/guides/logitech-c920-vs-c922-comparison", title: "C920 vs C922 Comparison", description: "Definitive webcam guide" },
  // Add any other articles that are primarily reviews and were in the "Reviews" dropdown
];

export default function AllReviewsPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <div className="container py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-primary mb-4">
            All Product Reviews
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find comprehensive reviews on the latest streaming gear and software. We help you choose the best tools for your setup.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Link
              key={review.href}
              href={review.href}
              className="card p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50"
            >
              <div>
                <h2 className="text-2xl font-heading font-semibold text-brand-primary mb-3 group-hover:text-brand-primary-hover transition-colors">
                  {review.title}
                </h2>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {review.description}
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-block text-brand-primary font-semibold group-hover:underline">
                  Read Review &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
