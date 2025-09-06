'use client';

import { useEffect, useState } from 'react';
import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Extend the Window interface to include call_locker
declare global {
  interface Window {
    call_locker?: () => void;
  }
}

type AppDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const [app, setApp] = useState<App | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundApp = apps.find(app => app.slug === params.slug);
    if (foundApp) {
      setApp(foundApp);
    }
    setIsLoading(false);
  }, [params.slug]);

  const handleDownloadClick = () => {
    if (typeof window.call_locker === 'function') {
      window.call_locker();
    }
  };

  if (isLoading) {
      return (
        <div className="container mx-auto py-8 md:py-16">
            <div className="animate-pulse">
                <div className="h-8 w-32 bg-muted rounded mb-6"></div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="p-6 md:p-8">
                        <div className="grid md:grid-cols-[150px_1fr] gap-6 md:gap-8 items-start">
                            <div className="rounded-2xl bg-muted aspect-square w-[150px] h-[150px]"></div>
                            <div>
                                <div className="h-10 w-3/4 bg-muted rounded mb-2"></div>
                                <div className="h-6 w-1/2 bg-muted rounded mb-4"></div>
                                <div className="h-5 w-full bg-muted rounded mb-2"></div>
                                <div className="h-5 w-5/6 bg-muted rounded"></div>
                                <div className="mt-auto pt-6">
                                  <div className="h-12 w-40 bg-primary/50 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }

  if (!app) {
    notFound();
  }

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
