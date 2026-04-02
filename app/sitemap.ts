import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://buyerintentleads.com'
  
  const routes = [
    '',
    '/system',
    '/pricing',
    '/who-its-for',
    '/faq',
    '/strategy-call',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}