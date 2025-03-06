import { getMovieById } from '../../../utils/tmdb'
import { MovieDetails } from '../../../components/MovieDetails'

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie = await getMovieById(id)

  return <MovieDetails movie={movie} />
}
