'use client'
import { motion } from 'framer-motion'
import { FaTwitter, FaDiscord } from 'react-icons/fa'

export default function SocialsSection() {
  const socials = [
    {
      name: 'X',
      href: 'https://x.com/vipercoincto',
      icon: <FaTwitter className="text-2xl" />
    },
    {
      name: 'Discord',
      href: 'https://discord.com/invite/K9T4rM8XxH',
      icon: <FaDiscord className="text-2xl" />
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl font-semibold mb-8"
        >
          Connect with Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreference"
              className="group flex flex-col items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <div className="p-4 rounded-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                {social.icon}
              </div>
              <span
                style={{ color: 'var(--text-color)' }}
                className="text-2xl font-medium"
              >
                {social.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
