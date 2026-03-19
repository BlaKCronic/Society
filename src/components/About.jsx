export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#f5b700' }}>Sobre Nosotros</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: '#0d1b2e' }}>
              Pasión, talento y visión de futuro en cada proyecto.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              Yañez Society nace de la ambición de tener mucho varo.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Algo más.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}