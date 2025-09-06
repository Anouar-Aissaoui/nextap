import { apps } from '@/lib/apps';
import type { App } from '@/lib/apps';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type AppDetailPageProps = {
  params: {
    slug: string;
  };
};

async function getApp(slug: string): Promise<App | undefined> {
    return apps.find(app => app.slug === slug);
}

export async function generateStaticParams() {
    return apps.map(app => ({
        slug: app.slug,
    }));
}

export async function generateMetadata({ params }: AppDetailPageProps) {
  const app = await getApp(params.slug);

  if (!app) {
    return {
      title: 'App Not Found',
    };
  }

  return {
    title: `${app.name} | App Discovery Hub`,
    description: app.description,
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const app = await getApp(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="bg-accent/50 min-h-screen">
        <div className="container mx-auto py-8 md:py-16">
            <Button asChild variant="ghost" className="mb-6">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Apps
                </Link>
            </Button>
            <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-card p-6 md:p-8">
                    <div className="grid md:grid-cols-[150px_1fr] gap-6 md:gap-8 items-start">
                        <Image
                            src={app.img}
                            alt={`${app.name} icon`}
                            width={150}
                            height={150}
                            className="rounded-2xl border-4 border-white shadow-md aspect-square object-cover"
                            data-ai-hint="app icon"
                        />
                        <div className="flex flex-col h-full">
                            <h1 className="text-3xl lg:text-5xl font-bold font-headline mb-1">{app.name}</h1>
                            <p className="text-lg text-muted-foreground mb-4">By {app.author}</p>
                            <CardDescription className="text-base max-w-prose">{app.description}</CardDescription>
                            <div className="mt-auto pt-6">
                                <Button asChild size="lg" className="w-full sm:w-auto" disabled={!app.url}>
                                    <a href={app.url || '#'} target="_blank" rel="noopener noreferrer">
                                        <Download className="mr-2 h-5 w-5" />
                                        Download Now
                                    </a>
                                </Button>
                                {!app.url && <p className="text-sm text-destructive mt-2">Download link not available for this app.</p>}
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    </div>
  );
}
