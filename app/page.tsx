import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeatureStorefront from '@/components/FeatureStorefront';
import FeatureDashboard from '@/components/FeatureDashboard';
import FeatureMarketCTA from '@/components/FeatureMarketCTA_v1';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <FeatureStorefront />
      <FeatureDashboard />
      <FeatureMarketCTA />
      <Footer />
    </main>
  );
}
