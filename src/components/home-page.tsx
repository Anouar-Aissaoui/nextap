'use client';
import { useState, useMemo } from 'react';
import type { FullAppInfo } from '@/app/page';
import AppCard from './app-card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

export default function HomePage({ apps }: { apps: FullAppInfo[] }) {
  const [activeTab, setActiveTab] = useState('featured');

  const availableApps = useMemo(() => apps.filter(app => !!app.url), [apps]);

  const appsToShow = activeTab === 'available' ? availableApps : apps;

  return (
    <div className="space-y-4">
      <div className="px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/60 p-1 h-auto">
            <TabsTrigger value="featured" className="py-1.5 text-sm">Featured</TabsTrigger>
            <TabsTrigger value="available" className="py-1.5 text-sm">Available</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div>
        <div className="flex flex-col">
          {appsToShow.map((app, index) => (
            <AppCard key={app.id} app={app} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
