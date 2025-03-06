import { getMovieById } from '@/utils/tmdb'
import { MovieDetails } from '@/components/MovieDetails'
import { SidePanel } from '@/components/SidePanel'
import { MovieReviews } from '@/components/MovieReviews'

export default async function Reviews({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const movie = await getMovieById(id)

  return (
    <>
      <MovieDetails movie={movie} />
      <SidePanel>
        <MovieReviews movieId={id} />
      </SidePanel>
    </>
  )
}
