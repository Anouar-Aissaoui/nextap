
import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const revalidate = 3600; // Revalidate every hour

export type FullAppInfo = App & { category: string };

const siteUrl = 'https://www.appsg.site';

export const metadata: Metadata = {
  title: 'AppsGU: Top Modded Apps for iOS & Android (Free Downloads)',
  description: 'Discover and download the best modded and tweaked apps for iOS and Android. Safe, updated, and free from AppsGU, your #1 source for enhanced mobile apps.',
  alternates: {
    canonical: siteUrl,
  },
};


export default async function Home() {
  const categorizedApps: FullAppInfo[] = apps.map(app => ({
    ...app,
    category: app.category || 'Utilities',
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'AppsGU - Curated Mobile Apps',
    'description': 'A curated list of the best modded and tweaked apps for iOS and Android devices.',
    'url': `${siteUrl}/app`,
    'itemListElement': categorizedApps.map((app, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SoftwareApplication',
        'name': app.name,
        'url': `${siteUrl}/app/${app.slug}`,
        'description': app.description,
        'applicationCategory': app.category,
        'operatingSystem': 'iOS, Android',
        'image': app.img,
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
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">
                AppsGU
            </h1>
            <h2 className="text-xl text-muted-foreground mt-2">Your Source for Modded iOS & Android Apps</h2>
            <p className="text-md text-muted-foreground mt-4 max-w-2xl mx-auto">
              Browse our curated list of the best modded apps for iOS & Android.
            </p>
        </header>
        <main>
          <Card>
            <CardHeader>
              <CardTitle>All Apps</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <HomePage apps={categorizedApps} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

    