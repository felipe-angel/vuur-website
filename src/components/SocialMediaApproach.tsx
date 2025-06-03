// File: src/components/SocialMediaApproach.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '🔎',
    title: 'Analysis',
    description:
      'We start with comprehensive audits to thoroughly understand your current digital footprint. Our experts analyze market trends, competitor strategies, and your audience’s behavior. This in-depth examination ensures that every decision we make is backed by insightful data and aligns perfectly with your objectives.',
  },
  {
    icon: '📈',
    title: 'Strategy',
    description:
      'Next, we craft a detailed, customized strategy uniquely tailored to your business goals. Our strategic approach combines creative innovation with proven marketing techniques. Together, we set clear targets and a roadmap designed for measurable success and sustainable growth.',
  },
  {
    icon: '🛠️',
    title: 'Implementation',
    description:
      'Our experienced creative and technical teams seamlessly execute the planned strategies. We handle content creation, content editing, platform management, and campaign launches with precision. Every step of the implementation process is carried out meticulously to ensure optimal results and maximum engagement from your target audience.',
  },
  {
    icon: '⚙️',
    title: 'Optimization',
    description:
      'We believe in continuous improvement and ongoing refinement. Using advanced analytics from our proprietary Ember AI, we regularly evaluate the performance of your campaigns and strategies. Through real-time insights, we make data-driven adjustments to consistently boost your outcomes and keep your brand moving forward.',
  },
];

export default function SocialMediaApproach() {
  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Our Approach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 text-lg md:text-xl"
        >
          From deep-dive audits to continuous optimization, our proven methodology drives real results.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <ApproachStep key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

interface StepData {
  icon: string;
  title: string;
  description: string;
}

function ApproachStep({ step, index }: { step: StepData; index: number }) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-lg p-10 rounded-3xl border border-gray-700 shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, margin: '-100px' }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, delay: index * 0.15 }}
    >
      <div className="flex items-center justify-center mb-6">
        <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#ff5400] to-[#6f3ff5] rounded-full text-white text-2xl">
          {step.icon}
        </span>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 text-center">
        {step.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed text-center">
        {step.description}
      </p>
    </motion.div>
  );
}
