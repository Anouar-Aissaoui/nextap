import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
