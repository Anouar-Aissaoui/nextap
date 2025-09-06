import { apps } from '@/lib/apps';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AppDetailPageClient from '@/components/app-detail-page-client';


type AppDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const app = apps.find(app => app.slug === params.slug);

  if (!app) {
    return {
      title: 'App Not Found'
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/apps/${app.slug}`;

  return {
    title: `${app.name} - Download Now`,
    description: app.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${app.name} - App Discovery Hub`,
      description: app.description,
      url: canonicalUrl,
      images: [
        {
          url: app.img,
          width: 150,
          height: 150,
          alt: `${app.name} icon`,
        },
      ],
      siteName: 'App Discovery Hub',
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
