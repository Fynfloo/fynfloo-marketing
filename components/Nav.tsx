'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        background: scrolled ? 'rgba(249,249,251,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-border-subtle)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s !important',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              background: 'var(--accent)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="white" />
              <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.65" />
              <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.45" />
              <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.85" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
            }}
          >
            fynfloo
          </span>
        </Link>

        <Link
          href="#waitlist"
          className="btn-primary"
          style={{ fontSize: '13.5px', padding: '9px 20px' }}
        >
          Get early access
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
