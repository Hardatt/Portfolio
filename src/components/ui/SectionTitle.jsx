import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export default function SectionTitle({ badge, title, highlight, subtitle, align = 'center' }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold mb-4 text-label">
          — {badge}
        </p>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-[2.6rem] font-poppins font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {highlight ? (
          <>{title} <span className="text-accent">{highlight}</span></>
        ) : title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-[0.94rem] leading-relaxed max-w-lg ${align === 'center' ? 'mx-auto' : ''} ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
