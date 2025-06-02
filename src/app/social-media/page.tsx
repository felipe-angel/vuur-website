import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialMediaHero from '@/components/SocialMediaHero';
import SocialMediaBenefits from '@/components/SocialMediaBenefits';
import SocialMediaApproach from '@/components/SocialMediaApproach';
import SocialMediaServicesGrid from '@/components/SocialMediaServicesGrid';
import SocialMediaFAQ from '@/components/SocialMediaFAQ';
import SocialMediaCTA from '@/components/SocialMediaCTA';

export default function SocialMediaPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <SocialMediaHero />
        <SocialMediaServicesGrid />
        <SocialMediaBenefits />
        <SocialMediaApproach />
        <SocialMediaFAQ />
        <SocialMediaCTA />
      </main>
      <Footer />
    </>
  );
}