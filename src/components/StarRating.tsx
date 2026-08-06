'use client'
import { useState } from 'react'

interface Props {
  value: number
  onChange?: (v: number) => void
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ value, onChange, readonly = false, size = 'md' }: Props) {
  const [hovered, setHovered] = useState(0)

  const sizes = { sm: 'text-base', md: 'text-2xl', lg: 'text-3xl' }

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          className={`${sizes[size]} transition-all ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-125'}`}
        >
          <span className={(hovered || value) >= star ? 'text-yellow-400' : 'text-gray-700'}>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}
