
import { ImageResponse } from 'next/og';
import { apps } from '@/lib/apps';
import SiteLogo from '@/components/site-logo';

export const runtime = 'edge';

export const alt = 'AppsGU';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type OpengraphImageProps = {
  params: {
    slug: string;
  };
};

export default async function OpengraphImage({ params }: OpengraphImageProps) {
  const app = apps.find(app => app.slug === params.slug);

  if (!app) {
    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-zinc-900 text-white">
          <h1 tw="text-6xl font-bold">App Not Found</h1>
          <p tw="text-2xl">AppsGU</p>
        </div>
      ),
      { ...size, alt: 'App Not Found' }
    );
  }

  const appIcon = app.img || 'https://picsum.photos/256';

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-between bg-zinc-900 text-white p-20">
        <div tw="flex w-full">
            <div tw="flex items-center">
                <SiteLogo width={48} height={48} />
                <p tw="ml-4 text-3xl font-bold">AppsGU</p>
            </div>
        </div>
        <div tw="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={appIcon}
                alt={`${app.name} Icon`}
                tw="w-48 h-48 rounded-3xl border-4 border-zinc-700"
            />
            <h1 tw="text-7xl font-extrabold mt-8 text-center" style={{ lineHeight: 1.1 }}>{app.name}</h1>
            <p tw="text-3xl text-zinc-400 mt-4 text-center max-w-4xl">{app.description}</p>
            <div tw="flex mt-6 gap-4">
              <div tw="flex items-center justify-center rounded-full bg-zinc-800 text-zinc-300 px-6 py-2 text-2xl">
                {app.category}
              </div>
              <div tw="flex items-center justify-center rounded-full bg-zinc-800 text-zinc-300 px-6 py-2 text-2xl">
                v{app.version}
              </div>
            </div>
        </div>
        <div tw="flex w-full h-10" />
      </div>
    ),
    {
      ...size,
      alt: `${app.name} - ${app.description}`,
    }
  );
}
