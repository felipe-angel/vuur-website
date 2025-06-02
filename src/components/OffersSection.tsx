// File: src/components/OffersSection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const offersContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const offerCard = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};
const offers = [
  {
    src: '/social-media.png',
    alt: 'Custom Social Media Content',
    title: '🔥 Get a Free Week of Custom Social Media Content',
    desc: 'Experience our creativity and expertise—completely on us.',
  },
  {
    src: '/website-development.png',
    alt: 'Custom Website Mockup',
    title: '💻 Receive a Free Custom Website Mockup',
    desc: 'Visualize your brand’s digital potential before committing.',
  },
  {
    src: '/real-estate-media.png',
    alt: 'Professional Shoot',
    title: '🏡 Enjoy 50% Off Your First Professional Shoot',
    desc: 'Elevate your listings at half the cost, with premium visuals.',
  },
];

export default function OffersSection() {
  return (
    <section
      id="offers"
      className="py-24 px-4 bg-gradient-to-b from-black via-[#001f3f] to-black"
    >
      {/* Heading: emoji in default color, text gradient */}
      <h2 className="text-6xl font-bold text-center mb-16">
        <span>🎁 </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]">
          Exclusive Offers for New Clients
        </span>
      </h2>

      <motion.div
        variants={offersContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {offers.map((offer, idx) => (
          <motion.div
            key={idx}
            variants={offerCard}
            whileHover={{ scale: 1.05, y: -8 }}
            className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 pt-24 shadow-2xl"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[136px] h-[136px] rounded-full bg-gradient-to-br from-[#ff5400] to-[#6f3ff5] p-[1px] flex items-center justify-center">
              <Image
                src={offer.src}
                alt={offer.alt}
                width={124}
                height={124}
                className="rounded-full bg-black"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white text-center">
              {offer.title}
            </h3>
            <p className="mt-2 text-gray-200 text-sm text-center leading-relaxed">
              {offer.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
