// File: src/components/WebDevCTA.tsx
'use client';

import { motion } from 'framer-motion';

export default function WebDevCTA() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(135deg, #ff5400 0%, #6f3ff5 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center text-black space-y-6">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Ready to Ignite Your Online Presence?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg"
        >
          Let’s build a website that not only shines visually but also delivers measurable growth.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold uppercase tracking-wide shadow-lg hover:scale-105 transition"
        >
          Get Your Free Template
        </motion.a>
      </div>
    </section>
  );
}
