
'use client';

import * as React from 'react';
import type { App } from '@/lib/apps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Info, Tag, History, FileQuestion, ChevronRight, Sparkles, Loader2, Twitter, Facebook, Linkedin, Copy, Share2 } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import AppCard from './app-card';
import type { FullAppInfo } from '@/app/app/page';
import { format } from 'date-fns';

// Extend the Window interface to include call_locker
declare global {
  interface Window {
    call_locker?: () => void;
  }
}

const SafeMarkdown = ({ text }: { text: string }) => {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4">
      {text.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};


type AppDetailPageClientProps = {
  app: App;
  allApps: App[];
};

export default function AppDetailPageClient({ app, allApps }: AppDetailPageClientProps) {
  const [isPending, startTransition] = React.useTransition();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleDownloadClick = () => {
    startTransition(() => {
      if (typeof window.call_locker === 'function') {
        window.call_locker();
      }
    });
  };
  
  const relatedApps = allApps
    .filter(relatedApp => relatedApp.category === app.category && relatedApp.id !== app.id)
    .slice(0, 5);

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out ${app.name} on AppsGU!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const lastUpdated = app.lastModified ? format(new Date(app.lastModified), 'MMMM d, yyyy') : 'N/A';

  return (
    <div className="bg-background">
        <div className="container mx-auto py-8 md:py-16">
            <nav className="mb-6 text-sm text-muted-foreground">
              <ol className="list-none p-0 inline-flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:text-primary">Home</Link>
                </li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li>
                  <Link href="/app" className="hover:text-primary">Apps</Link>
                </li>
                 <li><ChevronRight className="h-4 w-4" /></li>
                <li className="text-foreground font-medium">{app.name}</li>
              </ol>
            </nav>

            <Card className="overflow-hidden shadow-lg mb-8 bg-card">
                <CardHeader className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <Image
                            src={app.img}
                            alt={`${app.name} App Icon`}
                            width={150}
                            height={150}
                            className="rounded-3xl border-4 border-background shadow-md aspect-square object-cover shrink-0"
                            data-ai-hint={app.name}
                            priority
                            fetchPriority="high"
                        />
                        <div className="flex flex-col h-full flex-grow">
                            <h1 className="text-3xl lg:text-5xl font-bold mb-1">{app.name}</h1>
                            <p className="text-lg text-muted-foreground mb-4">By {app.author}</p>
                            <p className="text-base max-w-prose text-foreground/80">{app.description}</p>
                            <div className="mt-auto pt-6">
                                <Button size="lg" className="w-full sm:w-auto" onClick={handleDownloadClick} disabled={isPending}>
                                    {isPending ? (
                                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    ) : (
                                      <Download className="mr-2 h-5 w-5" />
                                    )}
                                    {isPending ? 'Processing...' : 'Download Now'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold flex items-center gap-2"><Info /> About This App</h2>
                        </CardHeader>
                        <CardContent>
                             <SafeMarkdown text={app.longDescription} />
                        </CardContent>
                    </Card>
                    
                    {app.faqs && app.faqs.length > 0 && (
                        <Card>
                            <CardHeader>
                                <h2 className="text-2xl font-bold flex items-center gap-2"><FileQuestion /> FAQs</h2>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {app.faqs.map((faq, index) => (
                                        <AccordionItem value={`item-${index}`} key={index}>
                                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                                            <AccordionContent>
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold">App Information</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground flex items-center gap-2"><Tag /> Category</span>
                                <Badge variant="secondary">{app.category}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground flex items-center gap-2"><History /> Version</span>
                                <span className="font-medium">{app.version}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground flex items-center gap-2">Size</span>
                                <span className="font-medium">{app.size}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground flex items-center gap-2"><History /> Last Updated</span>
                                <span className="font-medium">{lastUpdated}</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold flex items-center gap-2"><Share2 /> Share this App</h2>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                             <Button variant="outline" size="icon" asChild>
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                                    <Facebook className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(app.name)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy link">
                                <Copy className="h-5 w-5" />
                            </Button>
                            {isCopied && <span className="text-sm text-muted-foreground self-center">Copied!</span>}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {relatedApps.length > 0 && (
                <div className="mt-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="text-primary" />
                                You Might Also Like
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                           <div className="flex flex-col">
                                {relatedApps.map((relatedApp, index) => (
                                    <AppCard key={relatedApp.id} app={relatedApp as FullAppInfo} index={index + 1} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    </div>
  );
}
