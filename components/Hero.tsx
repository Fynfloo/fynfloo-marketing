import EmailForm from './EmailForm';

export default function Hero() {
  return (
    <section
      style={{ position: 'relative', overflow: 'hidden', paddingTop: '120px', paddingBottom: '0' }}
    >
      {/* Very subtle gradient top wash */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '600px',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, var(--accent-dim) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        {/* Badge */}
        <div className="fade-up" style={{ marginBottom: '28px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              background: 'var(--bg-card)',
              border: '1px solid var(--bg-border-subtle)',
              borderRadius: '100px',
              padding: '5px 14px 5px 8px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-light)',
                  display: 'block',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </span>
            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
              }}
            >
              Now accepting early access — launching 2026
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up d1"
          style={{
            fontSize: 'clamp(44px, 6.5vw, 82px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.038em',
            color: 'var(--text-primary)',
            maxWidth: '820px',
            marginBottom: '24px',
          }}
        >
          The commerce platform <span className="accent-gradient">built without limits.</span>
        </h1>

        {/* Sub */}
        <p
          className="fade-up d2"
          style={{
            fontSize: 'clamp(17px, 2vw, 20px)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '560px',
            marginBottom: '40px',
          }}
        >
          Beautiful stores. Stripe or Paystack picked automatically from your currency. One
          dashboard. Built for merchants who mean business from day one.
        </p>

        {/* Form */}
        <div className="fade-up d3" style={{ maxWidth: '460px', marginBottom: '18px' }}>
          <EmailForm size="large" formspreeId="YOUR_FORMSPREE_ID" />
        </div>

        <p
          className="fade-up d4"
          style={{ fontSize: '12.5px', color: 'var(--text-tertiary)', marginBottom: '72px' }}
        >
          No credit card. No commitment. Early access only.
        </p>

        {/* Hero visual — browser chrome with dashboard screenshot */}
        <div
          className="fade-up d5"
          style={{
            width: '100%',
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '16px 16px 0 0',
            overflow: 'hidden',
            border: '1px solid var(--bg-border-subtle)',
            borderBottom: 'none',
            boxShadow: '0 -4px 80px rgba(88,81,234,0.08), 0 0 0 1px var(--bg-border-subtle)',
          }}
        >
          {/* Browser bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 16px',
              height: '44px',
              background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--bg-border-subtle)',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginRight: '12px' }}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                <div
                  key={c}
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    background: c,
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                maxWidth: '340px',
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-border)',
                borderRadius: '6px',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}>
                <path
                  d="M1 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0zm7.5 3L10 10"
                  stroke="var(--text-tertiary)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
              <span
                style={{ fontSize: '11.5px', color: 'var(--text-tertiary)', letterSpacing: '0' }}
              >
                app.fynfloo.com/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard mockup — built in HTML/CSS, no images needed */}
          <DashboardMockup />
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
      `}</style>
    </section>
  );
}

function DashboardMockup() {
  const orders = [
    {
      id: '#1042',
      customer: 'Amara O.',
      product: 'Linen Blazer — Cream / M',
      amount: '£89.00',
      status: 'paid',
      time: '2m ago',
    },
    {
      id: '#1041',
      customer: 'James K.',
      product: 'Merino Crewneck — Navy / L',
      amount: '£120.00',
      status: 'paid',
      time: '14m ago',
    },
    {
      id: '#1040',
      customer: 'Sofia M.',
      product: 'Wide Leg Trouser — Black / 10',
      amount: '£74.00',
      status: 'fulfilling',
      time: '1h ago',
    },
    {
      id: '#1039',
      customer: 'Dele A.',
      product: 'Tailored Shirt — White / M',
      amount: '£65.00',
      status: 'paid',
      time: '2h ago',
    },
    {
      id: '#1038',
      customer: 'Rachel T.',
      product: 'Cashmere Scarf — Camel',
      amount: '£55.00',
      status: 'paid',
      time: '3h ago',
    },
  ];

  const statusColor: Record<string, string> = {
    paid: '#059669',
    fulfilling: '#d97706',
  };

  return (
    <div
      style={{ display: 'flex', height: '520px', background: 'var(--bg-base)', overflow: 'hidden' }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '210px',
          flexShrink: 0,
          background: 'var(--bg-card)',
          borderRight: '1px solid var(--bg-border-subtle)',
          padding: '20px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        {/* Store name */}
        <div
          style={{
            padding: '8px 12px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              background: 'linear-gradient(135deg,#6c63ff,#a78bfa)',
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              Ariam Studio
            </div>
            <div style={{ fontSize: '10.5px', color: 'var(--text-tertiary)' }}>
              ariam.fynfloo.com
            </div>
          </div>
        </div>
        {[
          { icon: '▦', label: 'Overview', active: false },
          { icon: '◻', label: 'Orders', active: true },
          { icon: '◈', label: 'Products', active: false },
          { icon: '◎', label: 'Customers', active: false },
          { icon: '◇', label: 'Discounts', active: false },
          { icon: '⊙', label: 'Settings', active: false },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: item.active ? 'var(--accent-dim)' : 'transparent',
              cursor: 'default',
            }}
          >
            <span style={{ fontSize: '13px', opacity: 0.5 }}>{item.icon}</span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: item.active ? 500 : 400,
                color: item.active ? 'var(--accent-light)' : 'var(--text-secondary)',
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '28px 28px', overflow: 'hidden' }}>
        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '14px',
            marginBottom: '28px',
          }}
        >
          {[
            { label: 'Revenue today', value: '£1,840', change: '+18%', up: true },
            { label: 'Orders today', value: '21', change: '+5', up: true },
            { label: 'Avg order value', value: '£87.60', change: '+3%', up: true },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--bg-border-subtle)',
                borderRadius: '12px',
                padding: '16px 18px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '8px',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: 500, color: '#059669' }}>
                  {s.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Orders table */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--bg-border-subtle)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid var(--bg-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
              }}
            >
              Recent orders
            </span>
            <span style={{ fontSize: '12px', color: 'var(--accent-light)', fontWeight: 500 }}>
              View all →
            </span>
          </div>
          {orders.map((o, i) => (
            <div
              key={o.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 1fr 80px 80px',
                alignItems: 'center',
                gap: '12px',
                padding: '11px 18px',
                borderBottom: i < orders.length - 1 ? '1px solid var(--bg-border-subtle)' : 'none',
                background: 'transparent',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  fontFamily: 'monospace',
                }}
              >
                {o.id}
              </span>
              <span
                style={{
                  fontSize: '12.5px',
                  color: 'var(--text-primary)',
                  fontWeight: 450,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {o.customer}
              </span>
              <span
                style={{
                  fontSize: '11.5px',
                  color: 'var(--text-tertiary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {o.product}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {o.amount}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: statusColor[o.status],
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '11.5px',
                    color: statusColor[o.status],
                    fontWeight: 500,
                    textTransform: 'capitalize',
                  }}
                >
                  {o.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
