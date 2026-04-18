'use client';
import { useEffect, useRef } from 'react';
import EmailForm from '@/components/EmailForm';

export default function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible');
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="waitlist"
      style={{
        background: 'var(--accent)',
        padding: 'clamp(80px, 12vw, 160px) clamp(20px, 4vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '20px',
          }}
        >
          Commerce within reach
        </p>

        <h2
          style={{
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'white',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px',
          }}
        >
          Your next great brand starts here.
        </h2>

        <div style={{ maxWidth: '460px', margin: '0 auto 16px' }}>
          <EmailForm
            size="large"
            placeholder="your@email.com"
            buttonText="Get early access"
            formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID}
            dark
          />
        </div>

        <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.45)' }}>
          No credit card required.
        </p>
      </div>
    </section>
  );
}
