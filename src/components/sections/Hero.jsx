import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload, HiChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { personalInfo, typingTexts } from '../../data/data'

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  dur: Math.random() * 10 + 12,
  delay: Math.random() * 6,
}))

export default function Hero() {
  const typed = useTypingEffect(typingTexts)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1e]">
      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 15% 50%, rgba(124,58,237,0.35) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(37,99,235,0.35) 0%, transparent 55%), radial-gradient(ellipse at 50% 85%, rgba(6,182,212,0.18) 0%, transparent 50%)' }}
      />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Floating particles */}
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/25 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -35, 0], x: [0, (Math.random() - 0.5) * 18, 0], opacity: [0.1, 0.45, 0.1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-0 w-[580px] h-[580px] bg-violet-600 rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-10 -left-10 w-[480px] h-[480px] bg-blue-600 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance &amp; full-time
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.firstName}</span>
            <br />
            <span className="text-gray-400 text-4xl sm:text-5xl lg:text-6xl">{personalInfo.lastName}</span>
          </motion.h1>

          {/* Typed title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl sm:text-3xl font-poppins font-semibold text-gray-300 mb-6 h-10"
          >
            <span className="gradient-text">{typed}</span>
            <span className="text-violet-400 animate-blink">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.bio.slice(0, 160)}…
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow-v transition-all duration-300"
            >
              Hire Me
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-gray-300 font-semibold rounded-xl border border-white/10 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-300"
            >
              <HiDownload />
              Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Find me on</span>
            {[
              { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
              { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #7c3aed, #2563eb, transparent, #06b6d4, transparent, #7c3aed)', borderRadius: '50%', padding: 2 }}
            >
              <div className="w-full h-full rounded-full bg-[#0a0f1e]" />
            </motion.div>

            {/* Profile circle */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-violet-500/20"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-blue-600/25 to-cyan-600/20 flex items-center justify-center">
                <span className="text-white font-poppins font-extrabold opacity-20" style={{ fontSize: '9rem' }}>H</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/50 to-transparent" />
            </motion.div>

            {/* Floating badge 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-8 top-1/4 bg-[#1a1f35] border border-white/10 rounded-2xl p-3 shadow-xl"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <p className="text-xs text-gray-400 mb-0.5">Experience</p>
                <p className="text-white font-semibold font-poppins text-sm">1+ Year</p>
              </motion.div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -right-8 bottom-1/4 bg-[#1a1f35] border border-white/10 rounded-2xl p-3 shadow-xl"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
                <p className="text-xs text-gray-400 mb-0.5">Projects Built</p>
                <p className="text-white font-semibold font-poppins text-sm">6+ 🚀</p>
              </motion.div>
            </motion.div>

            {/* Open to work tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-glow-v whitespace-nowrap"
            >
              Open to Work ✨
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm"
            >
              <p className="text-2xl sm:text-3xl font-poppins font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <HiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
