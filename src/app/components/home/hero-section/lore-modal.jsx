'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ViperLoreModal({ onClose }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Clicking the backdrop closes the modal
        className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center"
      >
        {/* Modal Content Container - stop propagation here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          className="relative w-full max-w-2xl p-6 mx-4 rounded-3xl shadow-[0_0_30px_-8px_rgba(180,0,0,0.35)]"
          style={{
            backgroundColor: 'var(--bg-color)', // Dynamic background color
            color: 'var(--text-color)' // Dynamic text color
          }}
        >
          {/* Close Button inside the modal */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 hover:scale-110 transition-transform"
            style={{
              color: 'var(--text-color)' // Dynamic button color
            }}
          >
            <X size={24} />
          </button>

          <h2
            className="text-5xl font-bold mb-6 text-center"
            style={{
              color: 'var(--text-color)' // Dynamic heading color
            }}
          >
            The <span className="text-red-700">Viper's</span> Tale
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl mb-6 leading-relaxed">
              Ever since his inception,&nbsp;
              <span className="text-red-700 font-semibold">VIPER</span> has been
              living under the shadow of his big blue brother, but&nbsp;
              <span className="text-red-700 font-semibold">VIPER</span> has his
              own tale (or tail) to tell... With fierce eyes of flame that can
              pierce any degen's soul and intimidate you into buying,&nbsp;
              <span className="text-red-700 font-semibold">VIPER</span> has a
              heart of gold.
            </p>
            <p className="text-2xl leading-relaxed">
              He has risen from the ashes of his old master, born anew with a
              community as strong as iron.&nbsp;
              <span className="text-red-700 font-semibold">VIPER</span> has one
              goal and that is to crush red candles into oblivion.&nbsp;
              <span className="text-red-700 font-semibold">VIPER</span> has
              arrived and is back with a vengeance. This is a call to all Degens
              across the globe. Unite, and in{' '}
              <span className="text-red-700 font-semibold">VIPER</span>
              &nbsp;we trust!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
