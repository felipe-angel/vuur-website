// File: src/app/ember-ai-/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function EmberAIPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Ember AI Analytics
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            This feature is coming soon! Our Ember AI Analytics dashboard is currently under development. Stay tuned for advanced insights, real-time data, and campaign optimization tools designed to help you grow.
          </p>
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black font-semibold uppercase rounded-full shadow-lg"
          >
            Stay Tuned
          </motion.span>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
