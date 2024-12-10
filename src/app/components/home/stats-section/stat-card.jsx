'use client'
import { motion } from 'framer-motion'

export default function StatCard({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center"
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
