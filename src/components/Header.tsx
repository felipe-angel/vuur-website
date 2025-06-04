// File: src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '/public/logo-glow.png';

// Added Ember AI Analytics to SERVICES
const SERVICES = [
  {
    href: '/social-media',
    label: 'Social Media Management',
    description: 'Engaging social strategies',
    emoji: '🗣️',
  },
  {
    href: '/website-development',
    label: 'Website Development',
    description: 'High-performance, SEO-driven websites',
    emoji: '🌐',
  },
  {
    href: '/real-estate',
    label: 'Real Estate Marketing',
    description: 'Property-focused content',
    emoji: '🏠',
  },
  {
    href: '/ember-ai',
    label: 'Ember AI Analytics',
    description: 'Advanced data insights (Coming Soon)',
    emoji: '🤖',
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';

  // Close desktop "Services" dropdown if clicking outside (only applies for desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Shared classes
  const headerBgClass = 'bg-white';
  const linkBaseClass = 'font-medium transition';
  const linkColorClass = 'text-black hover:text-primary';
  const activeLinkColor = 'text-primary';

  // When navigating via a mobile "Services" link, close both sub‐menu and entire mobile menu
  const handleMobileServiceClick = () => {
    setMobileServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full ${headerBgClass} z-50 shadow-md`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="VUUR logo" width={40} height={40} />
          <span className="ml-3 text-2xl font-extrabold text-black">VUUR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className={`${linkBaseClass} ${
              pathname === '/' ? activeLinkColor : linkColorClass
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setDesktopServicesOpen((prev) => !prev);
                // If opening desktop menu, ensure mobile sub-menu is closed
                if (!desktopServicesOpen) setMobileServicesOpen(false);
              }}
              className={`${linkBaseClass} ${linkColorClass} flex items-center focus:outline-none`}
            >
              <span>Services</span>
              <svg
                className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                  desktopServicesOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5H5z" />
              </svg>
            </button>
            {desktopServicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden z-50">
                <div className="p-4 grid gap-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-6 w-6 bg-primary/10 text-primary rounded-md">
                          {s.emoji}
                        </span>
                      </div>
                      <div>
                        <span className="block text-black font-semibold text-sm">
                          {s.label}
                        </span>
                        <span className="block text-gray-600 text-xs mt-0.5">
                          {s.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`${linkBaseClass} ${
              pathname === '/about' ? activeLinkColor : linkColorClass
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => {
            setMobileOpen((prev) => !prev);
            // Close any open desktop Services dropdown if toggling mobile menu
            setDesktopServicesOpen(false);
          }}
          className="md:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="px-6 pt-4 pb-6 space-y-4">
            <li>
              <Link
                href="/"
                className="block font-medium text-black hover:text-primary transition"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services Accordion (Mobile) */}
            <li>
              <button
                onClick={() => {
                  setMobileServicesOpen((prev) => !prev);
                  // Also ensure desktop menu is closed
                  setDesktopServicesOpen(false);
                }}
                className="w-full flex items-center justify-between font-medium text-black hover:text-primary transition focus:outline-none"
              >
                <span>Services</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▾
                </span>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-2 space-y-2 pl-4 border-l border-gray-200">
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block text-black hover:text-primary transition py-1"
                        onClick={handleMobileServiceClick}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/about"
                className="block font-medium text-black hover:text-primary transition"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block font-medium text-black hover:text-primary transition"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
