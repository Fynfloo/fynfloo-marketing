'use client';
import { useState, FormEvent } from 'react';

interface EmailFormProps {
  size?: 'default' | 'large';
  placeholder?: string;
  buttonText?: string;
  formspreeId?: string;
  dark?: boolean;
}

export default function EmailForm({
  size = 'default',
  placeholder = 'your@email.com',
  buttonText = 'Get early access',
  formspreeId = 'YOUR_FORMSPREE_ID',
  dark = false,
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const lg = size === 'large';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading' || status === 'success') return;
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  if (status === 'success') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: lg ? '14px 20px' : '11px 18px',
          background: dark ? 'rgba(74,222,128,0.15)' : 'rgba(5,150,105,0.08)',
          border: `1px solid ${dark ? 'rgba(74,222,128,0.3)' : 'rgba(5,150,105,0.2)'}`,
          borderRadius: '10px',
          color: dark ? '#4ade80' : '#059669',
          fontSize: lg ? '15px' : '14px',
          fontWeight: 500,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M5 8l2.5 2.5L11 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        You&apos;re on the list. We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <style>{`
    .email-form-btn { flex-shrink: 0; }
    @media (max-width: 480px) {
      .email-form-input { width: 100%; flex: none !important; }
      .email-form-btn { width: 100%; justify-content: center; }
    }
  `}</style>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === 'loading'}
        style={{
          flex: '1 1 200px',
          minWidth: 0,
          background: dark ? 'rgba(255,255,255,0.12)' : 'var(--bg-card)',
          border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'var(--bg-border)'}`,
          borderRadius: '100px',
          padding: lg ? '13px 20px' : '10px 14px',
          fontSize: lg ? '15px' : '14px',
          color: dark ? '#ffffff' : 'var(--text-primary)',
          outline: 'none',
          letterSpacing: '-0.01em',
          transition: 'border-color 0.15s',
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.5)' : 'var(--accent)')
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.2)' : 'var(--bg-border)')
        }
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="email-form-btn"
        style={{
          background: dark ? 'white' : 'var(--accent)',
          color: dark ? 'var(--accent)' : 'white',
          fontSize: lg ? '15px' : '14px',
          fontWeight: 600,
          padding: lg ? '13px 28px' : '10px 22px',
          borderRadius: '100px',
          border: 'none',
          cursor: status === 'loading' ? 'wait' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={(e) => {
          if (status !== 'loading') {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = dark
              ? '0 6px 24px rgba(255,255,255,0.2)'
              : '0 6px 24px rgba(13,13,26,0.2)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {status === 'loading' ? 'Joining…' : buttonText}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', fontSize: '12.5px', color: '#ef4444', marginTop: '4px' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
