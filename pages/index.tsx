import Link from 'next/link';
import { getAllSlugs } from '../lib/mdx';

export async function getStaticProps() {
  const slugs = getAllSlugs().filter((s) => s !== 'best-ai-tools-for-freelancers');
  return { props: { slugs } };
}

export default function Home({ slugs }: { slugs: string[] }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">AI Tool Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {slugs.map((slug) => (
          <Link key={slug} href={`/tools/${slug}`} className="p-4 bg-white rounded shadow">
            {slug.replace(/-/g, ' ')}
          </Link>
        ))}
      </div>
    </div>
  );
}
