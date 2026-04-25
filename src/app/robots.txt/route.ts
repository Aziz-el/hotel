import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
`User-agent: *
Allow: /
Allow: /aboutUs
Allow: /rooms
Allow: /contacts
Disallow: /admin`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
}
