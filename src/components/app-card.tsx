
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import type { FullAppInfo } from '@/app/page';

export default function AppCard({ app, index, priority = false }: { app: FullAppInfo, index: number, priority?: boolean }) {
  const hasUrl = !!app.url;
  const href = hasUrl ? app.url : `/app/${app.slug}`;

  return (
    <Link 
      href={href}
      target={hasUrl ? '_blank' : '_self'}
      rel={hasUrl ? 'noopener noreferrer' : ''}
      className="group block"
    >
        <div className="flex items-center gap-4 px-4 h-20 border-b last:border-b-0">
            <div className="text-xl font-medium text-muted-foreground w-8 text-center">{index}</div>
            <Image
                src={app.img}
                alt={`${app.name} icon`}
                width={64}
                height={64}
                className="rounded-2xl aspect-square object-cover"
                data-ai-hint={app['data-ai-hint'] || app.name.toLowerCase().split(' ').slice(0,2).join(' ')}
                priority={priority}
            />
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base leading-tight truncate text-foreground">{app.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{app.category}</p>
            </div>
            <div className="ml-auto">
              <div className="h-10 w-10 inline-flex items-center justify-center text-primary">
                  <DownloadCloud className="h-6 w-6" />
              </div>
            </div>
        </div>
    </Link>
  );
}

    
