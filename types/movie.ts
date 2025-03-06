export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
}

export interface MovieResponse {
  results: Movie[]
}

export interface Cast {
  id: number
  name: string
  character: string
}

export interface MovieReview {
  id: string
  author: string
  content: string
  author_details: {
    rating: number
  }
  url: string
}

export interface MovieDetail extends Movie {
  credits: {
    cast: Cast[]
  }
  imdb_id: string
}

export interface MovieReviewsResponse {
  results: MovieReview[]
}
