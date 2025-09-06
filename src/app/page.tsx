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

  return (
    <div className="bg-background min-h-screen">
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b">
          <div className="container mx-auto px-4 h-14 flex items-center">
              <h1 className="text-xl font-bold">
                  Top Charts
              </h1>
          </div>
      </header>
      <main className="container mx-auto px-0 pb-20 pt-2">
        <HomePage apps={categorizedApps} />
      </main>
    </div>
  );
}
