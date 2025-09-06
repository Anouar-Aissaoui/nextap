import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { FullAppInfo } from '@/app/page';

export default function AppCard({ app }: { app: FullAppInfo }) {
  return (
    <Link href={`/apps/${app.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg bg-transparent border-0 shadow-none">
        <Image
          src={app.img}
          alt={`${app.name} icon`}
          width={200}
          height={200}
          className="rounded-2xl border aspect-square object-cover w-full transition-transform duration-300 group-hover:scale-105"
          data-ai-hint="app icon"
        />
        <CardContent className="p-0 pt-3">
            <h3 className="font-semibold text-base leading-tight line-clamp-1 text-foreground">{app.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{app.category}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
