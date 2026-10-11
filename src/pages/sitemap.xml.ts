import type { APIRoute } from 'astro';
import { webstoreProjects } from '../data/webstoreProjects';
import { appstoreApps } from '../data/appstoreApps';
import { getPublishedArticles } from '../data/blogsData';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://www.prometrion.com';
  const now = new Date().toISOString().split('T')[0];

  // List of primary canonical pages with priority and changefreq
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/website-development', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/app-development', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/seo-geo', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/digital-presence', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/digital-branding', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/digital-consultancy', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/maintenance-support', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/packages', priority: '0.8', changefreq: 'weekly' },
    { url: '/services/catalog', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
    { url: '/estimate', priority: '0.9', changefreq: 'weekly' },
    { url: '/request-quote', priority: '0.8', changefreq: 'monthly' },
    { url: '/book-consultation', priority: '0.8', changefreq: 'monthly' },
    { url: '/work', priority: '0.8', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/store', priority: '0.9', changefreq: 'weekly' },
    { url: '/store/webstore', priority: '0.9', changefreq: 'weekly' },
    { url: '/store/appstore', priority: '0.9', changefreq: 'weekly' },
    { url: '/media', priority: '0.8', changefreq: 'weekly' },
    { url: '/media/blogs', priority: '0.8', changefreq: 'weekly' },
    { url: '/media/guides', priority: '0.8', changefreq: 'weekly' },
    { url: '/media/news', priority: '0.7', changefreq: 'monthly' },
    { url: '/media/achievements', priority: '0.7', changefreq: 'monthly' },
    { url: '/media/people', priority: '0.7', changefreq: 'monthly' },
  ];

  // Dynamic webstore projects (canonical slugs only)
  const webstorePages = webstoreProjects.map((p) => ({
    url: `/store/webstore/${p.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  // Dynamic appstore apps (canonical slugs only)
  const appstorePages = appstoreApps.map((a) => ({
    url: `/store/appstore/${a.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  // Dynamic published media articles & guides (strictly excluding drafts)
  const mediaPages = getPublishedArticles().map((m) => ({
    url: `/media/blogs/${m.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: m.dateModified?.split('T')[0] || m.datePublished?.split('T')[0] || now,
  }));

  const allUrls = [
    ...staticPages.map((p) => ({ ...p, lastmod: now })),
    ...webstorePages.map((p) => ({ ...p, lastmod: now })),
    ...appstorePages.map((p) => ({ ...p, lastmod: now })),
    ...mediaPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
