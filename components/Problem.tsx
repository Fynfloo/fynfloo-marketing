'use client';

export default function Problem() {
  return (
    <section style={{ padding: '120px 0', borderTop: '1px solid var(--bg-border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
            marginBottom: '72px',
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: '16px' }}>
              The problem
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
              }}
            >
              Every tool solves one thing.
            </h2>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Merchants building serious brands are stuck choosing between great payments and great
              storefronts. Fynfloo removes that trade-off entirely.
            </p>
          </div>
        </div>

        {/* Three gap cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          {[
            {
              num: '01',
              tag: 'Inventory tools',
              headline: 'Stock sorted.\nStorefront poor.',
              body: 'Built to solve an operational problem. They manage inventory well. The customer-facing store is an afterthought — functional, not brand-worthy.',
              accent: '#f97316',
              bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
              bgDark: 'linear-gradient(135deg, #1f1208 0%, #2d1a0e 100%)',
            },
            {
              num: '02',
              tag: 'Payment-first tools',
              headline: 'Payments work.\nStore weak.',
              body: 'Solved the hardest technical problem in their market. But a payment gateway is infrastructure, not a commerce platform. The store is always a patchwork.',
              accent: '#3b82f6',
              bg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              bgDark: 'linear-gradient(135deg, #080e1f 0%, #0d1730 100%)',
            },
            {
              num: '03',
              tag: 'Legacy platforms',
              headline: 'Beautiful stores.\nOne payment rail.',
              body: 'Genuinely polished storefronts. But built around a single gateway, priced for Western markets, and too expensive to justify at early revenue.',
              accent: '#8b5cf6',
              bg: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
              bgDark: 'linear-gradient(135deg, #0d0a1f 0%, #160f2e 100%)',
            },
          ].map((gap) => (
            <GapCard key={gap.num} {...gap} />
          ))}
        </div>

        {/* Resolution strip */}
        <div
          style={{
            padding: '20px 28px',
            background: 'var(--accent-dim)',
            border: '1px solid color-mix(in srgb, var(--accent-light) 25%, transparent)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              flexShrink: 0,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 7l3.5 3.5L11 3"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-primary)',
              fontWeight: 450,
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
            }}
          >
            <strong style={{ fontWeight: 600 }}>Fynfloo solves all three.</strong> A store that
            looks serious, accepts the gateway your business location requires, and puts everything
            in one dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}

function GapCard({
  num,
  tag,
  headline,
  body,
  accent,
  bg,
  bgDark,
}: {
  num: string;
  tag: string;
  headline: string;
  body: string;
  accent: string;
  bg: string;
  bgDark: string;
}) {
  return (
    <div
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--bg-border-subtle)',
        boxShadow: 'var(--shadow-card)',
        background: 'var(--bg-card)',
      }}
    >
      {/* Coloured top band with number */}
      <div
        style={{
          padding: '24px 24px 20px',
          background: bg,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span
            style={{
              display: 'inline-block',
              background: accent,
              color: '#fff',
              fontSize: '10.5px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '100px',
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: accent,
              fontFamily: 'monospace',
              opacity: 0.7,
            }}
          >
            {num}
          </span>
        </div>
        <h3
          style={{
            marginTop: '16px',
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            color: '#0d0d1a',
            whiteSpace: 'pre-line',
          }}
        >
          {headline}
        </h3>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 24px 24px' }}>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
