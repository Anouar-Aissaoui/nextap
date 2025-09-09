/** @type {import('next-sitemap').IConfig} */
const { apps } = require('./src/lib/apps.ts');

module.exports = {
  siteUrl: 'https://www.appsg.site',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      'https://www.appsg.site/sitemap.xml',
      'https://www.appsg.site/sitemap-images.xml',
    ],
  },
  transform: async (config, path) => {
    // Default object for static pages
    let sitemapObject = {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString().split('T')[0], // Default lastmod
    };

    // Find the corresponding app for dynamic paths
    if (path.startsWith('/app/')) {
      const slug = path.split('/').pop();
      const app = apps.find((app) => app.slug === slug);
      if (app && app.lastModified) {
        sitemapObject.lastmod = app.lastModified;
        sitemapObject.priority = 0.8;
        sitemapObject.changefreq = 'weekly';
      }
    } else {
        // Set properties for other static pages
        switch (path) {
            case '/':
                sitemapObject.priority = 1.0;
                sitemapObject.changefreq = 'daily';
                break;
            case '/app':
                sitemapObject.priority = 0.9;
                sitemapObject.changefreq = 'weekly';
                break;
            case '/privacy-policy':
            case '/terms':
            case '/copyright-policy':
            case '/eu-amau':
                sitemapObject.priority = 0.3;
                sitemapObject.changefreq = 'yearly';
                sitemapObject.lastmod = '2024-01-01'; // Static date for policy pages
                break;
            default:
                sitemapObject.changefreq = 'monthly';
        }
    }


    return sitemapObject;
  },
};
