import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getTrendingMovies, getNowPlayingMovies, getImageUrl, createSlug } from '@/lib/tmdb'
import MovieCard from '@/components/MovieCard'

export const metadata: Metadata = {
  title: 'ScreensScore – Honest Movie & TV Reviews',
  description: "Honest movie and TV show reviews. Find out if it's worth watching before you commit.",
  alternates: {
    canonical: 'https://screensscore.com',
  },
}

export default async function HomePage() {
  const [trending, nowPlaying] = await Promise.all([
    getTrendingMovies('week').catch(() => ({ results: [], total_results: 0, total_pages: 0 })),
    getNowPlayingMovies().catch(() => ({ results: [], total_results: 0, total_pages: 0 })),
  ])

  const featured = trending.results[0]

  return (
    <div>
      {/* Hero */}
      {featured && (
        <section className="relative h-[75vh] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={getImageUrl(featured.backdrop_path, 'original')}
              alt={featured.title || featured.name || ''}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 pb-16 max-w-7xl">
            <div className="max-w-2xl">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block uppercase tracking-wider">
                Trending Now
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-3 leading-tight">
                {featured.title || featured.name}
              </h1>
              <p className="text-gray-300 text-lg mb-6 line-clamp-2 leading-relaxed">
                {featured.overview}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href={`/movie/${createSlug(featured.title || featured.name || '', featured.id)}`}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-sm"
                >
                  Read Review →
                </Link>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur py-3 px-5 rounded-lg border border-white/10">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="font-bold text-lg">{featured.vote_average.toFixed(1)}</span>
                  <span className="text-gray-400 text-sm">/10</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ad Slot */}
      <div className="container mx-auto px-4 max-w-7xl py-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl h-24 flex items-center justify-center text-gray-600 text-sm">
          {/* Google AdSense Banner */}
          Advertisement
        </div>
      </div>

      {/* Trending */}
      <section className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending This Week</h2>
          <Link href="/category/trending" className="text-red-500 hover:text-red-400 text-sm font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {trending.results.slice(0, 12).map((movie) => (
            <MovieCard key={`trending-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>

      {/* Ad Slot */}
      <div className="container mx-auto px-4 max-w-7xl py-2">
        <div className="bg-gray-900 border border-gray-800 rounded-xl h-24 flex items-center justify-center text-gray-600 text-sm">
          Advertisement
        </div>
      </div>

      {/* Now Playing */}
      <section className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Now in Theaters</h2>
          <Link href="/category/movies" className="text-red-500 hover:text-red-400 text-sm font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {nowPlaying.results.slice(0, 12).map((movie) => (
            <MovieCard key={`nowplaying-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}
