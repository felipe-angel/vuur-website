// File: src/components/ServiceCard.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Service } from '@/data/services';

interface Props {
  svc: Service;
  idx: number;
}

export default function ServiceCard({ svc, idx }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // animation curve
  const scale = useTransform(scrollYProgress, [0, 0.01, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 0.8]);

  /* ───────────────── responsive track & overlap ───────────────── */
  const overlap =
    idx > 0
      ? 'mt-[-25svh] sm:mt-[-40svh] md:mt-[-55vh] lg:mt-[-70vh]'
      : '';

  return (
    /* taller track on phones so the card can fully scroll into view */
    <div ref={ref} className={`relative h-[220svh] sm:h-[200svh] md:h-[180svh] ${overlap}`}>
      <div className="sticky top-0 flex items-center justify-center h-[100svh]">
        <motion.div
          style={{ scale, opacity }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          /* 90 vw cap on phones keeps the card visibly smaller */
          className="w-[90vw] sm:w-full max-w-[26rem] sm:max-w-[36rem] md:max-w-screen-xl px-4 sm:px-6"
        >
          <div
            className="
              bg-white rounded-2xl
              p-6 sm:p-8 md:p-12 lg:p-20
              flex flex-col md:flex-row
              items-start md:items-center
              space-y-6 md:space-y-0 md:space-x-10 lg:space-x-12
              shadow-2xl
            "
          >
            {/* image */}
            <div
              className="
                w-full md:w-1/2 
                h-56 sm:h-64 md:h-80 lg:h-96 
                relative
                order-first md:order-last 
                -mx-2 sm:-mx-4 md:mx-0
              "
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* copy */}
            <div className="flex-1">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0031db] mb-4 sm:mb-5">
                {svc.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
                {svc.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 sm:py-2 bg-[#F0F4FF] text-[#0031db] rounded-full text-sm sm:text-base"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6">
                {svc.description}
              </p>

              <a
                href={svc.link}
                className="text-base sm:text-lg font-semibold text-[#ff5400] hover:underline"
              >
                Learn&nbsp;More →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
