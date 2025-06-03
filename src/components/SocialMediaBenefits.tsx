// File: src/components/SocialMediaBenefits.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: 'Maximize Lifetime Value',
    text: 'Turn followers into lifelong brand advocates with rich, value-driven stories that resonate beyond a simple scroll. Our strategic content nurtures relationships and transforms audiences into engaged communities.',
    img: '/images/benefit-lifetime.png',
  },
  {
    title: 'Reach New Audiences',
    text: 'Harness shareable storytelling and targeted hashtag strategies to organically expand your reach. We craft thumb-stopping content that encourages shares, saves, and follows.',
    img: '/images/new-audience.png',
  },
  {
    title: 'Boost Credibility',
    text: 'Build authentic authority through influencer partnerships and user-generated content. We showcase genuine brand stories that inspire trust and social proof.',
    img: '/images/boost-credibility.png',
  },
];

export default function SocialMediaBenefits() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background blurred blobs */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#ff5400]/20 rounded-full blur-[120px] -translate-x-1/3" />
        <div className="w-[400px] h-[400px] bg-[#6f3ff5]/30 rounded-full blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center mb-24 px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]"
        >
          Key Benefits of Our Approach
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto"
        >
          We blend creativity, data-driven insights, and cutting-edge AI analytics to deliver social media that not only wows but also drives measurable growth and loyalty.
        </motion.p>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {benefits.map((benefit, i) => (
          <BenefitCard key={i} benefit={benefit} index={i} />
        ))}
      </div>
    </section>
  );
}

interface Benefit {
  title: string;
  text: string;
  img: string;
}

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 p-8 rounded-3xl flex flex-col items-center text-center hover:scale-105 transition-transform"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 160, damping: 20, delay: index * 0.2 }}
    >
      <Image
        src={benefit.img}
        alt={benefit.title}
        width={140}
        height={140}
        className="rounded-full shadow-lg mb-6"
        priority={index === 0}
      />
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
        className="text-2xl font-bold text-white mb-4"
      >
        {benefit.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
        className="text-gray-300 leading-relaxed"
      >
        {benefit.text}
      </motion.p>
    </motion.div>
  );
}
