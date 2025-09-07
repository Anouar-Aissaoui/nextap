
'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import AppCard from '@/components/app-card';
import type { FullAppInfo } from '@/app/app/page';
import type { App } from '@/lib/apps';
import { SearchIcon, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SearchPage({ apps }: { apps: App[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = useMemo(() => {
    if (!searchQuery) {
      return []; // Return empty array if no query
    }
    return apps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, apps]);
  
  const categorizedApps: FullAppInfo[] = filteredApps.map(app => ({
    ...app,
    category: app.category || 'Utilities',
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Search Apps</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Find the app you're looking for.
        </p>
      </header>

      <div className="relative mb-8 max-w-2xl mx-auto">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12 text-lg"
          autoFocus
        />
        {searchQuery && (
            <button 
                onClick={() => setSearchQuery('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
                <X className="h-5 w-5" />
            </button>
        )}
      </div>

      <main>
        {searchQuery && (
          <Card>
            <CardContent className="p-0">
              {categorizedApps.length > 0 ? (
                categorizedApps.map((app, index) => (
                  <AppCard key={app.id} app={app} index={index + 1} />
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No apps found for your search.</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
