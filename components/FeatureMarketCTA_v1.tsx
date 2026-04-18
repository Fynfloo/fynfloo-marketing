'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import EmailForm from '@/components/EmailForm';

// ─── Globe ────────────────────────────────────────────────────────────────────

function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0.1;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = canvas.offsetWidth;

    globe = createGlobe(canvas, {
      devicePixelRatio: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1,
      width: size * 2,
      height: size * 2,
      phi: 0.1,
      theta: 0.35,
      dark: 1,
      diffuse: 1.4,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [0.1, 0.08, 0.22],
      markerColor: [0.55, 0.5, 1],
      glowColor: [0.42, 0.38, 0.9],
      markers: [
        { location: [37.78, -122.44], size: 0.03, id: 'sf' },
        { location: [51.51, -0.13], size: 0.03, id: 'london' },
        { location: [35.68, 139.69], size: 0.03, id: 'tokyo' },
        { location: [1.35, 103.82], size: 0.03, id: 'singapore' },
      ],
      arcs: [
        { from: [37.78, -122.44], to: [51.51, -0.13] },
        { from: [51.51, -0.13], to: [35.68, 139.69] },
        { from: [35.68, 139.69], to: [1.35, 103.82] },
      ],
      offset: [0, 0],
      arcColor: [0.55, 0.5, 1],
      arcWidth: 0.5,
      arcHeight: 0.3,
      markerElevation: 0.02,
    });

    let rafId: number;
    const animate = () => {
      globe?.update({ phi });
      phi += 0.0025;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1400}
      height={1400}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeatureMarketCTA() {
  const marketRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 },
    );
    if (marketRef.current) observer.observe(marketRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        background: '#07061a',
        isolation: 'isolate',
      }}
    >
      {/* ── Single central gradient — owns the entire section ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 120% 60% at 50% 45%, rgba(88,81,234,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 80% 25% at 50% 0%,   rgba(7,6,26,1)        0%, transparent 100%),
            radial-gradient(ellipse 80% 25% at 50% 100%, rgba(7,6,26,1)        0%, transparent 100%)
          `,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Globe — right side, fades at bottom ── */}
      <div
        className="mcta-globe"
        aria-hidden
        style={{
          position: 'absolute',
          right: '-10%',
          top: 0,
          width: '65%',
          aspectRatio: '1',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Globe />
        {/* Globe bottom dissolve */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background: 'linear-gradient(to top, #07061a 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Globe left dissolve */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '40%',
            background: 'linear-gradient(to right, #07061a 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Block 1: Wherever you are ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 120px)',
        }}
      >
        <div className="container">
          <div ref={marketRef} className="reveal" style={{ maxWidth: '500px' }}>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#a78bfa',
                marginBottom: '20px',
              }}
            >
              Wherever you are
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 58px)',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Your market.
              <br />
              Your customers.
            </h2>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75,
                maxWidth: '400px',
              }}
            >
              Fynfloo works for your business exactly as it is, right now - your currency, your
              customers, ready to go from day one.
            </p>
          </div>
        </div>
      </div>

      {/* ── Block 2: CTA — centred, prominent ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 8vw, 120px) clamp(20px, 4vw, 48px) clamp(80px, 10vw, 160px)',
          textAlign: 'center',
        }}
      >
        <div ref={ctaRef} className="reveal">
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '24px',
            }}
          >
            Commerce within reach
          </p>

          {/* Headline — large and bold */}
          <h2
            style={{
              fontSize: 'clamp(42px, 6vw, 80px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              color: '#ffffff',
              maxWidth: '760px',
              margin: '0 auto 48px',
            }}
          >
            Your next great brand
            <br />
            starts here.
          </h2>

          {/* Email form */}
          <div id="waitlist" style={{ maxWidth: '480px', margin: '0 auto 16px' }}>
            <EmailForm
              size="large"
              placeholder="your@email.com"
              buttonText="Get early access"
              formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID}
              dark
            />
          </div>

          <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.3)' }}>
            No credit card required.
          </p>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .mcta-globe {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
