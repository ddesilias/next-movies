import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-white p-8 hover:text-white/80 transition"
    >
      <ArrowLeft size={24} />
      Back to main Dashboard
    </Link>
  )
}
