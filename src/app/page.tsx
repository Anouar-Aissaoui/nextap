import { categorizeApps, type CategorizeAppsInput } from '@/ai/flows/categorize-apps';
import { apps as initialApps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';

export type FullAppInfo = App & { category: string };

export default async function Home() {
  const appsForAI: CategorizeAppsInput = initialApps.map(app => ({
    name: app.name,
    description: app.description,
  }));

  let categorizedApps: FullAppInfo[] = [];

  try {
    const categorizationResults = await categorizeApps(appsForAI);
    
    categorizedApps = initialApps.map(app => {
      const result = categorizationResults.find(r => r.name === app.name);
      return {
        ...app,
        category: result?.category || 'Utilities',
      };
    });
  } catch (error) {
    console.error("AI categorization failed, falling back to default categories.", error);
    categorizedApps = initialApps.map(app => ({
      ...app,
      category: 'Utilities',
    }));
  }

  const siteUrl = 'https://www.appsg.site/';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'name': 'App Discovery Hub',
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
              <h2 className="text-lg text-muted-foreground mt-1">Discover the Best Apps</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                Explore our curated list of the most popular and highly-rated apps available. We use AI to categorize apps, making it easy for you to find exactly what you're looking for.
              </p>
          </div>
      </header>
      <main className="container mx-auto px-0 pb-20 pt-2">
        <HomePage apps={categorizedApps} />
      </main>
    </div>
  );
}
