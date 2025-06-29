'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NG</span>
            </div>
            <span className="text-xl font-bold text-gray-900">NextGenStreamer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Products
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link href="/products?category=microphones" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Microphones
                </Link>
                <Link href="/products?category=webcams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Webcams
                </Link>
                <Link href="/products?category=lighting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Lighting
                </Link>
                <Link href="/products?category=streaming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Streaming
                </Link>
                <Link href="/products?category=audio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Audio
                </Link>
                <Link href="/products?category=productivity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Productivity
                </Link>
              </div>
            </div>
            <Link href="/lists/best-microphones-2025" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Best Lists
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Products
            </Link>
            <Link href="/products?category=microphones" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Microphones
            </Link>
            <Link href="/products?category=webcams" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Webcams
            </Link>
            <Link href="/products?category=lighting" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Lighting
            </Link>
            <Link href="/products?category=streaming" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Streaming
            </Link>
            <Link href="/products?category=audio" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Audio
            </Link>
            <Link href="/products?category=productivity" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">
              Productivity
            </Link>
            <Link href="/lists/best-microphones-2025" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              Best Lists
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
} 