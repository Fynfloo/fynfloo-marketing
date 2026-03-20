'use client';
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--bg-border-subtle)',
        padding: '36px 0',
        background: 'var(--bg-surface)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              background: 'var(--accent)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="white" />
              <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.65" />
              <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.45" />
              <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.85" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            fynfloo
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginLeft: '4px' }}>
            © {new Date().getFullYear()}
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {[
            ['Privacy', '/privacy'],
            ['Terms', '/terms'],
            ['Contact', 'mailto:hello@fynfloo.com'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                textDecoration: 'none',
                transition: 'color 0.15s !important',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border-subtle)',
            borderRadius: '100px',
            padding: '5px 12px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block',
            }}
          />
          <span style={{ fontSize: '11.5px', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            Building in public · 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
