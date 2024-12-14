'use client'
import { motion } from 'framer-motion'
import tokenomicsData from '@/data/tokenomics.json'

export default function TokenomicsSection() {
  const { totalSupply, allocations } = tokenomicsData

  return (
    <section className="relative py-16 sm:py-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">TOKENOMICS</h2>
          <p className="text-xl italic">
            FAIR LAUNCH. NO PRESALE, 0% TO CREATOR
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border-0 border-red-900/30 shadow-[0_0_30px_-8px_rgba(180,0,0,0.35)] p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center flex-col">
              <div className="text-2xl">TOTAL SUPPLY</div>
              <div className="text-4xl font-bold">{totalSupply}</div>
            </div>

            <div className="space-y-4 text-lg">
              {allocations.map((allocation, index) => (
                <motion.div
                  key={allocation.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-bold">
                    {allocation.percentage}% - {allocation.name}
                  </h3>
                  <p className="text-sm">{allocation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center mt-6 italic">
            <span className="text-red-800">$VIPER</span> HAS THE EXACT
            TOKENOMICS AS $SNEK
          </p>
        </motion.div>
      </div>
    </section>
  )
}
