const team = [
  { name: 'Josué Yañez', role: 'CEO & Desarrollo de software', initials: 'JY', color: '#3b82f6' },
  { name: 'Roberto Roque', role: 'Desarrollo y diseño de software y web', initials: 'RR', color: '#10b981' },
  { name: 'Christian Ponce', role: 'Desarrollo y diseño de software y web', initials: 'CP', color: '#8b5cf6' },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#f5b700' }}>Nuestro Equipo</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#0d1b2e' }}>Conoce a los fundadores</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Somos estudiantes destacados, listos para demostrar que la excelencia no depende de los años, sino de la capacidad, actualización y dedicación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group rounded-2xl overflow-hidden" style={{ backgroundColor: '#0d1b2e' }}>
              <div className="h-52 flex items-center justify-center relative" style={{ background: `linear-gradient(135deg, ${member.color}33 0%, #0d1b2e 100%)` }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold"
                  style={{ backgroundColor: `${member.color}40`, border: `2px solid ${member.color}60` }}>
                  {member.initials}
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-sm">{member.name}</h3>
                <p className="text-slate-400 text-xs mt-1">{member.role}</p>
                <div className="mt-3 h-0.5 w-8 rounded" style={{ backgroundColor: member.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}