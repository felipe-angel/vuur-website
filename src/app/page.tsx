// File: src/app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroVideo from '@/components/IntroVideo';
import ServicesSection from '@/components/ServicesSection';
import OffersSection from '@/components/OffersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <OffersSection />
        <IntroVideo />
        <ServicesSection />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}