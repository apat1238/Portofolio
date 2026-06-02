import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Trophy, Briefcase, Building2, Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import SEO from '../components/SEO'

// Reusable animation
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
})

export default function RoleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const role = experience.find(e => e.slug === slug)

  if (!role) {
    return (
      <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-center px-6">
        <p className="text-zinc-500 mb-4">Role not found.</p>
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1.5">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#09090b] dot-grid">
      <SEO 
        title={`${role.role} at ${role.company}`} 
        description={role.overview} 
        type="profile"
      />
      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-indigo pointer-events-none -z-0" />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={15} /> Back
          </button>
          <div className="h-4 w-px bg-white/[0.08]" />
          <div className="text-sm text-zinc-500">{role.company}</div>
          <div className="ml-auto">
            <span className={`text-xs font-semibold uppercase tracking-widest ${role.accentColor}`}>
              {role.period}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-14 relative z-10">

        {/* Hero block */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold uppercase tracking-widest ${role.accentColor}`}>
              Position Detail
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-xs text-zinc-600">{role.period}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
            {role.role}
          </h1>
          <p className="text-lg text-zinc-400">{role.company}</p>

          {/* Environment pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              { icon: Building2, text: role.environment[0] },
              { icon: Briefcase, text: role.environment[1] },
              { icon: Calendar, text: role.environment[2] },
              { icon: MapPin, text: role.environment[3] },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-zinc-400">
                <Icon size={12} className={role.accentColor} />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="divider mb-12" />

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Left column */}
          <div className="space-y-10">

            {/* Overview */}
            <motion.section {...fadeUp(0.08)}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{role.overview}</p>
            </motion.section>

            {/* Responsibilities */}
            <motion.section {...fadeUp(0.15)}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {role.responsibilities.map(r => (
                  <li key={r} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Achievements */}
            <motion.section {...fadeUp(0.22)}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                Key Achievements
              </h2>
              <ul className="space-y-3">
                {role.achievements.map((a, i) => (
                  <li key={a} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold bg-gradient-to-br ${role.color} text-white`}>
                      {i + 1}
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right sidebar */}
          <motion.div {...fadeUp(0.12)} className="space-y-6">

            {/* Skills */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                Skills Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {role.roleSkills.map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                At a Glance
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wide">Duration</p>
                  <p className="text-sm text-zinc-200 font-medium mt-0.5">{role.period}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wide">Company</p>
                  <p className="text-sm text-zinc-200 font-medium mt-0.5">{role.company}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wide">Industry</p>
                  <p className="text-sm text-zinc-200 font-medium mt-0.5">{role.environment[1]}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wide">Location</p>
                  <p className="text-sm text-zinc-200 font-medium mt-0.5">{role.environment[3]}</p>
                </div>
              </div>
            </div>

            {/* Achievement count */}
            <div className={`glass rounded-2xl p-5 bg-gradient-to-br ${role.color} bg-opacity-5 border border-white/[0.06]`}>
              <div className="flex items-center gap-3">
                <Trophy size={20} className={role.accentColor} />
                <div>
                  <p className="text-2xl font-bold text-white">{role.achievements.length}</p>
                  <p className="text-xs text-zinc-500">Key Achievements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other roles */}
        <div className="mt-16">
          <div className="divider mb-8" />
          <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-5">Other Roles</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {experience.filter(e => e.slug !== slug).map(exp => (
              <Link
                key={exp.slug}
                to={`/role/${exp.slug}`}
                className="glass glass-hover rounded-xl p-4 flex items-start gap-4 group"
              >
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${exp.dotColor}`} />
                <div>
                  <p className="text-sm font-medium text-white group-hover:gradient-text transition-all">{exp.role}</p>
                  <p className="text-xs text-zinc-500">{exp.company}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{exp.period}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
