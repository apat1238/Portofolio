import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, Calendar, User, Heart, GraduationCap, MapPin, CheckCircle, Star } from 'lucide-react'
import { personal, expertise, approach } from '../data/portfolio'

const infoCards = [
  { icon: Phone, label: 'Mobile', value: personal.phone, color: 'text-indigo-400' },
  { icon: MessageCircle, label: 'WhatsApp', value: personal.phone, href: personal.whatsapp, color: 'text-emerald-400' },
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'text-sky-400' },
  { icon: Calendar, label: 'Birthdate', value: personal.birthdate, color: 'text-amber-400' },
  { icon: User, label: 'Status', value: personal.status, color: 'text-pink-400' },
  { icon: Heart, label: 'Religion', value: personal.religion, color: 'text-red-400' },
  { icon: GraduationCap, label: 'Education', value: personal.education, sub: `${personal.eduField} • ${personal.eduYear}`, color: 'text-violet-400', wide: true },
  { icon: MapPin, label: 'Location', value: personal.location, color: 'text-orange-400' },
]

const anim = (delay = 0) => ({
  initial: { opacity:0, y:16 },
  whileInView: { opacity:1, y:0 },
  viewport: { once:true },
  transition: { duration:0.45, delay },
})

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#09090b] relative">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <motion.p {...anim()} className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">About</motion.p>
        <motion.h2 {...anim(0.05)} className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          Who I Am
        </motion.h2>
        <motion.p {...anim(0.1)} className="text-zinc-400 max-w-xl mb-12 leading-relaxed">
          A seasoned IT professional with 10+ years of experience in system administration, network engineering, and full-stack web development.
        </motion.p>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {infoCards.map(({ icon: Icon, label, value, sub, color, href, wide }, i) => (
            <motion.div
              key={label}
              {...anim(i * 0.04)}
              className={`glass glass-hover rounded-xl p-4 ${wide ? 'sm:col-span-2' : ''}`}
            >
              {href
                ? <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
                    <Icon size={16} className={`mt-0.5 flex-shrink-0 ${color}`} />
                    <div className="min-w-0">
                      <p className="text-[11px] text-zinc-600 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-sm text-zinc-200 font-medium truncate">{value}</p>
                      {sub && <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>}
                    </div>
                  </a>
                : <div className="flex items-start gap-3">
                    <Icon size={16} className={`mt-0.5 flex-shrink-0 ${color}`} />
                    <div className="min-w-0">
                      <p className="text-[11px] text-zinc-600 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-sm text-zinc-200 font-medium truncate">{value}</p>
                      {sub && <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>}
                    </div>
                  </div>
              }
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div {...anim(0.25)} className="glass rounded-2xl p-7 grid sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">Technical Expertise</h4>
            <ul className="space-y-2.5">
              {expertise.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">Professional Approach</h4>
            <ul className="space-y-2.5">
              {approach.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <Star size={13} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
