import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { testimonials } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const t = setInterval(() => { setDirection(1); setCurrent(c => (c + 1) % testimonials.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const goTo = (i) => { setDirection(i > current ? 1 : -1); setCurrent(i) }
  const prev = () => { setDirection(-1); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setDirection(1); setCurrent(c => (c + 1) % testimonials.length) }

  const variants = {
    enter: d => ({ x: d * 80, opacity: 0, scale: 0.94 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: d => ({ x: d * -80, opacity: 0, scale: 0.94 }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#030d1e]' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-sky-600/5 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="Client Love" title="What People" highlight="Say" subtitle="What the people I've worked with say. Make of it what you will." />

        {/* Main card */}
        <div className="relative overflow-hidden min-h-[280px] flex items-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className={`w-full rounded-3xl p-8 md:p-10 border ${
                isDark ? 'bg-[#0a1a2e] border-white/[0.07]' : 'bg-white border-gray-200'
              } shadow-lg`}
            >
              {/* Quote icon */}
              <div className="text-5xl text-teal-500/30 font-serif leading-none mb-4">"</div>

              <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.text}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-poppins font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className={`font-poppins font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <HiStar key={i} className="text-amber-400" size={18} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2.5 rounded-xl border transition-all ${isDark ? 'border-white/10 text-gray-400 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/10' : 'border-gray-200 text-gray-400 hover:text-gray-900 hover:border-teal-300'}`}
          >
            <HiChevronLeft size={20} />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-teal-400' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-teal-400'}`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2.5 rounded-xl border transition-all ${isDark ? 'border-white/10 text-gray-400 hover:text-white hover:border-teal-500/50 hover:bg-teal-500/10' : 'border-gray-200 text-gray-400 hover:text-gray-900 hover:border-teal-300'}`}
          >
            <HiChevronRight size={20} />
          </motion.button>
        </div>

        {/* All client avatars */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold transition-all ${i === current ? 'ring-2 ring-teal-400 ring-offset-2 ring-offset-transparent' : 'opacity-60'}`}
            >
              {t.avatar}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
