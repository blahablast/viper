'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import memes from '@/data/memes.json'

export default function MemesPage() {
  const [selectedMeme, setSelectedMeme] = useState(null)

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 py-16 px-6">
      {/* Hero Section */}
      <header className="pt-20 text-center text-white mb-12">
        <h1 className="text-5xl font-bold mb-4">The Heart of Viper Memes 🐍</h1>
        <p className="text-lg text-gray-300">
          Laughs, burns, and everything in between
        </p>
      </header>

      {/* Meme Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedMeme(meme)}
          >
            <Image
              src={meme.src}
              alt={meme.title}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-bold">
              {meme.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedMeme && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedMeme(null)}
        >
          <div className="relative max-w-3xl w-full px-4">
            <button
              className="absolute top-4 left-7 text-white text-3xl hover:text-gray-300 focus:outline-none transition-colors"
              onClick={() => setSelectedMeme(null)}
            >
              ✖
            </button>
            <Image
              src={selectedMeme.src}
              alt={selectedMeme.title}
              width={800}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
