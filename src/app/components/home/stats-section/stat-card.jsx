// app/components/home/stats-section/stat-card.js
'use client'
import { motion } from 'framer-motion'

export default function StatCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#131313] backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center border border-red-900/20 shadow-[0_0_50px_-12px_rgba(180,0,0,0.25)]"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="text-4xl font-bold text-white mb-2"
      >
        {value}
      </motion.div>
      <div className="text-white/60">{label}</div>
    </motion.div>
  )
}
