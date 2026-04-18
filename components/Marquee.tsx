export default function Marquee() {
  const words = [
    'Fashion',
    'Beauty',
    'Streetwear',
    'Wellness',
    'Jewellery',
    'Events',
    'Sports',
    'Skincare',
    'Homeware',
    'Art',
    'Food',
    'Music',
  ];

  const doubled = [...words, ...words];

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        padding: '0 0 44px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade left */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, var(--bg-surface) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Fade right */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, var(--bg-surface) 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '13.5px',
          fontWeight: 400,
          color: 'var(--text-tertiary)',
          letterSpacing: '0.02em',
          marginBottom: '28px',
        }}
      >
        Built for every kind of brand
      </p>

      {/* Scrolling words */}
      <div className="marquee-track">
        {doubled.map((word, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              padding: '0 28px',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#8888a0',
              }}
            >
              {word}
            </span>
            <span
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#c4c4d4',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
