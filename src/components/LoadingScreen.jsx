import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 18 + 4
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return next
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030d1e] overflow-hidden"
        >
          {/* Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500 rounded-full blur-[130px] opacity-15 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-sky-600 rounded-full blur-[100px] opacity-15 animate-float-delay" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -160 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', bounce: 0.45, duration: 0.9 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-poppins font-bold text-3xl">H</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-[20px] border-2 border-transparent"
              style={{ background: 'linear-gradient(white,white) padding-box, conic-gradient(from 0deg, #14b8a6, #38bdf8, transparent, #14b8a6) border-box' }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-10"
          >
            <h1 className="text-2xl font-poppins font-bold text-white">Hardatt Singh Rathod</h1>
            <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-48"
          >
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-sky-500"
                style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.15s ease' }}
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">{Math.min(Math.round(progress), 100)}%</p>
          </motion.div>

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-teal-400"
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
