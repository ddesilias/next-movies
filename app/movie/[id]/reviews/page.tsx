import MovieReviews from '../../../../components/MovieReviews'

export default async function Reviews({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <MovieReviews movieId={id} />
}
