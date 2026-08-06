import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-red-500 text-lg font-black">REEL</span>
              <span className="text-white text-lg font-black">CRITIC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Honest reviews to help you decide what&apos;s actually worth watching.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Browse</h3>
            <ul className="space-y-2">
              {[
                { href: '/category/movies', label: 'Movies' },
                { href: '/category/tv', label: 'TV Shows' },
                { href: '/category/trending', label: 'Trending' },
                { href: '/category/top-rated', label: 'Top Rated' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs">© {year} ReelCritic. All rights reserved.</p>
          <p className="text-gray-600 text-xs">
            Movie data by{' '}
            <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400">
              TMDB
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
