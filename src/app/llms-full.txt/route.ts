import { getLLMText, source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'), {
    // Every page in one file, for AI tools to fetch. Search results should
    // list the pages themselves.
    headers: { 'X-Robots-Tag': 'noindex' },
  });
}
