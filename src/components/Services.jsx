const services = [
  {
    icon: '</>',
    color: '#000033',
    title: 'Desarrollo Web',
    description: 'Diseñamos y construimos sitios web modernos, rápidos y responsivos. Landing pages, portafolios, catálogos en línea, e-commerce y aplicaciones web a la medida de tu negocio.',
    bullets: ['Diseño UI/UX atractivo', 'Adaptable a celular y tablet', 'SEO básico incluido', 'Entrega en tiempo acordado'],
  },
  {
    icon: '⬡',
    color: '#726D64',
    title: 'Desarrollo de Software',
    description: 'Creamos sistemas de escritorio o web totalmente personalizados: control de inventario, facturación, agendas, CRM, reportes y cualquier proceso que necesites automatizar.',
    bullets: ['Análisis de requerimientos sin costo', 'Interfaz intuitiva', 'Base de datos robusta', 'Documentación y capacitación'],
  },
  {
    icon: '⇄',
    color: '#9B9486',
    title: 'Migración de Software',
    description: '¿Todavía usas hojas de Excel para controlar tu negocio? Te ayudamos a migrar tus procesos a un sistema profesional: más rápido, seguro y fácil de usar para todo tu equipo.',
    bullets: ['De Excel a sistema web o desktop', 'Sin pérdida de tu información', 'Capacitación al equipo', 'Soporte post-migración'],
  },
  {
    icon: '$',
    color: '#CBC6BB',
    title: 'Servicios Contables & Fiscales',
    description: 'Mantén tu negocio al día con el SAT sin complicaciones. Declaraciones mensuales, anuales y facturación CFDI a cargo de profesionales comprometidos con tu tranquilidad fiscal.',
    bullets: ['Declaración mensual (IVA & ISR)', 'Declaración anual y cierre fiscal', 'Emisión y revisión de CFDI', 'Asesoría de régimen óptimo'],
  },
]

export default function Services({ language }) {
  const isEnglish = language === 'en'
  const translated = isEnglish ? [
    ['Web Development', 'We design and build modern, fast, responsive websites, online stores, and custom web applications.', ['Attractive UI/UX', 'Mobile and tablet ready', 'Basic SEO included', 'On-time delivery']],
    ['Software Development', 'We create fully custom desktop or web systems for inventory, billing, scheduling, CRM, reports, and more.', ['Free requirements analysis', 'Intuitive interface', 'Robust database', 'Documentation and training']],
    ['Software Migration', 'We migrate your Excel-based processes to a professional system that is faster, safer, and easier for your team.', ['Excel to web or desktop', 'No data loss', 'Team training', 'Post-migration support']],
    ['Accounting & Tax Services', 'Keep your business up to date with SAT requirements. Monthly and annual filings, billing, and fiscal guidance.', ['Monthly VAT and income tax', 'Annual filing and closing', 'CFDI issuing and review', 'Tax regime advice']],
  ] : null
  return (
    <section id="servicios" className="editorial-section services-section py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="services-heading mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            {isEnglish ? 'Our specialties' : 'Nuestras Especialidades'}
          </p>
          <h2 className="editorial-display services-display" style={{ color: 'var(--text-primary)' }}>{isEnglish ? <>OUR<br /><em>SERVICES</em></> : <>NUESTROS<br /><em>SERVICIOS</em></>}</h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {isEnglish ? 'From a website to a complete business system, we adapt to your goals and budget.' : 'Desde una página web hasta un sistema empresarial completo — nos adaptamos al tamaño y presupuesto de tu negocio.'}
          </p>
        </div>

        <div className="services-list">
          {services.map((svc, index) => {
            const content = translated?.[index]
            return (
            <div
              key={svc.title}
              className="service-row"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <span className="service-number">0{index + 1}</span>
              <div className="service-main"><h3>{content?.[0] || svc.title}</h3><p>{content?.[1] || svc.description}</p></div>
              <span className="service-detail">{(content?.[2] || svc.bullets)[0]}</span>
              <span className="service-arrow">↗</span>
            </div>
            )
          })}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: 'var(--text-muted)' }}>
          {isEnglish ? "Can't find what you need?" : '¿No encuentras lo que buscas?'}{' '}
          <a href="#contacto" className="font-semibold underline underline-offset-2" style={{ color: 'var(--accent)' }}>
            {isEnglish ? 'Write to us and we will explore it together.' : 'Escríbenos y lo evaluamos juntos.'}
          </a>
        </p>
      </div>
    </section>
  )
}