import { Metadata } from 'next'
import { getTrendingMovies, getNowPlayingMovies, getPopularTVShows, getTopRatedMovies } from '@/lib/tmdb'
import MovieCard from '@/components/MovieCard'

type CategoryType = 'trending' | 'movies' | 'tv' | 'top-rated'

const CATEGORIES: Record<CategoryType, { title: string; description: string; fn: () => Promise<any> }> = {
  trending: {
    title: 'Trending Now',
    description: 'Most popular movies and TV shows this week',
    fn: () => getTrendingMovies('week'),
  },
  movies: {
    title: 'Now Playing',
    description: 'Movies currently showing in theaters',
    fn: getNowPlayingMovies,
  },
  tv: {
    title: 'Popular TV Shows',
    description: 'The most-watched TV shows right now',
    fn: getPopularTVShows,
  },
  'top-rated': {
    title: 'Top Rated Movies',
    description: 'The highest-rated films of all time',
    fn: getTopRatedMovies,
  },
}

interface Props {
  params: { type: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const config = CATEGORIES[params.type as CategoryType]
  if (!config) return { title: 'Browse' }
  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: `https://screensscore.com/category/${params.type}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const config = CATEGORIES[params.type as CategoryType]
  if (!config) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Category not found</h1>
      </div>
    )
  }

  let data = { results: [] as any[] }
  try { data = await config.fn() } catch {}

  return (
    <div className="container mx-auto px-4 max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2">{config.title}</h1>
        <p className="text-gray-400">{config.description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {data.results.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
