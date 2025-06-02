/* -------- SocialMediaCTA.tsx -------- */
// File: src/components/SocialMediaCTA.tsx
'use client';
import { motion } from 'framer-motion';

export default function SocialMediaCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[#ff5400] to-[#6f3ff5] text-black text-center">
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Ready to Ignite Your Social Presence?
      </motion.h2>
      <motion.a
        href="/contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
      >
        Get Your Complimentary Content
      </motion.a>
    </section>
  );
}
