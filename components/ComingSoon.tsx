import EmailForm from './EmailForm';

export default function ComingSoon() {
  return (
    <section
      id="waitlist"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--bg-border-subtle)',
      }}
    >
      {/* Full-bleed image with overlay */}
      <div
        style={{ position: 'relative', minHeight: '560px', display: 'flex', alignItems: 'center' }}
      >
        <img
          src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1600&q=80&auto=format&fit=crop"
          alt="Merchant working"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Dark overlay with gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(8,8,15,0.92) 0%, rgba(88,81,234,0.75) 100%)',
          }}
        />

        <div
          className="container"
          style={{ position: 'relative', zIndex: 1, padding: '100px 28px' }}
        >
          <div style={{ maxWidth: '600px' }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '100px',
                padding: '6px 16px',
                marginBottom: '32px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  display: 'inline-block',
                  animation: 'pulse2 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '0.01em',
                }}
              >
                Launching 2026 - limited early access
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(38px,5.5vw,64px)',
                fontWeight: 700,
                letterSpacing: '-0.038em',
                lineHeight: 1.07,
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Be first through the door.
            </h2>

            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.65,
                fontWeight: 400,
                marginBottom: '36px',
                maxWidth: '480px',
              }}
            >
              Early access merchants get priority onboarding, direct access to the team, and a voice
              in what we build next.
            </p>

            {/* Form — white inputs on dark bg */}
            <div style={{ maxWidth: '460px', marginBottom: '16px' }}>
              <EmailForm size="large" formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_ID} dark />
            </div>

            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.45)' }}>
              No spam. No credit card. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </section>
  );
}
