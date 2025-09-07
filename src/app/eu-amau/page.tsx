import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EU AMAU Disclosures',
  description: 'EU Average Monthly Active Users (AMAU) disclosure for AppsGU.',
};

export default function EuAmauPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">EU Average Monthly Active Users (AMAU)</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
            <p>
                In accordance with the requirements of the Digital Services Act (DSA) of the European Union, we are providing information regarding the average monthly active users (AMAU) of our service within the EU.
            </p>
            <h2>Reporting Period</h2>
            <p>
                The information below is based on the period from August 1, 2023, to January 31, 2024.
            </p>
            <h2>Average Monthly Active Users</h2>
            <p>
                Based on our current data and the definition of an "active recipient of the service" under the DSA, the estimated average number of monthly active recipients of AppsGU in the European Union is below the threshold of 45 million users.
            </p>
            <p>
                We will continue to monitor the number of active users in the EU and will update this information in line with our obligations under the DSA.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
