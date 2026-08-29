import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muhammadumer.coderacks.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
    '/faq',
    '/testimonials',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
