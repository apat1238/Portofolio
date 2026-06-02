import { motion } from 'framer-motion'
import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLinux, FaImage, FaFilm } from 'react-icons/fa'
import { SiMysql, SiJavascript, SiLaravel, SiVite } from 'react-icons/si'
import { MdNetworkWifi, MdVideocam, MdRouter, MdDns, MdScale } from 'react-icons/md'
import { additionalSkills } from '../data/portfolio'

const skills = [
  { name: 'Python', icon: <FaPython />, color: '#f59e0b' },
  { name: 'PHP', icon: <FaPhp />, color: '#8b5cf6' },
  { name: 'MySQL', icon: <SiMysql />, color: '#3b82f6' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#ef4444' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#06b6d4' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#eab308' },
  { name: 'React', icon: <FaReact />, color: '#38bdf8' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#22c55e' },
  { name: 'Networking', icon: <MdNetworkWifi />, color: '#10b981' },
  { name: 'CCTV', icon: <MdVideocam />, color: '#f43f5e' },
  { name: 'Mikrotik', icon: <MdRouter />, color: '#6366f1' },
  { name: 'Cisco', icon: <MdDns />, color: '#0ea5e9' },
  { name: 'Linux', icon: <FaLinux />, color: '#a1a1aa' },
  { name: 'Timbangan (PyQt5)', icon: <MdScale />, color: '#f97316' },
  { name: 'Laravel', icon: <SiLaravel />, color: '#ef4444' },
  { name: 'Vite.js', icon: <SiVite />, color: '#a855f7' },
  { name: 'Photoshop', icon: <FaImage />, color: '#4f83db' },
  { name: 'Premiere', icon: <FaFilm />, color: '#7c3aed' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#09090b] relative">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3"
        >Skills</motion.p>
        <motion.h2
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
        >Technical Stack</motion.h2>
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.1 }}
          className="text-zinc-400 mb-12 max-w-lg"
        >Technologies and tools I use to build robust solutions.</motion.p>

        {/* Skill grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity:0, y:12 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y:-3 }}
              className="glass glass-hover rounded-xl p-4 flex flex-col items-center gap-2.5 cursor-default"
            >
              <span style={{ color: skill.color }} className="text-2xl">{skill.icon}</span>
              <span className="text-xs text-zinc-400 font-medium text-center leading-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
        >
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-4">More</p>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map(s => (
              <span key={s} className="badge cursor-default">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
