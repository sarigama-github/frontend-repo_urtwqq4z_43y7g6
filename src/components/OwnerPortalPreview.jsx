export default function OwnerPortalPreview() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <a href="/" className="inline-block mb-6 text-slate-600 hover:text-slate-800">← Înapoi la TrustCenter</a>
        <div className="card p-6">
          <h1 className="text-3xl font-bold text-slate-900">Portal Proprietar (preview)</h1>
          <p className="text-slate-600 mt-2">După ce cumperi – contul tău de proprietar.</p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="md:col-span-2 card-muted p-4">
              <div className="text-slate-900 font-semibold mb-3">Status apartament</div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>Snag list: 0 probleme deschise</li>
                <li>Ultima intervenție tehnică: 12/03/2025 – verificare centrală</li>
                <li>Notificări: 1 – Ședință asociație 28/03/2025</li>
              </ul>
            </div>
            <div className="card-muted p-4">
              <div className="text-slate-900 font-semibold mb-3">Deschide tichet</div>
              <form className="space-y-2">
                <input placeholder="Titlu problemă" className="w-full p-2 rounded bg-white border border-slate-300 text-slate-900" />
                <textarea placeholder="Descriere" rows="3" className="w-full p-2 rounded bg-white border border-slate-300 text-slate-900"></textarea>
                <button className="w-full btn-primary">Trimite</button>
              </form>
            </div>
            <div className="card-muted p-4">
              <div className="text-slate-900 font-semibold mb-3">Lucrări în complex</div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>Plantări primăvară – 04/2025</li>
                <li>Întreținere spații verzi – bilunar</li>
                <li>Revizie rețea apă – 06/2025</li>
              </ul>
            </div>
            <div className="card-muted p-4">
              <div className="text-slate-900 font-semibold mb-3">Documente proprietar</div>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>Contract vânzare-cumpărare (PDF)</li>
                <li>Garanții și instrucțiuni (PDF)</li>
                <li>Proces verbal predare-primire (PDF)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
