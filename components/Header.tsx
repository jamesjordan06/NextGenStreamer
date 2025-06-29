import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-bold text-xl">AI Hustle</span>
        </Link>
        <nav className="space-x-4">
          <Link href="/best-ai-tools-for-freelancers" className="text-blue-600 hover:underline">
            Best Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
