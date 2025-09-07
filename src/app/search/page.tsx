
import { apps } from '@/lib/apps';
import type { Metadata } from 'next';
import SearchPage from '@/components/search-page';

const siteUrl = 'https://www.appsg.site';

export const metadata: Metadata = {
  title: 'Search Apps',
  description: 'Search for your favorite modded and tweaked apps for iOS and Android.',
  alternates: {
    canonical: `${siteUrl}/search`,
  },
};

export default function Search() {
  return <SearchPage apps={apps} />;
}
