import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { BottomNav } from '@/components/bottom-nav';
import { Analytics } from '@vercel/analytics/react';

const siteUrl = 'https://www.appsg.site/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'iOS & Android Modded Apps – Free Downloads | AppsGU',
    template: `%s - AppsGU`,
  },
  description: 'Download free modded apps and tweaks for iPhone, iPad and Android. Safe guides, FAQs and regular updates.',
  keywords: ['modded apps', 'tweaked apps', 'iOS sideload', 'Android mods', 'app installer', 'free apps', 'no jailbreak'],
  openGraph: {
    title: 'iOS & Android Modded Apps – Free Downloads | AppsGU',
    description: 'Download free modded apps and tweaks for iPhone, iPad and Android. Safe guides, FAQs and regular updates.',
    url: siteUrl,
    siteName: 'AppsGU',
    images: [
      {
        url: 'https://www.appsg.site/og-image.png', // Must be an absolute URL
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
      </head>
      <body className="font-sans antialiased">
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <BottomNav />
        </div>
        <Toaster />
        <script type="text/javascript">var lck = false;</script>
        <script type="text/javascript" src="https://getafilenow.com/script_include.php?id=888063"></script>
        <script type="text/javascript">if(!lck){'{'}top.location = 'https://getafilenow.com/help/ablk.php?lkt=1'; {'}'}</script>
        <noscript><meta http-equiv="refresh" content="0;url=https://getafilenow.com/help/enable_javascript.php?lkt=1" /></noscript>
        <Analytics />
      </body>
    </html>
  );
}
