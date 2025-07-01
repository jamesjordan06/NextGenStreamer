'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-white/20">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/nextgenstreamer-logo-cropped.png"
                alt="NextGenStreamer Logo"
                height={50}
                width={200}
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group">
                <span>Guides</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid gap-3">
                    <Link href="/guides/how-to-start-streaming-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🚀</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">Complete Beginner's Guide</div>
                        <div className="text-sm text-gray-600">Start streaming from zero</div>
                      </div>
                    </Link>
                    <Link href="/guides/complete-streaming-setup-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⚙️</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">Complete Setup Guide</div>
                        <div className="text-sm text-gray-600">Equipment & configuration</div>
                      </div>
                    </Link>
                    <Link href="/guides/how-to-monetize-streaming-low-viewers-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">💰</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-orange-600 transition-colors">Monetization Guide</div>
                        <div className="text-sm text-gray-600">Earn with low viewers</div>
                      </div>
                    </Link>
                    <Link href="/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📱</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-red-600 transition-colors">Vertical Streaming</div>
                        <div className="text-sm text-gray-600">TikTok, Reels & Shorts</div>
                      </div>
                    </Link>
                    <Link href="/guides/gaming-headsets-comfort-sound-quality-mic-performance" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🎧</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">Gaming Headsets Guide</div>
                        <div className="text-sm text-gray-600">Comfort, sound & mic performance</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group">
                <span>Reviews</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid gap-3">
                    <Link href="/guides/streamlabs-vs-obs-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🎮</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-green-600 transition-colors">Streamlabs vs OBS</div>
                        <div className="text-sm text-gray-600">Software comparison</div>
                      </div>
                    </Link>
                    <Link href="/guides/shure-sm7b-review-worth-it" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🎤</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">Shure SM7B Review</div>
                        <div className="text-sm text-gray-600">Is the legendary mic worth it?</div>
                      </div>
                    </Link>
                    <Link href="/guides/logitech-c920-review-worth-it" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">📹</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">Logitech C920 Review</div>
                        <div className="text-sm text-gray-600">King of budget streaming?</div>
                      </div>
                    </Link>
                    <Link href="/guides/logitech-c920-vs-c922-comparison" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⚖️</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-red-600 transition-colors">C920 vs C922 Comparison</div>
                        <div className="text-sm text-gray-600">Definitive webcam guide</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group">
                <span>Products</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="grid gap-3">
                    <Link href="/products" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🛒</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">All Products</div>
                        <div className="text-sm text-gray-600">Browse recommended gear</div>
                      </div>
                    </Link>
                    <Link href="/lists/best-microphones-2025" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group/item">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🎤</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-teal-600 transition-colors">Best Microphones</div>
                        <div className="text-sm text-gray-600">Top mic recommendations</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:scale-105">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/guides/how-to-start-streaming-2025" className="btn-primary">
              <span>Start Learning</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
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

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-6 border-t border-white/20">
            {/* Mobile Guides Section */}
            <div>
              <div className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="gradient-text">📚 Guides</span>
              </div>
              <div className="space-y-3 ml-4">
                <Link href="/guides/how-to-start-streaming-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">🚀 Complete Beginner's Guide</div>
                  <div className="text-sm text-gray-600">Start streaming from zero</div>
                </Link>
                <Link href="/guides/complete-streaming-setup-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">⚙️ Complete Setup Guide</div>
                  <div className="text-sm text-gray-600">Equipment & configuration</div>
                </Link>
                <Link href="/guides/how-to-monetize-streaming-low-viewers-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">💰 Monetization Guide</div>
                  <div className="text-sm text-gray-600">Earn with low viewers</div>
                </Link>
                <Link href="/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">📱 Vertical Streaming</div>
                  <div className="text-sm text-gray-600">TikTok, Reels & Shorts</div>
                </Link>
                <Link href="/guides/gaming-headsets-comfort-sound-quality-mic-performance" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">🎧 Gaming Headsets Guide</div>
                  <div className="text-sm text-gray-600">Comfort, sound & mic performance</div>
                </Link>
              </div>
            </div>

            {/* Mobile Reviews Section */}
            <div>
              <div className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="gradient-text">⭐ Reviews</span>
              </div>
              <div className="space-y-3 ml-4">
                <Link href="/guides/streamlabs-vs-obs-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">🎮 Streamlabs vs OBS</div>
                  <div className="text-sm text-gray-600">Software comparison</div>
                </Link>
                <Link href="/guides/shure-sm7b-review-worth-it" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">🎤 Shure SM7B Review</div>
                  <div className="text-sm text-gray-600">Is the legendary mic worth it?</div>
                </Link>
                <Link href="/guides/logitech-c920-review-worth-it" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">📹 Logitech C920 Review</div>
                  <div className="text-sm text-gray-600">King of budget streaming?</div>
                </Link>
                <Link href="/guides/logitech-c920-vs-c922-comparison" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">⚖️ C920 vs C922 Comparison</div>
                  <div className="text-sm text-gray-600">Definitive webcam guide</div>
                </Link>
              </div>
            </div>

            {/* Mobile Products Section */}
            <div>
              <div className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="gradient-text">🛒 Products</span>
              </div>
              <div className="space-y-3 ml-4">
                <Link href="/products" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">All Products</div>
                  <div className="text-sm text-gray-600">Browse recommended gear</div>
                </Link>
                <Link href="/lists/best-microphones-2025" className="block p-3 rounded-xl hover:bg-white/20 transition-all duration-300" onClick={() => setIsOpen(false)}>
                  <div className="font-medium text-gray-900">🎤 Best Microphones</div>
                  <div className="text-sm text-gray-600">Top mic recommendations</div>
                </Link>
              </div>
            </div>

            <Link href="/about" className="block text-gray-700 hover:text-purple-600 font-medium transition-colors p-3 rounded-xl hover:bg-white/20" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <div className="pt-4">
              <Link href="/guides/how-to-start-streaming-2025" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>
                <span>Start Learning</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 