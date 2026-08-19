import { searchMovies } from '@/lib/tmdb'
import MovieCard from '@/components/MovieCard'

interface Props {
  searchParams: { q?: string; page?: string }
}

export function generateMetadata({ searchParams }: Props) {
  return {
    title: searchParams.q ? `Search: ${searchParams.q}` : 'Search',
    robots: { index: false, follow: true },
  }
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || ''
  const page = parseInt(searchParams.page || '1')

  if (!query) {
    return (
      <div className="container mx-auto px-4 max-w-7xl py-24 text-center">
        <h1 className="text-4xl font-black mb-4">Search ReelCritic</h1>
        <p className="text-gray-400">Type a movie or TV show name in the search bar above</p>
      </div>
    )
  }

  let results = { results: [] as any[], total_results: 0 }
  try { results = await searchMovies(query, page) } catch {}

  const filtered = results.results.filter((m: any) => m.media_type !== 'person')

  return (
    <div className="container mx-auto px-4 max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-1">
          &quot;{query}&quot;
        </h1>
        <p className="text-gray-400">{results.total_results.toLocaleString()} results</p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-xl mb-2">No results found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
