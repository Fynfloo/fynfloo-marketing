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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '14px',
          }}
        >
          {/* Card 1 — Storefront templates: wide (span 2) */}
          <div
            style={{
              gridColumn: 'span 2',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--bg-card)',
            }}
          >
            <div
              style={{
                padding: '32px 32px 0',
                background: 'linear-gradient(160deg, #f0f4ff 0%, #e8f0ff 100%)',
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
                Three focused templates — fashion, beauty, sport. Each built to compete with the
                best-looking brands in your category. Themed to your exact colours.
              </p>
              {/* Template preview row */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
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
                      borderRadius: '10px 10px 0 0',
                      overflow: 'hidden',
                      border: '1px solid rgba(88,81,234,0.15)',
                      borderBottom: 'none',
                      transform: `translateY(${i === 1 ? '0px' : '8px'})`,
                      boxShadow:
                        i === 1
                          ? '0 -4px 20px rgba(88,81,234,0.15)'
                          : '0 -2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Mini browser bar */}
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

          {/* Card 2 — Gateway routing: narrow */}
          <div
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--bg-card)',
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
                Set your store currency at onboarding. Stripe or Paystack activates — no
                configuration needed.
              </p>
              {/* Gateway routing visual */}
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
                    key={row.gateway + row.currencies}
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
                        background: `${row.bg}`,
                        padding: '2px 8px',
                        borderRadius: '100px',
                        border: `1px solid ${row.border}`,
                      }}
                    >
                      {row.gateway}
                    </span>
                  </div>
                ))}
                <div style={{ textAlign: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '11px', color: '#9898b0', fontWeight: 400 }}>
                    Auto-routed · no manual selection
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Products & variants: narrow */}
          <div
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--bg-card)',
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
                Variants, stock, SEO — all built in.
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
              {/* Product card mockup */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
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
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4b5e30?w=400&q=80&auto=format&fit=crop"
                    alt="Product"
                    style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }}
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

          {/* Card 4 — Dashboard & orders: wide (span 2) */}
          <div
            style={{
              gridColumn: 'span 2',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border-subtle)',
              boxShadow: 'var(--shadow-card)',
              background: 'var(--bg-card)',
            }}
          >
            <div
              style={{
                padding: '32px 32px 0',
                background: 'linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)',
              }}
            >
              <p className="label" style={{ marginBottom: '10px', color: '#15803d' }}>
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
                  color: '#4a7c5a',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '400px',
                }}
              >
                Orders, customers, discounts, shipping. One clean dashboard. No tabs, no exports, no
                switching tools.
              </p>
              {/* Analytics mini visual */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-end',
                  paddingBottom: '28px',
                }}
              >
                {[
                  { label: 'Revenue', value: '£24,180', period: 'Last 30 days', change: '+22%' },
                  { label: 'Orders', value: '284', period: 'Last 30 days', change: '+17%' },
                  { label: 'Customers', value: '1,240', period: 'Total', change: '+31%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
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
                        color: '#4a7c5a',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
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
    </section>
  );
}
