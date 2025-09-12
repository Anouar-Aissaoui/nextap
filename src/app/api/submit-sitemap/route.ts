
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
      console.warn('Google credentials (GOOGLE_PRIVATE_KEY, GOOGLE_CLIENT_EMAIL) are not set. Skipping sitemap submission.');
      return NextResponse.json({ message: 'Google credentials not set. Skipping submission.' }, { status: 200 });
    }
    if (!siteUrlGsc) {
      console.warn('Google Search Console site URL (GSC_SITE_URL) is not set. Skipping sitemap submission.');
      return NextResponse.json({ message: 'GSC_SITE_URL not set. Skipping submission.' }, { status: 200 });
    }
    if (!siteUrlApp) {
        console.warn('Application site URL (SITE_URL) is not set. Skipping sitemap submission.');
        return NextResponse.json({ message: 'SITE_URL not set. Skipping submission.' }, { status: 200 });
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
      // Log the full response for better debugging
      console.error('Error submitting sitemap:', { status: res.status, statusText: res.statusText, data: res.data });
      const errorDetails = res.data?.error?.message || 'No additional details provided by API.';
      return NextResponse.json({ error: 'Failed to submit sitemap', details: errorDetails }, { status: res.status });
    }
  } catch (error: any) {
    console.error('An unexpected error occurred during sitemap submission:', error);
    // Standardize the error message format
    const errorMessage = error.response?.data?.error?.message || error.message || 'An unknown error occurred.';
    return NextResponse.json({ error: 'An internal error occurred', details: errorMessage }, { status: 500 });
  }
}
