import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavMotion() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-slate-900 font-bold tracking-tight">Gardenia • TrustCenter</a>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#pasaport" className="hover:text-slate-800">Pașaport</a>
          <a href="#documente" className="hover:text-slate-800">Documente</a>
          <a href="#timeline" className="hover:text-slate-800">Timeline</a>
          <a href="#costuri" className="hover:text-slate-800">Costuri</a>
          <a href="#probleme" className="hover:text-slate-800">Probleme</a>
          <a href="#testimoniale" className="hover:text-slate-800">Testimoniale</a>
          <a href="/portal" className="hover:text-slate-800">Portal proprietar</a>
        </nav>
        <button className="md:hidden chip" onClick={()=>setOpen(v=>!v)}>Meniu</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="md:hidden overflow-hidden border-t border-slate-200 bg-white/90">
            <div className="px-4 py-3 flex flex-col gap-2 text-slate-700">
              <a href="#pasaport" onClick={()=>setOpen(false)}>Pașaport</a>
              <a href="#documente" onClick={()=>setOpen(false)}>Documente</a>
              <a href="#timeline" onClick={()=>setOpen(false)}>Timeline</a>
              <a href="#costuri" onClick={()=>setOpen(false)}>Costuri</a>
              <a href="#probleme" onClick={()=>setOpen(false)}>Probleme</a>
              <a href="#testimoniale" onClick={()=>setOpen(false)}>Testimoniale</a>
              <a href="/portal" onClick={()=>setOpen(false)}>Portal proprietar</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
