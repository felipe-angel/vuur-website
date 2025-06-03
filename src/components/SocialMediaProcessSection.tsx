// File: src/components/SocialMediaProcessSection.tsx
'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
  mediaSrc: string;
  mediaAlt: string;
  gradientFrom: string;
  gradientTo: string;
}

const steps: Step[] = [
  {
    title: 'Discovery & Strategy',
    description:
      'We dig deep into your brand DNA, goals, and audience. From competitive audits to tone-of-voice workshops, we craft a rock-solid roadmap.',
    icon: '🔍',
    mediaSrc: '/images/discovery.png',
    mediaAlt: 'Discovery Session',
    gradientFrom: '#ff5400',
    gradientTo: '#ff9a00',
  },
  {
    title: 'Content Creation',
    description:
      'Our studio turns ideas into scroll-stopping visuals—cinematic Reels, thumb-stopping graphics, and copy that converts.',
    icon: '✨',
    mediaSrc: '/images/content-creation.png',
    mediaAlt: 'Content Creation',
    gradientFrom: '#ff5400',
    gradientTo: '#6f3ff5',
  },
  {
    title: 'Scheduling & Posting',
    description:
      'Powered by data, we publish at the perfect moment 🚀 — so every piece hits maximum reach and engagement.',
    icon: '📅',
    mediaSrc: '/images/scheduling.png',
    mediaAlt: 'Scheduling Content',
    gradientFrom: '#6f3ff5',
    gradientTo: '#0031db',
  },
  {
    title: 'Community Engagement',
    description:
      'We spark real conversations, reply in your brand voice, and turn casual scrollers into loyal fans.',
    icon: '💬',
    mediaSrc: '/images/community.png',
    mediaAlt: 'Community Engagement',
    gradientFrom: '#0031db',
    gradientTo: '#00b4ff',
  },
  {
    title: 'Analytics & Optimization',
    description:
      'Ember AI crunches the numbers in real-time, revealing what’s working and what’s not — so we can iterate at lightspeed.',
    icon: '📊',
    mediaSrc: '/images/analytics.png',
    mediaAlt: 'Analytics Dashboard',
    gradientFrom: '#00b4ff',
    gradientTo: '#19ffbd',
  },
  {
    title: 'Bi-Weekly Reporting',
    description:
      'Crystal-clear dashboards + strategy calls = you always know exactly how fast you’re growing and where we’re headed next.',
    icon: '🗂️',
    mediaSrc: '/images/reporting.png',
    mediaAlt: 'Reporting Review',
    gradientFrom: '#19ffbd',
    gradientTo: '#ff9a00',
  },
];

export default function SocialMediaProcessSection() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-none">
        {steps.map((step, idx) => (
          <Panel key={idx} step={step} />
        ))}
      </div>
    </section>
  );
}

function Panel({ step }: { step: Step }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <section
      ref={ref}
      className="snap-start flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-24 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 0.15 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${step.gradientFrom}, ${step.gradientTo} 60%)`,
        }}
      />
      <motion.div
        style={{ scale: imgScale, rotate: imgRotate }}
        className="w-full lg:w-1/2 mb-10 lg:mb-0 shadow-2xl rounded-3xl overflow-hidden"
      >
        <Image
          src={step.mediaSrc}
          alt={step.mediaAlt}
          width={900}
          height={600}
          className="object-cover"
        />
      </motion.div>
      <div className="w-full lg:w-1/2 lg:pl-16 space-y-6 text-center lg:text-left">
        <motion.h2
          initial={{ y: 80, scale: 0.8, opacity: 0 }}
          animate={inView ? { y: 0, scale: 1, opacity: 1 } : { y: 80, scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#ff5400] to-[#6f3ff5] bg-clip-text text-transparent drop-shadow-xl"
        >
          {step.icon} {step.title}
        </motion.h2>
        <TypingParagraph text={step.description} />
      </div>
    </section>
  );
}

function TypingParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  return (
    <p ref={ref} className="text-lg md:text-xl leading-relaxed text-gray-200" aria-label={text}>
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: idx * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}
