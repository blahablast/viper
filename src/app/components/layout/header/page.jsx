'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'
import { Menu, X } from 'lucide-react'
import ThemeToggleBtn from '@/app/context/ThemeToggleBtn'

export default function Header() {
  const { isDark, setIsDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2"
            >
              <div className="relative">VIPER</div>
            </Link>
          </motion.div>

          {/* Desktop Nav Links: Only visible at >=640px */}
          <div className="hidden sm:flex items-center gap-6">
            <NavLink href="/memes">MEMES</NavLink>
            <NavLink href="/viperswap">VIPERSWAP</NavLink>
            <NavLink href="/stake">STAKE</NavLink>

            {/* Theme Toggle */}
            <ThemeToggleBtn isDark={isDark} toggleTheme={toggleTheme} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full font-bold text-lg transition-colors
             bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-bg-hover)]
             text-[var(--btn-text-primary)] px-6 py-2"
            >
              BUY VIPER
            </motion.button>
          </div>

          {/* Hamburger Icon and Theme Toggle: Visible at <640px */}
          <div className="flex sm:hidden items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggleBtn isDark={isDark} toggleTheme={toggleTheme} />

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Menu: Visible only when isOpen = true and <640px */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden bg-black/90 backdrop-blur-sm px-4 pt-2 pb-3 space-y-2"
        >
          <NavLink href="/memes">MEMES</NavLink>
          <NavLink href="/viperswap">VIPERSWAP</NavLink>
          <NavLink href="/stake">STAKE</NavLink>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#d01f36] hover:bg-[#b91c31] px-6 py-2 rounded-full font-bold transition-colors block w-full text-center"
          >
            BUY VIPER
          </motion.button>
        </motion.div>
      )}
    </motion.header>
  )
}

const NavLink = ({ href, children }) => (
  <motion.div whileHover={{ y: -2 }}>
    <Link href={href} className="hover:text-white font-medium block">
      {children}
    </Link>
  </motion.div>
)
