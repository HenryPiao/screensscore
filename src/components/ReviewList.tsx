interface Review {
  id: number
  rating: number
  content: string
  author_name: string
  created_at: string
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">🎬</p>
        <p className="text-lg">No reviews yet.</p>
        <p className="text-sm mt-1">Be the first to share your thoughts!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-semibold text-white text-sm">{r.author_name}</p>
              <p className="text-gray-600 text-xs mt-0.5">
                {new Date(r.created_at).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-1.5 shrink-0 ml-4">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-yellow-400 font-bold text-sm">{r.rating}</span>
              <span className="text-gray-500 text-xs">/10</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{r.content}</p>
        </div>
      ))}
    </div>
  )
}
