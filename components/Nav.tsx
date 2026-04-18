'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(20px, 4vw, 48px)',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-border-subtle)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
      >
        <Image
          src="/logo-1024.png"
          alt="Fynfloo"
          width={32}
          height={32}
          style={{ borderRadius: '8px', display: 'block' }}
          priority
        />
        <span
          style={{
            fontSize: '19px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          fynfloo
        </span>
      </Link>

      <Link
        href="#waitlist"
        className="btn-primary"
        style={{ fontSize: '13.5px', padding: '10px 22px' }}
      >
        Get early access
      </Link>
    </nav>
  );
}
