import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mx = useMotionValue(-60)
  const my = useMotionValue(-60)
  const rx = useSpring(mx, { stiffness: 130, damping: 24, mass: 0.4 })
  const ry = useSpring(my, { stiffness: 130, damping: 24, mass: 0.4 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); if (!visible) setVisible(true) }
    const checkHover = (e) => setHovering(!!e.target.closest('a,button,[data-hover],input,textarea,select,label'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkHover)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', checkHover) }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%', backgroundColor: '#2dd4bf', opacity: visible ? 1 : 0 }}
        animate={{ width: hovering ? 10 : 6, height: hovering ? 10 : 6 }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0, border: '1px solid rgba(45,212,191,0.4)' }}
        animate={{
          width: hovering ? 52 : 36, height: hovering ? 52 : 36,
          backgroundColor: hovering ? 'rgba(45,212,191,0.08)' : 'transparent',
          borderColor: hovering ? 'rgba(45,212,191,0.6)' : 'rgba(45,212,191,0.3)',
        }}
        transition={{ duration: 0.22 }}
      />
    </>
  )
}
