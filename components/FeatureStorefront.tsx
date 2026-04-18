'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ─── Individual showcase cards ────────────────────────────────────────────────

function CardProductDetail() {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Product image */}
      <div
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '20px',
          background: '#f5f5f0',
          height: '200px',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/linen-blazer-01.jpg"
          alt="Linen Blazer"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'white',
            borderRadius: '100px',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 600,
            color: '#059669',
          }}
        >
          In stock
        </div>
      </div>

      {/* Title + price */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '16px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Linen Blazer
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
            Cream · Tailored fit
          </div>
        </div>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
          }}
        >
          £89.00
        </div>
      </div>

      {/* Size selector */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          Size
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: `1px solid ${selectedSize === s ? 'var(--accent)' : 'var(--bg-border)'}`,
                background: selectedSize === s ? 'var(--accent)' : 'white',
                color: selectedSize === s ? 'white' : 'var(--text-primary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
                flexShrink: 0,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Add to cart */}
      <button
        style={{
          width: '100%',
          padding: '13px',
          background: 'var(--accent)',
          color: 'white',
          borderRadius: '12px',
          border: 'none',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '-0.01em',
          marginTop: 'auto',
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

function CardCheckout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          marginBottom: '20px',
        }}
      >
        Order summary
      </div>

      {/* Item */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
        <div
          style={{
            position: 'relative',
            width: '56px',
            height: '56px',
            borderRadius: '10px',
            overflow: 'hidden',
            flexShrink: 0,
            background: '#f5f5f0',
          }}
        >
          <Image
            src="/images/linen-blazer-02.jpg"
            alt="Product"
            fill
            sizes="56px"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'var(--text-primary)',
              color: 'white',
              fontSize: '10px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            1
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
            Linen Blazer
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
            Cream / M
          </div>
        </div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
          £89.00
        </div>
      </div>

      {/* Discount code */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', minWidth: 0 }}>
        <input
          placeholder="Discount code"
          readOnly
          style={{
            flex: 1,
            minWidth: 0,
            padding: '10px 12px',
            border: '1px solid var(--bg-border)',
            borderRadius: '8px',
            fontSize: '12px',
            color: 'var(--text-tertiary)',
            background: 'white',
            outline: 'none',
          }}
        />
        <button
          style={{
            padding: '10px 12px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border)',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          Apply
        </button>
      </div>

      {/* Totals */}
      <div
        style={{
          borderTop: '1px solid var(--bg-border-subtle)',
          paddingTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        {[
          { label: 'Subtotal', value: '£89.00' },
          { label: 'Shipping', value: 'FREE', green: true },
          { label: 'Tax', value: '£8.90' },
        ].map((r) => (
          <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{r.label}</span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: r.green ? '#059669' : 'var(--text-primary)',
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid var(--bg-border-subtle)',
          }}
        >
          <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
            Total
          </span>
          <span
            style={{
              fontSize: '15px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            £97.90
          </span>
        </div>
      </div>

      <button
        style={{
          width: '100%',
          padding: '14px',
          background: 'var(--accent)',
          color: 'white',
          borderRadius: '12px',
          border: 'none',
          fontSize: '15px',
          fontWeight: 700,
          cursor: 'pointer',
          letterSpacing: '-0.01em',
          marginTop: 'auto',
        }}
      >
        Pay now
      </button>
    </div>
  );
}

function CardProductGrid() {
  const products = [
    { img: '/images/linen-blazer-03.jpg', name: 'Linen Blazer', price: '£89.00', tag: 'New' },
    { img: '/images/makeup-kit.jpg', name: 'Glow Serum', price: '£42.00', tag: 'Bestseller' },
    { img: '/images/t-shirt.jpg', name: 'Classic Tee', price: '£28.00', tag: null },
    { img: '/images/linen-blazer-04.jpg', name: 'Tailored Shirt', price: '£65.00', tag: 'Sale' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          All products
        </div>
        <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500 }}>Filter ↓</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#f8f8f6',
              border: '1px solid var(--bg-border-subtle)',
            }}
          >
            <div style={{ position: 'relative', height: '110px' }}>
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              {p.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background:
                      p.tag === 'Sale'
                        ? '#ef4444'
                        : p.tag === 'Bestseller'
                          ? '#f59e0b'
                          : 'var(--accent)',
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '100px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.tag}
                </div>
              )}
            </div>
            <div style={{ padding: '8px 10px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '2px',
                }}
              >
                {p.name}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)' }}>
                {p.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardOrderConfirmation() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        gap: '16px',
      }}
    >
      {/* Success icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(5,150,105,0.25)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M6 14l5.5 5.5L22 8"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            marginBottom: '6px',
          }}
        >
          Order confirmed!
        </div>
        <div
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '240px',
          }}
        >
          Your order <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>#1042</span>{' '}
          has been placed and is being prepared.
        </div>
      </div>

      {/* Order details */}
      <div
        style={{
          width: '100%',
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          padding: '16px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            marginBottom: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid var(--bg-border-subtle)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#f0f0f0',
            }}
          >
            <Image
              src="/images/linen-blazer-02.jpg"
              alt="Product"
              fill
              sizes="44px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Linen Blazer - Cream / M
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '1px' }}>
              Qty: 1
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
            £89.00
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            Estimated delivery
          </span>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
            3–5 business days
          </span>
        </div>
      </div>

      <button
        style={{
          width: '100%',
          padding: '12px',
          background: 'var(--accent)',
          color: 'white',
          borderRadius: '12px',
          border: 'none',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '-0.01em',
        }}
      >
        Track your order →
      </button>
    </div>
  );
}

