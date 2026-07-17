import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ScrollHint({ watch }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const atBottom = window.scrollY >= scrollable - 16
      setVisible(scrollable > 48 && !atBottom)
    }

    // content height can change after the tab-switch animation settles
    check()
    const raf = requestAnimationFrame(check)
    const timeout = setTimeout(check, 320)

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)

    const observer = new ResizeObserver(check)
    observer.observe(document.body)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      observer.disconnect()
    }
  }, [watch])

  return (
    <div
      className={`scroll-hint${visible ? ' is-visible' : ''}`}
      aria-hidden="true"
    >
      <span className="scroll-hint__label">Scroll</span>
      <ChevronDown className="scroll-hint__arrow" size={22} strokeWidth={2} />
    </div>
  )
}
