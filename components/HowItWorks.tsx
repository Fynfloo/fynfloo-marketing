export default function HowItWorks() {
  return (
    <section style={{ borderTop: '1px solid var(--bg-border-subtle)' }}>
      {/* Stats strip */}
      <div
        style={{
          padding: '80px 0',
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--bg-border-subtle)',
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: 'clamp(26px,3.5vw,40px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            The platform built to grow with you.
          </p>
          <div className="stats-grid">
            {[
              { value: '3', label: 'Beautiful templates', sublabel: 'fashion, beauty, sport' },
              { value: '2', label: 'Payment gateways', sublabel: 'Stripe + Paystack' },
              { value: '130+', label: 'Currencies supported', sublabel: 'auto-routed by currency' },
              { value: '< 2m', label: 'To connect a gateway', sublabel: 'no configuration needed' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--bg-surface)',
                  padding: '36px 28px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(32px,4vw,52px)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '10px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="label" style={{ marginBottom: '14px' }}>
              How it works
            </p>
            <h2
              style={{
                fontSize: 'clamp(30px,3.8vw,46px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              From zero to selling in <span className="accent-gradient">three steps.</span>
            </h2>
          </div>

          <div className="steps-grid">
            {[
              {
                step: '01',
                headline: 'Set up your store',
                body: 'Name your store, pick a template, and choose your currency. The whole setup takes under two minutes.',
                detail: 'Store name · Template · Currency',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80&auto=format&fit=crop',
                color: 'rgba(88,81,234,0.7)',
              },
              {
                step: '02',
                headline: 'Connect your gateway',
                body: 'Your currency tells us whether to show Stripe Connect or Paystack. Connect in one click — no routing logic to understand.',
                detail: 'NGN/GHS/KES/ZAR → Paystack · Everything else → Stripe',
                img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80&auto=format&fit=crop',
                color: 'rgba(124,58,237,0.7)',
              },
              {
                step: '03',
                headline: 'Start selling',
                body: 'Add products with variants, set shipping zones, publish. Your store is live and customers can pay immediately.',
                detail: 'Products · Shipping · Publish',
                img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&q=80&auto=format&fit=crop',
                color: 'rgba(5,150,105,0.7)',
              },
            ].map((step) => (
              <div
                key={step.step}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--bg-border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                  background: 'var(--bg-card)',
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={step.img}
                    alt={step.headline}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'brightness(0.75)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '18px',
                      fontSize: '36px',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '18px',
                      right: '18px',
                      background: 'rgba(0,0,0,0.35)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '100px',
                      padding: '4px 12px',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.85)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'block',
                      }}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '22px 24px 24px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '10px',
                    }}
                  >
                    {step.headline}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--bg-border-subtle);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--bg-border-subtle);
        }

        /* Steps grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          /* Third step spans full width on tablet so it doesn't sit alone */
          .steps-grid > div:last-child {
            grid-column: span 2;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .steps-grid > div:last-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
