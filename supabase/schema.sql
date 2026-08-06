-- ReelCritic Database Schema
-- Run this in Supabase SQL Editor

-- Reviews table (anonymous user reviews)
CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 10),
  content TEXT NOT NULL,
  author_name VARCHAR(100) NOT NULL DEFAULT 'Anonymous',
  ip_hash VARCHAR(64),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_reviews_movie_id ON reviews(movie_id);
CREATE INDEX IF NOT EXISTS idx_reviews_ip_hash ON reviews(ip_hash);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read reviews
CREATE POLICY "public_read_reviews" ON reviews
  FOR SELECT USING (true);

-- Anyone can insert reviews
CREATE POLICY "public_insert_reviews" ON reviews
  FOR INSERT WITH CHECK (true);
