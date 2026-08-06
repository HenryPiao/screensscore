import Link from 'next/link'
import Image from 'next/image'
import { TMDBMovie, getImageUrl, createSlug } from '@/lib/tmdb'

interface Props {
  movie: TMDBMovie
}

export default function MovieCard({ movie }: Props) {
  const title = movie.title || movie.name || 'Unknown'
  const slug = createSlug(title, movie.id)
  const year = (movie.release_date || movie.first_air_date || '').slice(0, 4)
  const mediaType = movie.media_type || (movie.title ? 'movie' : 'tv')

  return (
    <Link href={`/movie/${slug}`} className="group block">
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-900">
        <Image
          src={getImageUrl(movie.poster_path)}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Rating badge */}
        {movie.vote_average > 0 && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur rounded-md px-1.5 py-0.5 flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-xs font-bold">{movie.vote_average.toFixed(1)}</span>
          </div>
        )}

        {/* Media type badge */}
        {mediaType === 'tv' && (
          <div className="absolute top-2 left-2 bg-blue-600/90 rounded-md px-1.5 py-0.5">
            <span className="text-white text-xs font-bold">TV</span>
          </div>
        )}
      </div>
      <div className="mt-2 px-0.5">
        <p className="text-white text-sm font-medium line-clamp-1 group-hover:text-red-400 transition-colors">{title}</p>
        {year && <p className="text-gray-500 text-xs mt-0.5">{year}</p>}
      </div>
    </Link>
  )
}
