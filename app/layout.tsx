import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://fynfloo.com'),
  title: {
    default: 'Fynfloo - Commerce within reach',
    template: '%s | Fynfloo',
  },
  description:
    "Fynfloo is a commerce platform for merchants building the next great brand. Everything you need to sell online — nothing you don't.",
  keywords: [
    'commerce platform',
    'online store builder',
    'ecommerce platform',
    'sell online',
    'storefront builder',
    'merchant platform',
    'growing brands',
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
    title: 'Fynfloo - Commerce within reach',
    description:
      "Everything you need to sell online — nothing you don't. Built for the brands building the next great brand.",
    images: [{ url: '/logo-1024.png', width: 1200, height: 630, alt: 'Fynfloo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fynfloo - Commerce within reach',
    description: "Everything you need to sell online — nothing you don't.",
    images: ['/logo-1024.png'],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
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
              description: 'A commerce platform for merchants building the next great brand.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
