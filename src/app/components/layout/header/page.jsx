'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/app/context/ThemeContext'
import { Menu, X } from 'lucide-react'
import ThemeToggleBtn from '@/app/context/ThemeToggleBtn'

export default function Header() {
  const { isDark, setIsDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null) // Reference for the menu

  const toggleTheme = () => setIsDark(!isDark)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
              <div className="relative">
                <span className="text-red-700">VIPER</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav Links: Only visible at >=640px */}
          <div className="hidden sm:flex items-center gap-6">
            <NavLink href="/memes">MEMES</NavLink>
            <NavLink href="/">VIPERSWAP</NavLink>
            <NavLink href="/">STAKE</NavLink>

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
          ref={menuRef} // Attach the ref to the menu container
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden text-xl backdrop-blur-sm px-4 pt-2 pb-3 space-y-4 flex flex-col items-center"
        >
          <NavLink
            href="/memes"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            MEMES
          </NavLink>
          <NavLink
            href="/"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            VIPERSWAP
          </NavLink>
          <NavLink
            href="/"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            STAKE
          </NavLink>

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

const NavLink = ({ href, children, onClick }) => (
  <motion.div whileHover={{ y: -2 }}>
    <Link
      href={href}
      className="hover:text-white font-medium block text-center"
      onClick={onClick}
    >
      {children}
    </Link>
  </motion.div>
)
