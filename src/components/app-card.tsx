'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import type { FullAppInfo } from '@/app/page';

export default function AppCard({ app, index }: { app: FullAppInfo, index: number }) {
  const hasUrl = !!app.url;

  const handleGetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (app.url) {
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Link href={`/app/${app.slug}`} className="group block">
        <div className="flex items-center gap-4 px-4 py-2.5 border-b last:border-b-0">
            <div className="text-xl font-medium text-muted-foreground w-6 text-center">{index}</div>
            <Image
                src={app.img}
                alt={`${app.name} icon`}
                width={64}
                height={64}
                className="rounded-2xl border aspect-square object-cover"
                data-ai-hint="app icon"
            />
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base leading-tight truncate text-foreground">{app.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{app.category}</p>
            </div>
            <div className="ml-auto">
              {hasUrl ? (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="rounded-full font-bold text-primary bg-primary/10 hover:bg-primary/20"
                  onClick={handleGetClick}
                >
                  Get
                </Button>
              ) : (
                <Button variant="ghost" size="icon" className="rounded-full text-primary" disabled>
                  <DownloadCloud className="h-6 w-6" />
                </Button>
              )}
            </div>
        </div>
    </Link>
  );
}
