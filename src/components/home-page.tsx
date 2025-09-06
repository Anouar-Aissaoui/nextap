'use client';
import { useState, useMemo } from 'react';
import type { FullAppInfo } from '@/app/page';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppCard from './app-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function HomePage({ apps }: { apps: FullAppInfo[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const allCategories = apps.map(app => app.category);
    return ['All', ...Array.from(new Set(allCategories)).sort()];
  }, [apps]);

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      const matchesSearch = searchTerm.trim() === '' ||
                            app.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
                            app.description.toLowerCase().includes(searchTerm.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [apps, searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for apps..."
            className="pl-12 h-12 text-base rounded-full bg-secondary border-transparent focus:bg-white focus:border-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:hidden">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full h-12 text-base rounded-full bg-secondary border-transparent">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="hidden md:flex flex-wrap items-center gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'ghost'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full px-5 text-base"
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8 animate-in fade-in-50">
          {filteredApps.map((app, index) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-lg font-semibold">No Apps Found</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
