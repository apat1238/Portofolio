import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, CheckCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience } from '../data/portfolio'

const MAX_VISIBLE = 4

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#09090b] relative">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3"
        >Career</motion.p>
        <motion.h2
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
        >Experience</motion.h2>
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.1 }}
          className="text-zinc-400 mb-12 max-w-lg"
        >A track record of leadership and technical excellence across diverse industries.</motion.p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-8 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity:0, x:-16 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1, duration:0.45 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-[18px] w-[15px] h-[15px] rounded-full border-2 border-current bg-[#09090b] ${item.accentColor}`} />

                <div className="glass rounded-xl overflow-hidden group transition-all duration-200 hover:border-white/[0.12] hover:shadow-xl hover:shadow-indigo-500/[0.07] hover:-translate-y-0.5">
                  {/* Gradient top bar */}
                  <div className={`h-0.5 bg-gradient-to-r ${item.color} opacity-80`} />

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="min-w-0 flex-1">
                        {/* Role title */}
                        <Link
                          to={`/role/${item.slug}`}
                          className={`inline-flex items-center gap-1.5 font-semibold text-white hover:${item.accentColor} transition-colors group/link`}
                        >
                          <span className="text-[15px] leading-snug underline-offset-4 group-hover/link:underline decoration-current/30">
                            {item.role}
                          </span>
                          <ArrowUpRight size={13} className={`opacity-0 group-hover/link:opacity-100 transition-opacity ${item.accentColor}`} />
                        </Link>
                        {/* Company */}
                        <p className="text-sm text-zinc-400 mt-0.5 leading-snug">{item.company}</p>
                        {/* Period */}
                        <p className="text-xs text-zinc-600 mt-1 tabular-nums">{item.period}</p>
                      </div>

                      {/* View Detail button */}
                      <Link
                        to={`/role/${item.slug}`}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 ${item.accentColor} border-current/20 hover:bg-current/10 flex-shrink-0`}
                      >
                        View Detail <ChevronRight size={11} />
                      </Link>
                    </div>

                    {/* Responsibilities — max 4 visible */}
                    <ul className="space-y-1.5">
                      {item.responsibilities.slice(0, MAX_VISIBLE).map(r => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-zinc-400">
                          <CheckCircle size={12} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* More indicator */}
                    {item.responsibilities.length > MAX_VISIBLE && (
                      <Link
                        to={`/role/${item.slug}`}
                        className={`inline-flex items-center gap-1 mt-3 text-xs ${item.accentColor} hover:opacity-80 transition-opacity`}
                      >
                        +{item.responsibilities.length - MAX_VISIBLE} more responsibilities
                        <ChevronRight size={11} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity:0, x:-16 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay:0.35 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-[18px] w-[15px] h-[15px] rounded-full border-2 border-violet-500 bg-[#09090b]" />
              <div className="glass rounded-xl p-5 flex items-start gap-4">
                <GraduationCap size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-white">STIKOM Dinamika Bangsa</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Computer Systems — S.Kom</p>
                  <p className="text-xs text-zinc-600 mt-0.5">2010 – 2015</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
