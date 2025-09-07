// submit-sitemap.js
require('dotenv').config({ path: '.env.local' });

const submitSitemap = async () => {
  const siteUrl = process.env.SITE_URL;

  if (!siteUrl) {
    console.error('SITE_URL environment variable is not set.');
    // Exit gracefully if the URL isn't set, to avoid breaking the build.
    return;
  }

  const submitUrl = `${siteUrl}/api/submit-sitemap`;

  try {
    console.log(`Submitting sitemap via POST to: ${submitUrl}`);
    const response = await fetch(submitUrl, {
      method: 'POST',
    });

    if (response.ok) {
      console.log('Sitemap submission request sent successfully.');
    } else {
      const errorText = await response.text();
      console.error(`Failed to submit sitemap. Status: ${response.status}. Response: ${errorText}`);
    }
  } catch (error) {
    console.error('An error occurred during sitemap submission:', error);
  }
};

submitSitemap();
