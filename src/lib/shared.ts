export const appName = 'Saver Docs';
export const siteUrl = 'https://docs.saver-app.com';
export const mainSiteUrl = 'https://saver-app.com';
export const xHandle = '@SaverAppX';
export const patreonUrl = 'https://www.patreon.com/cw/saverapp';
export const docsRoute = '';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// What a search result shows for the home page, whose own title is the
// sidebar's "Overview".
export const homeTitle = 'Saver Docs: Guides for Tasks, Bookmarks, and Habits';
export const siteDescription =
  'Guides for Saver, the app for tasks, bookmarks, and habits: getting started, features, pricing, the browser extension, the Discord bot, reMarkable, and FAQ.';

export const gitConfig = {
  user: 'Saver-app',
  repo: 'Docs',
  branch: 'main',
};

/** The address a page is known by, as used for canonical links and the sitemap. */
export function absoluteUrl(path: string) {
  return path === '/' ? siteUrl : `${siteUrl}${path}`;
}
