'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { isDark, setIsDark } = useTheme()

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

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-white/60 hover:bg-white/50 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d01f36] hover:bg-[#b91c31] px-6 py-2 rounded-full text-white font-bold transition-colors"
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
