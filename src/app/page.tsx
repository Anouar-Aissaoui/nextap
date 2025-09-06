import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';

export const revalidate = 60; // Revalidate every 60 seconds

export type FullAppInfo = App & { category: string };

export default async function Home() {
  const categorizedApps: FullAppInfo[] = apps.map(app => ({
    ...app,
    category: app.category || 'Utilities', 
  }));

  const siteUrl = 'https://www.appsg.site/';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'name': 'AppsGU',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b">
          <div className="container mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold">
                  AppsGU
              </h1>
              <h2 className="text-lg text-muted-foreground mt-1">Discover Your Next Favorite App</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                Browse our curated list of the best modded apps for iOS & Android.
              </p>
          </div>
      </header>
      <main className="container mx-auto px-0 pb-20 pt-2">
        <HomePage apps={categorizedApps} />
      </main>
    </div>
  );
}
