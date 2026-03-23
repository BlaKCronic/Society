const team = [
  {
    name: 'Josué Yañez',
    role: 'CEO & Desarrollo de Software',
    description: 'Lidera la arquitectura de sistemas y coordina los proyectos. Especialista en backend y bases de datos.',
    initials: 'JY',
    color: '#3b82f6',
  },
  {
    name: 'Christian Eduardo',
    role: 'Desarrollo Web & Software',
    description: 'Diseña y programa interfaces modernas. Domina el desarrollo frontend y la experiencia de usuario.',
    initials: 'CE',
    color: '#10b981',
  },
  {
    name: 'Roberto Roque',
    role: 'Desarrollo Web & Software',
    description: 'Experto en integración de sistemas y lógica de negocio. Se encarga de que todo funcione de punta a punta.',
    initials: 'RR',
    color: '#8b5cf6',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f5b700' }}>Nuestro Equipo</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#0d1b2e' }}>Conoce a los fundadores</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Tres estudiantes del Tecnológico de Celaya unidos por la misma visión: llevar tecnología de calidad a los negocios del Bajío.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="group rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: '#0d1b2e' }}>
              <div className="h-48 flex items-center justify-center relative" style={{ background: `linear-gradient(135deg, ${member.color}33 0%, #0d1b2e 100%)` }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold"
                  style={{ backgroundColor: `${member.color}40`, border: `2px solid ${member.color}60` }}>
                  {member.initials}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-white text-base">{member.name}</h3>
                <p className="text-xs font-semibold mt-0.5 mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{member.description}</p>
                <div className="mt-4 h-0.5 w-8 rounded" style={{ backgroundColor: member.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-8 text-center max-w-2xl mx-auto" style={{ backgroundColor: '#f8f9fb', border: '1px solid #e2e8f0' }}>
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong className="text-slate-700">Estudiantes del Tec de Celaya</strong> — Ingeniería en Sistemas Computacionales. Comprometidos con la calidad, la puntualidad y la honestidad en cada entrega.
          </p>
        </div>
      </div>
    </section>
  )
}