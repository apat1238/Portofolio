import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Phone, Rocket } from 'lucide-react'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { personal, stats } from '../data/portfolio'

const TITLES = ['IT Supervisor', 'System Administrator', 'Web Developer', 'Network Engineer']

function useTypewriter(words, speed = 75, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx % words.length]
    let t
    if (!deleting && display === word) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIdx(i => (i + 1) % words.length)
    } else {
      t = setTimeout(() => {
        setDisplay(deleting ? word.slice(0, display.length - 1) : word.slice(0, display.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(t)
  }, [display, deleting, idx, words, speed, pause])

  return display
}

const socials = [
  { href: personal.linkedin, icon: <FaLinkedinIn size={14} />, label: 'LinkedIn' },
  { href: `mailto:${personal.email}`, icon: <Mail size={14} />, label: 'Email' },
  { href: personal.whatsapp, icon: <FaWhatsapp size={14} />, label: 'WhatsApp' },
]

export default function Hero() {
  const title = useTypewriter(TITLES)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#09090b]">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-indigo pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] glow-violet pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 xl:gap-20">

          {/* ── Text column ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.08 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
            >
              {personal.name.split(' ').slice(0,2).join(' ')}
              <br />
              <span className="gradient-text">{personal.name.split(' ').slice(2).join(' ')}</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}
              className="mt-4 h-7 flex items-center"
            >
              <span className="text-lg text-zinc-400 font-mono">
                {title}
                <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.35, duration:0.5 }}
              className="mt-6 text-zinc-400 text-base leading-relaxed max-w-xl"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href={personal.cvFile} download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
              >
                <Download size={15} /> Download CV
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/[0.18] text-sm font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
              className="mt-12 flex gap-8 justify-center lg:justify-start"
            >
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-150"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo column (right / top-on-mobile) ── */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.2, duration:0.6 }}
            className="flex-shrink-0 flex justify-center"
          >
            {/* Outer glow ring */}
            <div className="relative flex flex-col items-center gap-3">
              {/* Soft glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-600/20 blur-2xl scale-110" />

              {/* Photo container — gradient border ring + perfect circle */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full p-[2px] bg-gradient-to-br from-indigo-500/70 via-violet-500/50 to-pink-500/20 shadow-2xl shadow-black/50 group cursor-default">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: '50% 50%' }}
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Decorative rings */}
                <div className="absolute -inset-3 rounded-full border border-indigo-500/10 pointer-events-none" />
                <div className="absolute -inset-6 rounded-full border border-indigo-500/5 pointer-events-none" />
              </div>

              {/* Status badge — below the frame */}
              <div className="relative z-10 flex items-center gap-1.5 bg-[#09090b]/90 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-medium">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y:[0,5,0] }} transition={{ duration:1.6, repeat:Infinity }}
          className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent"
        />
        <span className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">scroll</span>
      </motion.div>
    </section>
  )
}
