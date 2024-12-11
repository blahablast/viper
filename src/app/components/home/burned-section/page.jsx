'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BurnedSection() {
  return (
    <section>
      <div>
        {/* Card Container */}
        <motion.div>
          {/* Top Snake Decoration */}
          <div>
            <Image
              src="/assets/images/burn-head.avif"
              alt="Snake Head"
              width={128}
              height={64}
              priority
            />

            <div>
              <div>
                <span>🔥</span>
                <h2>BURNED</h2>
                <span>🔥</span>
              </div>

              <p>592,185,880 VIPER</p>

              <motion.button>BURN WALLET</motion.button>
            </div>

            {/* Bottom Snake Decoration */}
            <div>
              <Image
                src="/assets/images/burn-tail.avif"
                alt="Snake Tail"
                width={128}
                height={64}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
