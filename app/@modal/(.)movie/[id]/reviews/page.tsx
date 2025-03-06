import { SidePanel } from '@/components/SidePanel'
import { MovieReviews } from '@/components/MovieReviews'

export default async function Reviews({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <SidePanel>
      <MovieReviews movieId={id} />
    </SidePanel>
  )
}
