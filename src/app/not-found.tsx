
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-15rem)] items-center justify-center py-12 px-4 md:py-20">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileQuestion className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl">404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Sorry, the page you are looking for could not be found. It might
            have been moved, deleted, or you might have typed the URL
            incorrectly.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/">Go Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
