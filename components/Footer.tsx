'use client';

import Image from 'next/image';

const PRODUCT_LINKS = [
  { label: 'Storefront', href: '#storefront' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Wherever you are', href: '#market-section' },
  { label: 'Get early access', href: '#waitlist' },
];

const COMPANY_LINKS = [
  { label: 'Contact us', href: 'mailto:hello@fynfloo.com' },
  { label: 'Join the waitlist', href: '#waitlist' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--bg-border-subtle)',
      }}
    >
      {/* Main footer body */}
      <div
        className="container"
        style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 48px) clamp(40px, 5vw, 64px)',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Image
              src="/logo-1024.png"
              alt="Fynfloo"
              width={30}
              height={30}
              style={{ borderRadius: '8px', flexShrink: 0 }}
            />
            <span
              style={{
                fontSize: '17px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              fynfloo
            </span>
          </div>
          <p
            style={{
              fontSize: '13.5px',
              color: 'var(--text-tertiary)',
              lineHeight: 1.6,
              maxWidth: '220px',
              marginBottom: '20px',
            }}
          >
            Commerce within reach. Built for the brands building the next great brand.
          </p>
          <a
            href="mailto:hello@fynfloo.com"
            style={{
              fontSize: '13px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            hello@fynfloo.com
          </a>
        </div>

        {/* Product column */}
        <div>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Product
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {PRODUCT_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Company column */}
        <div>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Company
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {COMPANY_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          borderTop: '1px solid var(--bg-border-subtle)',
          padding: '20px clamp(20px, 4vw, 48px)',
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Fynfloo. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Commerce within reach.</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .container > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 480px) {
          footer .container {
            grid-template-columns: 1fr !important;
          }
          footer .container > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
