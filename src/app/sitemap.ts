import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/shared';
import { source } from '@/lib/source';

export const revalidate = false;

// Every documentation page, so a new page is found without waiting for a
// crawler to follow a link to it.
export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
  }));
}
