
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for AppsGU.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Terms</h2>
          <p>
            By accessing the website at AppsGU, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
          <h2>2. Use License</h2>
          <ol type="a">
            <li>
              Permission is granted to temporarily download one copy of the materials (information or software) on AppsGU&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              <ul className="list-disc ml-6">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on AppsGU&apos;s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </li>
            <li>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by AppsGU at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </li>
          </ol>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on AppsGU&apos;s website are provided on an &apos;as is&apos; basis. AppsGU makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2>4. Limitations</h2>
          <p>
            In no event shall AppsGU or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AppsGU&apos;s website, even if AppsGU or a AppsGU authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on AppsGU&apos;s website could include technical, typographical, or photographic errors. AppsGU does not warrant that any of the materials on its website are accurate, complete or current. AppsGU may make changes to the materials contained on its website at any time without notice. However AppsGU does not make any commitment to update the materials.
          </p>
          <h2>6. Links</h2>
          <p>
            AppsGU has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AppsGU of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
          <h2>7. Modifications</h2>
          <p>
            AppsGU may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
