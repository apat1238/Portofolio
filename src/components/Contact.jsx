import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Send, Lock } from 'lucide-react'
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { personal } from '../data/portfolio'

const info = [
  { icon: MapPin, label: 'Location', value: personal.location, sub: 'Available remotely', color: 'text-violet-400' },
  { icon: Mail, label: 'Email', value: personal.email, sub: 'Reply within 24h', href: `mailto:${personal.email}`, color: 'text-sky-400' },
  { icon: Phone, label: 'Phone / WhatsApp', value: personal.phone, sub: '9 AM – 6 PM WIB', href: personal.whatsapp, color: 'text-emerald-400' },
]

const socials = [
  { href: personal.linkedin, icon: <FaLinkedinIn size={14} />, label: 'LinkedIn', hover: 'hover:text-sky-400' },
  { href: `mailto:${personal.email}`, icon: <Mail size={14} />, label: 'Email', hover: 'hover:text-pink-400' },
  { href: personal.github, icon: <FaGithub size={14} />, label: 'GitHub', hover: 'hover:text-zinc-200' },
  { href: personal.whatsapp, icon: <FaWhatsapp size={14} />, label: 'WhatsApp', hover: 'hover:text-emerald-400' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    setSent(true); setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-[#09090b] relative">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3"
        >Contact</motion.p>
        <motion.h2
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
        >Get In Touch</motion.h2>
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.1 }}
          className="text-zinc-400 mb-12 max-w-lg"
        >Have a project in mind or want to collaborate? Let's talk.</motion.p>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* Info panel */}
          <motion.div
            initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            className="glass rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-5">
              {info.map(({ icon:Icon, label, value, sub, href, color }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={15} className={`${color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <p className="text-[11px] text-zinc-600 uppercase tracking-wide font-medium">{label}</p>
                    {href
                      ? <a href={href} target="_blank" rel="noopener noreferrer" className={`text-sm text-zinc-300 hover:text-white transition-colors`}>{value}</a>
                      : <p className="text-sm text-zinc-300">{value}</p>
                    }
                    <p className="text-xs text-zinc-600 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-[11px] text-zinc-600 uppercase tracking-wide font-medium mb-3">Find me on</p>
              <div className="flex gap-2.5">
                {socials.map(({ href, icon, label, hover }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-zinc-500 transition-all hover:border-white/20 ${hover}`}>
                    {icon}
                  </a>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a href={`mailto:${personal.email}`}
                  className="flex items-center justify-center gap-2 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-colors">
                  <Mail size={14} /> Email Me Directly
                </a>
                <a href={`tel:${personal.phone.replace(/\s/g,'')}`}
                  className="flex items-center justify-center gap-2 py-2.5 border border-white/[0.08] hover:border-white/[0.15] text-zinc-300 hover:text-white text-sm font-medium rounded-xl transition-colors">
                  <Phone size={14} /> Schedule a Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold text-white mb-5">Send a Message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-zinc-500 font-medium uppercase tracking-wide block mb-1.5">Name</label>
                  <input name="name" value={form.name} onChange={onChange} required placeholder="Your name"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] text-zinc-200 placeholder-zinc-600 text-sm rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" />
                </div>
                <div>
                  <label className="text-[11px] text-zinc-500 font-medium uppercase tracking-wide block mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] text-zinc-200 placeholder-zinc-600 text-sm rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-zinc-500 font-medium uppercase tracking-wide block mb-1.5">Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} required placeholder="Project inquiry"
                  className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] text-zinc-200 placeholder-zinc-600 text-sm rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" />
              </div>
              <div>
                <label className="text-[11px] text-zinc-500 font-medium uppercase tracking-wide block mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project..."
                  className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.08] text-zinc-200 placeholder-zinc-600 text-sm rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none" />
              </div>
              <button type="submit"
                className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  sent ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                       : 'bg-indigo-500 hover:bg-indigo-400 text-white'
                }`}>
                <Send size={14} /> {sent ? 'Sent! ✓' : 'Send Message'}
              </button>
              <p className="text-center text-[11px] text-zinc-600 flex items-center justify-center gap-1.5">
                <Lock size={10} /> Your information is kept private
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
