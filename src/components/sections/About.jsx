import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiDownload, HiCheckCircle } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo, skillCategories } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

const highlights = [
  'Clean, maintainable code', 'Performance-first mindset',
  'Strong communication', 'On-time delivery',
  'Agile & collaborative', 'Open source contributor',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#0d1326]' : 'bg-white'}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="About Me" title="Crafting" highlight="Digital Experiences" subtitle="Passionate developer with a love for clean code and creative solutions." />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start" ref={ref}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 mb-8">
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{personalInfo.bio}</p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{personalInfo.bioExtra}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <HiCheckCircle className="text-violet-500 flex-shrink-0" size={17} />
                  {h}
                </motion.div>
              ))}
            </div>

            {/* Info grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className={`grid grid-cols-2 gap-4 p-5 rounded-2xl mb-8 border ${isDark ? 'bg-white/4 border-white/8' : 'bg-gray-50 border-gray-100'}`}
            >
              {[
                { label: 'Name', value: personalInfo.name },
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: personalInfo.email },
                { label: 'Status', value: '✅ Available' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className={`text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                  <p className={`text-sm font-medium truncate ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{value}</p>
                </div>
              ))}
            </motion.div>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow-v transition-all"
            >
              <HiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            {skillCategories.map((cat, ci) => (
              <div key={cat.name}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className={`font-poppins font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{cat.name}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((sk, si) => (
                    <SkillBar key={sk.name} skill={sk} delay={ci * 0.12 + si * 0.07} inView={inView} isDark={isDark} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, delay, inView, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between mb-1.5">
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
        <span className="text-xs font-semibold text-violet-500">{skill.level}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.3, delay: delay + 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-500 relative"
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-sm" />
        </motion.div>
      </div>
    </motion.div>
  )
}
