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
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4"> {/* Adjusted space for more items */}
            <Link href="/getting-started" className={navLinkClasses}>
              Getting Started
            </Link>
            <Link href="/gear-hardware" className={navLinkClasses}>
              Gear & Hardware
            </Link>
            <Link href="/software-tools" className={navLinkClasses}>
              Software & Tools
            </Link>
            <Link href="/growth-monetization" className={navLinkClasses}>
              Growth & Monetization
            </Link>
            <Link href="/advanced-troubleshooting" className={navLinkClasses}>
              Advanced {/* Shortened for brevity in desktop nav if needed */}
            </Link>

            <Link href="/about" className={navLinkClasses + " hover:scale-100"}>
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/getting-started" className={ctaButtonClasses}>
              Get Started
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
        <div className={`md:hidden transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-[calc(100vh-70px)] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}> {/* Adjusted max-h for potentially more items and padding */}
          <div className="space-y-1 pt-2 pb-3 border-t border-border-neutral-light"> {/* Reduced space-y for tighter packing */}

            <MobileNavLink href="/getting-started" title="Getting Started" onClick={() => setIsOpen(false)} description="New to streaming? Start here!"/>
            <MobileNavLink href="/gear-hardware" title="Gear & Hardware" onClick={() => setIsOpen(false)} description="Find the best equipment."/>
            <MobileNavLink href="/software-tools" title="Software & Tools" onClick={() => setIsOpen(false)} description="Master your streaming software."/>
            <MobileNavLink href="/growth-monetization" title="Growth & Monetization" onClick={() => setIsOpen(false)} description="Grow your audience and earn."/>
            <MobileNavLink href="/advanced-troubleshooting" title="Advanced & Troubleshooting" onClick={() => setIsOpen(false)} description="Solve issues & optimize your setup."/>

            <div className="border-t border-border-neutral-light pt-1 mt-1"> {/* Tighter spacing */}
                <MobileNavLink href="/about" title="About" onClick={() => setIsOpen(false)} />
            </div>

            <div className="px-3 pt-3"> {/* Adjusted padding */}
              <Link href="/getting-started" className={`${ctaButtonClasses} block text-center w-full`} onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}