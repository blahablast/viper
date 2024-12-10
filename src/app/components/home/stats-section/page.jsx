'use client'
import { motion } from 'framer-motion'
import StatCard from './stat-card'

export default function StatsSection() {
  const stats = [
    { label: 'Holders', value: '10,234' },
    { label: 'Market Cap', value: '$2.5M' },
    { label: '24h Volume', value: '$500K' },
    { label: 'Total Memes', value: '420' }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
