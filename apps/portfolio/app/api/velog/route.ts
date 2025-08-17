import { NextResponse } from 'next/server';

export async function GET() {
  const velogRssUrl = 'https://v2.velog.io/rss/oilater';

  try {
    const response = await fetch(velogRssUrl);
    const text = await response.text();

    return new NextResponse(text, {
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch RSS' }, { status: 500 });
  }
}