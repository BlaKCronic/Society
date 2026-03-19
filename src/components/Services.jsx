const services = [
  { icon: '</>', color: '#3b82f6', title: 'Desarrollo Web', description: 'Creamos sitios web modernos, rápidos y responsivos. Desde landing pages hasta e-commerce completos y aplicaciones web a medida.' },
  { icon: '▦', color: '#10b981', title: 'Cosa', description: 'Algo.' },
  { icon: '⬡', color: '#06b6d4', title: 'Cosa', description: 'Algo.' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f5b700' }}>Nuestras Especialidades</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mx-auto mb-4" style={{ color: '#0d1b2e' }}>
            Soluciones integrales para todas las necesidades de tu empresa
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Deja las áreas complejas en nuestras manos mientras tú te enfocas en tu producto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl p-7 border border-slate-100 transition-all hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-5" style={{ backgroundColor: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: svc.color }}>{svc.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}