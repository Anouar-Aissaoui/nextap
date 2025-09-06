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

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...appUrls,
  ]
}
