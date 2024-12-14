'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BurnedSection() {
  return (
    <section className="relative py-16 sm:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-red-900/20 shadow-[0_0_30px_-10px_rgba(180,0,0,0.25)]"
        >
          {/* Top Snake Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[86px] sm:-translate-y-[115px] w-[240px] sm:w-[320px] z-20">
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[41px] sm:translate-y-[55px] w-[240px] sm:w-[320px] z-20">
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
          <div className="text-center px-4 sm:px-8 pt-24 sm:pt-36 pb-24 sm:pb-36 relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-lg sm:text-2xl">🔥</span>
              <h2 className="text-2xl sm:text-4xl font-bold">BURNED</h2>
              <span className="text-lg sm:text-2xl">🔥</span>
            </div>

            <p className="text-xl sm:text-4xl font-mono mb-4 sm:mb-8 font-medium tracking-wide">
              592,185,880 VIPER
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-700 to-purple-800 px-5 sm:px-10 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg text-white"
            >
              BURN WALLET
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
