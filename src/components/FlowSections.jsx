import { motion } from 'framer-motion'

export function FlowCards() {
  const items = [
    {title:'Documente verificate', text:'Vezi autorizații, recepții, CF și garanții – explicate pe scurt, descărcabile.'},
    {title:'Disponibilitate în timp real', text:'Planuri, status vândut/rezervat și prețuri indicative pentru vile.'},
    {title:'Programare vizite', text:'Alege un slot în calendar sau cere un tur video live.'},
    {title:'Transparență costuri', text:'Configurator clar: parcare, boxă, TVA, exemplu rată ipotecar.'},
  ]
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-4">
        {items.map((it, i)=> (
          <motion.div key={i} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="card p-5">
            <div className="text-slate-900 font-semibold">{it.title}</div>
            <div className="text-slate-600 text-sm mt-2">{it.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function GalleryRibbon() {
  const imgs = [
    'https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  ]
  return (
    <section className="pb-6">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 w-[1400px] md:w-auto px-4">
          {imgs.map((src, i)=> (
            <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="relative h-44 md:h-56 min-w-[320px] md:min-w-[420px] rounded-2xl overflow-hidden">
              <img src={src} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTAFloat() {
  return (
    <section id="vizita" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-slate-900 font-semibold text-lg">Vezi vilele din Etapa II</div>
            <div className="text-slate-600">Alege un slot sau cere un tur video. Confirmare automată în 5 minute.</div>
          </div>
          <div className="flex gap-3">
            <a href="#costuri" className="btn-ghost">Vezi costuri</a>
            <a href="#" className="btn-primary">Programează vizită</a>
          </div>
        </div>
      </div>
    </section>
  )
}
