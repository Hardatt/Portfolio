import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiDownload, HiChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { personalInfo, typingTexts } from '../../data/data'

// Terminal lines — renders one by one, like a real terminal
const TERM = [
  { id: 0, delay: 700,  jsx: (
    <p><span className="text-slate-600">$</span>{' '}
      <span className="text-teal-400">curl</span>{' '}
      <span className="text-slate-300">-s api.hardatt.dev</span>
      <span className="text-sky-400">/health</span>
    </p>
  )},
  { id: 1, delay: 1400, jsx: <p className="text-slate-500">{'{'}</p> },
  { id: 2, delay: 1750, jsx: (
    <p className="pl-4">
      <span className="text-slate-500">"status":{' '}</span>
      <span className="text-teal-400">"operational"</span>
      <span className="text-slate-600">,</span>
    </p>
  )},
  { id: 3, delay: 2050, jsx: (
    <p className="pl-4">
      <span className="text-slate-500">"latency":{' '}</span>
      <span className="text-sky-400">"11ms"</span>
      <span className="text-slate-600">,</span>
    </p>
  )},
  { id: 4, delay: 2350, jsx: (
    <p className="pl-4">
      <span className="text-slate-500">"uptime":{' '}</span>
      <span className="text-green-400">"99.98%"</span>
      <span className="text-slate-600">,</span>
    </p>
  )},
  { id: 5, delay: 2650, jsx: (
    <p className="pl-4">
      <span className="text-slate-500">"requests_today":{' '}</span>
      <span className="text-orange-400">"2.4M"</span>
    </p>
  )},
  { id: 6, delay: 2900, jsx: <p className="text-slate-500">{'}'}</p> },
  { id: 7, delay: 3350, jsx: (
    <p className="mt-1">
      <span className="text-green-400 font-semibold">✓</span>
      <span className="text-slate-300"> 200 OK</span>
      <span className="text-slate-600"> · </span>
      <span className="text-sky-400">11ms</span>
      <span className="text-slate-600"> · </span>
      <span className="text-slate-500">Node.js / Express</span>
    </p>
  )},
]

export default function Hero() {
  const typed = useTypingEffect(typingTexts)
  const [shown, setShown] = useState([])

  useEffect(() => {
    const timers = TERM.map(line =>
      setTimeout(() => setShown(prev => [...prev, line.id]), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030d1e]"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none dot-grid"
        style={{
          opacity: 0.45,
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* Teal glow — top right */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -right-16 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: '#0d9488' }}
      />

      {/* Indigo glow — bottom left */}
      <motion.div
        animate={{ scale: [1.12, 1, 1.12], opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full blur-[190px] pointer-events-none"
        style={{ background: '#4338ca' }}
      />

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">

        {/* ── LEFT ── */}
        <div>

          {/* Live status pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-[0.82rem] text-slate-400 mb-9"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
            </span>
            Currently at Globiva · Open to new roles
          </motion.div>

          {/* Name — clip reveal */}
          <div className="overflow-hidden mb-1">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-poppins font-extrabold tracking-tight leading-[1.02]">
                <span className="block text-slate-500 text-2xl sm:text-3xl font-medium tracking-widest mb-1">
                  I'M
                </span>
                <span
                  className="block text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] gradient-text"
                  style={{ lineHeight: 1 }}
                >
                  HARDATT
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Role typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-2 mb-7 mt-4"
          >
            <span className="h-px w-6 bg-teal-500/40 flex-shrink-0" />
            <span className="text-teal-400 font-semibold text-base sm:text-lg">{typed}</span>
            <span className="text-teal-400 animate-blink">|</span>
          </motion.div>

          {/* Human copy — written from scratch, no resume language */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.55 }}
            className="text-[1rem] text-slate-400 leading-[1.9] mb-9 max-w-[455px]"
          >
            I build backend systems that hold up when it matters —{' '}
            <span className="text-slate-200 font-medium">under load, on launch day, and after six months of feature requests.</span>
            {' '}If your API is slow or your services are fragile, that's exactly the kind of problem I enjoy solving.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {/* Primary — dark text on teal for max contrast */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 38px rgba(45,212,191,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-teal-400 text-[#030d1e] font-bold rounded-xl text-[0.93rem] transition-all duration-300"
            >
              Work with me
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, borderColor: 'rgba(45,212,191,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-slate-200 font-semibold rounded-xl border border-white/[0.09] hover:bg-teal-500/5 text-[0.93rem] transition-all duration-300"
            >
              See the work
            </motion.a>

            {/* Tertiary */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-slate-500 font-medium rounded-xl border border-white/[0.06] hover:text-teal-300 hover:border-teal-500/20 text-sm transition-all duration-300"
            >
              <HiDownload size={15} />
              Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="flex items-center gap-4"
          >
            <span className="text-[9px] text-slate-700 uppercase tracking-[0.22em]">Also on</span>
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
                whileHover={{ scale: 1.18, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-200"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Terminal + stats ── */}
        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          {/* Terminal card */}
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.07]"
            style={{ boxShadow: '0 0 0 1px rgba(45,212,191,0.06), 0 30px 60px rgba(0,0,0,0.55), 0 0 80px rgba(13,148,136,0.08)' }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#040d1c] border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500/80 transition-colors" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500/80 transition-colors" />
              <span className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500/80 transition-colors" />
              <div className="flex-1 flex justify-center">
                <span className="text-[11px] text-slate-600 font-mono">hardatt@api — zsh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-teal-400"
                />
                <span className="text-[10px] text-teal-400/60 font-mono">live</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="bg-[#050e1c] px-5 py-5 font-mono text-[0.8rem] leading-relaxed space-y-1 min-h-[230px]">
              {TERM.map(line => (
                <AnimatePresence key={line.id}>
                  {shown.includes(line.id) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      {line.jsx}
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              {/* Blinking cursor while lines still loading */}
              {shown.length < TERM.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className="inline-block w-[7px] h-[14px] bg-teal-400 align-middle"
                />
              )}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {personalInfo.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(45,212,191,0.28)' }}
                className="text-center p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300 cursor-default"
              >
                <p className="text-xl sm:text-2xl font-poppins font-bold gradient-text">{s.value}</p>
                <p className="text-[10px] text-slate-600 mt-0.5 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700"
      >
        <span className="text-[9px] uppercase tracking-[0.24em]">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <HiChevronDown size={17} />
        </motion.div>
      </motion.div>
    </section>
  )
}
