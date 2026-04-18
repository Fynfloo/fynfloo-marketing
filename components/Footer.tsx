import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--bg-border-subtle)',
        padding: '40px clamp(20px, 4vw, 48px) 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Image
              src="/logo-1024.png"
              alt="Fynfloo"
              width={28}
              height={28}
              style={{ borderRadius: '7px' }}
            />
            <span
              style={{
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              fynfloo
            </span>
          </div>
          <p style={{ fontSize: '12.5px', color: 'var(--text-tertiary)' }}>
            Commerce within reach.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@fynfloo.com"
            style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            hello@fynfloo.com
          </a>
          <a
            href="/privacy"
            style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Privacy
          </a>
          <a
            href="/terms"
            style={{ fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Terms
          </a>
        </div>

        <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Fynfloo
        </p>
      </div>
    </footer>
  );
}
