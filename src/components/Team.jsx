const team = [
  {
    name: 'Josué Yañez',
    role: 'CEO & Desarrollo de Software',
    description: 'Lidera la arquitectura de sistemas y coordina los proyectos. Especialista en backend, bases de datos y servicios contables & fiscales conforme al SAT.',
    initials: 'JY',
    color: '#9B9486',
  },
  {
    name: 'Christian Eduardo',
    role: 'Desarrollo Web & Software',
    description: 'Diseña y programa interfaces modernas. Domina el desarrollo frontend y la experiencia de usuario.',
    initials: 'CE',
    color: '#000033',
  },
  {
    name: 'Roberto Roque',
    role: 'Desarrollo Web & Software',
    description: 'Experto en integración de sistemas y lógica de negocio. Se encarga de que todo funcione de punta a punta.',
    initials: 'RR',
    color: '#726D64',
  },
  {
    name: 'Oscar',
    role: 'DevOps & Seguridad',
    description: 'Administra la infraestructura en la nube, automatiza despliegues y refuerza la seguridad de los sistemas. Experto en CI/CD, contenedores y monitoreo.',
    initials: 'O',
    color: '#CBC6BB',
  },
]

export default function Team({ language }) {
  const isEnglish = language === 'en'
  const teamText = isEnglish ? [
    ['CEO & Software Development', 'Leads system architecture and coordinates projects. Backend, databases, and SAT accounting specialist.'],
    ['Web & Software Development', 'Designs and builds modern interfaces with a focus on frontend development and user experience.'],
    ['Web & Software Development', 'Specialist in system integration and business logic, making sure everything works end to end.'],
    ['DevOps & Security', 'Manages cloud infrastructure, automates deployments, and strengthens system security.'],
  ] : null
  return (
    <section id="equipo" className="editorial-section team-section py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="team-editorial">
          <div><p className="editorial-kicker text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>{isEnglish ? 'The people behind it' : 'Las personas detrás'}</p><h2 className="editorial-display team-display" style={{ color: 'var(--text-primary)' }}>{isEnglish ? <>MEET<br /><em>THE</em><br />TEAM</> : <>CONOCE<br /><em>AL</em><br />EQUIPO</>}</h2><p className="team-intro" style={{ color: 'var(--text-secondary)' }}>{isEnglish ? 'Four engineers. One shared standard: build work worth standing behind.' : 'Cuatro ingenieros. Un mismo estándar: construir trabajo del que podamos responder.'}</p></div>

        <div className="team-list">
          {team.map((member, index) => (
            <div key={member.name} className="team-card group">
              <div className="team-monogram" style={{ '--member-color': member.color }}>
                <span>0{index + 1}</span>
                <strong>{member.initials}</strong>
              </div>
              <h3>{member.name}</h3>
              <p style={{ color: member.color }}>{teamText?.[index]?.[0] || member.role}</p>
            </div>
          ))}
        </div>
        </div>

        <div
          className="mt-16 rounded-2xl p-8 text-center max-w-2xl mx-auto"
          style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>{isEnglish ? 'Tec de Celaya graduates' : 'Egresados del Tec de Celaya'}</strong> — {isEnglish ? 'Computer Systems Engineering. Committed to quality, punctuality, and honesty in every delivery.' : 'Ingeniería en Sistemas Computacionales. Comprometidos con la calidad, la puntualidad y la honestidad en cada entrega.'}
          </p>
        </div>
      </div>
    </section>
  )
}