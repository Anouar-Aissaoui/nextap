import { MetadataRoute } from 'next'
import { apps } from '@/lib/apps';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.appsg.site';

  const appUrls = apps.map((app) => ({
    url: `${siteUrl}/app/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
        url: `${siteUrl}/app`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    },
    {
        url: `${siteUrl}/search`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    },
    {
        url: `${siteUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    },
    {
        url: `${siteUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    },
    {
        url: `${siteUrl}/copyright-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    },
    {
        url: `${siteUrl}/eu-amau`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...staticPages,
    ...appUrls,
  ]
}
