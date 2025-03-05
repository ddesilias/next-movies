import { Play, Plus } from 'lucide-react'
import type { Movie } from '../types/movie'
import { getImageUrl } from '../utils/tmdb'

interface FeaturedMovieProps {
  movie: Movie
}

export function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div
        className="relative pt-48 px-8 max-w-2xl"
        style={{ viewTransitionName: 'featured-details' }}
      >
        <h1 className="text-6xl font-bold text-white mb-4">{movie.title}</h1>
        <div className="flex items-center gap-4 text-sm text-white/80 mb-6">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="px-2 py-1 bg-white/20 rounded">
            {Math.round(movie.vote_average * 10)}% Match
          </span>
        </div>
        <p className="text-lg text-white/90 mb-8">{movie.overview}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition">
            <Play size={24} />
            Play
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition">
            <Plus size={24} />
            My List
          </button>
        </div>
      </div>
    </div>
  )
}
