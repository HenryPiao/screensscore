import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { getMovieDetails, getSimilarMovies, getImageUrl, extractIdFromSlug, createSlug } from '@/lib/tmdb'
import { supabase } from '@/lib/supabase'
import ReviewForm from '@/components/ReviewForm'
import ReviewList from '@/components/ReviewList'
import MovieCard from '@/components/MovieCard'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const tmdbId = extractIdFromSlug(params.slug)
    const movie = await getMovieDetails(tmdbId).catch(() => getMovieDetails(tmdbId, 'tv'))
    const title = movie.title || movie.name || ''
    return {
      title: `${title} Review`,
      description: movie.overview?.slice(0, 155),
      openGraph: {
        images: movie.poster_path ? [getImageUrl(movie.poster_path, 'w500')] : [],
      },
    }
  } catch {
    return { title: 'Review' }
  }
}

async function getReviews(movieId: number) {
  const { data } = await supabase
    .from('reviews')
    .select('id, rating, content, author_name, created_at')
    .eq('movie_id', movieId)
    .order('created_at', { ascending: false })
    .limit(50)
  return data || []
}

export default async function MoviePage({ params }: Props) {
  const tmdbId = extractIdFromSlug(params.slug)

  let movie
  let mediaType = 'movie'
  try {
    movie = await getMovieDetails(tmdbId, 'movie')
  } catch {
    try {
      movie = await getMovieDetails(tmdbId, 'tv')
      mediaType = 'tv'
    } catch {
      notFound()
    }
  }

  const [reviews, similar] = await Promise.all([
    getReviews(tmdbId),
    getSimilarMovies(tmdbId, mediaType).catch(() => ({ results: [] })),
  ])

  const title = movie.title || movie.name || ''
  const year = (movie.release_date || movie.first_air_date || '').slice(0, 4)
  const genres = movie.genres?.map((g) => g.name) || []
  const avgRating = reviews.length
    ? reviews.reduce((s, r: any) => s + r.rating, 0) / reviews.length
    : 0

  return (
    <div>
      {/* Backdrop */}
      {movie.backdrop_path && (
        <div className="relative h-80 md:h-[420px]">
          <Image
            src={getImageUrl(movie.backdrop_path, 'original')}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/20" />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-24 md:-mt-40 relative z-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl max-w-[260px] mx-auto lg:mx-0">
              <Image
                src={getImageUrl(movie.poster_path, 'w500')}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            {/* Ad */}
            <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl h-64 flex items-center justify-center text-gray-600 text-xs">
              Advertisement
            </div>
          </div>

          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2 leading-tight">{title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {year && <span className="text-gray-400 text-sm">{year}</span>}
                {movie.runtime && <span className="text-gray-600">·</span>}
                {movie.runtime && <span className="text-gray-400 text-sm">{movie.runtime} min</span>}
                {genres.map((g) => (
                  <span key={g} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">{g}</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>

            {/* Score cards */}
            <div className="flex gap-3">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center flex-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">TMDB</p>
                <p className="text-yellow-400 text-3xl font-black">{movie.vote_average.toFixed(1)}</p>
                <p className="text-gray-600 text-xs mt-1">{movie.vote_count?.toLocaleString()} votes</p>
              </div>
              {reviews.length > 0 && (
                <div className="bg-gray-900 border border-red-900/30 rounded-xl p-4 text-center flex-1">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Readers</p>
                  <p className="text-red-400 text-3xl font-black">{avgRating.toFixed(1)}</p>
                  <p className="text-gray-600 text-xs mt-1">{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</p>
                </div>
              )}
            </div>

            {/* Review form */}
            <ReviewForm movieId={tmdbId} movieTitle={title} />

            {/* Ad */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl h-20 flex items-center justify-center text-gray-600 text-xs">
              Advertisement
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold mb-4">
                User Reviews
                <span className="text-gray-500 font-normal text-base ml-2">({reviews.length})</span>
              </h2>
              <ReviewList reviews={reviews as any} />
            </div>
          </div>
        </div>

        {/* Similar */}
        {similar.results.length > 0 && (
          <section className="mt-16 pb-8">
            <h2 className="text-xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {similar.results.slice(0, 6).map((m) => (
                <MovieCard key={m.id} movie={m} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
