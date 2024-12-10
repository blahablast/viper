'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-black via-red-950/20 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            IN VIPER WE TRUST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-12"
          >
            More than a meme, more than a derivative
          </motion.p>

          <div className="flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-colors"
            >
              Buy Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* We can add viper character animations here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 relative"
        >
          {/* Placeholder for viper character - replace with SVG/image */}
          <div className="h-64 w-full flex justify-center">
            {/* We'll add the viper character here */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
