import { getLLMText, getPageMarkdownUrl, source } from '@/lib/source';
import { absoluteUrl } from '@/lib/shared';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  const page = source.getPage(slug?.slice(0, -1));
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
      // The same text as the page it is made from: search engines should list
      // the page, while tools that ask for Markdown can still read this.
      Link: `<${absoluteUrl(page.url)}>; rel="canonical"`,
      'X-Robots-Tag': 'noindex',
    },
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageMarkdownUrl(page).segments,
  }));
}
