import { apps } from '@/lib/apps';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AppDetailPageClient from '@/components/app-detail-page-client';


type AppDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const app = apps.find(app => app.slug === params.slug);

  if (!app) {
    return {
      title: 'App Not Found'
    }
  }

  const siteUrl = 'https://www.appsg.site/';
  const canonicalUrl = `${siteUrl}app/${app.slug}`;
  const ogImageUrl = `https://picsum.photos/seed/${app.slug}/1200/630`;

  return {
    title: `${app.name} - Download Now`,
    description: app.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} - AppsGU`,
      description: app.description,
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${app.name} feature image`,
        },
      ],
      siteName: 'AppsGU',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const app = apps.find(app => app.slug === params.slug);

  if (!app) {
    notFound();
  }

  return <AppDetailPageClient app={app} />;
}
