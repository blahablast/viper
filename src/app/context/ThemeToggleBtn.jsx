import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggleBtn({
  isDark,
  toggleTheme,
  isMobile = false
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
    >
      {isDark ? (
        isMobile ? (
          'Switch to Light Mode'
        ) : (
          <Sun className="w-5 h-5" />
        )
      ) : isMobile ? (
        'Switch to Dark Mode'
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  )
}
