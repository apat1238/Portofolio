import { motion } from 'framer-motion'
import { ExternalLink, Scale, BarChart3, Network, Camera, Code2, Calendar } from 'lucide-react'
import { projects, miniProjects } from '../data/portfolio'

const iconMap = { Scale, BarChart3, Network, Camera, Code2 }

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#09090b] relative">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3"
        >Work</motion.p>
        <motion.h2
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
        >Featured Projects</motion.h2>
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.1 }}
          className="text-zinc-400 mb-12 max-w-lg"
        >Enterprise-grade applications built with precision and scalability.</motion.p>

        {/* Featured */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {projects.map((proj, i) => {
            const Icon = iconMap[proj.icon] || Code2
            const CardEl = proj.noLink ? motion.div : motion.a
            const linkProps = proj.noLink
              ? {}
              : { href: proj.link, target: '_blank', rel: 'noopener noreferrer' }
            return (
              <CardEl
                key={proj.title}
                {...linkProps}
                initial={{ opacity:0, y:16 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y:-4 }}
                className={`group glass glass-hover rounded-2xl overflow-hidden block ${proj.noLink ? 'cursor-default' : ''}`}
              >
                {/* Top color bar */}
                <div className={`h-1 bg-gradient-to-r ${proj.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${proj.color} flex items-center justify-center`}>
                        <Icon size={17} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white leading-tight">{proj.title}</h3>
                        <p className="text-xs text-zinc-500 mt-0.5">{proj.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${proj.badgeColor}`}>{proj.badge}</span>
                      {!proj.noLink && <ExternalLink size={13} className="text-zinc-600 group-hover:text-indigo-400 transition-colors" />}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map(t => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-500">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-[11px] text-zinc-600">
                    <Calendar size={10} /> {proj.year}
                  </div>
                </div>
              </CardEl>
            )
          })}
        </div>

        {/* Mini projects */}
        <div className="grid sm:grid-cols-3 gap-3">
          {miniProjects.map((proj, i) => {
            const Icon = iconMap[proj.icon] || Code2
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity:0, y:12 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y:-3 }}
                className="glass glass-hover rounded-xl p-5"
              >
                <Icon size={18} className="text-indigo-400 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1.5">{proj.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-3">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-500">{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2 }}
          className="mt-8 text-center"
        >
          <a href="http://scale.kesug.com/login.php" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/20 hover:border-indigo-500/40 px-5 py-2.5 rounded-xl">
            <ExternalLink size={14} /> View Live Weighing System
          </a>
          <p className="mt-2 text-xs text-zinc-600">Username: demo | Password: demo123</p>
        </motion.div>
      </div>
    </section>
  )
}
