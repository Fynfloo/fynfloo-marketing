import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <ComingSoon />
      <Footer />
    </main>
  );
}
