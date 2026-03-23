const services = [
  {
    icon: '</>',
    color: '#3b82f6',
    title: 'Desarrollo Web',
    description: 'Diseñamos y construimos sitios web modernos, rápidos y responsivos. Landing pages, portafolios, catálogos en línea, e-commerce y aplicaciones web a la medida de tu negocio.',
    bullets: ['Diseño UI/UX atractivo', 'Adaptable a celular y tablet', 'SEO básico incluido', 'Entrega en tiempo acordado'],
  },
  {
    icon: '⬡',
    color: '#10b981',
    title: 'Desarrollo de Software',
    description: 'Creamos sistemas de escritorio o web totalmente personalizados: control de inventario, facturación, agendas, CRM, reportes y cualquier proceso que necesites automatizar.',
    bullets: ['Análisis de requerimientos sin costo', 'Interfaz intuitiva', 'Base de datos robusta', 'Documentación y capacitación'],
  },
  {
    icon: '⇄',
    color: '#f59e0b',
    title: 'Migración de Software',
    description: '¿Todavía usas hojas de Excel para controlar tu negocio? Te ayudamos a migrar tus procesos a un sistema profesional: más rápido, seguro y fácil de usar para todo tu equipo.',
    bullets: ['De Excel a sistema web o desktop', 'Sin pérdida de tu información', 'Capacitación al equipo', 'Soporte post-migración'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f5b700' }}>Nuestras Especialidades</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mx-auto mb-4" style={{ color: '#0d1b2e' }}>
            Soluciones digitales completas para tu empresa
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Desde una página web hasta un sistema empresarial completo — nos adaptamos al tamaño y presupuesto de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl p-7 border border-slate-100 transition-all hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5 flex flex-col">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-5 flex-shrink-0" style={{ backgroundColor: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#0d1b2e' }}>{svc.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.description}</p>
              <ul className="space-y-2 mt-auto">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${svc.color}20` }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={svc.color} strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          ¿No encuentras lo que buscas?{' '}
          <a href="#contacto" className="font-semibold underline underline-offset-2" style={{ color: '#f5b700' }}>
            Escríbenos y lo evaluamos juntos.
          </a>
        </p>
      </div>
    </section>
  )
}