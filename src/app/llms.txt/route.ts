import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export function GET() {
  return new Response(llms(source).index(), {
    // An index for AI tools to fetch, not a page for search results.
    headers: { 'X-Robots-Tag': 'noindex' },
  });
}
