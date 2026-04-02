import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/data'
import { useTheme } from '../context/ThemeContext'

const links = ['About', 'Projects', 'Skills', 'Experience', 'Services', 'Contact']

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer className={`border-t ${isDark ? 'bg-[#030d1e] border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-base">H</span>
              </div>
              <span className={`font-poppins font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Hardatt Singh Rathod</span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Full Stack Developer crafting digital experiences that matter.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className={`text-xs uppercase tracking-widest font-semibold mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className={`text-xs uppercase tracking-widest font-semibold mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Connect</p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${isDark ? 'border-white/8 text-gray-400 hover:text-teal-400 hover:border-teal-500/50' : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:border-teal-300'}`}>
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
          <p className={`text-sm flex items-center gap-1.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Hardatt Singh Rathod · Built with
            <HiHeart className="text-red-500 animate-pulse" size={14} />
            using React & Tailwind
          </p>
          <a href="#hero"
            className={`text-sm transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
