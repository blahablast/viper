'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BurnedSection() {
  return (
    <section className="relative py-20 sm:py-40">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-red-900/20 shadow-[0_0_50px_-12px_rgba(180,0,0,0.25)]"
        >
          {/* Top Snake Decoration */}

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90px] sm:-translate-y-[107px] w-[250px] sm:w-[300px] z-20">
            <Image
              src="/assets/images/burn-head.avif"
              alt="Snake Head"
              width={384}
              height={192}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom Snake Decoration */}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[43px] sm:translate-y-[52px] w-[250px] sm:w-[300px] z-20">
            <Image
              src="/assets/images/burn-tail.avif"
              alt="Snake Tail"
              width={384}
              height={192}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content Wrapper */}

          <div className="text-center px-6 sm:px-12 pt-32 sm:pt-48 pb-32 sm:pb-48 relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
              <span className="text-xl sm:text-3xl">🔥</span>
              <h2 className="text-3xl sm:text-5xl font-bold">BURNED</h2>
              <span className="text-xl sm:text-3xl">🔥</span>
            </div>

            <p className="text-2xl sm:text-6xl font-mono mb-6 sm:mb-12 font-medium tracking-wider">
              592,185,880 VIPER
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-700 to-purple-800 px-6 sm:px-12 py-2 sm:py-4 rounded-full font-bold text-base sm:text-xl shadow-lg text-white"
            >
              BURN WALLET
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
