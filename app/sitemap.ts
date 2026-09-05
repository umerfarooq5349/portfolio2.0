import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://muhammadumer.coderacks.com';
  const lastModified = new Date();

  const coreRoutes = [
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

  const projectRoutes = ['1', '2', '3', '4', '5', '6'].map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = ['1', '2', '3'].map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...projectRoutes, ...blogRoutes];
}
