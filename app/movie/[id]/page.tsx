import { getImageUrl } from '../../../utils/tmdb'
import { BackButton } from '../../../components/BackButton'
import { getMovieById } from '../../../utils/tmdb'
import Link from 'next/link'

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie = await getMovieById(id)

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative">
        <BackButton />

        <div
          className="px-8 py-4 flex gap-8"
          style={{ viewTransitionName: 'movie-details' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className="w-64 h-96 object-cover rounded-lg"
          />

          <div className="flex-1">
            <h1 className="text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            <p className="text-lg text-white/80 mb-8">{movie.overview}</p>

            <Link href={`/movie/${id}/reviews`}>Reviews!!</Link>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white/60 mb-4">CAST</h2>
              <div className="grid grid-cols-3 gap-4">
                {movie.credits.cast.slice(0, 6).map((actor) => (
                  <div key={actor.id} className="text-white/80">
                    <p className="font-medium">{actor.name}</p>
                    <p className="text-sm text-white/60">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white/60 mb-4">
                RATINGS
              </h2>
              <div className="flex gap-8">
                <div className="text-white/80">
                  <p className="text-sm">
                    IMDB: {movie.vote_average.toFixed(1)}
                  </p>
                </div>
                <div className="text-white/80">
                  <p className="text-sm">
                    Rotten Tomatoes: {Math.round(movie.vote_average * 10)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
