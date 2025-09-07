/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.appsg.site',
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      'https://www.appsg.site/sitemap.xml',
      'https://www.appsg.site/sitemap-images.xml',
    ],
  },
};