function CardStorefrontHero() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Store banner */}
      <div
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          height: '180px',
          marginBottom: '16px',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/lady-on-yellow.jpg"
          alt="Store"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(13,13,26,0.7) 0%, rgba(88,81,234,0.4) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '6px',
            }}
          >
            New collection
          </div>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Ariam Studio
          </div>
          <button
            style={{
              alignSelf: 'flex-start',
              padding: '8px 18px',
              background: 'white',
              color: 'var(--text-primary)',
              borderRadius: '100px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}
          >
            Shop now →
          </button>
        </div>
      </div>

      {/* Featured products */}
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--text-tertiary)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        Featured
      </div>
      <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
        {[
          { img: '/images/linen-blazer-03.jpg', name: 'Linen Blazer', price: '£89' },
          { img: '/images/t-shirt.jpg', name: 'Classic Tee', price: '£28' },
          { img: '/images/makeup-kit.jpg', name: 'Glow Set', price: '£42' },
        ].map((p) => (
          <div key={p.name} style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '80px',
                background: '#f0f0f0',
                marginBottom: '6px',
              }}
            >
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 33vw, 15vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {p.name}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {p.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Showcase wrapper - cycles through cards ──────────────────────────────────

const CARDS = [
  { id: 'product', label: 'Product detail', component: CardProductDetail },
  { id: 'checkout', label: 'Checkout', component: CardCheckout },
  { id: 'grid', label: 'Product grid', component: CardProductGrid },
  { id: 'confirm', label: 'Order confirmed', component: CardOrderConfirmation },
  { id: 'storefront', label: 'Storefront', component: CardStorefrontHero },
];

const DISPLAY_DURATION = 3500;
const FADE_DURATION = 600;

function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadingOut(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % CARDS.length);
        setFadingOut(false);
      }, FADE_DURATION);
    }, DISPLAY_DURATION + FADE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const ActiveCard = CARDS[activeIndex].component;

  return (
    <div
      className="showcase-card"
      style={{
        background: 'white',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 8px 48px rgba(88,81,234,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        border: '1px solid var(--bg-border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Card content */}
      <div
        style={{
          flex: 1,
          opacity: fadingOut ? 0 : 1,
          transform: fadingOut ? 'translateY(8px)' : 'translateY(0)',
          transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.22,1,0.36,1), transform ${FADE_DURATION}ms cubic-bezier(0.22,1,0.36,1)`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ActiveCard />
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          justifyContent: 'center',
          paddingTop: '16px',
          flexShrink: 0,
        }}
      >
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFadingOut(true);
              setTimeout(() => {
                setActiveIndex(i);
                setFadingOut(false);
              }, FADE_DURATION);
            }}
            style={{
              width: i === activeIndex ? '20px' : '6px',
              height: '6px',
              borderRadius: '100px',
              background: i === activeIndex ? 'var(--accent)' : 'var(--bg-border)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function FeatureStorefront() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add('visible');
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--bg-surface)', padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="container">
        <div
          ref={ref}
          className="reveal storefront-grid"
          style={{
            gap: 'clamp(40px, 6vw, 80px)',
          }}
        >
          {/* Text */}
          <div>
            <p className="label" style={{ marginBottom: '20px' }}>
              Your store, your way
            </p>
            <h2 className="section-headline" style={{ marginBottom: '20px' }}>
              A storefront your customers will love.
            </h2>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              Beautiful by default, yours by design. Choose a template built for your category,
              fashion, beauty, sport, events, and make it entirely your own.
            </p>
          </div>

          {/* Animated showcase */}
          <Showcase />
        </div>
      </div>

      <style>{`
      .storefront-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        .showcase-card {
          height: 480px;
        }
        @media (max-width: 768px) {
          .storefront-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .reveal > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
