import { useState } from 'react'

const services = [
  {
    id: 'mensual',
    number: '01',
    title: 'Declaración\nMensual',
    tags: ['IVA', 'ISR'],
    description: 'Presentación puntual ante el SAT cada mes. Nos encargamos de calcular, revisar y enviar tu declaración sin que tengas que preocuparte por fechas límite.',
    price: '500',
    unit: 'MXN / MES',
    accent: '#f5b700',
    bg: '#0d1b2e',
    features: ['Cálculo de IVA mensual', 'Determinación de ISR', 'Envío puntual al SAT', 'Comprobante de pago incluido'],
  },
  {
    id: 'anual',
    number: '02',
    title: 'Declaración\nAnual',
    tags: ['CIERRE FISCAL'],
    description: 'Ingresos, deducciones y saldo a favor al cierre del ejercicio. Maximizamos tu devolución y cumplimos con todos los requisitos del SAT.',
    price: '1,000',
    unit: 'MXN / AÑO',
    accent: '#3b82f6',
    bg: '#fff',
    features: ['Análisis de ingresos anuales', 'Deducciones autorizadas', 'Saldo a favor / pago', 'Entrega de constancias'],
  },
  {
    id: 'facturacion',
    number: '03',
    title: 'Facturación &\nAsesoramiento',
    tags: ['EMISIÓN CFDI', 'REVISIÓN FACTURAS', 'RÉGIMEN ÓPTIMO'],
    description: 'Emitimos y revisamos tus facturas conforme al SAT. Te asesoramos para elegir el régimen fiscal más conveniente para tu actividad. Ambos servicios incluidos.',
    price: '1,200',
    unit: 'MXN / MES',
    accent: '#f5b700',
    bg: '#0d1b2e',
    features: ['Emisión de CFDI ilimitada', 'Revisión de facturas recibidas', 'Asesoría de régimen óptimo', 'Atención vía WhatsApp'],
  },
]

export default function AccountingServices() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="contabilidad"
      style={{ backgroundColor: '#f8f9fb', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="py-24 relative overflow-hidden"
    >
      {/* Background geometric accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f5b700 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}
              >
                Servicios Fiscales
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black leading-none"
              style={{ color: '#0d1b2e', letterSpacing: '-0.03em' }}
            >
              Contabilidad
              <br />
              <span style={{ color: '#f5b700' }}>sin estrés.</span>
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Cumple con el SAT puntualmente. Nos encargamos de todo para que tú te concentres en tu negocio.
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border"
              style={{ borderColor: '#0d1b2e', color: '#0d1b2e' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SAT COMPLIANT · Lun–Vie 9–18h
            </div>
          </div>
        </div>

        {/* ── Cards: horizontal editorial strips ── */}
        <div className="space-y-4">
          {services.map((svc) => {
            const isDark = svc.bg === '#0d1b2e'
            const isHovered = hovered === svc.id
            return (
              <div
                key={svc.id}
                onMouseEnter={() => setHovered(svc.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl overflow-hidden cursor-default transition-all duration-300"
                style={{
                  backgroundColor: svc.bg,
                  border: `2px solid ${isDark ? 'transparent' : '#e2e8f0'}`,
                  transform: isHovered ? 'scale(1.005)' : 'scale(1)',
                  boxShadow: isHovered ? `0 20px 60px ${svc.accent}25` : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div className="grid md:grid-cols-[80px_1fr_1fr_200px] items-stretch">

                  {/* Accent number column */}
                  <div
                    className="hidden md:flex items-center justify-center py-8 px-2"
                    style={{ backgroundColor: svc.accent }}
                  >
                    <span
                      className="font-black text-lg"
                      style={{
                        color: svc.accent === '#3b82f6' ? '#fff' : '#0d1b2e',
                        writingMode: 'vertical-rl',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {svc.number}
                    </span>
                  </div>

                  {/* Title + tags */}
                  <div className="px-7 py-8 flex flex-col justify-between gap-4">
                    <span
                      className="md:hidden text-xs font-black px-2 py-0.5 rounded w-fit"
                      style={{ backgroundColor: svc.accent, color: isDark || svc.accent === '#3b82f6' ? '#fff' : '#0d1b2e' }}
                    >
                      {svc.number}
                    </span>

                    <h3
                      className="text-2xl font-black leading-tight"
                      style={{ color: isDark ? '#fff' : '#0d1b2e', whiteSpace: 'pre-line', letterSpacing: '-0.02em' }}
                    >
                      {svc.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold px-2.5 py-1 rounded-md tracking-wider"
                          style={{ backgroundColor: `${svc.accent}22`, color: svc.accent, border: `1px solid ${svc.accent}40` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description + feature list */}
                  <div
                    className="px-7 py-8 flex flex-col justify-center gap-4 border-l"
                    style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#f1f5f9' }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
                      {svc.description}
                    </p>
                    <ul className="space-y-1.5">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs" style={{ color: isDark ? '#64748b' : '#94a3b8' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: svc.accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div
                    className="flex flex-col items-center justify-center gap-5 px-8 py-8 border-l"
                    style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#f1f5f9' }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black leading-none mb-1" style={{ color: svc.accent }}>
                        ${svc.price}
                      </div>
                      <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: isDark ? '#475569' : '#94a3b8' }}>
                        {svc.unit}
                      </div>
                    </div>

                    <a
                      href="#contacto"
                      className="block text-center py-3 px-6 rounded-xl font-bold text-xs tracking-wide transition-all hover:opacity-85 whitespace-nowrap"
                      style={{ backgroundColor: svc.accent, color: svc.accent === '#3b82f6' ? '#fff' : '#0d1b2e' }}
                    >
                      Solicitar ahora →
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}