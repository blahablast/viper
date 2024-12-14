'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { name: 'Memes', href: '/memes' },
    { name: 'Viperswap', href: '/' },
    { name: 'Stake', href: '/' }
  ]

  return (
    <footer className="relative py-10 border-t border-red-900/30 shadow-[0_0_30px_-8px_rgba(180,0,0,0.35)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Nav Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl flex flex-wrap justify-center gap-6 mb-6"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-red-500 transition-colors "
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </motion.div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-xl">
            Contract Address:
            <span className="block font-mono break-all text-red-800">
              caff93803e51c7b97bf79146790bfa3feb0d0b856ef16113b391b997
            </span>
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-center px-4"
        >
          <p>
            <span className="text-red-800">VIPER</span> is a memecoin with no
            intrinsic value or expectation of financial return. There is no
            formal team or roadmap. The coin is for entertainment purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
