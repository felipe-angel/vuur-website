// File: src/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile, delay fade so the subheading and button remain visible longer
  const fadeEnd = isMobile ? 800 : 400;
  const yOffsetEnd = isMobile ? 0 : -150; // keep video fixed on mobile if desired
  const yOffset = useTransform(scrollY, [0, 400], [0, yOffsetEnd]);
  const fade = useTransform(scrollY, [0, fadeEnd], [1, 0]);

  return (
    <section className="flex flex-col items-center text-center px-4 text-white bg-black pb-8 overflow-visible">
      <motion.video
        src="https://firebasestorage.googleapis.com/v0/b/vuursocial-media-9aed0.firebasestorage.app/o/hero-loop.mp4?alt=media&token=bd36f28d-2186-4060-91d9-0aa7ed5ac04e"
        autoPlay
        muted
        loop
        playsInline
        style={{ y: yOffset, opacity: fade }}
        className="
          mt-0
          w-[200px] h-[200px]
          sm:w-[300px] sm:h-[300px]
          md:w-[500px] md:h-[500px]
          rounded-full object-cover
        "
      />

      {/* 
        - Removed all negative offsets (no more `relative -top-*` or `-mt-*`). 
        - Added `leading-tight` so line-height = 1.25×font-size (roughly 120px when font-size is 96px).
        - Ensured overflow is visible so no parent can clip it.
      */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ opacity: fade }}
        className="
          text-5xl font-bold overflow-visible
          sm:text-6xl
          md:text-8xl
          bg-clip-text text-transparent
          bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
          leading-[1.15]   /* line-height: 1.15× font-size → enough for descenders */
          pb-[0.15em]      /* tiny bottom pad so WebKit’s background-clip has space */
        "
      >
        Ignite Your Brand
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ opacity: fade }}
        className="
          mt-6
          max-w-[90%]
          text-base
          sm:text-lg
          md:text-2xl
          text-gray-200
          leading-relaxed
        "
      >
        At Vuur Social, we simplify your online presence — managing your digital marketing so you can focus on what you do best.
      </motion.p>

      <Link href="/contact" passHref>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity: fade }}
          className="
            mt-6
            inline-block
            bg-[#ff5400]
            text-black
            px-6 py-2
            sm:px-8 sm:py-3
            rounded-full
            font-semibold text-base
            sm:text-lg
            shadow-lg
            hover:scale-105
            transition
          "
        >
          Grow Your Online Presence Now
        </motion.a>
      </Link>
    </section>
  );
}
