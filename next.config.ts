
import type {NextConfig} from 'next';

const enableUtmCleanup = process.env.STRIP_UTM === '1';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  trailingSlash: false,
  async redirects() {
    const redirects = [];
    
    // Canonical host: root → WWW for appsg.site
    redirects.push({
      source: '/:path*',
      has: [{ type: 'host', value: 'appsg.site' }],
      destination: 'https://www.appsg.site/:path*',
      permanent: true,
    });
    
    // Collapse trailing slashes -> non-slash canonical
    redirects.push({
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
    });
    
    // Strip /index at the end of the URL path (root and nested)
    redirects.push(
      { source: '/:path*/index', destination: '/:path*', permanent: true },
      { source: '/:path*/index/', destination: '/:path*', permanent: true },
      { source: '/:path*/index.html', destination: '/:path*', permanent: true }
    );
    
    // Optional: Cleanup UTM params by redirecting to the same path without any query string.
    // WARNING: Enabling this will drop ALL query parameters if any UTM param is present.
    if (enableUtmCleanup) {
      const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      utms.forEach((key) => {
        redirects.push({
          source: '/:path*',
          has: [{ type: 'query', key }],
          destination: '/:path*',
          permanent: true,
        });
      });
    }
    
    return redirects;
  },
};

export default nextConfig;
