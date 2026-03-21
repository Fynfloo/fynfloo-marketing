'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background: var(--bg-elevated);
          border-top: 1px solid var(--bg-border-subtle);
          padding: 56px 0 32px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-brand-name {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-primary);
          margin-left: 7px;
          letter-spacing: -0.03em;
        }
        .footer-tagline {
          font-size: 13.5px;
          color: var(--text-tertiary);
          line-height: 1.6;
          max-width: 240px;
          margin-top: 12px;
        }
        .footer-col-heading {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-tertiary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .footer-link {
          display: block;
          font-size: 13.5px;
          color: var(--text-secondary);
          text-decoration: none;
          margin-bottom: 10px;
          transition: color 0.15s;
        }
        .footer-link:hover { color: var(--text-primary); }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid var(--bg-border-subtle);
        }
        .footer-copy {
          font-size: 12.5px;
          color: var(--text-tertiary);
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-card);
          border: 1px solid var(--bg-border-subtle);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 12px;
          color: var(--text-tertiary);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-tagline { max-width: 100%; }
        }
      `}</style>
      <footer className="footer-root">
        <div className="container">
          <div className="footer-top">
            {/* Brand column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/logo-1024.png"
                  alt="Fynfloo"
                  width={32}
                  height={32}
                  style={{ borderRadius: '8px', flexShrink: 0 }}
                />
                <span className="footer-brand-name">fynfloo</span>
              </div>
              <p className="footer-tagline">
                The commerce platform built without limits. Beautiful stores, multiple payment
                gateways, every currency your customers use.
              </p>
            </div>

            {/* Product column */}
            <div>
              <p className="footer-col-heading">Product</p>
              <a href="#features" className="footer-link">
                Features
              </a>
              <a href="#how-it-works" className="footer-link">
                How it works
              </a>
              <a href="#waitlist" className="footer-link">
                Get early access
              </a>
            </div>

            {/* Contact column */}
            <div>
              <p className="footer-col-heading">Get in touch</p>
              <a href="mailto:hello@fynfloo.com" className="footer-link">
                hello@fynfloo.com
              </a>
              <a href="#waitlist" className="footer-link">
                Join the waitlist
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © {new Date().getFullYear()} Fynfloo. All rights reserved.
            </span>
            <span className="footer-badge">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              Launching 2026
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
