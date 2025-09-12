
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensures the route is always dynamic

export async function POST(req: NextRequest) {
  try {
    // The core sitemap submission logic has been removed as per the user's request.
    // This endpoint will now return a success message without performing any action.
    const message = 'Sitemap submission logic has been removed.';
    console.log(message);
    return NextResponse.json({ message }, { status: 200 });

  } catch (error: any) {
    console.error('An unexpected error occurred in the sitemap route:', error.message);
    const errorMessage = error.response?.data?.error?.message || error.message || 'An unknown error occurred.';
    return NextResponse.json({ error: 'An internal error occurred', details: errorMessage }, { status: 500 });
  }
}
