// File: src/components/RealEstateProcess.tsx
'use client';

import { motion } from 'framer-motion';

const processSteps = [
  { icon: '💬', title: 'Kickoff Call', desc: 'Understand your vision, property details, and goals.' },
  { icon: '📅', title: 'Schedule & Prep', desc: 'Plan shoot day, staging, and shot list for maximum impact.' },
  { icon: '🎬', title: 'On-Site Shoot', desc: 'Capture stunning photos, video, and drone footage with expert precision.' },
  { icon: '✂️', title: 'Edit & Deliver', desc: 'Fast turnaround with polished edits ready for listing and marketing.' },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 text-center mb-12">
        <h2
          className="
            text-3xl md:text-4xl font-bold
            bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary
          "
        >
          Our Process
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {processSteps.map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="
              bg-gray-900/50 backdrop-blur-lg border border-gray-700
              p-8 rounded-3xl text-center shadow-lg
              hover:shadow-[0_0_15px_#ff5400] transition-shadow duration-300
            "
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
