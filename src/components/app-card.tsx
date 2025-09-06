import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { FullAppInfo } from '@/app/page';
import { Badge } from '@/components/ui/badge';

export default function AppCard({ app }: { app: FullAppInfo }) {
  return (
    <Link href={`/apps/${app.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border-2 border-transparent group-hover:border-primary">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <Image
            src={app.img}
            alt={`${app.name} icon`}
            width={64}
            height={64}
            className="rounded-lg border aspect-square object-cover"
            data-ai-hint="app icon"
          />
          <div className="flex-1 space-y-1">
            <CardTitle className="text-lg leading-tight line-clamp-2">{app.name}</CardTitle>
             <Badge variant="secondary" className="font-normal">{app.category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="line-clamp-2 text-sm">{app.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
