
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
  const resolvedParams = await params;
  if (!resolvedParams) {
    notFound();
  }
  const app = apps.find(app => app.slug === resolvedParams.slug);

  if (!app) {
    return {
      title: 'App Not Found',
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const siteUrl = 'https://www.appsg.site';
  const canonicalUrl = `${siteUrl}/app/${app.slug}`;
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
          url: `/app/${app.slug}/opengraph-image`,
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
      images: [`/app/${app.slug}/opengraph-image`],
    },
    robots: {
      index: app.longDescription.length > 100, // Noindex if description is too short
      follow: true,
    }
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const resolvedParams = await params;
  if (!resolvedParams) {
    notFound();
  }
  const app = apps.find(app => app.slug === resolvedParams.slug);

  if (!app) {
    notFound();
  }

  const siteUrl = 'https://www.appsg.site';
  const canonicalUrl = `${siteUrl}/app/${app.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': app.name,
      'url': canonicalUrl,
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
          'ratingValue': '4.7',
          'ratingCount': '521'
      },
      'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': siteUrl,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Apps',
          'item': `${siteUrl}/app`,
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': app.name,
          'item': canonicalUrl,
        },
      ],
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppDetailPageClient app={app} allApps={apps} />
    </>
  );
}
