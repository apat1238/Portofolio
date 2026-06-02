import { ArrowUp } from 'lucide-react'
import { personal } from '../data/portfolio'

const links = ['Home','About','Skills','Experience','Projects','Contact']

export default function Footer() {
  const go = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' })

  return (
    <footer className="border-t border-white/[0.06] bg-[#09090b] py-8">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">M</span>
          </div>
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} {personal.nameShort}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">
              {l}
            </button>
          ))}
        </nav>

        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-300 transition-colors">
          <ArrowUp size={12} /> Top
        </button>
      </div>
    </footer>
  )
}
