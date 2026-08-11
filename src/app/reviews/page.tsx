import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/data/articles'
import { getMovieDetails, getImageUrl, TMDBMovie } from '@/lib/tmdb'

// 动态渲染：每次请求实时获取 TMDB 数据
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Movie & TV Reviews',
  description: "Honest, in-depth reviews of the latest movies and TV shows. Find out what's worth watching.",
}

export default async function ReviewsPage() {
  // Fetch all TMDB movie data in parallel
  const movieDataList: (TMDBMovie | null)[] = await Promise.all(
    articles.map(async (article) => {
      try {
        return await getMovieDetails(article.tmdbId, article.mediaType)
      } catch {
        return null
      }
    })
  )

  return (
    <div className="container mx-auto px-4 max-w-7xl py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-3">Reviews</h1>
        <p className="text-gray-400 text-lg">Honest takes on movies and TV — no hype, just the truth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => {
          const movie = movieDataList[i]
          return (
            <Link key={article.slug} href={`/reviews/${article.slug}`} className="group">
              <article className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors h-full flex flex-col">

                {/* Card Thumbnail — TMDB backdrop + poster overlay */}
                <div className="relative h-44 overflow-hidden bg-gray-800">
                  {movie?.backdrop_path ? (
                    <Image
                      src={getImageUrl(movie.backdrop_path, 'w780')}
                      alt={article.movieTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Small poster thumbnail */}
                  {movie?.poster_path && (
                    <div className="absolute bottom-3 left-3 w-11 rounded-md overflow-hidden shadow-xl ring-1 ring-white/20" style={{ aspectRatio: '2/3' }}>
                      <Image
                        src={getImageUrl(movie.poster_path, 'w185')}
                        alt={article.movieTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Verdict badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold shadow ${
                    article.verdictColor === 'green' ? 'bg-green-600 text-white' :
                    article.verdictColor === 'yellow' ? 'bg-yellow-500 text-black' :
                    'bg-red-600 text-white'
                  }`}>
                    {article.verdict}
                  </div>

                  {/* TV badge */}
                  {article.mediaType === 'tv' && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      TV
                    </div>
                  )}

                  {/* Rating overlay on bottom-right */}
                  <div className="absolute bottom-3 right-3 flex items-baseline gap-0.5">
                    <span className="text-yellow-400 font-black text-2xl leading-none">{article.rating}</span>
                    <span className="text-gray-400 text-xs">/10</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                    <span>{new Date(article.publishedAt).getFullYear()}</span>
                    {movie?.runtime && (
                      <>
                        <span>·</span>
                        <span>{movie.runtime} min</span>
                      </>
                    )}
                    {movie?.genres?.[0] && (
                      <>
                        <span>·</span>
                        <span>{movie.genres[0].name}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
