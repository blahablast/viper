'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import memes from '@/data/memes.json'

export default function MemesPage() {
  const [selectedMeme, setSelectedMeme] = useState(null)

  return (
    <section>
      {/* Hero Section */}
      <header>
        <h1>The Heart of Viper Memes 🐍</h1>
        <p>Laughs, burns, and everything in between</p>
      </header>

      {/* Meme Grid */}
      <div>
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedMeme(meme)}
          >
            <Image src={meme.src} alt={meme.title} width={400} height={400} />
            <div>{meme.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
