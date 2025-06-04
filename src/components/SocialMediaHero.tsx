// File: src/components/SocialMediaHero.tsx
'use client';
import { motion } from 'framer-motion';

export default function SocialMediaHero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-visible"
      style={{ background: 'linear-gradient(135deg, #ff5400 0%, #6f3ff5 100%)' }}
    >
      {/* subtle darkening to match WebDev overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl text-center space-y-6 sm:space-y-8 px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            text-4xl sm:text-5xl md:text-7xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
            leading-[1.15]
            overflow-visible pb-[0.15em]
          "
        >
          Organic Social Media that Ignites Engagement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          Build authentic connections and turn followers into lifelong advocates with our
          data-driven strategies and creative expertise. Enjoy a full week of bespoke,
          on-brand posts—delivered free and commitment-free—so you can feel the spark of our
          social magic before you invest.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="
            inline-block
            px-6 py-3
            sm:px-8 sm:py-4
            bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
            text-black font-semibold
            rounded-full
            shadow-lg hover:scale-105
            transition
          "
        >
          Get Your Complimentary Content
        </motion.a>
      </div>
    </section>
  );
}
