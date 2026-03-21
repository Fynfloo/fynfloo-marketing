'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`
        .nav-logo-text {
          font-size: 25px !important;
          font-weight: 800;
          margin-left: 8px;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }
        .nav-cta-icon { display: inline-flex; align-items: center; }
        @media (max-width: 480px) {
          .nav-cta-btn { padding: 7px 12px !important; font-size: 12px !important; gap: 4px !important; }
          .nav-logo-text { font-size: 15px !important;  margin-left: 6px; }
        }
      `}</style>
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
          transition: 'background 0.3s, border-color 0.3s',
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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo-1024.png"
              alt="Fynfloo"
              width={34}
              height={34}
              style={{ borderRadius: '9px', flexShrink: 0, display: 'block' }}
              priority
            />
            <span className="nav-logo-text">fynfloo</span>
          </Link>

          <Link
            href="#waitlist"
            className="btn-primary nav-cta-btn"
            style={{
              fontSize: '13.5px',
              padding: '9px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Get early access
            <span className="nav-cta-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2.5 6.5h8M7.5 3.5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
