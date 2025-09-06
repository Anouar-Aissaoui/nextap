import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { BottomNav } from '@/components/bottom-nav';

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
    siteName: 'App Discovery Hub',
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
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `var lck = false;` }} />
        <script type="text/javascript" src="https://getafilenow.com/script_include.php?id=888063" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!lck){top.location = 'https://getafilenow.com/help/ablk.php?lkt=1';}`,
          }}
        />
        <noscript>
          <meta httpEquiv="refresh" content="0;url=https://getafilenow.com/help/enable_javascript.php?lkt=1" />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <BottomNav />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
