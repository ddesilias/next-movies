'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-white p-8 hover:text-white/80 transition"
    >
      <ArrowLeft size={24} />
      Back to main Dashboard
    </button>
  )
}
