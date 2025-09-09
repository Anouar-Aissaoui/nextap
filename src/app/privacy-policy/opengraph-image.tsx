
import { ImageResponse } from 'next/og';
import SiteLogo from '@/components/site-logo';

export const runtime = 'edge';

export const alt = 'Privacy Policy - AppsGU';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a202c, #2d3748)',
        }}
        tw="flex flex-col w-full h-full items-center justify-center text-white p-16"
      >
        <div tw="flex items-center mb-6">
            <SiteLogo width={72} height={72} />
            <h1 tw="text-8xl font-extrabold ml-5 tracking-tight">AppsGU</h1>
        </div>
        <p tw="text-5xl text-zinc-300 max-w-4xl leading-tight text-center">
            Privacy Policy
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
