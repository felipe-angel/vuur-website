// src/components/WebDevHero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function WebDevHero() {
  return (
    <section
      className="
        relative h-screen flex flex-col items-center justify-center text-center
        px-6 pt-32 pb-24 overflow-hidden
        bg-gradient-to-br from-primary/40 to-secondary/40
      "
    >
      {/* Background illustration */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/website-development.png"
          alt="Website development illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-8">
        {/* Gradient headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            text-6xl md:text-8xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary
            leading-tight
          "
        >
          Web Design & Development
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-[#ededed] leading-relaxed"
        >
          Get a custom homepage template—designed around your brand and delivered free, with zero commitment—so you can envision the digital glow we’ll build for you. Crafting high-performance, visually stunning websites that drive conversions and elevate your brand is our mission.
        </motion.p>

        {/* Gradient CTA with extra top margin */}
        <Link href="/contact" passHref>
          <motion.a
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="
              inline-block px-10 py-5
              bg-gradient-to-r from-primary to-secondary
              text-black font-semibold uppercase tracking-wide text-lg
              rounded-full shadow-lg hover:scale-105 transition
              mt-4
            "
          >
            Get Your Complimentary Template
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
