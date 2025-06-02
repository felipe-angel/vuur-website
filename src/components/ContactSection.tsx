// File: src/components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%),
          radial-gradient(circle at top left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
          radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
          radial-gradient(circle at bottom left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
          radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 35%),
          linear-gradient(to right, #ff5400, #001f3f, #6f3ff5)
        `,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#ff5400]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6f3ff5]/20 blur-2xl"
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-6xl font-semibold uppercase
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
          "
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Let’s connect and craft a strategy that propels your brand forward.
        </motion.p>

        <Link href="/contact" passHref>
          <motion.a
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              inline-block mt-4 px-10 py-4 rounded-full
              bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
              font-semibold uppercase tracking-wide text-black
              shadow-lg hover:from-[#6f3ff5] hover:to-[#ff5400] transition-colors
            "
          >
            Grow Your Online Presence Now
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
