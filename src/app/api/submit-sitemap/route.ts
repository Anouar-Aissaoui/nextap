
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensures the route is always dynamic

export async function POST(req: NextRequest) {
  try {
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const siteUrlGsc = process.env.GSC_SITE_URL;
    const siteUrlApp = process.env.SITE_URL;
    
    if (!privateKey || !clientEmail || !siteUrlGsc || !siteUrlApp) {
      const missingVars = [
        !privateKey && 'GOOGLE_PRIVATE_KEY',
        !clientEmail && 'GOOGLE_CLIENT_EMAIL',
        !siteUrlGsc && 'GSC_SITE_URL',
        !siteUrlApp && 'SITE_URL'
      ].filter(Boolean).join(', ');

      console.warn(`Missing environment variables: ${missingVars}. Skipping sitemap submission.`);
      return NextResponse.json({ message: `Missing environment variables: ${missingVars}. Skipping submission.` }, { status: 400 });
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

    if (res.status === 200 || res.status === 204) {
      console.log('Sitemap submitted successfully.');
      return NextResponse.json({ message: 'Sitemap submitted successfully.' }, { status: 200 });
    } else {
      const errorDetails = res.data || res.statusText;
      console.error('Error submitting sitemap:', errorDetails);
      return NextResponse.json({ error: 'Failed to submit sitemap', details: errorDetails }, { status: res.status });
    }
  } catch (error: any) {
    console.error('An error occurred during sitemap submission:', error.message);
    const errorMessage = error.response?.data?.error?.message || error.message;
    return NextResponse.json({ error: 'An internal error occurred', details: errorMessage }, { status: 500 });
  }
}
