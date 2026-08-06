'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
    }
  }

  return (
    <header className="bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 shrink-0">
          <span className="text-red-500 text-xl font-black tracking-tight">SCREENS</span>
          <span className="text-white text-xl font-black tracking-tight">SCORE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: '/reviews', label: 'Reviews' },
            { href: '/category/movies', label: 'Movies' },
            { href: '/category/tv', label: 'TV Shows' },
            { href: '/category/trending', label: 'Trending' },
            { href: '/category/top-rated', label: 'Top Rated' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1 max-w-xs md:max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, TV shows..."
            className="flex-1 bg-gray-900 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm border border-gray-700 focus:outline-none focus:border-red-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition-colors shrink-0"
          >
            Go
          </button>
        </form>
      </div>
    </header>
  )
}
