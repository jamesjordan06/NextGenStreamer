import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>AI Hustle Stack</h1>
      <ul>
        <li><Link href="/best-ai-tools-for-freelancers">Freelancer Tools</Link></li>
        <li><Link href="/best-ai-tools-for-social-media-managers">Social Media Tools</Link></li>
        <li><Link href="/tools/jasper-ai-review">Jasper AI Review</Link></li>
        <li><Link href="/tools/writesonic-vs-copyai">Writesonic vs CopyAI</Link></li>
      </ul>
    </main>
  );
}
