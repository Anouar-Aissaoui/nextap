# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
# nextap

## Submitting Sitemap to Google Search Console

This project includes a mechanism to automatically submit your sitemap to Google Search Console after each successful deployment on Vercel.

### Setup Instructions

To enable this feature, you need to create a Google Cloud Service Account and grant it access to your Google Search Console property.

#### 1. Create a Google Cloud Service Account

1.  Go to the [Google Cloud Console Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts).
2.  Select your project or create a new one.
3.  Click **"+ CREATE SERVICE ACCOUNT"**.
4.  Give the service account a name (e.g., `sitemap-submitter`) and an optional description.
5.  Click **"CREATE AND CONTINUE"**.
6.  For roles, select **"Owner"** for simplicity, or create a custom role with the `searchconsole.sites.get` and `searchconsole.sitemaps.submit` permissions.
7.  Click **"CONTINUE"**, then **"DONE"**.
8.  Find the service account you just created in the list, click the three-dot menu under "Actions", and select **"Manage keys"**.
9.  Click **"ADD KEY"** -> **"Create new key"**.
10. Choose **"JSON"** as the key type and click **"CREATE"**. A JSON file containing your credentials will be downloaded.

#### 2. Grant Access in Google Search Console

1.  Go to your [Google Search Console](https://search.google.com/search-console) property.
2.  Navigate to **"Settings"** > **"Users and permissions"**.
3.  Click **"ADD USER"**.
4.  In the "Email address" field, paste the `client_email` from the JSON file you downloaded.
5.  Set the permission to **"Owner"**.
6.  Click **"ADD"**.

#### 3. Set Environment Variables on Vercel

1.  In your Vercel project dashboard, go to **"Settings"** > **"Environment Variables"**.
2.  Add the following variables:

    *   `GOOGLE_CLIENT_EMAIL`: The `client_email` from your downloaded JSON file.
    *   `GOOGLE_PRIVATE_KEY`: The `private_key` from your JSON file. Copy the entire string, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines. Make sure to replace `\n` with actual newlines if you're copying from a text editor.
    *   `GSC_SITE_URL`: The full URL of your property as it appears in Google Search Console (e.g., `https://www.appsg.site`).
    *   `SITE_URL`: The canonical URL of your site (e.g., `https://www.appsg.site`).

### Manual Submission

You can also trigger the sitemap submission manually by sending a POST request to the API endpoint:

```bash
curl -X POST "https://www.appsg.site/api/submit-sitemap"
```
