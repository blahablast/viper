// app/components/home/hero-section/page.js
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import LoreModal from './lore-modal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
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
              src="/assets/images/viper-hero.png"
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
            className="text-7xl font-bold mb-6"
          >
            In <span className="text-red-700">VIPER</span> We Trust!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl --text-color mb-12"
          >
            More than a meme, more than a derivative
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
              className="px-10 py-3 rounded-full font-bold text-lg transition-colors
             bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-bg-hover)]
             text-[var(--btn-text-primary)]"
            >
              Buy Now
            </motion.button>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 rounded-full font-bold text-lg transition-colors
             bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-secondary-bg-hover)]
             text-[var(--btn-text-secondary)]"
            >
              Viper Lore
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <LoreModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
