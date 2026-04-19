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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/fynfloo-app' },
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
        <a
          href="https://www.linkedin.com/company/fynfloo-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'var(--bg-card)',
            border: '1px solid var(--bg-border-subtle)',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0077b5';
            e.currentTarget.style.borderColor = '#0077b5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--bg-border-subtle)';
          }}
          aria-label="Fynfloo on LinkedIn"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
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
