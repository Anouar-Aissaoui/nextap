
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://www.appsg.site/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'iOS & Android Modded Apps – Free Downloads | AppsGU',
    template: `%s - AppsGU`,
  },
  description: 'Download free modded apps and tweaks for iPhone, iPad and Android. Safe guides, FAQs and regular updates.',
  keywords: ['modded apps', 'tweaked apps', 'iOS sideload', 'Android mods', 'app installer', 'free apps', 'no jailbreak', 'AltStore', 'Instagram++', 'Pokemon Go Spoofer'],
  openGraph: {
    title: 'iOS & Android Modded Apps – Free Downloads | AppsGU',
    description: 'Download free modded apps and tweaks for iPhone, iPad and Android. Safe guides, FAQs and regular updates.',
    url: siteUrl,
    siteName: 'AppsGU',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'AppsGU - Free Modded Apps for iOS & Android',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    apple: '/opengraph-image.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://i.imgur.com" />
      </head>
      <body className={inter.className}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
