'use client';
import { useState, useMemo } from 'react';
import type { FullAppInfo } from '@/app/page';
import AppCard from './app-card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function HomePage({ apps }: { apps: FullAppInfo[] }) {
  const [activeTab, setActiveTab] = useState('free');

  return (
    <div className="space-y-4">
      <div className="px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/60 p-1 h-auto">
            <TabsTrigger value="free" className="py-1.5 text-sm">Free</TabsTrigger>
            <TabsTrigger value="paid" className="py-1.5 text-sm">Paid</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
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
