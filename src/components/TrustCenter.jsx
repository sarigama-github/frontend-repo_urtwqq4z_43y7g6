import { useState } from 'react'

function SoftBadge({ tone = 'green', label = 'Verde' }) {
  const map = {
    green: 'badge-green',
    yellow: 'badge-yellow',
    red: 'badge-red',
  }
  return <span className={map[tone]}>{label}</span>
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="soft-section-title">{title}</h2>
        {subtitle && <p className="soft-subtitle">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function ProjectPassport() {
  return (
    <div className="card p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Gardenia Residence – Etapa II (Vile Borhanci)</h3>
          <p className="text-slate-600 mt-1">Status: Proiect în execuție / livrare din 202X</p>
        </div>
        <SoftBadge tone="green" label="Sănătate proiect: Verde" />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card-muted p-4">
          <div className="text-slate-900 font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-slate-700 text-sm">
            <li>Autorizație de construire: emisă în 06/2023</li>
            <li>Recepție fază structură: 04/2024</li>
            <li><a href="#documente" className="text-emerald-700 underline">Vezi documente verificate</a></li>
          </ul>
        </div>
        <div className="card-muted p-4">
          <div className="text-slate-900 font-semibold">Finanțare & siguranța banilor</div>
          <ul className="mt-2 space-y-1 text-slate-700 text-sm">
            <li>Model de plată: max. 20% înainte de structură / restul la recepție</li>
            <li>Opțiune cont escrow / bancă parteneră: Banca X</li>
          </ul>
        </div>
        <div className="card-muted p-4">
          <div className="text-slate-900 font-semibold">Calitate & garanții</div>
          <ul className="mt-2 space-y-1 text-slate-700 text-sm">
            <li>Garanție structură: 10 ani</li>
            <li>Garanție finisaje/instalații: 2 ani</li>
            <li>Ultimul raport tehnic: 02/2025 (Vezi rezumat)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DocumentVault() {
  const docs = [
    { title: 'Autorizație de construire', date: '03/2024' },
    { title: 'Cartea tehnică a construcției – rezumat', date: '02/2025' },
    { title: 'Extras CF teren + construcție', date: '01/2025' },
    { title: 'Certificat de performanță energetică (EPBD)', date: '02/2025' },
    { title: 'Proces verbal recepție structură', date: '04/2024' },
    { title: 'Proces verbal recepție finală', date: '—' },
    { title: 'Regulament de condominiu', date: '02/2025' },
    { title: 'Model de antecontract + explicații', date: '02/2025' },
  ]
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {docs.map((d, i) => (
        <div key={i} className="card p-4">
          <div className="h-28 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-slate-500 text-sm">PDF Preview</div>
          <div className="mt-3 text-slate-900 font-medium">{d.title}</div>
          <div className="text-slate-500 text-xs mt-1">Actualizat la: {d.date}</div>
          <button className="mt-3 w-full btn-primary">Vezi PDF</button>
        </div>
      ))}
      <div className="md:col-span-3 lg:col-span-4 card-muted p-4">
        <div className="text-slate-900 font-semibold mb-2">Cum citim actele?</div>
        <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
          <li>Recepția confirmă că etapa a fost verificată oficial.</li>
          <li>Certificatul energetic arată eficiența clădirii în utilizare.</li>
          <li>Antecontractul descrie clar plățile, termenele și garanțiile.</li>
        </ul>
      </div>
    </div>
  )
}

function Timeline() {
  const items = [
    { label: 'Obținere autorizație', status: 'done', desc: 'Actele sunt emise, lucrările pot începe.' },
    { label: 'Finalizare structură vile 1–10', status: 'done', desc: 'Structuri verificate de dirigintele de șantier.' },
    { label: 'Branșamente utilități', status: 'progress', desc: 'Apă, gaz, energie – lucrări în derulare.' },
    { label: 'Testare canalizare & drenaj', status: 'done', desc: 'Test de presiune și drenaj – conform.' },
    { label: 'Amenajare parc privat 3.600 mp', status: 'progress', desc: 'Plantări de sezon și mobilier urban.' },
    { label: 'Predare vile 1–10', status: 'upcoming', desc: 'Programat: 09/2025.' },
    { label: 'Predare vile 11–28', status: 'upcoming', desc: 'Programat: 12/2025.' },
  ]

  const tone = (s) => s === 'done' ? 'badge-green' : s === 'progress' ? 'badge-yellow' : 'badge-green'

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[720px] grid grid-cols-7 gap-6">
        {items.map((m, i) => (
          <div key={i} className="card p-4">
            <div className="mt-1"><span className={tone(m.status)}>{m.status === 'done' ? 'Finalizat' : m.status === 'progress' ? 'În progres' : 'Urmează'}</span></div>
            <div className="mt-3 text-slate-900 font-medium">{m.label}</div>
            <div className="text-slate-600 text-sm">{m.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CostWizard() {
  const [type, setType] = useState('ap3')
  const presets = {
    ap3: { price: 220000, parking: 8000, box: 3000, vat: 0.09 },
    vilaA: { price: 400000, parking: 10000, box: 4000, vat: 0.19 },
    vilaB: { price: 470000, parking: 10000, box: 4000, vat: 0.19 },
  }
  const p = presets[type]
  const subtotal = p.price + p.parking + p.box
  const total = subtotal * (1 + p.vat)
  const monthly = Math.round((total * 0.85) / (25 * 12) * (1 + 0.06))

  return (
    <div className="card p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-slate-600 mb-2">Alege tipul de locuință</label>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="w-full bg-white text-slate-900 border border-slate-300 rounded-lg p-3">
            <option value="ap3">Apartament 3 camere (simulat)</option>
            <option value="vilaA">Vilă tip A</option>
            <option value="vilaB">Vilă tip B</option>
          </select>

          <div className="mt-6 space-y-3 text-slate-900">
            <div className="flex justify-between"><span>Preț listă locuință</span><span>{p.price.toLocaleString('ro-RO')} €</span></div>
            <div className="flex justify-between"><span>Loc de parcare</span><span>{p.parking.toLocaleString('ro-RO')} €</span></div>
            <div className="flex justify-between"><span>Boxă depozitare</span><span>{p.box.toLocaleString('ro-RO')} €</span></div>
            <div className="flex justify-between text-slate-700"><span>Subtotal</span><span>{subtotal.toLocaleString('ro-RO')} €</span></div>
            <div className="flex justify-between"><span>TVA</span><span>{Math.round(p.vat*100)}%</span></div>
            <div className="flex justify-between text-slate-900 font-semibold text-lg"><span>Total contract</span><span>{total.toLocaleString('ro-RO', {maximumFractionDigits:0})} €</span></div>
          </div>
        </div>
        <div>
          <div className="card-muted p-4">
            <div className="text-slate-900 font-semibold">Estimări lunare</div>
            <div className="mt-3 text-sm text-slate-700 space-y-2">
              <div className="flex justify-between"><span>Întreținere + fond reparații (4 pers.)</span><span>~120 €/lună</span></div>
              <div className="flex justify-between"><span>Exemplu rată ipotecar (25 ani, 6%)</span><span>~{monthly.toLocaleString('ro-RO')} €/lună</span></div>
            </div>
          </div>
          <div className="mt-4 card-muted p-4">
            <div className="text-slate-900 font-semibold mb-2">Ce NU vei plăti niciodată la noi</div>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Nu percepem comision de agenție</li>
              <li>Nu solicităm avansuri de 80–90% înainte de finalizare</li>
              <li>Nu vindem aceeași unitate la mai multe persoane</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function IssuesTracker() {
  const issues = [
    { type: 'Infiltrații balcon bloc B2', status: 'Rezolvat', time: '14 zile', note: 'Refacere hidroizolație. Verificat, fără recurențe 6 luni.' },
    { type: 'Presiune mică apă etaj 3 bloc B1', status: 'În curs', time: '—', note: 'Înlocuire pompă hidrofor · lucrare programată 21/05.' },
    { type: 'Zgomot ventilare centrală', status: 'Investigăm', time: '—', note: 'Măsurători fonice în curs, soluție propusă: amortizoare.' },
    { type: 'Drenaj curte casă A12', status: 'Rezolvat', time: '7 zile', note: 'Corecție pante + rigolă suplimentară.' },
  ]

  const tone = (s) => s === 'Rezolvat' ? 'badge-green' : s === 'În curs' ? 'badge-yellow' : 'badge-green'

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-600">
            <th className="py-2 pr-4">Problemă</th>
            <th className="py-2 pr-4">Status</th>
            <th className="py-2 pr-4">Timp de rezolvare</th>
            <th className="py-2">Comentariu scurt</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/70">
          {issues.map((i, idx) => (
            <tr key={idx} className="text-slate-900">
              <td className="py-3 pr-4">{i.type}</td>
              <td className="py-3 pr-4"><span className={tone(i.status)}>{i.status}</span></td>
              <td className="py-3 pr-4">{i.time}</td>
              <td className="py-3">{i.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Testimonials() {
  const items = [
    { name: 'Ana M., apartament 3 camere', year: 'mutare 2023', text: 'Liniște, multă verdeață și comunicare bună cu dezvoltatorul.' },
    { name: 'Dragoș P., vilă tip A', year: 'mutare 2024', text: 'Am avut o problemă minoră la drenaj – au rezolvat rapid și transparent.' },
    { name: 'Ioana & Vlad, tineri părinți', year: 'mutare 2022', text: 'Parcul privat și accesul la grădiniță din zonă sunt aur.' },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((t, i) => (
        <div key={i} className="card p-4">
          <div className="text-slate-700">“{t.text}”</div>
          <div className="mt-3 text-slate-500 text-sm">{t.name} • {t.year}</div>
        </div>
      ))}
    </div>
  )
}

function Ambient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute -top-12 -left-12 w-[420px] h-[420px] text-emerald-100/30 animate-float-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M39.3,-63.1C49.4,-56.8,54.7,-43.2,60.6,-30.6C66.5,-18,73,-6.4,73.3,5.1C73.7,16.7,68,28.2,59.5,36.1C51,44,39.8,48.3,28.4,54.5C17.1,60.7,5.7,68.8,-6.9,77.4C-19.5,86.1,-39,95.4,-52.1,90.4C-65.2,85.4,-72,66,-77.2,48.1C-82.4,30.2,-86,13.8,-84.2,-1.1C-82.3,-15.9,-74.9,-28.1,-64.9,-36.7C-54.9,-45.3,-42.3,-50.3,-30.6,-56.9C-19,-63.5,-9.5,-71.9,2.1,-75.6C13.7,-79.3,27.4,-78.4,39.3,-63.1Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute -bottom-24 -right-24 w-[520px] h-[520px] text-emerald-100/20 animate-float-slower" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M45.7,-68.4C59.1,-61.9,70.1,-49.6,76.6,-35.5C83.1,-21.4,85.1,-5.6,83.7,10.2C82.3,26,77.6,41.8,66.8,52.4C56,63.1,39.1,68.7,22.4,72.8C5.7,76.9,-10.9,79.6,-25.4,75.5C-39.9,71.4,-52.4,60.5,-61.9,47.4C-71.3,34.3,-77.7,19.2,-79.1,3.5C-80.5,-12.2,-76.8,-28.9,-68.2,-42.1C-59.6,-55.3,-46.1,-65.4,-31.5,-72.4C-16.9,-79.4,-0.8,-83.2,11.9,-78.5C24.6,-73.8,32.2,-60,45.7,-68.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  )
}

export default function TrustCenter() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
      <Ambient />

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
        </div>
      </header>

      <main>
        <section className="pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Transparență liniștitoare, fără stridențe</h1>
              <p className="mt-4 text-slate-600">Tot ce trebuie să știi înainte să semnezi: statutul proiectului, actele, costurile reale, problemele și rezolvările – la vedere. Ton calm, informații verificabile.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#costuri" className="btn-primary">Vezi costurile</a>
                <button onClick={()=>setOpen(true)} className="btn-ghost">Programează vizită</button>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center border border-slate-200 shadow-sm" />
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-emerald-100/60 rounded-full blur-2xl animate-float-slow" />
              <div className="absolute -bottom-8 -right-6 w-36 h-36 bg-emerald-200/50 rounded-full blur-2xl animate-float-slower" />
            </div>
          </div>
        </section>

        <Section id="pasaport" title="Pașaportul Proiectului" subtitle="Ce cumperi, de la cine și cât de solid e – în 10 secunde.">
          <ProjectPassport />
        </Section>

        <Section id="documente" title="Document Vault" subtitle="Toate actele importante într-un singur loc. Verificabile, descărcabile.">
          <DocumentVault />
        </Section>

        <Section id="timeline" title="Evoluția proiectului – etapă cu etapă" subtitle="Ce s-a promis vs. ce s-a livrat.">
          <Timeline />
        </Section>

        <Section id="costuri" title="Cost Transparency Wizard" subtitle="Fără surprize după ce semnezi.">
          <CostWizard />
        </Section>

        <Section id="probleme" title="Probleme & Rezolvări" subtitle="Nu ascundem problemele. Le documentăm și le rezolvăm.">
          <IssuesTracker />
        </Section>

        <Section id="testimoniale" title="Vocea Locatarilor" subtitle="Rezidenți Gardenia: ⭐ 4,7 / 5 (22 recenzii pe Google)">
          <Testimonials />
        </Section>

        <div className="max-w-6xl mx-auto px-4 pb-24">
          <div className="card-muted p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-slate-900 font-semibold">Vrei să vorbești cu un rezident?</div>
              <div className="text-slate-600 text-sm">Lasă datele și te punem în contact (email) cu un proprietar dispus să răspundă întrebărilor.</div>
            </div>
            <a href="#" className="btn-primary">Lasă datele</a>
          </div>
        </div>
      </main>

      <button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 z-40 btn-primary rounded-full">Programează vizită</button>
      <VisitOverlay open={open} onClose={()=>setOpen(false)} />

      <footer className="border-t border-slate-200 py-10 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 text-slate-600 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>BuiltToScale • TrustCenter demo pentru Gardenia</div>
          <div className="flex gap-4">
            <a href="/test" className="hover:text-slate-800">Test conexiune backend</a>
            <a href="/portal" className="hover:text-slate-800">Portal Proprietar (preview)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function VisitOverlay({ open, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: 'Vilă tip A' })

  const Slot = ({ label }) => (
    <button className="px-3 py-2 rounded border border-slate-300 bg-white text-slate-800 hover:bg-slate-50" onClick={()=>setStep(3)}>{label}</button>
  )

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative max-w-2xl mx-auto mt-24 bg-white border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">Programează vizită</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Închide</button>
        </div>

        {step === 1 && (
          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <button onClick={()=>setStep(2)} className="p-4 card-muted text-left hover:bg-white">
              <div className="text-slate-900 font-semibold">Vizită la fața locului</div>
              <div className="text-slate-600 text-sm">Ne vedem în complex, ghidat de un consultant.</div>
            </button>
            <button onClick={()=>setStep(2)} className="p-4 card-muted text-left hover:bg-white">
              <div className="text-slate-900 font-semibold">Tur video (WhatsApp/Zoom)</div>
              <div className="text-slate-600 text-sm">Prezentare live a vilelor disponibile.</div>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mt-4 space-y-3">
            <div className="text-slate-600">Alege interval preferat</div>
            <div className="flex flex-wrap gap-2">
              {['Mâine 10:00','Mâine 12:00','Mâine 16:30','Sâmbătă 11:00','Sâmbătă 14:00'].map((s,i)=>(
                <Slot key={i} label={s} />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); setStep(4)}}>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Nume</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full p-3 rounded-lg bg-white border border-slate-300 text-slate-900" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Telefon</label>
              <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="w-full p-3 rounded-lg bg-white border border-slate-300 text-slate-900" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full p-3 rounded-lg bg-white border border-slate-300 text-slate-900" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Tip locuință</label>
              <select value={form.type} onChange={(e)=>setForm({...form, type: e.target.value})} className="w-full p-3 rounded-lg bg-white border border-slate-300 text-slate-900">
                <option>Vilă tip A</option>
                <option>Vilă tip B</option>
                <option>Apartament 3 camere</option>
              </select>
            </div>
            <button type="submit" className="md:col-span-2 btn-primary">Trimite</button>
            <a href="https://wa.me/40700000000?text=Salut%20Gardenia%2C%20vreau%20o%20vizit%C4%83" target="_blank" rel="noreferrer" className="md:col-span-2 btn-ghost text-center">Scrie direct pe WhatsApp</a>
          </form>
        )}

        {step === 4 && (
          <div className="mt-6 p-6 card-muted">
            Mulțumim, te contactăm în scurt timp. Primești confirmare pe email/SMS în max. 15 minute în timpul programului.
          </div>
        )}
      </div>
    </div>
  )
}
