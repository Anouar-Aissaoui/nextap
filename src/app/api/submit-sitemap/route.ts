
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensures the route is always dynamic

export async function POST(req: NextRequest) {
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const siteUrlGsc = process.env.GSC_SITE_URL;
    const siteUrlApp = process.env.SITE_URL;
    
    if (!privateKey || !clientEmail) {
      throw new Error('Google credentials are not set in environment variables.');
    }
    if (!siteUrlGsc) {
      throw new Error('Google Search Console site URL (GSC_SITE_URL) is not set.');
    }
    if (!siteUrlApp) {
        throw new Error('Application site URL (SITE_URL) is not set.');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'), // Important for Vercel env vars
      },
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({
      version: 'v1',
      auth,
    });

    const sitemapUrl = `${siteUrlApp}/sitemap.xml`;

    console.log(`Submitting sitemap: ${sitemapUrl} for site: ${siteUrlGsc}`);

    const res = await searchconsole.sitemaps.submit({
      siteUrl: siteUrlGsc,
      feedpath: sitemapUrl,
    });

    if (res.status === 200) {
      console.log('Sitemap submitted successfully.');
      return NextResponse.json({ message: 'Sitemap submitted successfully.' }, { status: 200 });
    } else {
      console.error('Error submitting sitemap:', res.statusText, res.data);
      return NextResponse.json({ error: 'Failed to submit sitemap', details: res.data }, { status: res.status });
    }
  } catch (error: any) {
    console.error('An error occurred:', error.message);
    const errorMessage = error.response?.data?.error?.message || error.message;
    return NextResponse.json({ error: 'An internal error occurred', details: errorMessage }, { status: 500 });
  }
}
