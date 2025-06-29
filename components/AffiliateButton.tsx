import Link from 'next/link';
interface Props {
  href: string;
  children: string;
}

export default function AffiliateButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      target="_blank"
      rel="nofollow noopener"
    >
      {children}
    </Link>
  );
}
