export default function Features() {
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--bg-border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <p className="label" style={{ marginBottom: '14px' }}>
            What you get
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px,4vw,48px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              maxWidth: '480px',
            }}
          >
            Everything you need.{' '}
            <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
              Nothing you don&apos;t.
            </span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">
          {/* Card 1 — Storefront templates */}
          <div
            className="bento-wide"
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: '#e8f0ff',
            }}
          >
            <div
              style={{
                padding: '32px 32px 0',
                background: 'linear-gradient(160deg, #f0f4ff 0%, #e8f0ff 100%)',
                height: '100%',
              }}
            >
              <p className="label" style={{ marginBottom: '10px', color: '#5851ea' }}>
                Storefront
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: '#0d0d1a',
                  marginBottom: '8px',
                }}
              >
                Stores that look like you mean it.
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#5a5a72',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '380px',
                }}
              >
                Your store, your brand. Choose a template built for your category, then make it
                entirely your own with your colours, fonts, and style.
              </p>
              {/* Template preview row */}
              <div className="template-row">
                {[
                  {
                    name: 'minimal-01',
                    img: './images/lady-with-glasses.avif',
                    label: 'Fashion',
                  },
                  {
                    name: 'warm-01',
                    img: './images/makeup-kit.avif',
                    label: 'Beauty',
                  },
                  {
                    name: 'bold-01',
                    img: './images/t-shirt.avif',
                    label: 'Sport',
                  },
                ].map((t, i) => (
                  <div
                    key={t.name}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      borderRadius: '10px 10px',
                      overflow: 'hidden',
                      border: '1px solid rgba(88,81,234,0.15)',
                      borderBottom: 'none',

                      boxShadow:
                        i === 1
                          ? '0 -4px 20px rgba(88,81,234,0.15)'
                          : '0 -2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        padding: '6px 10px',
                        display: 'flex',
                        gap: '4px',
                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                      }}
                    >
                      {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                        <div
                          key={c}
                          style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: c,
                            opacity: 0.7,
                          }}
                        />
                      ))}
                    </div>
                    <img
                      src={t.img}
                      alt={t.label}
                      style={{
                        width: '100%',
                        height: '160px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div style={{ background: 'rgba(255,255,255,0.95)', padding: '8px 10px' }}>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 600,
                          color: '#5851ea',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Gateway routing */}
          <div
            className="bento-narrow"
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: '#ede9fe',
            }}
          >
            <div
              style={{
                padding: '32px 28px',
                height: '100%',
                background: 'linear-gradient(160deg, #f5f3ff 0%, #ede9fe 100%)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p className="label" style={{ marginBottom: '10px', color: '#7c3aed' }}>
                Payments
              </p>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.022em',
                  color: '#0d0d1a',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}
              >
                Your gateway, chosen automatically.
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  color: '#5a5a72',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Set your store currency at onboarding. Stripe or Paystack activates - no
                configuration needed.
              </p>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  justifyContent: 'center',
                }}
              >
                {[
                  {
                    currencies: 'NGN · GHS · KES · ZAR',
                    gateway: 'Paystack',
                    color: '#00b4d8',
                    bg: 'rgba(0,180,216,0.08)',
                    border: 'rgba(0,180,216,0.2)',
                  },
                  {
                    currencies: 'GBP · USD · EUR · AUD',
                    gateway: 'Stripe',
                    color: '#635bff',
                    bg: 'rgba(99,91,255,0.08)',
                    border: 'rgba(99,91,255,0.2)',
                  },
                  {
                    currencies: '130+ more currencies',
                    gateway: 'Stripe',
                    color: '#635bff',
                    bg: 'rgba(99,91,255,0.05)',
                    border: 'rgba(99,91,255,0.1)',
                  },
                ].map((row) => (
                  <div
                    key={row.currencies}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: row.bg,
                      border: `1px solid ${row.border}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 500,
                        color: '#0d0d1a',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {row.currencies}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: row.color,
                        background: row.bg,
                        padding: '2px 8px',
                        borderRadius: '100px',
                        border: `1px solid ${row.border}`,
                        flexShrink: 0,
                        marginLeft: '8px',
                      }}
                    >
                      {row.gateway}
                    </span>
                  </div>
                ))}
                <div style={{ textAlign: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#9898b0' }}>
                    Auto-routed · no manual selection
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Products & variants */}
          <div
            className="bento-narrow"
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: '#ffedd5',
            }}
          >
            <div
              style={{
                padding: '32px 28px',
                height: '100%',
                background: 'linear-gradient(160deg, #fff7ed 0%, #ffedd5 100%)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p className="label" style={{ marginBottom: '10px', color: '#c2410c' }}>
                Products
              </p>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.022em',
                  color: '#0d0d1a',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}
              >
                Variants, stock, SEO - all built in.
              </h3>
              <p
                style={{
                  fontSize: '13.5px',
                  color: '#7c5a3a',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                Size, colour, material. Inventory tracked per variant. Meta titles and URL handles
                from day one.
              </p>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(194,65,12,0.12)',
                    background: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  }}
                >
                  <img
                    src="/images/linen-blazer.jpg"
                    alt="Linen Blazer — Cream"
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                  <div style={{ padding: '12px 14px' }}>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#0d0d1a',
                        marginBottom: '4px',
                      }}
                    >
                      Linen Blazer
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#0d0d1a' }}>
                        £89.00
                      </span>
                      <span
                        style={{
                          fontSize: '10.5px',
                          background: '#dcfce7',
                          color: '#15803d',
                          padding: '2px 8px',
                          borderRadius: '100px',
                          fontWeight: 500,
                        }}
                      >
                        In stock
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {['XS', 'S', 'M', 'L', 'XL'].map((sz, i) => (
                        <div
                          key={sz}
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10.5px',
                            fontWeight: 600,
                            background: i === 2 ? '#0d0d1a' : 'rgba(0,0,0,0.04)',
                            color: i === 2 ? '#fff' : '#555568',
                            border: i === 2 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                          }}
                        >
                          {sz}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Dashboard */}
          <div
            className="bento-wide"
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: '#e8f0ff',
            }}
          >
            <div
              style={{
                padding: '32px 32px 32px',
                background: 'linear-gradient(160deg, #f0f4ff 0%, #e8f0ff 100%)',
                height: '100%',
              }}
            >
              <p className="label" style={{ marginBottom: '10px', color: '#5851ea' }}>
                Dashboard
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  color: '#0d0d1a',
                  marginBottom: '8px',
                }}
              >
                One place. Everything.
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#5a5a72',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '400px',
                }}
              >
                Orders, customers, discounts, shipping. One clean dashboard. No tabs, no exports, no
                switching tools.
              </p>
              <div className="stats-row">
                {[
                  { label: 'Revenue', value: '£24,180', period: 'Last 30 days', change: '+22%' },
                  { label: 'Orders', value: '284', period: 'Last 30 days', change: '+17%' },
                  { label: 'Customers', value: '1,240', period: 'Total', change: '+31%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '16px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.85)',
                      border: '1px solid rgba(21,128,61,0.1)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '10.5px',
                        color: '#5851ea',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        color: '#0d0d1a',
                        lineHeight: 1,
                        marginBottom: '6px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#15803d' }}>
                        {stat.change}
                      </span>
                      <span style={{ fontSize: '11px', color: '#86a898' }}>{stat.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Desktop: 3-col bento ── */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
        }
        .bento-wide   { grid-column: span 2; }
        .bento-narrow { grid-column: span 1; }

        .template-row {
          display: flex;
          gap: 12px;
          align-items: flex-end;
        }

        .stats-row {
          display: flex;
          gap: 12px;
          align-items: flex-end;
        }

        /* ── Tablet 768px: 2-col, wide cards full width ── */
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
          }
          .bento-wide {
            grid-column: span 2;
          }
          .bento-narrow {
            grid-column: span 1;
          }
        }

        /* ── Mobile 640px: single column, everything full width ── */
        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .bento-wide,
          .bento-narrow {
            grid-column: span 1;
          }

          /* Template previews: show only 1 card on mobile */
          .template-row {
            gap: 8px;
          }
          .template-row > div:nth-child(2),
          .template-row > div:nth-child(3) {
            display: none;
          }
          .template-row > div:first-child {
            transform: none !important;
            border-radius: 10px !important;
            border-bottom: 1px solid rgba(88,81,234,0.15) !important;
          }

          /* Stats: stack vertically on mobile */
          .stats-row {
            flex-direction: column;
            gap: 8px;
          }
          .stats-row > div {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
