import React from "react";

export default function AffiliateButton({ href, label }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {label || "Check it out"}
    </a>
  );
}
