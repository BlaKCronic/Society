export default function About({ language }) {
  const isEnglish = language === 'en'
  const tags = isEnglish ? ['Websites', 'Custom software', 'System migration', 'Ongoing support'] : ['Sitios Web', 'Software a la medida', 'Migración de sistemas', 'Soporte continuo']
  const principles = [
    { number: '01', label: isEnglish ? 'Experience' : 'Experiencia', icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' },
    { number: '02', label: isEnglish ? 'Strategy' : 'Estrategia', icon: 'M4 19l6-6 4 3 6-9M16 7h4v4' },
    { number: '03', label: isEnglish ? 'Results' : 'Resultados', icon: 'M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6' },
    { number: '04', label: isEnglish ? 'Transparency' : 'Transparencia', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4' },
  ]
  return (
    <section id="nosotros" className="editorial-section about-section py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="about-editorial">
          <div>
            <p className="editorial-kicker text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
              {isEnglish ? 'About us' : 'Sobre Nosotros'}
            </p>
            <h2 className="editorial-display" style={{ color: 'var(--text-primary)' }}>
              <span>{isEnglish ? 'ABOUT' : 'SOBRE'}</span><br />
              YÁÑEZ<br />
              <em>SOCIETY</em>
            </h2>
            <p className="about-lead" style={{ color: 'var(--text-primary)' }}>
              {isEnglish ? 'Local talent, real solutions for your business.' : 'Talento local, soluciones reales para tu empresa.'}
            </p>
            <p className="leading-relaxed about-copy" style={{ color: 'var(--text-secondary)' }}>
              {isEnglish ? 'Yañez Society is a team of four Computer Systems Engineering graduates from Tec de Celaya, united by one passion: building software that solves real problems. We are committed to quality, clear deadlines, and professional client care.' : 'Yañez Society somos cuatro egresados de Ingeniería en Sistemas Computacionales del Tecnológico de Celaya, unidos por la misma pasión: construir software que resuelva problemas reales. Nuestro compromiso con la calidad, los plazos de entrega y la atención al cliente es totalmente profesional.'}
            </p>
            <p className="leading-relaxed about-copy" style={{ color: 'var(--text-secondary)' }}>
              {isEnglish ? 'Every business is different, so we listen first and build second. Our goal is to make technology that once belonged only to large companies accessible to businesses and entrepreneurs everywhere.' : 'Entendemos que cada negocio es diferente, por eso escuchamos primero y desarrollamos después. Nuestro objetivo es que tecnología que antes solo estaba al alcance de grandes empresas, hoy sea accesible para los negocios y emprendedores de todas las regiones.'}
            </p>
            <div className="flex flex-wrap gap-4 about-tags">
              {tags.map((tag) => (
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

          <div className="about-principles">
            {principles.map((item) => (
              <div key={item.label} className="principle-line"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
              >
                <span className="principle-number">{item.number}</span>
                <span className="principle-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg></span>
                <span className="principle-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}