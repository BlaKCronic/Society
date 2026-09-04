const reasons = [
  {
    title: 'Precio accesible',
    description: 'Nuestra estructura operativa ligera nos permite ofrecer precios competitivos y justos, sin intermediarios ni sobrecostos — la misma calidad, sin pagar de más.',
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
  {
    title: 'SAT Compliant',
    description: 'Nuestros servicios contables y fiscales cumplen con todas las disposiciones del SAT: declaraciones, CFDI y asesoría de régimen siempre al día.',
    path: 'M9 14l2 2 4-4M12 3l1.5 3 3.5.5-2.5 2.5.5 3.5L12 11l-3 1.5.5-3.5L7 6.5 10.5 6z',
    highlight: true,
  },
]

export default function WhyUs({ language }) {
  const isEnglish = language === 'en'
  const translations = isEnglish ? [
    ['Accessible pricing', 'Our lean operation lets us offer fair, competitive prices without intermediaries or hidden costs.'],
    ['Personal attention', 'You are not a support ticket. You communicate directly with developers throughout the project.'],
    ['Current technology', 'We use modern tools and frameworks: React, SQL/NoSQL databases, Python, and more.'],
    ['Post-delivery support', 'After delivery, we remain available for adjustments, fixes, and continuous improvements.'],
    ['On-time delivery', 'We commit to realistic dates, a clear work plan, and regular updates at every stage.'],
    ['SAT compliant', 'Our accounting and tax services follow SAT requirements for filings, CFDI, and tax guidance.'],
  ] : null
  return (
    <section id="elegirnos" className="editorial-section principles-section py-24" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[.8fr_1.2fr] gap-16 items-start">

          <div className="md:sticky md:top-28">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              {isEnglish ? 'Why choose us' : 'Por qué elegirnos'}
            </p>
            <h2 className="editorial-display principles-display text-white mb-6">{isEnglish ? <>WHY<br /><em>US?</em></> : <>¿POR<br /><em>QUÉ?</em></>}</h2>
            <p className="leading-relaxed max-w-md mb-8" style={{ color: 'var(--text-muted)' }}>
              {isEnglish ? 'We are Tec de Celaya graduates trained to demanding technical standards. We treat every project as our own, with the care and commitment only a small team can offer.' : 'Somos egresados del Tec de Celaya, formados con los estándares técnicos más exigentes. Cada proyecto lo tratamos como si fuera nuestro, con la cercanía y compromiso que solo un equipo pequeño puede ofrecer.'}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: '#0d1b2e' }}
            >
              {isEnglish ? 'Let us talk about your project' : 'Hablemos de tu proyecto'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="principles-list">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="principle-card"
                style={{
                  backgroundColor: reason.highlight ? 'rgba(0,0,51,0.35)' : 'rgba(255,255,255,0.03)',
                  border: reason.highlight ? '1px solid rgba(155,148,134,0.55)' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span className="principle-index">0{i + 1}</span>
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2 text-white">
                  {translations?.[i]?.[0] || reason.title}
                  {reason.highlight && (
                    <span className="text-xs font-black px-1.5 py-0.5 rounded" style={{ backgroundColor: '#9B9486', color: '#000033' }}>
                      ✓
                    </span>
                  )}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{translations?.[i]?.[1] || reason.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}