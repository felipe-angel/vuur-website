// File: src/components/WebDevProcessSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { 
    icon: '🔍', 
    title: 'Discovery & Planning', 
    description: 'In this phase, we conduct stakeholder interviews, competitor analysis, and user research workshops to define requirements and create a clear roadmap.' 
  },
  { 
    icon: '✏️', 
    title: 'Design & Prototyping',   
    description: 'Our designers craft high-fidelity wireframes and interactive prototypes, ensuring a seamless blend of aesthetics and user experience before any code is written.' 
  },
  { 
    icon: '💻', 
    title: 'Development',            
    description: 'We build your WordPress site using best practices—custom themes, plugin configurations, and clean, maintainable code—to ensure performance and scalability.' 
  },
  { 
    icon: '🚀', 
    title: 'Launch & Optimization',  
    description: 'Once live, we monitor performance, run A/B tests, implement SEO tweaks, and continuously refine your site to maximize speed, security, and conversions.' 
  },
];

export default function WebDevProcessSection() {
  // Track which step is currently selected; -1 means none
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Toggle banner visibility
  const onCardClick = (idx: number) => {
    setSelectedIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl lg:text-6xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary
          "
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          A proven, transparent workflow that keeps you informed and in control at every stage.
        </motion.p>
      </div>

      {/* Info Banner */}
      <AnimatePresence>
        {selectedIndex !== -1 && (
          <motion.div
            key="process-info-banner"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800/70 backdrop-blur-md rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {steps[selectedIndex].title}
            </h3>
            <p className="text-gray-300">{steps[selectedIndex].description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.2 }}
            className="
              bg-gray-900/50 backdrop-blur-lg border border-gray-700
              p-8 rounded-3xl text-center cursor-pointer
              shadow-xl hover:shadow-[0_0_15px_#ff5400]
              transition-shadow duration-300
            "
            onClick={() => onCardClick(i)}
          >
            <div className="
                inline-flex items-center justify-center
                w-16 h-16 rounded-full
                bg-gradient-to-r from-primary to-secondary
                text-surface mb-4
              ">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
