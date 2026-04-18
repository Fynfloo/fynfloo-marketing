'use client';
import { useEffect, useRef } from 'react';

export default function FeatureDashboard() {
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
        background: 'var(--section-purple-light)',
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
          {/* Visual — dark card showing dashboard */}
          <div
            style={{
              background: 'var(--text-primary)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(88,81,234,0.15)',
            }}
          >
            {/* Card header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                Recent orders
              </span>
              <span style={{ fontSize: '12px', color: '#a78bfa', fontWeight: 500 }}>
                View all →
              </span>
            </div>

            {/* Orders */}
            <div style={{ padding: '8px 0' }}>
              {[
                {
                  name: 'Amara O.',
                  desc: 'Linen Blazer — Cream / M',
                  amount: '£89.00',
                  paid: true,
                },
                {
                  name: 'James K.',
                  desc: 'Merino Crewneck — Navy / L',
                  amount: '£120.00',
                  paid: true,
                },
                { name: 'Sofia M.', desc: 'Wide Leg Trouser / 10', amount: '£74.00', paid: false },
                {
                  name: 'Dele A.',
                  desc: 'Tailored Shirt — White / M',
                  amount: '£65.00',
                  paid: true,
                },
              ].map((o, i, arr) => (
                <div
                  key={o.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    gap: '12px',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}
                    >
                      {o.name}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.3)',
                        marginTop: '2px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {o.desc}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'white',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {o.amount}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: o.paid ? '#22c55e' : '#f59e0b',
                        marginTop: '2px',
                        fontWeight: 500,
                      }}
                    >
                      {o.paid ? 'Paid' : 'Fulfilling'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: 'rgba(255,255,255,0.06)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {[
                { label: 'Revenue', value: '£24k' },
                { label: 'Orders', value: '284' },
                { label: 'Customers', value: '1.2k' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                      marginBottom: '6px',
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      color: 'white',
                    }}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="label" style={{ marginBottom: '20px' }}>
              Everything in one place
            </p>
            <h2 className="section-headline" style={{ marginBottom: '20px' }}>
              One dashboard that makes sense.
            </h2>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              Products, orders, customers, and payments — all from a single dashboard from the
              moment you log in. No integrations, no tab switching, no workarounds.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feat2-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
