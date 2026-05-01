export default function About() {
  return (
    <section id="nosotros" className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              Sobre Nosotros
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              Talento local, soluciones reales para tu empresa.
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              Yañez Society somos tres estudiantes de Ingeniería en Sistemas Computacionales del Tecnológico de Celaya, unidos por la misma pasión: construir software que resuelva problemas reales. Aunque somos jóvenes, nuestro compromiso con la calidad, los plazos de entrega y la atención al cliente es totalmente profesional.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Entendemos que cada negocio es diferente, por eso escuchamos primero y desarrollamos después. Nuestro objetivo es que tecnología que antes solo estaba al alcance de grandes empresas, hoy sea accesible para los negocios y emprendedores de todas las regiones.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Sitios Web', 'Software a la medida', 'Migración de sistemas', 'Soporte continuo'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-4 py-2 rounded-full border"
                  style={{ color: 'var(--text-primary)', borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '3', label: 'Fundadores especializados en desarrollo' },
              { number: 'TEC', label: 'Celaya — formación de alto nivel técnico' },
              { number: '∞', label: 'Disposición y flexibilidad de horario' },
              { number: 'Cero', label: 'Costos ocultos — siempre transparencia total' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 flex flex-col gap-2"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
              >
                <span className="text-3xl font-extrabold" style={{ color: 'var(--accent)' }}>{item.number}</span>
                <span className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}