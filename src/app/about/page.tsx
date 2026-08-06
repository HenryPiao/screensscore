import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About ScreensScore',
  description: 'Honest movie and TV show reviews — helping you decide what to watch.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-16">
      <h1 className="text-4xl font-black mb-8">About ScreensScore</h1>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p className="text-lg">
          ScreensScore is your honest, no-nonsense guide to movies and TV shows. We believe your time is
          valuable — we&apos;re here to help you decide what&apos;s actually worth watching, and what to skip.
        </p>
        <h2 className="text-2xl font-bold text-white pt-4">What We Do</h2>
        <p>
          We aggregate movie and TV show data, provide critical analysis, and give everyone a platform
          to share their opinions. No account needed — just watch, then write.
        </p>
        <h2 className="text-2xl font-bold text-white pt-4">Anonymous Reviews</h2>
        <p>
          Anyone can leave a review on ScreensScore — no sign-up required. Real viewers, real opinions.
          Our anonymous system lets you share freely without the noise of social media.
        </p>
        <h2 className="text-2xl font-bold text-white pt-4">Data Sources</h2>
        <p>
          Movie and TV data is provided by{' '}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
            The Movie Database (TMDB)
          </a>
          . We&apos;re grateful for their comprehensive, freely accessible database.
        </p>
        <h2 className="text-2xl font-bold text-white pt-4">Contact</h2>
        <p>
          Questions or suggestions?{' '}
          <a href="mailto:hello@screensscore.com" className="text-red-400 hover:text-red-300">
            hello@screensscore.com
          </a>
        </p>
      </div>
    </div>
  )
}
