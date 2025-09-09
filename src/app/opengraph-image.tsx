import { ImageResponse } from 'next/og';
import SiteLogo from '@/components/site-logo';
import { apps } from '@/lib/apps';

export const runtime = 'edge';

export const alt = 'AppsGU - Free Modded Apps for iOS & Android';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const featuredApps = apps.slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a202c, #2d3748)',
        }}
        tw="flex flex-col w-full h-full items-center justify-center text-white p-16"
      >
        <div tw="flex flex-col items-center justify-center text-center">
          <div tw="flex items-center mb-6">
            <SiteLogo width={72} height={72} />
            <h1 tw="text-8xl font-extrabold ml-5 tracking-tight">AppsGU</h1>
          </div>
          <p tw="text-4xl text-zinc-300 max-w-4xl leading-tight">
            Top Modded Apps for iOS & Android (Free Downloads)
          </p>
        </div>
        <div tw="flex items-center justify-center mt-12">
          {featuredApps.map((app, index) => (
            <img
              key={app.id}
              src={app.img}
              alt={app.name}
              tw="w-28 h-28 rounded-2xl border-4 border-zinc-700 shadow-2xl"
              style={{
                marginLeft: index > 0 ? '-20px' : '0',
                zIndex: featuredApps.length - index,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
