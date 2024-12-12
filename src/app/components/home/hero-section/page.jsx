// app/components/home/hero-section/page.js
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[400px] mb-12"
        >
          <Image
            src="/assets/images/Viper_Head.svg"
            alt="Viper Logo"
            width={400}
            height={400}
            priority
            className="relative z-10"
          />
        </motion.div>

        {/* VIPER text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl font-bold text-white mb-6"
        >
          VIPER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-gray-300 mb-12"
        >
          More than a meme, more than a memecoin
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Buy Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-zinc-800 text-white rounded-full font-bold text-lg hover:bg-zinc-700 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
