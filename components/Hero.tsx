'use client';
import EmailForm from '@/components/EmailForm';

export default function Hero() {
  return (
    <section
      style={{
        background: 'var(--bg-surface)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Headline */}
        <h1
          className="fade-up d1"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            maxWidth: '820px',
            margin: '0 auto 24px',
          }}
        >
          Everything you need to sell online.{' '}
          <span className="hero-gradient-text">Nothing you don&apos;t.</span>
        </h1>

        {/* Supporting text */}
        <p
          className="fade-up d2 hero-sub-breathe"
          style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto 44px',
            fontWeight: 400,
          }}
        >
          Built for the brands that are building the next great brand. A storefront your customers
          will love, tools that actually work for your business.
        </p>

        {/* CTA */}
        <div className="fade-up d3" style={{ maxWidth: '460px', margin: '0 auto 12px' }}>
          <EmailForm
            size="large"
            placeholder="your@email.com"
            buttonText="Get early access"
            formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID}
          />
        </div>

        <p
          className="fade-up d4"
          style={{
            fontSize: '13px',
            color: 'var(--text-tertiary)',
          }}
        >
          Free to use. No credit card required.
        </p>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }

        /* Gradient shift — accent text slowly cycles through purple hues */
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-gradient-text {
          background: linear-gradient(
            135deg,
            #6c63ff 0%,
            #a78bfa 25%,
            #5851ea 50%,
            #c084fc 75%,
            #6c63ff 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease infinite;
        }

        /* Very subtle opacity breathing on supporting text — barely visible */
        @keyframes subtleBreathe {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.75; }
        }
        .hero-sub-breathe {
          animation: subtleBreathe 5s ease-in-out infinite;
          /* Only starts after the fade-up completes */
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
}
