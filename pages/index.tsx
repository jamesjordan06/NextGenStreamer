import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">AI Hustle Stack</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/best-ai-tools-for-freelancers">
            Best AI Tools for Freelancers
          </Link>
        </li>
        <li>
          <Link href="/best-ai-tools-for-social-media-managers">
            AI Tools for Social Media Managers
          </Link>
        </li>
        <li>
          <Link href="/tools/jasper-ai-review">Jasper AI Review</Link>
        </li>
        <li>
          <Link href="/tools/writesonic-vs-copyai">Writesonic vs CopyAI</Link>
        </li>
      </ul>
    </main>
  );
}
