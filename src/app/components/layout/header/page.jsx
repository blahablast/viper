'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center gap-2"
            >
              <div className="relative">VIPER</div>
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            <NavLink href="/memes">MEMES</NavLink>
            <NavLink href="/viperswap">VIPERSWAP</NavLink>
            <NavLink href="/stake">STAKE</NavLink>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              BUY VIPER
            </motion.button>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

const NavLink = ({ href, children }) => (
  <motion.div whileHover={{ y: -2 }}>
    <Link href={href} className="text-white/90 hover:text-white font-medium">
      {children}
    </Link>
  </motion.div>
)
