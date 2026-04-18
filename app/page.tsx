import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeatureStorefront from '@/components/FeatureStorefront';
import FeatureDashboard from '@/components/FeatureDashboard';
import FeatureMarket from '@/components/FeatureMarket';
import ClosingCTA from '@/components/Closing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <FeatureStorefront />
      <FeatureDashboard />
      <FeatureMarket />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
