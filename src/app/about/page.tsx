// File: src/app/about/page.tsx
'use client';

import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <Team />
        <Story />
        <Mission />
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}

// --------------------------------------------------
// Team → “Founders & Partner” with zoom + Cade offset
// --------------------------------------------------
function Team() {
  const members = [
    {
      name: 'Juan',
      title: 'Co-Founder & CEO',
      image: '/images/juan1.jpeg',
      bio: 'A visionary leader in aesthetics and brand storytelling, Juan guides VUUR’s creative team to deliver on-trend visuals and compelling content. His deep understanding of design direction and audience engagement ensures every campaign captivates and resonates—while empowering talented specialists to execute flawlessly.',
      zoomClass: 'scale-100',
      offsetClass: '',
    },
    {
      name: 'Felipe',
      title: 'Co-Founder & COO',
      image: '/images/felipe1.png',
      bio: 'As VUUR’s technical and operational architect, Felipe spearheads AI analytics, website infrastructure, and backend workflows—driving data-informed decisions and smooth project delivery. He leads a skilled team to build scalable systems and ensures that every digital experience is both powerful and seamless.',
      zoomClass: 'scale-110',
      offsetClass: '',
    },
    {
      name: 'Cade Peterson',
      title: 'Creative Director & Partner',
      image: '/images/cade1.png',
      bio: 'A design virtuoso and brand strategist, Cade oversees VUUR’s visual direction and motion graphics. He’s the head of the creative department—crafting innovative concepts, ensuring consistency across all touchpoints, and elevating each project with polished, on-brand aesthetics.',
      zoomClass: 'scale-110',
      offsetClass: '-translate-y-2',
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Decorative gradient blobs behind the team cards */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-coolCyan to-primary opacity-15 blur-2xl translate-x-1/2 translate-y-1/4"
      />

      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Founders & Partner
        </motion.h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          A trio of visionaries driving VUUR’s creativity and strategy forward.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((m) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-800/60 backdrop-blur-md rounded-3xl p-8 shadow-xl flex flex-col items-center text-center"
          >
            {/* Gradient border around circular portrait */}
            <div className="p-1 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-lg">
              <div className="relative w-48 h-48 rounded-full overflow-hidden bg-black border-4 border-black">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className={`object-cover ${m.zoomClass} ${m.offsetClass}`}
                />
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-white">{m.name}</h3>
            <p className="mt-2 text-primary uppercase tracking-wide text-sm">
              {m.title}
            </p>
            <p className="mt-4 text-gray-300 text-base leading-relaxed">
              {m.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --------------------------------------------------
// Story (semi-transparent card, strong contrast)
// --------------------------------------------------
function Story() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      {/* Section heading with the same gradient as “Founders & Partner” */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Our Story
        </motion.h2>
      </div>

      {/* Story content card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative bg-gray-800/80 border border-gray-700 rounded-3xl p-12 prose prose-invert text-lg leading-relaxed mx-auto max-w-3xl shadow-lg"
      >
        <p className="italic mb-6">
          Fueled by innovation and driven by passion, Vuur Social was born in
          August 2024 when two forward-thinking entrepreneurs, Juan and Felipe,
          teamed up to redefine how brands connect with their audiences in the
          digital age.
        </p>
        <p className="mb-6">
          At Vuur Social, we’re not just marketers—we’re storytellers, creators,
          and technologists. Our founders, Juan (Georgia Tech) and Felipe
          (University of Alabama), combined their expertise in AI analytics,
          creative design, and digital strategy to launch a dynamic agency that
          serves a diverse range of clients.
        </p>
        <p>
          We pride ourselves on staying ahead of trends, ensuring your brand
          consistently leads the conversation. Our holistic, data-driven
          approach delivers impactful social media campaigns, engaging
          websites, and high-quality real estate media that resonate deeply
          with your audience, driving genuine engagement and lasting loyalty.
        </p>
      </motion.div>
    </section>
  );
}

// --------------------------------------------------
// Mission (two-tone gradient + semi-transparent card)
// --------------------------------------------------
function Mission() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-primary"
        >
          Our Mission
        </motion.h2>

        {/* Mission copy card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gray-800/60 border border-gray-700 rounded-3xl p-10 prose prose-invert text-lg leading-relaxed mx-auto max-w-3xl shadow-lg"
        >
          <p>
            We constantly push boundaries—championing creativity and powered by
            AI—to forge authentic brand communities. Our mission is simple: help
            you ignite conversations and build lasting connections in the
            digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
