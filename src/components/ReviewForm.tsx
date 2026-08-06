'use client'
import { useState } from 'react'
import StarRating from './StarRating'

interface Props {
  movieId: number
  movieTitle: string
  onSubmitted?: () => void
}

export default function ReviewForm({ movieId, movieTitle, onSubmitted }: Props) {
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating) { setError('Please select a rating'); return }
    if (!content.trim()) { setError('Please write a review'); return }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie_id: movieId,
          rating,
          content: content.trim(),
          author_name: authorName.trim() || 'Anonymous',
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit')
      setSuccess(true)
      setRating(0)
      setContent('')
      setAuthorName('')
      onSubmitted?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-950/50 border border-green-800 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🎬</div>
        <h3 className="text-green-400 font-bold text-xl mb-2">Review Submitted!</h3>
        <p className="text-gray-400 text-sm mb-4">Thanks for reviewing {movieTitle}</p>
        <button onClick={() => setSuccess(false)} className="text-red-400 hover:text-red-300 text-sm">
          Write another review
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 space-y-5 border border-gray-800">
      <h3 className="text-lg font-bold">Leave a Review</h3>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Rating (1–10) *</label>
        <StarRating value={rating} onChange={setRating} size="lg" />
        {rating > 0 && <p className="text-yellow-400 text-sm mt-1 font-bold">{rating}/10</p>}
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Nickname (optional)</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Anonymous"
          maxLength={50}
          className="w-full bg-gray-800 text-white placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:outline-none focus:border-red-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Your Review *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Was it worth watching? What stood out?"
          required
          maxLength={2000}
          rows={4}
          className="w-full bg-gray-800 text-white placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm border border-gray-700 focus:outline-none focus:border-red-500 resize-none"
        />
        <p className="text-xs text-gray-600 text-right mt-1">{content.length}/2000</p>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-950/50 border border-red-900 rounded-lg p-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm"
      >
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>
      <p className="text-xs text-gray-600 text-center">No account needed. Anonymous by default.</p>
    </form>
  )
}
