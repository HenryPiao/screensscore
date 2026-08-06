import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ReelCritic – Honest Movie & TV Reviews',
    template: '%s | ReelCritic',
  },
  description: "Honest movie and TV show reviews. Find out if it's worth watching before you commit.",
  keywords: ['movie reviews', 'tv show reviews', 'film ratings', 'is it worth watching'],
  metadataBase: new URL('https://reelcritic.com'),
  openGraph: {
    type: 'website',
    siteName: 'ReelCritic',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0f] text-white min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
