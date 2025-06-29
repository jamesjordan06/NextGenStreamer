'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">AI Hustle Stack</Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
