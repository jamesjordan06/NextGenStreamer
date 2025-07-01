'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline' // Using outline icons

// Helper component for dropdown items to reduce repetition
const DropdownLink = ({ href, title, description }: { href: string, title: string, description: string }) => (
  <Link href={href} className="block p-3 rounded-md hover:bg-gray-50 transition-colors duration-150 group/item">
    <div className="font-semibold text-text-primary group-hover/item:text-brand-primary transition-colors">{title}</div>
    <div className="text-sm text-text-secondary">{description}</div>
  </Link>
);

// Simplified Helper component for mobile menu links (without description)
const SimpleMobileLink = ({ href, title, onClick }: { href: string, title: string, onClick: () => void }) => (
  <Link href={href} className="block p-3 rounded-md hover:bg-gray-100 text-text-primary font-medium transition-colors duration-150" onClick={onClick}>
    {title}
  </Link>
);

// Mobile navigation link that can optionally show a description
const MobileNavLink = ({
  href,
  title,
  description,
  onClick,
}: {
  href: string;
  title: string;
  description?: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="block p-3 rounded-md hover:bg-gray-100 transition-colors duration-150"
    onClick={onClick}
  >
    <div className="text-text-primary font-medium">{title}</div>
    {description && <div className="text-sm text-text-secondary">{description}</div>}
  </Link>
);


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClasses =
    "text-text-primary hover:text-brand-primary font-medium transition-colors duration-150";
  const dropdownButtonClasses = "flex items-center space-x-1 " + navLinkClasses;
  const ctaButtonClasses = "bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold py-2 px-4 rounded-md transition-colors duration-150 text-sm";

  return (
    <nav className="sticky top-0 z-50 bg-brand-light/95 backdrop-blur-md border-b border-border-neutral-light shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-3"> {/* Reduced py slightly */}
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/nextgenstreamer-logo-cropped.png"
              alt="NextGenStreamer Logo"
              height={40} // Slightly reduced height
              width={160} // Slightly reduced width
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" // Adjusted height
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6"> {/* Adjusted space */}
            {/* Guides Dropdown */}
            <div className="relative group">
              <button className={dropdownButtonClasses}>
                <span>Guides</span>
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-brand-light border border-border-neutral rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="p-4"> {/* Reduced padding */}
                  <div className="grid gap-2"> {/* Reduced gap */}
                    <DropdownLink href="/guides/how-to-start-streaming-2025" title="Complete Beginner's Guide" description="Start streaming from zero" />
                    <DropdownLink href="/guides/complete-streaming-setup-2025" title="Complete Setup Guide" description="Equipment & configuration" />
                    <DropdownLink href="/guides/how-to-monetize-streaming-low-viewers-2025" title="Monetization Guide" description="Earn with low viewers" />
                    <DropdownLink href="/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025" title="Vertical Streaming" description="TikTok, Reels & Shorts" />
                    <DropdownLink href="/guides/gaming-headsets-comfort-sound-quality-mic-performance" title="Gaming Headsets Guide" description="Comfort, sound & mic performance" />
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Dropdown */}
            <div className="relative group">
              <button className={dropdownButtonClasses}>
                <span>Reviews</span>
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-brand-light border border-border-neutral rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="p-4">
                  <div className="grid gap-2">
                    <DropdownLink href="/guides/streamlabs-vs-obs-2025" title="Streamlabs vs OBS" description="Software comparison" />
                    <DropdownLink href="/guides/shure-sm7b-review-worth-it" title="Shure SM7B Review" description="Is the legendary mic worth it?" />
                    <DropdownLink href="/guides/logitech-c920-review-worth-it" title="Logitech C920 Review" description="King of budget streaming?" />
                    <DropdownLink href="/guides/logitech-c920-vs-c922-comparison" title="C920 vs C922 Comparison" description="Definitive webcam guide" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className={dropdownButtonClasses}>
                <span>Products</span>
                <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-brand-light border border-border-neutral rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="p-4">
                  <div className="grid gap-2">
                    <DropdownLink href="/products" title="All Products" description="Browse recommended gear" />
                    <DropdownLink href="/lists/best-microphones-2025" title="Best Microphones" description="Top mic recommendations" />
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className={navLinkClasses + " hover:scale-100"}> {/* Removed hover:scale-105 for consistency */}
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/guides/how-to-start-streaming-2025" className={ctaButtonClasses}>
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-[calc(100vh-60px)] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}> {/* Adjusted max-h for better screen fit */}
          <div className="space-y-4 pt-2 pb-3 border-t border-border-neutral-light">
            {/* Mobile Guides Section */}
            <div>
              <h3 className="px-3 py-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">Guides</h3>
              <div className="mt-1 space-y-1">
                <MobileNavLink href="/guides/how-to-start-streaming-2025" title="Complete Beginner's Guide" description="Start streaming from zero" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/complete-streaming-setup-2025" title="Complete Setup Guide" description="Equipment & configuration" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/how-to-monetize-streaming-low-viewers-2025" title="Monetization Guide" description="Earn with low viewers" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/how-to-stream-vertical-916-tiktok-reels-shorts-2025" title="Vertical Streaming" description="TikTok, Reels & Shorts" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/gaming-headsets-comfort-sound-quality-mic-performance" title="Gaming Headsets Guide" description="Comfort, sound & mic performance" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            {/* Mobile Reviews Section */}
            <div>
              <h3 className="px-3 py-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">Reviews</h3>
              <div className="mt-1 space-y-1">
                <MobileNavLink href="/guides/streamlabs-vs-obs-2025" title="Streamlabs vs OBS" description="Software comparison" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/shure-sm7b-review-worth-it" title="Shure SM7B Review" description="Is the legendary mic worth it?" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/logitech-c920-review-worth-it" title="Logitech C920 Review" description="King of budget streaming?" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/guides/logitech-c920-vs-c922-comparison" title="C920 vs C922 Comparison" description="Definitive webcam guide" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            {/* Mobile Products Section */}
            <div>
              <h3 className="px-3 py-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">Products</h3>
              <div className="mt-1 space-y-1">
                <MobileNavLink href="/products" title="All Products" description="Browse recommended gear" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/lists/best-microphones-2025" title="Best Microphones" description="Top mic recommendations" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            <div className="border-t border-border-neutral-light pt-4 mt-4">
                <MobileNavLink href="/about" title="About" onClick={() => setIsOpen(false)} />
            </div>


            <div className="px-3 pt-4">
              <Link href="/guides/how-to-start-streaming-2025" className={`${ctaButtonClasses} block text-center w-full`} onClick={() => setIsOpen(false)}>
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}