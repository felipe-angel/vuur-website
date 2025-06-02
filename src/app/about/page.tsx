// src/app/about/page.tsx
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
        <Founders />
        <Story />
        <Mission />
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}

// --------------------------------------------------
// Founders (with per-founder vertical offsets)
// --------------------------------------------------
function Founders() {
  const founders = [
    {
      name: 'Juan',
      title: 'Co-Founder',
      image: '/images/juan.jpeg',
      // Juan’s photo is lifted by 2rem (8)
      offsetClass: '-translate-y-8',
    },
    {
      name: 'Felipe',
      title: 'Co-Founder',
      image: '/images/felipe.jpeg',
      // Felipe’s photo is lifted by 1rem (4)
      offsetClass: '-translate-y-4',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-neutral-background via-black to-neutral-background">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Meet the Founders
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
        {founders.map((f) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6 transform transition"
          >
            <div className="rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-lg">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-black border-8 border-black">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={256}
                  height={256}
                  className={`object-cover transform ${f.offsetClass}`}
                />
              </div>
            </div>
            <h3 className="text-3xl font-semibold text-white">{f.name}</h3>
            <p className="text-gray-300 uppercase tracking-wide">{f.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// --------------------------------------------------
// Story (text box made wider by changing max-w-2xl → max-w-3xl)
// --------------------------------------------------
function Story() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-center"
        >
          Our Story
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 prose prose-invert text-lg leading-relaxed mx-auto max-w-3xl"
        >
          <p className="italic mb-4">
            Fueled by innovation and driven by passion, Vuur Social was born in August 2024 when two Gen Z visionaries, Juan and Felipe, teamed up to redefine what it means to connect brands with modern audiences.
          </p>
          <p>
            At Vuur Social, we’re not just marketers—we’re storytellers, creators, and technologists. Our founders,
            Juan (Georgia Tech) and Felipe (University of Alabama), fused their expertise in AI analytics,
            creative design, and social media strategy to launch a digital agency that’s as energetic and forward-thinking as the brands we serve.
          </p>
          <p>
            We live and breathe the Gen Z mindset, staying ahead of trends and platforms so your brand leads the conversation—not follows it.
            From data-driven insights to eye-catching creative, our holistic approach ensures every campaign resonates deeply, driving genuine engagement and loyalty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Mission (minor tweaks to typography + spacing)
// --------------------------------------------------
function Mission() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed px-6"
        >
          We constantly push boundaries—championing creativity and powered by AI—to forge authentic brand communities.
          Our mission is simple: help you ignite conversations and build lasting connections in the digital world.
        </motion.p>
      </div>
    </section>
  );
}
