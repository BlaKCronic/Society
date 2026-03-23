export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0d1b2e' }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#f5b700' }} />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#3b82f6' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#f5b700' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f5b700' }}>
              Desarrollo de software · Celaya, Gto.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
            Tecnología a la medida{' '}
            <span style={{ color: '#f5b700' }}>de tu negocio.</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
            Somos estudiantes del Tec de Celaya especializados en desarrollo web y de software. Creamos soluciones digitales modernas y migramos tus procesos — desde hojas de cálculo hasta sistemas profesionales.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#servicios" className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90" style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}>
              Conoce nuestros servicios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contacto" className="px-7 py-3.5 rounded-full font-bold text-sm border text-white transition-all hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              Agendar asesoría gratuita
            </a>
          </div>

          <div className="flex flex-wrap gap-10">
            {[
              { value: '4+', label: 'Años de experiencia académica' },
              { value: '100%', label: 'Compromiso con el cliente' },
              { value: 'TEC', label: 'Celaya — Ingeniería en sistemas' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold" style={{ color: '#f5b700' }}>{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase text-slate-500">Descubrir</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}