import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/data'
import { useTheme } from '../../context/ThemeContext'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/mykbgbnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setErrors({ message: 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ message: 'Network error. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  const inputCls = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 font-inter focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 ${
    isDark ? 'bg-white border-white/20 text-gray-900 placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
  }`

  const contactDetails = [
    { Icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { Icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { Icon: HiLocationMarker, label: 'Location', value: personalInfo.location, href: '#' },
  ]

  const socials = [
    { href: personalInfo.github, Icon: FaGithub, label: 'GitHub' },
    { href: personalInfo.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className={`section-pad relative overflow-hidden ${isDark ? 'bg-[#071525]' : 'bg-white'}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle badge="Get In Touch" title="Let's Work" highlight="Together" subtitle="Working on something interesting? My inbox is open. I reply fast." />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className={`font-poppins font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to start a project?
            </h3>
            <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Whether you have a project in mind, a question, or just want to say hello — my inbox is always open. I'll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all group ${
                    isDark ? 'border-white/[0.07] bg-[#0a1a2e] hover:border-teal-500/30 hover:bg-teal-500/5' : 'border-gray-100 bg-gray-50 hover:border-teal-200 hover:bg-teal-50/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                    <Icon size={18} className="text-teal-400" />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wide mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                    <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className={`text-xs uppercase tracking-widest mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Connect with me</p>
              <div className="flex gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                      isDark ? 'border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-500/35 hover:bg-teal-500/10' : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:border-teal-300 hover:bg-teal-50'
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className={`p-7 rounded-3xl border ${isDark ? 'bg-[#0a1a2e] border-white/[0.07]' : 'bg-gray-50 border-gray-200'}`}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4"
                    >
                      <HiCheckCircle size={32} className="text-emerald-500" />
                    </motion.div>
                    <h4 className={`font-poppins font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Thanks for reaching out. I'll reply within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Name *</label>
                        <input
                          className={inputCls}
                          placeholder="Your Name"
                          value={form.name}
                          onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email *</label>
                        <input
                          type="email"
                          className={inputCls}
                          placeholder="Your Email Address"
                          value={form.email}
                          onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Subject</label>
                      <input
                        className={inputCls}
                        placeholder="Project inquiry..."
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wide mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Message *</label>
                      <textarea
                        rows={5}
                        className={`${inputCls} resize-none`}
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })) }}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3.5 bg-teal-400 text-[#030d1e] font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <motion.div className="w-4 h-4 border-2 border-[#030d1e]/30 border-t-[#030d1e] rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane size={18} className="-rotate-45" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
