import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative overflow-hidden pt-16 pb-10 md:pt-20 md:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 w-[520px] h-[520px] rounded-full bg-emerald-100/60 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 -right-24 w-[580px] h-[580px] rounded-full bg-emerald-200/40 blur-3xl animate-float-slower" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Oază urbană. Case și apartamente cu ritm calm și detalii solide.
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7, delay:0.05}} className="mt-4 text-slate-600">
            Gardenia Residence, Borhanci – comunitate boutique cu parc privat, drum interior și Smart Living. Vezi statusul real, actele și programează o vizită în 60 de secunde.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#costuri" className="btn-primary">Vezi costurile</a>
            <a href="#vizita" className="btn-ghost">Programează vizită</a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="chip">Rating Google 4,7/5</span>
            <span className="chip">Parc privat 3.600 mp</span>
            <span className="chip">Acces Smart</span>
          </div>
        </div>
        <div className="relative h-[320px] md:h-[420px]">
          <motion.div initial={{opacity:0, scale:0.96}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="absolute inset-0 glass p-2">
            <div className="relative h-full rounded-2xl overflow-hidden border border-white/50">
              <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d4d?q=80&w=1500&auto=format&fit=crop" alt="Terase generoase" className="absolute inset-0 w-full h-full object-cover animate-slow-rotate"/>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-white/80 to-transparent">
                <div className="text-slate-900 font-medium">Terase mari, view spre verde</div>
                <div className="badge-green">Disponibil</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
