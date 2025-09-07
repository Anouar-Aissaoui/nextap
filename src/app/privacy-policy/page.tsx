
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AppsGU',
  description: 'Review the Privacy Policy for AppsGU. We are committed to protecting your privacy and handling your data responsibly. Learn about the information we collect and how it is used.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold">
            <CardTitle>Privacy Policy</CardTitle>
          </h1>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Your privacy is important to us. It is AppsGU&apos;s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
          </p>
          <h2>3. Sharing Information</h2>
          <p>
            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>
          <h2>4. Links to Other Sites</h2>
          <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
          <p>This policy is effective as of 1 January 2025.</p>
        </CardContent>
      </Card>
    </div>
  );
}
