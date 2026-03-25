import { motion } from 'framer-motion'

export default function SectionTitle({ badge, title, highlight, subtitle, align = 'center' }) {
  const parts = highlight ? title.split(highlight) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4
            bg-violet-500/10 text-violet-400 border border-violet-500/20
            ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {badge}
        </motion.span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-gray-900 dark:text-white leading-tight">
        {parts ? (
          <>{parts[0]}<span className="gradient-text"> {highlight}</span>{parts[1]}</>
        ) : title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 origin-left ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}
