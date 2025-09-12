
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://www.appsg.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AppsGU — #1 Free Mods Store for iOS & Android (No Jailbreak)',
    template: `%s - AppsGU`,
  },
  description: 'Download 500+ modded apps & games for iPhone and Android — no jailbreak, no root. Safe, fast, updated daily. COD Mobile, Instagram++, PPSSPP, Roblox Mod & more.',
  keywords: ['modded-apps', 'ios-mods', 'android-apk', 'no-jailbreak', 'free-mods', 'game-hacks', 'sideload-ios', 'ppsspp-emulator', 'trending-mods-2025', 'modded apps', 'tweaked apps', 'iOS sideload', 'Android mods', 'app installer', 'free apps', 'no jailbreak', 'AltStore', 'Instagram++', 'Pokemon Go Spoofer', 'modded apps download', 'modded games for Android', 'iOS tweaked apps', 'iOS modded apps no jailbreak', 'IPA library (iOS)', 'sideload iOS apps', 'AltStore apps', 'PPSSPP iOS download', 'emulator for iOS', 'best modded games Android'],
  openGraph: {
    title: 'AppsGU: Free Modded Apps & Games for iOS/Android',
    description: 'The largest collection of working, safe mods — no jailbreak or root needed. Trusted by 2M+ users worldwide.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'AppsGU: Free Modded Apps & Games for iOS/Android',
    description: 'The largest collection of working, safe mods — no jailbreak or root needed. Trusted by 2M+ users worldwide.',
    images: [`/opengraph-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/opengraph-image.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'name': 'AppsGU',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript><meta http-equiv="refresh" content="0;url=https://getafilenow.com/help/enable_javascript.php?lkt=1" /></noscript>
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
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `var lck = false;` }} />
        <script type="text/javascript" src="https://getafilenow.com/script_include.php?id=888063"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `if(!lck){top.location = 'https://getafilenow.com/help/ablk.php?lkt=1'; }` }} />
      </body>
    </html>
  );
}
