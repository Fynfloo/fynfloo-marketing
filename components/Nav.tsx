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
          {/* <div
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
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="7" fill="#5851ea" />
              <path
                d="M20.5 7.5 C20.5 7.5, 23.5 10.5, 22.5 14 C21.3 18, 17.5 18.8, 14.5 17.3 C11.3 15.7, 9.5 12.3, 10.8 8.8 C12.1 5.5, 16 4.5, 19 5.8 C22.5 7.3, 24 11.5, 23 15 C21.8 18.8, 18 21, 14 21 C9.5 21, 7 17.5, 7 13 C7 8 10.5 5.5, 14 4.8"
                fill="none"
                stroke="white"
                stroke-width="1.9"
                stroke-linecap="round"
              />
              <circle cx="21.5" cy="21.5" r="1.5" fill="white" />
            </svg>
          </div> */}
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
