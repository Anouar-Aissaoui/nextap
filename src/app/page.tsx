
import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';

export const revalidate = 3600; // Revalidate every hour

export type FullAppInfo = App & { category: string };

export default async function Home() {
  const categorizedApps: FullAppInfo[] = apps.map(app => ({
    ...app,
    category: app.category || 'Utilities',
  }));

  const siteUrl = 'https://www.appsg.site/';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'AppsGU - Curated Mobile Apps',
    'description': 'A curated list of the best modded and tweaked apps for iOS and Android devices.',
    'url': siteUrl,
    'itemListElement': categorizedApps.map((app, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SoftwareApplication',
        'name': app.name,
        'url': `${siteUrl}app/${app.slug}`,
        'description': app.description,
        'applicationCategory': app.category,
        'operatingSystem': 'iOS, Android',
        'screenshot': app.img,
        'author': {
          '@type': 'Organization',
          'name': app.author,
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.5',
            'reviewCount': '250'
        },
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
        }
      }
    })),
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
