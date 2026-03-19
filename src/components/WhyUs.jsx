const reasons = [
  {
    title: 'Algo',
    description: 'Algo.',
    path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    title: 'Algo',
    description: 'Algo.',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Algo',
    description: 'Algo.',
    path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
  },
  {
    title: 'Algo',
    description: 'Algo.',
    path: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2',
  },
]

export default function WhyUs() {
  return (
    <section id="elegirnos" className="py-24" style={{ backgroundColor: '#0d1b2e' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#f5b700' }}>Por qué elegirnos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
              Necesitamos{' '}
              <span style={{ color: '#f5b700' }}>DINERO</span>, es hora de{' '}
              <span style={{ color: '#f5b700' }}>CHAMBEAR</span>.
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Yañez Society (algo).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl p-5 transition-all hover:-translate-y-0.5" style={{ backgroundColor: '#1a2a40' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(245,183,0,0.15)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={reason.path} />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}