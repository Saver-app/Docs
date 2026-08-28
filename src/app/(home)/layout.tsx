import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { PatreonBanner } from '@/components/patreon-banner';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      sidebar={{ banner: <PatreonBanner /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
