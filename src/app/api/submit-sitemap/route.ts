
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('Google credentials are not set in environment variables.');
    }
    if (!process.env.GSC_SITE_URL) {
      throw new Error('Google Search Console site URL is not set.');
    }

    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({
      version: 'v1',
      auth,
    });

    const sitemapUrl = `${process.env.SITE_URL}/sitemap.xml`;
    const siteUrl = process.env.GSC_SITE_URL;

    console.log(`Submitting sitemap: ${sitemapUrl} for site: ${siteUrl}`);

    const res = await searchconsole.sitemaps.submit({
      siteUrl: siteUrl,
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
    return NextResponse.json({ error: 'An internal error occurred', details: error.message }, { status: 500 });
  }
}
