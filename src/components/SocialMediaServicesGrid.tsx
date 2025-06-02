// File: src/components/SocialMediaServicesGrid.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: 'Social Content Creation',
    img: '/images/service-content.png',
    description:
      'Creating high-quality posts, graphics, and copy designed to engage and resonate with your audience, maintaining brand consistency and driving meaningful interaction.',
  },
  {
    name: 'Community Management',
    img: '/images/service-community.png',
    description:
      'Proactively monitoring and moderating your social channels, responding to comments and messages, and fostering a positive, on-brand community around your business.',
  },
  {
    name: 'Affiliate Program',
    img: '/images/service-tiktok.png',
    description:
      'Building and managing partnerships with influencers and affiliates to extend your reach, drive conversions, and grow revenue through targeted referral incentives.',
  },
  {
    name: 'Boosted Post Strategy',
    img: '/images/service-boosted.png',
    description:
      'Strategically amplifying your top-performing content with targeted ad spend, optimizing reach and ROI through precise audience segmentation.',
  },
  {
    name: 'User-Generated Content',
    img: '/images/service-ugc.png',
    description:
      'Encouraging and curating authentic customer-created media to boost trust, credibility, and organic engagement across your social channels.',
  },
  {
    name: 'Ember AI Analytics',
    img: '/images/service-analytics.png',
    description:
      'Leveraging AI-driven insights to track performance metrics, uncover growth opportunities, and refine your social strategies for data-backed success.',
  },
];

export default function SocialMediaServicesGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const onCardClick = (idx: number) => {
    setSelectedIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Specialized Services
        </h2>
      </div>

      {/* Info Banner */}
      <AnimatePresence>
        {selectedIndex !== -1 && (
          <motion.div
            key="social-info-banner"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto mb-8 p-6 bg-gray-800/70 backdrop-blur-md rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {services[selectedIndex].name}
            </h3>
            <p className="text-gray-300">{services[selectedIndex].description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="
              bg-gray-900/50 backdrop-blur-lg border border-gray-700
              p-6 rounded-2xl text-center space-y-4
              shadow-lg hover:shadow-[0_0_15px_#ff5400]
              transition-shadow duration-300
              cursor-pointer
            "
            onClick={() => onCardClick(i)}
          >
            {/* Smaller image thumbnail */}
            <div className="mx-auto w-24 h-24 relative rounded-full overflow-hidden bg-gray-800">
              <Image
                src={svc.img}
                alt={svc.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Service name with gradient text (matching WebDevServicesGrid) */}
            <h3 className="
              text-xl font-semibold
              bg-clip-text text-transparent
              bg-gradient-to-r from-primary to-secondary
            ">
              {svc.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
