export default function OwnerPortalPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <a href="/" className="inline-block mb-6 text-emerald-300 hover:text-emerald-200">← Înapoi la TrustCenter</a>
        <div className="rounded-2xl bg-emerald-900/40 border border-emerald-700/40 p-6">
          <h1 className="text-3xl font-bold text-emerald-100">Portal Proprietar (preview)</h1>
          <p className="text-emerald-200/80 mt-2">După ce cumperi – contul tău de proprietar.</p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="md:col-span-2 rounded-xl bg-emerald-800/40 border border-emerald-700/40 p-4">
              <div className="text-emerald-100 font-semibold mb-3">Status apartament</div>
              <ul className="text-sm text-emerald-200/90 space-y-2">
                <li>Snag list: 0 probleme deschise</li>
                <li>Ultima intervenție tehnică: 12/03/2025 – verificare centrală</li>
                <li>Notificări: 1 – Ședință asociație 28/03/2025</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-800/40 border border-emerald-700/40 p-4">
              <div className="text-emerald-100 font-semibold mb-3">Deschide tichet</div>
              <form className="space-y-2">
                <input placeholder="Titlu problemă" className="w-full p-2 rounded bg-emerald-900/40 border border-emerald-700/40 text-emerald-100" />
                <textarea placeholder="Descriere" rows="3" className="w-full p-2 rounded bg-emerald-900/40 border border-emerald-700/40 text-emerald-100"></textarea>
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded">Trimite</button>
              </form>
            </div>
            <div className="rounded-xl bg-emerald-800/40 border border-emerald-700/40 p-4">
              <div className="text-emerald-100 font-semibold mb-3">Lucrări în complex</div>
              <ul className="text-sm text-emerald-200/90 space-y-2">
                <li>Plantări primăvară – 04/2025</li>
                <li>Întreținere spații verzi – bilunar</li>
                <li>Revizie rețea apă – 06/2025</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-800/40 border border-emerald-700/40 p-4">
              <div className="text-emerald-100 font-semibold mb-3">Documente proprietar</div>
              <ul className="text-sm text-emerald-200/90 space-y-2">
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
