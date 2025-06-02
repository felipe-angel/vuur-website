// File: src/app/real-estate/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Updated imports reflecting your new file names and locations:
import HeroSection from '@/components/RealEstateHero';
import FeatureSections from '@/components/RealEstateFeatures';
import ProcessSection from '@/components/RealEstateProcess';
import CTASection from '@/components/RealEstateCTA';

export default function RealEstatePage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white">
        <HeroSection />
        <FeatureSections />
        <ProcessSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
