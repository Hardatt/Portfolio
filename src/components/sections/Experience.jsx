import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { experiences } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

const colorMap = {
  violet: { dot: '#7c3aed', border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400' },
  blue: { dot: '#2563eb', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  cyan: { dot: '#06b6d4', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  emerald: { dot: '#10b981', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
}

export default function Experience() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="experience" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#0a0f1e]' : 'bg-gray-50'}`}>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="My Journey" title="Experience &" highlight="Education" subtitle="A timeline of my professional experience and academic background." />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.id} exp={exp} index={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ exp, index, isDark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const c = colorMap[exp.color]
  const Icon = exp.type === 'education' ? HiAcademicCap : HiBriefcase

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 hidden md:flex">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', bounce: 0.5, delay: index * 0.1 + 0.2 }}
          className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center relative z-10"
          style={{ borderColor: c.dot, backgroundColor: isDark ? '#0a0f1e' : '#fafafa' }}
        >
          <Icon size={24} style={{ color: c.dot }} />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        className={`flex-1 rounded-2xl p-5 md:p-6 border transition-all duration-300 ${
          isDark
            ? `bg-[#111827] border-white/8 hover:${c.border}`
            : `bg-white border-gray-200 hover:border-violet-300`
        } hover:shadow-lg`}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className={`font-poppins font-bold text-base md:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
            <p className={`text-sm font-medium ${c.text}`}>{exp.company}</p>
          </div>
          <div className="text-right">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text} border ${c.border}`}>
              {exp.period}
            </span>
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{exp.location}</p>
          </div>
        </div>

        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map(t => (
            <span key={t} className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${
              isDark ? 'bg-white/4 text-gray-400 border-white/8' : 'bg-gray-100 text-gray-600 border-gray-200'
            }`}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
