// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a href="/" className="text-2xl font-bold text-white">
            Vuur Social
          </a>
          <p className="mt-2 text-sm">
            &copy; {new Date().getFullYear()} Vuur Social. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#about"    className="hover:text-white">About</a></li>
          <li><a href="#contact"  className="hover:text-white">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
          <a href="#" aria-label="Facebook" className="hover:text-white">📘</a>
          <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
        </div>
      </div>
    </footer>
  );
}
