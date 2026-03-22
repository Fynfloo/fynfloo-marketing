import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f9f9fb',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fynfloo.com'),
  title: {
    default: 'Fynfloo — The commerce platform built without limits',
    template: '%s | Fynfloo',
  },
  description:
    'Beautiful stores, Stripe or Paystack picked automatically from your currency. Every currency your customers use. Commerce infrastructure for merchants who mean business.',
  keywords: [
    'commerce platform',
    'Stripe Paystack',
    'online store builder',
    'ecommerce platform',
    'Paystack store',
    'Stripe store',
    'multi-gateway ecommerce',
    'sell online',
  ],
  authors: [{ name: 'Fynfloo' }],
  creator: 'Fynfloo',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://fynfloo.com',
    siteName: 'Fynfloo',
    title: 'Fynfloo — The commerce platform built without limits',
    description:
      'Beautiful stores, Stripe or Paystack picked automatically. Every currency your customers use.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fynfloo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynfloo — The commerce platform built without limits',
    description: 'Beautiful stores, Stripe or Paystack picked automatically.',
    images: ['/og-image.png'],
    creator: '@fynfloo',
  },
  alternates: { canonical: 'https://fynfloo.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fynfloo',
              url: 'https://fynfloo.com',
              logo: 'https://fynfloo.com/logo-1024.png',
              description:
                'Commerce platform with beautiful stores, Stripe and Paystack gateway routing.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
