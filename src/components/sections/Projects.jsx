import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { projects } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

function ProjectIllustration({ id }) {
  const base = 'text-white/80'
  if (id === 1) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <rect x="10" y="60" width="20" height="35" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="38" y="42" width="20" height="53" rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="66" y="28" width="20" height="67" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="94" y="50" width="20" height="45" rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="122" y="20" width="20" height="75" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="150" y="35" width="20" height="60" rx="3" fill="rgba(255,255,255,0.25)" />
      <polyline points="20,60 48,42 76,28 104,50 132,20 160,35" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="60" r="3" fill="white" opacity="0.8" />
      <circle cx="48" cy="42" r="3" fill="white" opacity="0.8" />
      <circle cx="76" cy="28" r="3" fill="white" opacity="0.8" />
      <circle cx="104" cy="50" r="3" fill="white" opacity="0.8" />
      <circle cx="132" cy="20" r="3" fill="white" opacity="0.8" />
      <circle cx="160" cy="35" r="3" fill="white" opacity="0.8" />
      <text x="10" y="108" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">FORECAST ↑40%</text>
    </svg>
  )
  if (id === 2) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <rect x="10" y="10" width="85" height="18" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="10" y="34" width="85" height="18" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="10" y="58" width="85" height="18" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="10" y="82" width="85" height="18" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="105" y="10" width="85" height="90" rx="6" fill="rgba(255,255,255,0.1)" />
      <rect x="113" y="20" width="45" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="113" y="32" width="65" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="113" y="42" width="55" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="113" y="56" width="40" height="6" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="113" y="68" width="60" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
      <circle cx="18" cy="19" r="4" fill="rgba(255,255,255,0.3)" />
      <circle cx="18" cy="43" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="18" cy="67" r="4" fill="rgba(255,255,255,0.2)" />
      <circle cx="18" cy="91" r="4" fill="rgba(255,255,255,0.15)" />
    </svg>
  )
  if (id === 3) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <rect x="8" y="10" width="52" height="90" rx="5" fill="rgba(255,255,255,0.1)" />
      <rect x="74" y="10" width="52" height="90" rx="5" fill="rgba(255,255,255,0.1)" />
      <rect x="140" y="10" width="52" height="90" rx="5" fill="rgba(255,255,255,0.1)" />
      <rect x="13" y="18" width="42" height="10" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="13" y="33" width="42" height="10" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="13" y="48" width="42" height="10" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="13" y="63" width="42" height="10" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="79" y="18" width="42" height="10" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="79" y="33" width="42" height="10" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="79" y="48" width="42" height="10" rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="145" y="18" width="42" height="10" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="145" y="33" width="42" height="10" rx="3" fill="rgba(255,255,255,0.25)" />
      <text x="8" y="108" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">TODO · IN PROGRESS · DONE</text>
    </svg>
  )
  if (id === 4) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <rect x="8" y="8" width="120" height="75" rx="5" fill="rgba(255,255,255,0.08)" />
      <rect x="12" y="12" width="112" height="67" rx="3" fill="rgba(255,255,255,0.05)" />
      <circle cx="40" cy="38" r="12" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="40" cy="38" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="80" cy="52" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <circle cx="80" cy="52" r="2.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="100" cy="28" r="6" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <circle cx="100" cy="28" r="2" fill="rgba(255,255,255,0.5)" />
      <rect x="136" y="8" width="56" height="25" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="136" y="38" width="56" height="25" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="136" y="68" width="56" height="15" rx="4" fill="rgba(255,255,255,0.08)" />
      <rect x="141" y="14" width="30" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="141" y="22" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
      <rect x="141" y="44" width="30" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      <rect x="141" y="52" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
    </svg>
  )
  if (id === 5) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <rect x="8" y="8" width="184" height="94" rx="6" fill="rgba(0,0,0,0.25)" />
      <rect x="8" y="8" width="184" height="18" rx="6" fill="rgba(255,255,255,0.08)" />
      <circle cx="20" cy="17" r="3" fill="rgba(255,100,100,0.6)" />
      <circle cx="30" cy="17" r="3" fill="rgba(255,200,50,0.6)" />
      <circle cx="40" cy="17" r="3" fill="rgba(80,200,80,0.6)" />
      <text x="14" y="40" fill="rgba(80,200,80,0.9)" fontSize="7" fontFamily="monospace">GET</text>
      <text x="34" y="40" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">/api/v1/users</text>
      <text x="14" y="53" fill="rgba(50,150,255,0.9)" fontSize="7" fontFamily="monospace">POST</text>
      <text x="38" y="53" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">/api/v1/auth/login</text>
      <text x="14" y="66" fill="rgba(255,165,0,0.9)" fontSize="7" fontFamily="monospace">PUT</text>
      <text x="34" y="66" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">/api/v1/users/:id</text>
      <text x="14" y="79" fill="rgba(255,80,80,0.9)" fontSize="7" fontFamily="monospace">DEL</text>
      <text x="34" y="79" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">/api/v1/users/:id</text>
      <rect x="130" y="30" width="55" height="16" rx="3" fill="rgba(80,200,80,0.15)" stroke="rgba(80,200,80,0.4)" strokeWidth="0.5" />
      <text x="138" y="41" fill="rgba(80,200,80,0.9)" fontSize="7" fontFamily="monospace">200 OK</text>
      <rect x="130" y="52" width="55" height="16" rx="3" fill="rgba(255,165,0,0.15)" stroke="rgba(255,165,0,0.4)" strokeWidth="0.5" />
      <text x="135" y="63" fill="rgba(255,165,0,0.9)" fontSize="7" fontFamily="monospace">429 Limit</text>
    </svg>
  )
  if (id === 6) return (
    <svg viewBox="0 0 200 110" className="w-full h-full" fill="none">
      <path d="M15,85 Q35,40 55,60 Q75,80 95,35 Q115,10 135,45 Q155,70 175,30" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M15,85 Q35,40 55,60 Q75,80 95,35 Q115,10 135,45 Q155,70 175,30 L175,95 L15,95 Z" fill="rgba(255,255,255,0.07)" />
      <rect x="15" y="10" width="42" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
      <text x="22" y="22" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace">🔥 14 day</text>
      <rect x="80" y="10" width="42" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
      <text x="84" y="22" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace">💪 87 reps</text>
      <rect x="148" y="10" width="40" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
      <text x="152" y="22" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace">⚡ 420 cal</text>
      <line x1="15" y1="95" x2="175" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    </svg>
  )
  return null
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [hovered, setHovered] = useState(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const list = filter === 'featured' ? projects.filter(p => p.featured) : projects

  return (
    <section id="projects" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#0a0f1e]' : 'bg-gray-50'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/4 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="My Work" title="Featured" highlight="Projects" subtitle="A selection of my recent work — built with performance, UX, and clean architecture in mind." />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12"
        >
          {['all', 'featured'].map(f => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-glow-v'
                  : isDark
                    ? 'bg-white/5 text-gray-400 border border-white/8 hover:border-violet-500/40'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-violet-400'
              }`}
            >
              {f === 'all' ? 'All Projects' : '⭐ Featured'}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28 }}
                  className={`h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isDark
                      ? 'bg-[#111827] border-white/8 hover:border-violet-500/30 hover:shadow-glow-v/20'
                      : 'bg-white border-gray-200 hover:border-violet-300 hover:shadow-xl'
                  }`}
                >
                  {/* Card image area */}
                  <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.06) 0px,rgba(255,255,255,0.06) 1px,transparent 1px,transparent 8px)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-4 pt-8 pb-2">
                      <ProjectIllustration id={p.id} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white/70 text-xs font-mono rounded-md">
                        /{String(p.id).padStart(2, '0')}
                      </span>
                    </div>
                    {p.featured && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-amber-400/20 backdrop-blur-sm text-amber-300 text-xs font-semibold rounded-md">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Hover overlay */}
                    <AnimatePresence>
                      {hovered === p.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center gap-3"
                        >
                          {[
                            { href: p.github, Icon: FaGithub, label: 'Code', cls: 'bg-white text-gray-900 hover:bg-gray-100' },
                            { href: p.live, Icon: HiExternalLink, label: 'Live', cls: 'bg-gradient-to-r from-violet-600 to-blue-600 text-white' },
                          ].map(({ href, Icon, label, cls }, bi) => (
                            <motion.a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', bounce: 0.5, delay: bi * 0.06 }}
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${cls}`}
                            >
                              <Icon size={15} /> {label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className={`font-poppins font-bold text-lg mb-2 group-hover:text-violet-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {p.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map(t => (
                        <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${isDark ? 'bg-white/4 text-gray-400 border-white/8' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center gap-3 pt-3 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                        <FaGithub size={14} /> Source
                      </a>
                      <span className={isDark ? 'text-gray-700' : 'text-gray-300'}>•</span>
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-violet-500 hover:text-violet-400 font-medium transition-colors">
                        <HiExternalLink size={14} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 border-2 border-violet-500/30 text-violet-500 font-semibold rounded-xl hover:border-violet-500 transition-all duration-300 ${isDark ? 'hover:bg-violet-500/10' : 'hover:bg-violet-50'}`}>
            <FaGithub size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
