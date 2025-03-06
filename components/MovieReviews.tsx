import { getMovieReviews } from '../utils/tmdb'

export default async function MovieReviews({ movieId }: { movieId: string }) {
  const reviews = await getMovieReviews(movieId)

  return (
    <div className="bg-black/80 p-6 rounded-lg h-full overflow-y-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-white/70 italic">
          No reviews available for this movie.
        </p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-700 pb-4 mb-4 last:border-0"
            >
              <div className="flex items-center mb-2">
                <p className="font-semibold text-white">{review.author}</p>
                {review.author_details?.rating && (
                  <span className="ml-2 px-2 py-1 bg-yellow-600 text-white text-xs rounded-md">
                    {review.author_details.rating}/10
                  </span>
                )}
              </div>
              <p className="text-sm text-white/70 line-clamp-4">
                {review.content}
              </p>
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline mt-2 inline-block"
              >
                Read full review
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
