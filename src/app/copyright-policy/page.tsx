
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Copyright Policy | AppsGU',
  description: 'Review the Copyright Policy for AppsGU, including how to submit a DMCA notice.',
};

export default function CopyrightPolicyPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Copyright Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            AppsGU respects the intellectual property rights of others and expects its users to do the same. It is our policy, in appropriate circumstances and at our discretion, to disable and/or terminate the accounts of users who repeatedly infringe the copyrights or other intellectual property rights of others.
          </p>
          <h2>Notice for Claims of Intellectual Property Violations</h2>
          <p>
            If you believe that your work has been copied in a way that constitutes copyright infringement, or that your intellectual property rights have been otherwise violated, please provide our Copyright Agent with the following information:
          </p>
          <ul>
            <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;</li>
            <li>A description of the copyrighted work or other intellectual property that you claim has been infringed;</li>
            <li>A description of where the material that you claim is infringing is located on the site;</li>
            <li>Your address, telephone number, and email address;</li>
            <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright or intellectual property owner, its agent, or the law;</li>
            <li>A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.</li>
          </ul>
          <p>
            Our Agent for Notice of claims of copyright or other intellectual property infringement can be reached as follows:
          </p>
          <p>
            By email: copyright@appsg.site
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
