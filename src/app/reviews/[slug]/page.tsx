import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getArticleBySlug, getAllSlugs } from '@/data/articles'
import { getMovieDetails, getImageUrl, createSlug } from '@/lib/tmdb'

// 动态渲染：每次请求实时获取 TMDB 数据，避免构建时批量限流
export const dynamic = 'force-dynamic'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Review Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { type: 'article', publishedTime: article.publishedAt },
  }
}

export default async function ReviewPage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  let movie = null
  try {
    movie = await getMovieDetails(article.tmdbId, article.mediaType)
  } catch {}

  const movieSlug = movie ? createSlug(movie.title || movie.name || article.movieTitle, article.tmdbId) : null
  const releaseYear = movie?.release_date?.slice(0, 4) || movie?.first_air_date?.slice(0, 4)

  return (
    <div>
      {/* Hero backdrop */}
      {movie?.backdrop_path && (
        <div className="relative h-72 md:h-96">
          <Image
            src={getImageUrl(movie.backdrop_path, 'original')}
            alt={article.movieTitle}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
        </div>
      )}

      <div className="container mx-auto px-4 max-w-4xl py-8">
        {/* Back link */}
        <Link href="/reviews" className="text-gray-500 hover:text-gray-300 text-sm mb-6 inline-flex items-center gap-1 transition-colors">
          ← All Reviews
        </Link>

        {/* Article header — title left, poster right */}
        <div className="mt-4 mb-8 flex gap-6 items-start">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                article.verdictColor === 'green' ? 'bg-green-600 text-white' :
                article.verdictColor === 'yellow' ? 'bg-yellow-500 text-black' :
                'bg-red-600 text-white'
              }`}>
                {article.verdict}
              </span>
              {article.mediaType === 'tv' && (
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">TV Series</span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-black leading-tight mb-4">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-5">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-white font-black text-2xl">{article.rating}</span>
                <span className="text-gray-500">/10</span>
              </div>
              {releaseYear && <><span className="text-gray-600">·</span><span>{releaseYear}</span></>}
              {movie?.runtime && <><span className="text-gray-600">·</span><span>{movie.runtime} min</span></>}
              <span className="text-gray-600">·</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-4 border-red-600 pl-4 italic">
              {article.excerpt}
            </p>
          </div>

          {/* Poster image — desktop only */}
          {movie?.poster_path && (
            <div className="hidden md:block shrink-0 w-36 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ aspectRatio: '2/3' }}>
              <Image
                src={getImageUrl(movie.poster_path, 'w342')}
                alt={article.movieTitle}
                width={144}
                height={216}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Ad slot */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl h-20 flex items-center justify-center text-gray-600 text-xs mb-8">
          Advertisement
        </div>

        {/* Movie info card — inline image element */}
        {movie && (
          <div className="flex gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl p-4 mb-10">
            {movie.poster_path && (
              <div className="shrink-0 w-20 rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '2/3' }}>
                <Image
                  src={getImageUrl(movie.poster_path, 'w185')}
                  alt={article.movieTitle}
                  width={80}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-sm mb-1">{movie.title || movie.name}</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-2">
                {releaseYear && <span>{releaseYear}</span>}
                {movie.runtime && <><span>·</span><span>{movie.runtime} min</span></>}
                {movie.vote_average > 0 && (
                  <><span>·</span><span className="text-yellow-400">★ {movie.vote_average.toFixed(1)} TMDB</span></>
                )}
              </div>
              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {movie.genres.slice(0, 4).map((g) => (
                    <span key={g.id} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">{g.name}</span>
                  ))}
                </div>
              )}
              <p className="text-gray-500 text-xs mt-2 line-clamp-2">{movie.overview}</p>
            </div>
          </div>
        )}

        {/* Article body */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-h2:text-white prose-h2:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-ul:text-gray-300 prose-li:my-1
            prose-strong:text-white
            [&_.lead]:text-lg [&_.lead]:text-gray-200 [&_.lead]:font-medium"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Ad slot */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl h-20 flex items-center justify-center text-gray-600 text-xs my-10">
          Advertisement
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-gray-800 text-gray-400 text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA: Link to movie page */}
        {movieSlug && (
          <div className="mt-8 p-5 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-white font-bold">{article.movieTitle}</p>
              <p className="text-gray-400 text-sm mt-0.5">Leave your own rating and review</p>
            </div>
            <Link
              href={`/movie/${movieSlug}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg text-sm transition-colors shrink-0 ml-4"
            >
              Rate It →
            </Link>
          </div>
        )}

        {/* Back to reviews */}
        <div className="mt-8 text-center">
          <Link href="/reviews" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            ← Back to all reviews
          </Link>
        </div>
      </div>
    </div>
  )
}
