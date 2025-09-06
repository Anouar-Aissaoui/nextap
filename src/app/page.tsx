import { categorizeApps, type CategorizeAppsInput } from '@/ai/flows/categorize-apps';
import { apps as initialApps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';
import SiteLogo from '@/components/site-logo';

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

  return (
    <div className="bg-background min-h-screen">
      <header className="py-8 md:py-12 bg-background border-b">
        <div className="container mx-auto text-left">
          <p className="text-sm font-medium text-primary">Featured</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-1">
            Welcome to AppsGU
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Your daily destination for new apps.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-16 pt-12">
        <HomePage apps={categorizedApps} />
      </main>
    </div>
  );
}
