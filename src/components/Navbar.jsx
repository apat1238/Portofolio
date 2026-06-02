import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['home','about','skills','experience','projects','contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.getElementById(href.replace('#',''))?.scrollIntoView({ behavior:'smooth' })
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => go('#home')} className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="font-semibold text-white/90 text-sm tracking-tight hidden sm:block">
            M Arapat Rahman
          </span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ label, href }) => {
            const id = href.replace('#','')
            return (
              <button
                key={label}
                onClick={() => go(href)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-150 ${
                  active === id
                    ? 'text-white bg-white/[0.07]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go('#contact')}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-4 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-4 }}
            transition={{ duration:0.15 }}
            className="md:hidden border-t border-white/[0.06] bg-[#09090b]/95 backdrop-blur-md px-6 py-3"
          >
            {NAV.map(({ label, href }) => (
              <button key={label} onClick={() => go(href)}
                className="w-full text-left py-2.5 text-sm text-zinc-300 hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
              >{label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
