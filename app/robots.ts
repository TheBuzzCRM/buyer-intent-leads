import { MetadataRoute } from 'next'
import { queryOne } from '@/lib/neon'

export default async function robots(): Promise<MetadataRoute.Robots> {
  try {
    const robotsSetting = await queryOne(
      "SELECT value FROM seo_settings WHERE key = 'robots'"
    )
    
    const settings = robotsSetting?.value || { index: true, follow: true }
    
    return {
      rules: {
        userAgent: '*',
        allow: settings.index ? '/' : undefined,
        disallow: settings.index ? undefined : '/',
      },
      sitemap: 'https://buyerintentleads.com/sitemap.xml',
    }
  } catch (error) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://buyerintentleads.com/sitemap.xml',
    }
  }
}