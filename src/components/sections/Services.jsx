import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="services" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#071525]' : 'bg-white'}`}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-sky-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="What I Offer"
          title="Freelancing"
          highlight="Services"
          subtitle="Need something built right the first time? Here's how I can help."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                s.highlight
                  ? 'border-teal-500/40 bg-gradient-to-br from-teal-600/10 to-sky-600/10 hover:shadow-lg'
                  : isDark
                    ? 'border-white/[0.07] bg-[#0a1a2e] hover:border-teal-500/30 hover:shadow-lg'
                    : 'border-gray-200 bg-white hover:border-teal-300 hover:shadow-lg'
              }`}
            >
              {s.highlight && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-teal-400 text-[#030d1e] text-xs font-bold rounded-full">
                  Popular
                </span>
              )}

              {/* Icon */}
              <motion.div
                className="text-4xl mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                {s.icon}
              </motion.div>

              <h3 className={`font-poppins font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{s.description}</p>

              <ul className="space-y-2 mb-6">
                {s.features.map(f => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={`pt-4 border-t ${isDark ? 'border-white/[0.07]' : 'border-gray-100'} flex items-center justify-between`}>
                <span className={`text-sm font-semibold ${s.highlight ? 'text-teal-400' : isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {s.price}
                </span>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    s.highlight
                      ? 'bg-teal-400 text-[#030d1e] font-bold'
                      : 'border border-teal-500/40 text-teal-500 hover:bg-teal-500/10'
                  }`}
                >
                  Get Quote →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-14 p-8 rounded-3xl border text-center ${isDark ? 'bg-gradient-to-br from-teal-500/8 to-sky-500/8 border-teal-500/20' : 'bg-gradient-to-br from-teal-50 to-sky-50 border-teal-200'}`}
        >
          <h3 className={`font-poppins font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Have a custom project in mind?</h3>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Let's discuss your requirements and build something great together.</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-400 text-[#030d1e] font-bold rounded-xl shadow-lg transition-all"
          >
            Let's Talk →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
