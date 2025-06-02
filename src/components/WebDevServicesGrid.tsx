// File: src/components/WebDevServicesGrid.tsx
'use client';

import { useState } from 'react';
import { Code, Layout, ShoppingCart, Database, Zap, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: 'UI/UX Design',
    icon: <Layout size={48} />,
    description:
      'Craft intuitive user interfaces and seamless user experiences—wireframes, mockups, prototypes, and user testing to ensure your site resonates with real users.',
  },
  {
    name: 'Responsive Development',
    icon: <Code size={48} />,
    description:
      'Build fully responsive WordPress sites using modern front-end techniques (HTML5, CSS3, and JavaScript) so your website looks and performs flawlessly on desktop, tablet, and mobile.',
  },
  {
    name: 'E-commerce Solutions',
    icon: <ShoppingCart size={48} />,
    description:
      'Implement scalable online stores on WooCommerce or Shopify headless integrations—optimized for conversions, secure checkout, and inventory management.',
  },
  {
    name: 'CMS Integration',
    icon: <Database size={48} />,
    description:
      'Set up and customize WordPress as your content management system—installing and configuring themes, plugins, custom post types, and advanced custom fields so you can update content without touching code.',
  },
  {
    name: 'Performance Optimization',
    icon: <Zap size={48} />,
    description:
      'Speed up your WordPress site with image optimization, caching strategies (Redis, WP Rocket), code minification, and Lighthouse audits to hit 90+ performance scores.',
  },
  {
    name: 'Ongoing Maintenance',
    icon: <Settings size={48} />,
    description:
      'Keep your WordPress site secure and up-to-date—regular backups, plugin and theme updates, security scans, bug fixes, and feature enhancements on a monthly retainer.',
  },
];

export default function WebDevServicesGrid() {
  // Track which service (by index) is currently selected; -1 = none
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Toggle selection
  const onCardClick = (idx: number) => {
    setSelectedIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 px-4">
        <h2
          className="
            text-4xl md:text-5xl lg:text-6xl font-extrabold
            bg-clip-text text-transparent
            bg-gradient-to-r from-primary to-secondary
          "
        >
          Our Core Services
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          End-to-end solutions from concept to launch and beyond.
        </p>
      </div>

      {/* Info Banner */}
      <AnimatePresence>
        {selectedIndex !== -1 && (
          <motion.div
            key="info-banner"
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
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="
              bg-gray-900/50 backdrop-blur-lg border border-gray-700
              p-8 rounded-3xl text-center space-y-4
              shadow-lg hover:shadow-[0_0_15px_#ff5400]
              transition-shadow duration-300
              cursor-pointer
            "
            onClick={() => onCardClick(i)}
          >
            {/* Gradient circle behind icon */}
            <div
              className="
                inline-flex items-center justify-center
                w-16 h-16 rounded-full
                bg-gradient-to-r from-primary to-secondary
                text-surface
                mb-2
                transition-transform duration-300
                hover:scale-110
              "
            >
              {svc.icon}
            </div>
            <h3
              className="
                text-xl font-semibold
                bg-clip-text text-transparent
                bg-gradient-to-r from-primary to-secondary
              "
            >
              {svc.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
