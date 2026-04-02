import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 110) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = theme === 'dark'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#030d1e]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-sm'
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a href="#hero" whileHover={{ scale: 1.03 }} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-lg">H</span>
            </div>
            <span className={`font-poppins font-bold text-lg hidden sm:block ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hardatt<span className="gradient-text">.</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-teal-400'
                      : isDark
                        ? 'text-gray-400 hover:text-teal-300'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className={`absolute inset-0 rounded-lg ${isDark ? 'bg-teal-500/10' : 'bg-teal-50'}`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              )
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl transition-all ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-400 text-[#030d1e] text-sm font-bold rounded-xl transition-all duration-300"
            >
              Hire Me
            </motion.a>

            {/* Mobile menu toggle */}
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-2.5 rounded-xl transition-all ${isDark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-16 left-0 right-0 z-40 border-b md:hidden overflow-hidden ${
              isDark ? 'bg-[#030d1e]/98 backdrop-blur-xl border-white/[0.06]' : 'bg-white/95 backdrop-blur-xl border-gray-200'
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === href.slice(1)
                      ? isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'
                      : isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.04 }}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center bg-teal-400 text-[#030d1e]"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
