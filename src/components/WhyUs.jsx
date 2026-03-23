const reasons = [
  {
    title: 'Precio accesible',
    description: 'Al ser estudiantes tenemos costos operativos bajos, lo que se traduce en precios competitivos sin sacrificar calidad.',
    path: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2',
  },
  {
    title: 'Atención personalizada',
    description: 'No eres un ticket de soporte. Tienes comunicación directa con los desarrolladores durante todo el proyecto.',
    path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  },
  {
    title: 'Tecnología actual',
    description: 'Usamos las herramientas y frameworks modernos que aprendemos en el Tec: React, bases de datos SQL/NoSQL, Python, y más.',
    path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    title: 'Soporte post-entrega',
    description: 'Una vez entregado tu proyecto, seguimos disponibles para ajustes, correcciones y mejoras continuas.',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Entregas en tiempo',
    description: 'Nos comprometemos con fechas reales. Establecemos un plan de trabajo claro y te mantenemos informado en cada etapa.',
    path: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  },
]

export default function WhyUs() {
  return (
    <section id="elegirnos" className="py-24" style={{ backgroundColor: '#0d1b2e' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#f5b700' }}>Por qué elegirnos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
              Experiencia de equipo senior,{' '}
              <span style={{ color: '#f5b700' }}>precios de equipo joven.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              Somos estudiantes del Tec de Celaya con ganas de demostrar de lo que somos capaces. Cada proyecto es una oportunidad de brillar y construir relaciones duraderas con nuestros clientes.
            </p>
            <a href="#contacto" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90" style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}>
              Hablemos de tu proyecto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
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