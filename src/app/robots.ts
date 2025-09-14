
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.appsg.site';
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/_next/data/', '/*?q=*'],
        }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
