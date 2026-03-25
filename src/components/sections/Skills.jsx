import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiNodedotjs,
  SiMongodb, SiDocker, SiGit,
  SiTailwindcss, SiRedis, SiExpress,
  SiMysql, SiRedux, SiBootstrap,
  SiSocketdotio, SiPostman,
  SiGithubactions,
} from 'react-icons/si'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { HiShieldCheck, HiClock, HiCode } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { techStack } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

const groups = [
  {
    label: 'Frontend',
    gradient: 'from-violet-600 to-purple-600',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    label: 'Backend',
    gradient: 'from-blue-600 to-cyan-600',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/8',
    items: [
      { name: 'Node.js / Express.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'MySQL / SQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
      { name: 'Socket.IO / WebSocket', Icon: SiSocketdotio, color: '#25c2a0' },
      { name: 'Microsoft Graph API', Icon: FaMicrosoft, color: '#0078D4' },
      { name: 'RESTful APIs', Icon: HiCode, color: '#6366f1' },
      { name: 'JWT Auth', Icon: HiShieldCheck, color: '#10b981' },
      { name: 'Cron Jobs', Icon: HiClock, color: '#f59e0b' },
    ],
  },
  {
    label: 'DevOps & Tools',
    gradient: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/8',
    items: [
      { name: 'Git / GitHub', Icon: SiGit, color: '#F05032' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'AWS (EC2, S3)', Icon: FaAws, color: '#FF9900' },
      { name: 'CI/CD Pipelines', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }
const item = {
  hidden: { opacity: 0, y: 25, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4 } },
}

export default function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#0d1326]' : 'bg-white'}`}>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="Tech Stack" title="Skills &" highlight="Technologies" subtitle="A curated toolkit of technologies I use to build production-grade applications." />

        <div className="space-y-14">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: gi * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${g.gradient}`} />
                <h3 className={`font-poppins font-semibold text-base bg-gradient-to-r ${g.gradient} bg-clip-text text-transparent`}>{g.label}</h3>
                <div className={`flex-1 h-px ${isDark ? 'bg-white/5' : 'bg-gray-100'}`} />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4"
              >
                {g.items.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    className={`group relative flex flex-col items-center gap-3 p-3.5 rounded-2xl border ${g.border} ${g.bg} hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    <motion.div whileHover={{ scale: 1.25, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.35 }}>
                      <Icon size={34} style={{ color }} className="drop-shadow-sm" />
                    </motion.div>
                    <span className={`text-xs font-medium text-center leading-tight ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{name}</span>
                    <motion.div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: color }} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 overflow-hidden relative py-4"
        >
          <div className={`absolute left-0 inset-y-0 w-20 z-10 bg-gradient-to-r ${isDark ? 'from-[#0d1326]' : 'from-white'} to-transparent`} />
          <div className={`absolute right-0 inset-y-0 w-20 z-10 bg-gradient-to-l ${isDark ? 'from-[#0d1326]' : 'from-white'} to-transparent`} />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className={`mx-5 text-sm font-medium ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                {t.name} <span className="text-violet-500/40 mx-3">◆</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
