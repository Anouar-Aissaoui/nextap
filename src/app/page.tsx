
import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Faq, type FaqItem } from '@/components/faq';

export const revalidate = 3600; // Revalidate every hour

export type FullAppInfo = App & { category: string };

const siteUrl = 'https://www.appsg.site';

export const metadata: Metadata = {
  title: 'AppsGU: Top Modded Apps for iOS & Android (Free Downloads)',
  description: 'Discover and download the best modded apps for Android and iOS. Find tweaked apps, modded games, and emulators, all with no jailbreak required. Your #1 source for enhanced mobile apps.',
  alternates: {
    canonical: siteUrl,
  },
};

const faqs: FaqItem[] = [
    {
      question: "What are modded apps?",
      answer: "Modded apps are modified versions of official applications, offering enhanced features, unlocked premium content, or other improvements not found in the original. AppsGU provides a curated library of these tweaked apps for both iOS and Android."
    },
    {
      question: "Is it safe to download from AppsGU?",
      answer: "Yes, safety is our priority. We strive to provide clean and reliable modded apps. However, as with any third-party app source, you should always be cautious. We recommend using a secondary account where possible for online games."
    },
    {
      question: "Do I need to jailbreak my iPhone or root my Android?",
      answer: "No jailbreak or root is required for the vast majority of our apps. For iOS, we provide apps that can be installed via sideloading methods like AltStore. For Android, you simply need to enable installation from unknown sources."
    },
    {
      question: "How do I install apps on iOS without jailbreaking?",
      answer: "You can sideload IPA files using tools like AltStore. Sideloading uses your Apple ID to sign the app, allowing it to be installed on your device without modifying the iOS system. We provide guides for apps that require this method."
    },
    {
      question: "Are the apps on this site free?",
      answer: "Yes, all the modded apps and tweaked apps available for download on AppsGU are free. Our goal is to provide access to enhanced app experiences without cost."
    }
];

export default async function Home() {
  const categorizedApps: FullAppInfo[] = apps.map(app => ({
    ...app,
    category: app.category || 'Utilities',
  }));

  const jsonLd = [
    {
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">
                #1 Free Mods Store for iOS & Android
            </h1>
            <h2 className="text-xl text-muted-foreground mt-2">AppsGU</h2>
            <p className="text-md text-muted-foreground mt-4 max-w-2xl mx-auto">
              Welcome to the top destination for modded apps and games. Explore our extensive IPA library for iOS and find the best modded games for Android. We specialize in providing tweaked apps for iOS with no jailbreak required, making it easy to sideload apps and access emulators like PPSSPP. Start your modded apps download today.
            </p>
        </header>
        <main className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Featured Apps</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <HomePage apps={categorizedApps} />
            </CardContent>
          </Card>
          <Faq faqs={faqs} />
        </main>
      </div>
    </div>
  );
}
