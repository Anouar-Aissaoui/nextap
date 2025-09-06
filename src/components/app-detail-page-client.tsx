'use client';

import type { App } from '@/lib/apps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Card, CardHeader, CardDescription } from '@/components/ui/card';

// Extend the Window interface to include call_locker
declare global {
  interface Window {
    call_locker?: () => void;
  }
}

type AppDetailPageClientProps = {
  app: App;
};

export default function AppDetailPageClient({ app }: AppDetailPageClientProps) {

  const handleDownloadClick = () => {
    if (typeof window.call_locker === 'function') {
      window.call_locker();
    }
  };
  
  return (
    <div className="bg-accent/50 min-h-screen">
        <div className="container mx-auto py-8 md:py-16">
            <Button asChild variant="ghost" className="mb-6">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Apps
                </Link>
            </Button>
            <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-card p-6 md:p-8">
                    <div className="grid md:grid-cols-[150px_1fr] gap-6 md:gap-8 items-start">
                        <Image
                            src={app.img}
                            alt={`${app.name} icon`}
                            width={150}
                            height={150}
                            className="rounded-2xl border-4 border-white shadow-md aspect-square object-cover"
                            data-ai-hint="app icon"
                        />
                        <div className="flex flex-col h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold font-headline mb-1">{app.name}</h1>
                            <p className="text-lg text-muted-foreground mb-4">By {app.author}</p>
                            <CardDescription className="text-base max-w-prose">{app.description}</CardDescription>
                            <div className="mt-auto pt-6">
                                <Button size="lg" className="w-full sm:w-auto" onClick={handleDownloadClick}>
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    </div>
  );
}
