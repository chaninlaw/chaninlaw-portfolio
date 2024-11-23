import { absoluteUrl } from '@/lib/utils'
import { type MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/about', '/projects', '/contact', '/skills'].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString()
  }))

  return [...routes]
}
