// File: src/components/RealEstateHero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RealEstateHero() {
  return (
    <section
      className="
        relative flex flex-col items-center justify-center
        text-center px-4 py-20 sm:py-32 h-screen overflow-visible
        bg-black
      "
    >
      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
        {/* Main headline */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl sm:text-5xl md:text-8xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
            leading-[1.15] overflow-visible pb-[0.15em]
          "
        >
          Elevate Your<br />Property Listings
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Get 50% off your first shoot—delivered in just 24–48 hours and covered by our
          money-back guarantee—so your listings blaze past the market, risk-free. Stand out
          with professional photography, video tours, aerial drone content, and interactive
          walkthroughs.
        </motion.p>

        {/* CTA button */}
        <Link href="/contact" passHref>
          <motion.a
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="
              inline-block mt-4
              px-6 py-3
              sm:px-10 sm:py-5
              bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
              text-black font-semibold uppercase tracking-wide text-sm sm:text-lg
              rounded-full shadow-lg hover:scale-105 transition
            "
          >
            Contact Us
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
