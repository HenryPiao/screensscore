const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'
const API_KEY = process.env.TMDB_API_KEY

export interface TMDBMovie {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date?: string
  first_air_date?: string
  vote_average: number
  vote_count: number
  genre_ids?: number[]
  genres?: { id: number; name: string }[]
  runtime?: number
  media_type?: string
}

export interface TMDBSearchResult {
  results: TMDBMovie[]
  total_results: number
  total_pages: number
}

export function getImageUrl(path: string | null, size: string = 'w500'): string {
  if (!path) return 'https://placehold.co/300x450/1a1a2e/ffffff?text=No+Image'
  return `${TMDB_IMAGE_BASE}/${size}${path}`
}

export async function searchMovies(query: string, page = 1): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Failed to search')
  return res.json()
}

export async function getMovieDetails(tmdbId: number, mediaType = 'movie'): Promise<TMDBMovie> {
  const res = await fetch(
    `${TMDB_BASE_URL}/${mediaType}/${tmdbId}?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Not found')
  return res.json()
}

export async function getTrendingMovies(timeWindow: 'day' | 'week' = 'week'): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/trending/all/${timeWindow}?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function getTopRatedMovies(): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function getNowPlayingMovies(): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function getPopularTVShows(): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export async function getSimilarMovies(tmdbId: number, mediaType = 'movie'): Promise<TMDBSearchResult> {
  const res = await fetch(
    `${TMDB_BASE_URL}/${mediaType}/${tmdbId}/similar?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return { results: [], total_results: 0, total_pages: 0 }
  return res.json()
}

export function createSlug(title: string, tmdbId: number): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${tmdbId}`
}

export function extractIdFromSlug(slug: string): number {
  const parts = slug.split('-')
  return parseInt(parts[parts.length - 1])
}
