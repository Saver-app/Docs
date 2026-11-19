import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkBreaks from 'remark-breaks';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // `seoTitle` is an optional, fuller title for search results. The sidebar
    // and the page heading keep the short `title`.
    schema: pageSchema.extend({
      seoTitle: pageSchema.shape.title.optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkBreaks],
  },
});
