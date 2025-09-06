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
    notFound();
  }

  const siteUrl = 'https://www.appsg.site';
  const canonicalUrl = `${siteUrl}/app/${app.slug}`;
  const ogImageUrl = `https://picsum.photos/seed/${app.slug}/1200/630`;
  const title = `${app.name} - ${app.description}`;
  const siteName = "AppsGU";

  return {
    title: {
      template: `%s | ${siteName}`,
      default: title,
    },
    description: app.longDescription.substring(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title,
      description: app.description,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${app.name} feature image`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: app.description,
      images: [ogImageUrl],
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
