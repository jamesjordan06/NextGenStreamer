'use client'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function AffiliateButton({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}
