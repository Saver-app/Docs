import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  absoluteUrl,
  appName,
  gitConfig,
  homeTitle,
  mainSiteUrl,
  siteDescription,
  siteUrl,
  xHandle,
} from '@/lib/shared';

// Names the site for search engines. It belongs on the home page only.
const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: appName,
  alternateName: 'Saver Documentation',
  url: `${siteUrl}/`,
  inLanguage: 'en',
  publisher: {
    '@type': 'Organization',
    '@id': `${mainSiteUrl}/#organization`,
    name: 'Saver',
    url: `${mainSiteUrl}/`,
  },
};

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      {page.slugs.length === 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const isHome = page.slugs.length === 0;
  const image = getPageImage(page).url;

  return {
    // `seoTitle` is the fuller title for search results; the page keeps its
    // short `title` in the sidebar and as its heading.
    title: isHome ? { absolute: homeTitle } : (page.data.seoTitle ?? page.data.title),
    description: isHome ? siteDescription : page.data.description,
    alternates: {
      canonical: absoluteUrl(page.url),
    },
    openGraph: {
      url: absoluteUrl(page.url),
      siteName: appName,
      type: isHome ? 'website' : 'article',
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: xHandle,
      images: [image],
    },
  };
}
