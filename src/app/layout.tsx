import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { BottomNav } from '@/components/bottom-nav';

export const metadata: Metadata = {
  title: 'App Discovery Hub',
  description: 'The #1 Mods Store for Android & iOS. Get any tweaked app with unlimited features.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script type="text/javascript">var lck = false;</script>
        <script type="text/javascript" src="https://getafilenow.com/script_include.php?id=888063"></script>
        <script type="text/javascript">if(!lck){'{'}top.location = 'https://getafilenow.com/help/ablk.php?lkt=1'; {'}'}</script>
        <noscript>
          Please enable JavaScript to access this page.
          <meta http-equiv="refresh" content="0;url=https://getafilenow.com/help/enable_javascript.php?lkt=1" />
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
