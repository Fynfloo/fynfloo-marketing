'use client';
import { useEffect, useRef } from 'react';

export default function FeatureMarket() {
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
      style={{
        background: 'var(--section-warm)',
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div className="container">
        <div
          ref={ref}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'center',
          }}
        >
          {/* Text */}
          <div>
            <p className="label" style={{ marginBottom: '20px' }}>
              Wherever you are
            </p>
            <h2 className="section-headline" style={{ marginBottom: '20px' }}>
              Your market. Your customers.
            </h2>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              Fynfloo works for your business exactly as it is, right now — your currency, your
              customers, without any manual configuration or wrong choices.
            </p>
          </div>

          {/* Visual — currency grid */}
          <div
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {[
                { symbol: '£', name: 'Pounds', region: 'United Kingdom', color: 'var(--accent)' },
                { symbol: '$', name: 'Dollars', region: 'United States', color: '#059669' },
                { symbol: '€', name: 'Euros', region: 'Europe', color: '#2563eb' },
                {
                  symbol: '···',
                  name: 'Your market',
                  region: 'Wherever you are',
                  color: '#7c3aed',
                },
              ].map((c) => (
                <div
                  key={c.name}
                  style={{
                    background: 'var(--bg-base)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    border: '1px solid var(--bg-border-subtle)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: c.color,
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    {c.symbol}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {c.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 400 }}>
                    {c.region}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
