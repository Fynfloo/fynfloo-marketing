'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

// ─── Globe component ──────────────────────────────────────────────────────────

function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0.1;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Size the canvas to its rendered size
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
        { location: [37.78, -122.44], size: 0.03, id: 'sf' }, // San Francisco
        { location: [51.51, -0.13], size: 0.03, id: 'london' }, // London
        { location: [35.68, 139.69], size: 0.03, id: 'tokyo' }, // Tokyo
        { location: [1.35, 103.82], size: 0.03, id: 'singapore' }, // Singapore
      ],
      arcs: [
        { from: [37.78, -122.44], to: [51.51, -0.13] }, // SF → London
        { from: [51.51, -0.13], to: [35.68, 139.69] }, // London → Tokyo
        { from: [35.68, 139.69], to: [1.35, 103.82] }, // Tokyo → Singapore
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
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      width={1400}
      height={1400}
    />
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function FeatureMarket() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible');
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="market-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#07061a',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      {/* Globe — absolute, right side, oversized */}
      <div
        className="market-globe"
        style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '65%',
          aspectRatio: '1',
          pointerEvents: 'none',
        }}
      >
        <Globe />
      </div>

      {/* Left gradient fade so globe bleeds into text side cleanly */}
      <div
        aria-hidden
        className="market-fade"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '45%',
          background: 'linear-gradient(to right, #07061a 40%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Text content */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div ref={ref} className="reveal" style={{ maxWidth: '480px' }}>
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
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: '380px',
            }}
          >
            Fynfloo works for your business exactly as it is, right now - your currency, your
            customers, without any manual configuration or wrong choices.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes labelPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .market-section {
            flex-direction: column !important;
            min-height: auto !important;
            padding-top: 40px !important;
          }
          .market-globe {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            margin-top: 40px;
          }
          .market-fade { display: none !important; }
        }
      `}</style>
    </section>
  );
}
