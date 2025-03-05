import { Header } from '../components/Header'
import { FeaturedMovie } from '../components/FeaturedMovie'
import { MovieRow } from '../components/MovieRow'
import { getPopularMovies } from '../utils/tmdb'

export default async function HomePage() {
  const movies = await getPopularMovies()
  const featuredMovie = movies[0]

  if (!featuredMovie) return null

  return (
    <div className="home-page">
      <Header />
      <main>
        <FeaturedMovie movie={featuredMovie} />
        <div className="fixed bottom-0 left-0 right-0 pb-4 px-8 bg-gradient-to-t from-black to-transparent">
          <MovieRow title="My List" movies={movies} />
        </div>
      </main>
    </div>
  )
}
