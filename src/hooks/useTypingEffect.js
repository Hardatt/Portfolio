import { useState, useEffect, useRef } from 'react'

export function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pause = 2200) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (paused) return
    const current = texts[index]

    timer.current = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1))
        } else {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, pause)
        }
      } else {
        if (display.length > 0) {
          setDisplay(display.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex(i => (i + 1) % texts.length)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer.current)
  }, [display, index, deleting, paused, texts, typingSpeed, deletingSpeed, pause])

  return display
}
