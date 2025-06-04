// File: src/components/IntroVideo.tsx
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IntroVideo() {
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: introRef, offset: ['start end','end start'] });
  const introY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={introRef} className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-black">
      <motion.video
        src="https://firebasestorage.googleapis.com/v0/b/vuursocial-media-9aed0.firebasestorage.app/o/Our-Services.mp4?alt=media&token=0cd2ab2a-ef5b-467c-b84b-08aeeb4f16cc"
        autoPlay muted loop playsInline
        style={{ y: introY, opacity: introOpacity }}
        transition={{ type: 'spring', stiffness: 60, damping: 25 }}
        className="w-[840px] h-[472px] object-contain"
      />
    </section>
  );
}