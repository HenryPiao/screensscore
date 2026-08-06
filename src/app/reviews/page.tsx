import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/data/articles'
import { getImageUrl } from '@/lib/tmdb'

export const metadata: Metadata = {
  title: 'Movie & TV Reviews',
  description: 'Honest, in-depth reviews of the latest movies and TV shows. Find out what\'s worth watching.',
}

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-black mb-3">Reviews</h1>
        <p className="text-gray-400 text-lg">Honest takes on movies and TV — no hype, just the truth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.slug} href={`/reviews/${article.slug}`} className="group">
            <article className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors h-full flex flex-col">
              {/* Poster placeholder with gradient */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-gray-700">{article.rating}</div>
                    <div className="text-gray-500 text-sm">/10</div>
                  </div>
                </div>
                {/* Verdict badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                  article.verdictColor === 'green' ? 'bg-green-600 text-white' :
                  article.verdictColor === 'yellow' ? 'bg-yellow-500 text-black' :
                  'bg-red-600 text-white'
                }`}>
                  {article.verdict}
                </div>
                {/* Media type */}
                {article.mediaType === 'tv' && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    TV
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 text-sm font-bold">★ {article.rating}/10</span>
                  <span className="text-gray-600 text-xs">·</span>
                  <span className="text-gray-500 text-xs">{new Date(article.publishedAt).getFullYear()}</span>
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
        ))}
      </div>
    </div>
  )
}
