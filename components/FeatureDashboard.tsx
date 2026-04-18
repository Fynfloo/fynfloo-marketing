'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ─── Card 1: Orders list ──────────────────────────────────────────────────────

function CardOrders() {
  const orders = [
    {
      id: '#1042',
      name: 'Amara O.',
      product: 'Linen Blazer — Cream / M',
      amount: '£89.00',
      status: 'Paid',
      paid: true,
    },
    {
      id: '#1041',
      name: 'James K.',
      product: 'Merino Crewneck — Navy / L',
      amount: '£120.00',
      status: 'Paid',
      paid: true,
    },
    {
      id: '#1040',
      name: 'Sofia M.',
      product: 'Wide Leg Trouser — Black / 10',
      amount: '£74.00',
      status: 'Fulfilling',
      paid: false,
    },
    {
      id: '#1039',
      name: 'Dele A.',
      product: 'Tailored Shirt — White / M',
      amount: '£65.00',
      status: 'Paid',
      paid: true,
    },
    {
      id: '#1038',
      name: 'Rachel T.',
      product: 'Cashmere Scarf — Camel',
      amount: '£55.00',
      status: 'Paid',
      paid: true,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
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
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Recent orders
        </div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.02em',
          }}
        >
          View all →
        </span>
      </div>

      {/* Tab strip */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
        {['Unfulfilled', 'All', 'Fulfilled'].map((tab, i) => (
          <div
            key={tab}
            style={{
              padding: '5px 12px',
              borderRadius: '100px',
              fontSize: '11px',
              fontWeight: 600,
              background: i === 0 ? 'var(--accent-dim)' : 'transparent',
              color: i === 0 ? 'var(--accent)' : 'var(--text-tertiary)',
              cursor: 'default',
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Orders */}
      <div
        style={{
          flex: 1,
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--bg-border-subtle)',
        }}
      >
        {orders.map((o, i, arr) => (
          <div
            key={o.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 14px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bg-border-subtle)' : 'none',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                color: 'var(--text-tertiary)',
                fontFamily: 'monospace',
                flexShrink: 0,
                width: '36px',
              }}
            >
              {o.id}
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                flex: '0 0 64px',
              }}
            >
              {o.name}
            </span>
            <span
              style={{
                fontSize: '11px',
                color: 'var(--text-tertiary)',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {o.product}
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}
            >
              {o.amount}
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                color: o.paid ? '#059669' : '#d97706',
                background: o.paid ? 'rgba(5,150,105,0.08)' : 'rgba(217,119,6,0.08)',
                padding: '2px 8px',
                borderRadius: '100px',
                flexShrink: 0,
              }}
            >
              {o.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 2: Analytics ────────────────────────────────────────────────────────

function CardAnalytics() {
  const bars = [65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 68, 88, 72, 92];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Period selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Analytics
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {['7d', '30d', '90d'].map((p, i) => (
            <div
              key={p}
              style={{
                padding: '4px 10px',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 600,
                background: i === 1 ? 'var(--accent)' : 'var(--bg-elevated)',
                color: i === 1 ? 'white' : 'var(--text-tertiary)',
                cursor: 'default',
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
        {[
          { label: 'Revenue', value: '£24,180', change: '+22%' },
          { label: 'Orders', value: '284', change: '+17%' },
          { label: 'Customers', value: '1,240', change: '+31%' },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: 'var(--bg-elevated)',
              borderRadius: '10px',
              padding: '12px',
              border: '1px solid var(--bg-border-subtle)',
            }}
          >
            <div
              style={{
                fontSize: '10px',
                color: 'var(--text-tertiary)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '3px',
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: '#059669' }}>{s.change}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div
        style={{
          flex: 1,
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          padding: '16px',
          border: '1px solid var(--bg-border-subtle)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            marginBottom: '12px',
          }}
        >
          Revenue — last 30 days
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background:
                  i === bars.length - 1
                    ? 'var(--accent)'
                    : `rgba(88,81,234,${0.15 + (h / 100) * 0.25})`,
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Card 3: Products ─────────────────────────────────────────────────────────

function CardProducts() {
  const products = [
    {
      img: '/images/linen-blazer-01.jpg',
      name: 'Linen Blazer',
      price: '£89.00',
      status: 'Active',
      stock: '12 in stock',
    },
    {
      img: '/images/t-shirt.jpg',
      name: 'Classic Tee',
      price: '£28.00',
      status: 'Active',
      stock: '34 in stock',
    },
    {
      img: '/images/makeup-kit.jpg',
      name: 'Glow Serum Kit',
      price: '£42.00',
      status: 'Draft',
      stock: '—',
    },
    {
      img: '/images/linen-blazer-02.jpg',
      name: 'Tailored Shirt',
      price: '£65.00',
      status: 'Active',
      stock: '3 in stock',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Products
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'var(--accent)',
            color: 'white',
            fontSize: '11px',
            fontWeight: 600,
            padding: '5px 12px',
            borderRadius: '100px',
            cursor: 'default',
          }}
        >
          + Add product
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--bg-border-subtle)',
        }}
      >
        {products.map((p, i, arr) => (
          <div
            key={p.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bg-border-subtle)' : 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                overflow: 'hidden',
                flexShrink: 0,
                background: '#f0f0f0',
              }}
            >
              <Image src={p.img} alt={p.name} fill sizes="36px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.name}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '1px' }}>
                {p.stock}
              </div>
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}
            >
              {p.price}
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '100px',
                flexShrink: 0,
                background: p.status === 'Active' ? 'rgba(5,150,105,0.08)' : 'rgba(217,119,6,0.08)',
                color: p.status === 'Active' ? '#059669' : '#d97706',
              }}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 4: Discount codes ───────────────────────────────────────────────────

function CardDiscounts() {
  const codes = [
    {
      code: 'SUMMER20',
      type: '20% off',
      usage: '14 / 50 uses',
      active: true,
      expires: 'Expires 31 Aug',
    },
    {
      code: 'FREESHIP',
      type: 'Free shipping',
      usage: '8 uses',
      active: true,
      expires: 'No expiry',
    },
    {
      code: 'WELCOME10',
      type: '£10 off',
      usage: '32 / 100 uses',
      active: true,
      expires: 'Expires 1 Dec',
    },
    {
      code: 'FLASH30',
      type: '30% off',
      usage: '50 / 50 uses',
      active: false,
      expires: 'Limit reached',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Discount codes
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--accent)',
            color: 'white',
            fontSize: '11px',
            fontWeight: 600,
            padding: '5px 12px',
            borderRadius: '100px',
            cursor: 'default',
          }}
        >
          + Create code
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: 'var(--bg-elevated)',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--bg-border-subtle)',
        }}
      >
        {codes.map((c, i, arr) => (
          <div
            key={c.code}
            style={{
              padding: '12px 14px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--bg-border-subtle)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.04em',
                  }}
                >
                  {c.code}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    padding: '1px 7px',
                    borderRadius: '100px',
                    background: 'var(--accent-dim)',
                    color: 'var(--accent)',
                  }}
                >
                  {c.type}
                </span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                {c.usage} · {c.expires}
              </div>
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '100px',
                flexShrink: 0,
                background: c.active ? 'rgba(5,150,105,0.08)' : 'rgba(153,152,176,0.1)',
                color: c.active ? '#059669' : 'var(--text-tertiary)',
              }}
            >
              {c.active ? 'Active' : 'Inactive'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card 5: Order detail ─────────────────────────────────────────────────────

function CardOrderDetail() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Order #1042
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
            15 Apr 2026 · 14:32
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 600,
              padding: '3px 9px',
              borderRadius: '100px',
              background: 'rgba(5,150,105,0.08)',
              color: '#059669',
            }}
          >
            Paid
          </span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 600,
              padding: '3px 9px',
              borderRadius: '100px',
              background: 'rgba(217,119,6,0.08)',
              color: '#d97706',
            }}
          >
            Unfulfilled
          </span>
        </div>
      </div>

      {/* Customer */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          padding: '12px 14px',
          border: '1px solid var(--bg-border-subtle)',
        }}
      >
        <div
          style={{
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '6px',
          }}
        >
          Customer
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
          Amara Okafor
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
          amara@email.com · 07700 900 123
        </div>
      </div>

      {/* Items */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid var(--bg-border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px' }}>
          <div
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#f0f0f0',
            }}
          >
            <Image
              src="/images/linen-blazer-01.jpg"
              alt="Linen Blazer"
              fill
              sizes="40px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Linen Blazer — Cream / M
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '1px' }}>
              Qty: 1 · SKU: LB-CRM-M
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
            £89.00
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid var(--bg-border-subtle)',
            padding: '8px 14px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>
            Total
          </span>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            £89.00
          </span>
        </div>
      </div>

      {/* Fulfilment */}
      <div
        style={{
          background: 'var(--bg-elevated)',
          borderRadius: '10px',
          padding: '12px 14px',
          border: '1px solid var(--bg-border-subtle)',
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '8px',
          }}
        >
          Fulfilment
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            placeholder="Tracking number"
            readOnly
            style={{
              flex: 1,
              padding: '8px 12px',
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
              padding: '8px 14px',
              background: 'var(--accent)',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Mark fulfilled
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Showcase wrapper ─────────────────────────────────────────────────────────

const CARDS = [
  { id: 'orders', label: 'Orders', component: CardOrders },
  { id: 'analytics', label: 'Analytics', component: CardAnalytics },
  { id: 'products', label: 'Products', component: CardProducts },
  { id: 'discounts', label: 'Discounts', component: CardDiscounts },
  { id: 'order-detail', label: 'Order detail', component: CardOrderDetail },
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
      style={{
        background: 'white',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: '0 8px 48px rgba(88,81,234,0.1), 0 2px 8px rgba(0,0,0,0.05)',
        border: '1px solid var(--bg-border-subtle)',
        height: '480px',
        display: 'flex',
        flexDirection: 'column',
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
          overflow: 'hidden',
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

export default function FeatureDashboard() {
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
    <section
      style={{ background: 'var(--section-purple-light)', padding: 'clamp(80px, 10vw, 140px) 0' }}
    >
      <div className="container">
        <div
          ref={ref}
          className="reveal dashboard-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Visual LEFT */}
          <Showcase />

          {/* Text RIGHT */}
          <div>
            <p className="label" style={{ marginBottom: '20px' }}>
              Everything in one place
            </p>
            <h2 className="section-headline" style={{ marginBottom: '20px' }}>
              One dashboard. Everything.
            </h2>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 18px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              Products, orders, customers, and payments, all in one place, from the moment you log
              in. No integrations, no tab switching, no workarounds.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
          .dashboard-grid > div:first-child {
            order: 2;
          }
          .dashboard-grid > div:last-child {
            order: 1;
          }
        }
        @media (max-width: 768px) {
          .reveal > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
