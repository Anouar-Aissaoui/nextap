
import { apps } from '@/lib/apps';

export const revalidate = 86400; // 24 hours

const siteUrl = 'https://www.appsg.site';

function generateSitemap(apps: any[]) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  apps.forEach(app => {
    xml += `
      <url>
        <loc>${siteUrl}/app/${app.slug}</loc>
        <image:image>
          <image:loc>${app.img}</image:loc>
          <image:title>${encodeURIComponent(app.name)}</image:title>
          <image:caption>${encodeURIComponent(app.description)}</image:caption>
        </image:image>
      </url>
    `;
  });

  xml += `</urlset>`;
  return xml;
}

export async function GET() {
  const sitemap = generateSitemap(apps);
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
