# Saver documentation

Public documentation for [Saver](https://saver-app.com), the todos, habits, and bookmarks app.

Built with [Fumadocs](https://fumadocs.dev) on Next.js.

Run development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

- `content/docs`: the documentation pages (MDX). This is what most updates touch.
- `src/lib/source.ts`: content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `src/lib/layout.shared.tsx`: shared layout options (nav title, GitHub link).
- `src/lib/shared.ts`: site-wide constants (app name, GitHub repo info).

| Route                     | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `app/(home)`               | The route group for the landing page and other pages.  |
| `app/[[...slug]]`          | The documentation layout and pages.                    |
| `app/api/search/route.ts`  | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)
