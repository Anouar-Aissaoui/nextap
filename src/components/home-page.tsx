'use client';
import type { FullAppInfo } from '@/app/page';
import AppCard from './app-card';

export default function HomePage({ apps }: { apps: FullAppInfo[] }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex flex-col">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
