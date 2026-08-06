import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createHash } from 'crypto'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const movieId = searchParams.get('movie_id')
  if (!movieId) return NextResponse.json({ error: 'movie_id required' }, { status: 400 })

  const { data, error } = await supabase
    .from('reviews')
    .select('id, rating, content, author_name, created_at')
    .eq('movie_id', parseInt(movieId))
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ reviews: data })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { movie_id, rating, content, author_name } = body

  if (!movie_id || !rating || !content)
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  if (rating < 1 || rating > 10)
    return NextResponse.json({ error: 'Rating must be 1-10' }, { status: 400 })
  if (content.length > 2000)
    return NextResponse.json({ error: 'Review too long (max 2000 chars)' }, { status: 400 })

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  const ipHash = createHash('sha256').update(ip + 'rc-salt-2025').digest('hex').slice(0, 32)

  // Anti-spam: 1 review per movie per 24h per IP
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  const { data: existing } = await supabase
    .from('reviews')
    .select('id')
    .eq('movie_id', movie_id)
    .eq('ip_hash', ipHash)
    .gte('created_at', cutoff)
    .maybeSingle()

  if (existing)
    return NextResponse.json({ error: 'You already reviewed this title today' }, { status: 429 })

  const { data, error } = await supabase
    .from('reviews')
    .insert({
      movie_id,
      rating,
      content: content.trim(),
      author_name: (author_name?.trim() || 'Anonymous').slice(0, 50),
      ip_hash: ipHash,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ review: data }, { status: 201 })
}
