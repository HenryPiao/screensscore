import { MetadataRoute } from 'next'
import { getTrendingMovies, createSlug } from '@/lib/tmdb'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://screensscore.com'

  const static_pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/category/trending`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/category/movies`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/category/tv`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/category/top-rated`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.2 },
  ]

  let movie_pages: MetadataRoute.Sitemap = []
  try {
    const trending = await getTrendingMovies('week')
    movie_pages = trending.results.map((m) => ({
      url: `${base}/movie/${createSlug(m.title || m.name || '', m.id)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch {}

  return [...static_pages, ...movie_pages]
}
