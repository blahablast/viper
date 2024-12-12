'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BurnedSection() {
  return (
    <section className="relative py-40 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#131313] rounded-3xl p-12 border border-red-900/20 shadow-[0_0_50px_-12px_rgba(180,0,0,0.25)]"
        >
          {/* Top Snake Decoration */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96">
            {/* Increased to w-96 (384px) */}
            <Image
              src="/assets/images/burn-head.avif"
              alt="Snake Head"
              width={384}
              height={192}
              priority
              className="transform translate-y-6"
            />
          </div>

          {/* Content */}
          <div className="text-center py-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl">🔥</span>
              <h2 className="text-5xl font-bold text-white">BURNED</h2>
              <span className="text-3xl">🔥</span>
            </div>

            <p className="text-6xl font-mono text-white mb-12 font-medium tracking-wider">
              592,185,880 VIPER
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-700 to-purple-800 px-12 py-4 rounded-full text-white font-bold text-xl shadow-lg"
            >
              BURN WALLET
            </motion.button>
          </div>

          {/* Bottom Snake Decoration */}
          <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-96">
            <Image
              src="/assets/images/burn-tail.avif"
              alt="Snake Tail"
              width={384}
              height={192}
              priority
              className="transform -translate-y-16"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
