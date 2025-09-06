
'use client';

import type { App } from '@/lib/apps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Info, Tag, History, FileQuestion } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';

// Extend the Window interface to include call_locker
declare global {
  interface Window {
    call_locker?: () => void;
  }
}

// Simple markdown to HTML converter
const Markdown = ({ text }: { text: string }) => {
  const html = text
    .split('\n\n').map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('')
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\- (.*)/g, '<li>$1</li>')
    .replace(/<li>/g, '<ul><li>')
    .replace(/<\/li>\n<ul>/g, '</li><li>')
    .replace(/<\/li><\/p>/g, '</li></ul></p>');

  return <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4" dangerouslySetInnerHTML={{ __html: html }} />;
};


type AppDetailPageClientProps = {
  app: App;
};

export default function AppDetailPageClient({ app }: AppDetailPageClientProps) {

  const handleDownloadClick = () => {
    if (typeof window.call_locker === 'function') {
      window.call_locker();
    }
  };
  
  return (
    <div className="bg-accent/50 min-h-screen">
        <div className="container mx-auto py-8 md:py-16">
            <Button asChild variant="ghost" className="mb-6">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Apps
                </Link>
            </Button>
            <Card className="overflow-hidden shadow-lg mb-8">
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
                            <p className="text-base max-w-prose text-foreground/80">{app.description}</p>
                            <div className="mt-auto pt-6">
                                <Button size="lg" className="w-full sm:w-auto" onClick={handleDownloadClick}>
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Now
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
                             <Markdown text={app.longDescription} />
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
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}

