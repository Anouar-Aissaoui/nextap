
import { apps } from '@/lib/apps';
import type { Metadata } from 'next';
import SearchPage from '@/components/search-page';

const siteUrl = 'https://www.appsg.site';

export const metadata: Metadata = {
  title: 'Search Apps | AppsGU',
  description: 'Find your favorite modded and tweaked apps for iOS and Android. Use our powerful search to explore our extensive library.',
  alternates: {
    canonical: `${siteUrl}/search`,
  },
};

export default function Search() {
  return <SearchPage apps={apps} />;
}
