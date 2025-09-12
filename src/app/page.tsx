
import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import HomePage from '@/components/home-page';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Faq, type FaqItem } from '@/components/faq';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

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
      answer: "Modded apps are modified versions of original apps or games — often with unlocked premium features, unlimited resources, ad removal, or cheats enabled. They’re not available on official app stores."
    },
    {
      question: "Is it safe to download from AppsGU?",
      answer: "Yes. Every file is manually reviewed and scanned for malware before publishing. We never bundle adware or trackers. Open community reports ensure fast removal of broken or unsafe files."
    },
    {
      question: "Do I need to jailbreak my iPhone or root my Android?",
      answer: "No. For iOS, use AltStore or TrollStore to sideload apps without jailbreak. For Android, enable 'Unknown Sources' and install APKs directly — no root needed."
    },
    {
      question: "How do I install apps on iOS without jailbreaking?",
      answer: "Use AltStore (free) or Sideloadly. Connect your iPhone to a computer once to set up, then install IPAs over Wi-Fi. Apps auto-refresh weekly to avoid expiration."
    },
    {
      question: "Are the apps on this site free?",
      answer: "100% free. No subscriptions. No paywalls. No hidden fees. We’re supported by optional donations and community love ❤️"
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
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">#1 Free Mods Store for iOS & Android</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">Download 500+ modded apps & games — tweaked APKs for Android, sideloaded IPAs for iPhone. Bypass restrictions. Unlock premium features. 100% free.</p>
            
            <form action="/search" className="mt-8 max-w-xl mx-auto flex gap-2">
              <Input
                type="text"
                name="q"
                placeholder="Search for modded apps or games..."
                autoComplete="off"
                className="h-12 text-base flex-1"
              />
              <Button type="submit" size="lg" className="h-12">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            
            <a href="#featured-apps" className="mt-8 inline-flex items-center gap-2 text-primary hover:underline">
              👇 Browse Top Mods Now
            </a>
        </header>
        <main className="space-y-12">
          <Card id="featured-apps">
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
