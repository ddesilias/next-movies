'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Movie } from '../types/movie'
import { getImageUrl } from '../utils/tmdb'

interface MovieRowProps {
  title: string
  movies: Movie[]
}

export function MovieRow({ title, movies }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  // Create a unique storage key for this specific row
  const storageKey = `movie-row-scroll-${title
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  useEffect(() => {
    // Restore scroll position when component mounts
    if (rowRef.current && typeof window !== 'undefined') {
      const savedScrollPosition = localStorage.getItem(storageKey)
      if (savedScrollPosition) {
        rowRef.current.scrollTo({
          left: parseInt(savedScrollPosition, 10),
          behavior: 'instant',
        })
      }
    }

    // Save scroll position when user scrolls
    const handleScroll = () => {
      if (rowRef.current) {
        localStorage.setItem(storageKey, rowRef.current.scrollLeft.toString())
      }
    }

    const currentRow = rowRef.current
    currentRow?.addEventListener('scroll', handleScroll)

    // Clean up event listener
    return () => {
      currentRow?.removeEventListener('scroll', handleScroll)
    }
  }, [storageKey])

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative" style={{ viewTransitionName: 'movie-row' }}>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="group relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth py-4"
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="flex-none w-48 transition-transform hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getImageUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-lg"
              />
            </Link>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </div>
  )
}
