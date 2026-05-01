import { useState } from 'react'

const services = [
  {
    id: 'mensual',
    number: '01',
    title: 'Declaración\nMensual',
    tags: ['IVA', 'ISR'],
    description:
      'Presentación puntual ante el SAT cada mes. Nos encargamos de calcular, revisar y enviar tu declaración sin que tengas que preocuparte por fechas límite.',
    accent: '#f5b700',
    bg: '#0d1b2e',
    features: [
      'Cálculo de IVA mensual',
      'Determinación de ISR',
      'Envío puntual al SAT',
      'Comprobante de pago incluido',
    ],
  },
  {
    id: 'anual',
    number: '02',
    title: 'Declaración\nAnual',
    tags: ['CIERRE FISCAL'],
    description:
      'Ingresos, deducciones y saldo a favor al cierre del ejercicio. Maximizamos tu devolución y cumplimos con todos los requisitos del SAT.',
    accent: '#3b82f6',
    bg: '#fff',
    features: [
      'Análisis de ingresos anuales',
      'Deducciones autorizadas',
      'Saldo a favor / pago',
      'Entrega de constancias',
    ],
  },
  {
    id: 'facturacion',
    number: '03',
    title: 'Facturación &\nAsesoramiento',
    tags: ['EMISIÓN CFDI', 'REVISIÓN FACTURAS', 'RÉGIMEN ÓPTIMO'],
    description:
      'Emitimos y revisamos tus facturas conforme al SAT. Te asesoramos para elegir el régimen fiscal más conveniente para tu actividad.',
    accent: '#f5b700',
    bg: '#0d1b2e',
    features: [
      'Emisión de CFDI ilimitada',
      'Revisión de facturas recibidas',
      'Asesoría de régimen óptimo',
      'Atención vía WhatsApp',
    ],
  },
]

export default function AccountingServices() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="contabilidad"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #f5b700 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span
              className="text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full"
              style={{
                backgroundColor: '#f5b700',
                color: '#0d1b2e',
              }}
            >
              Servicios Fiscales
            </span>

            <h2
              className="text-5xl md:text-6xl font-black leading-none mt-5"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              Contabilidad
              <br />
              <span style={{ color: '#f5b700' }}>
                sin estrés.
              </span>
            </h2>
          </div>

          <div className="md:max-w-xs">
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cumple con el SAT puntualmente. Nos encargamos de todo para que tú te concentres en tu negocio.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {services.map((svc) => {
            const isDarkCard = svc.bg === '#0d1b2e'
            const isHovered = hovered === svc.id

            return (
              <div
                key={svc.id}
                onMouseEnter={() => setHovered(svc.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: isDarkCard
                    ? '#0d1b2e'
                    : 'var(--bg-card)',
                  border: `1px solid var(--border)`,
                  transform: isHovered
                    ? 'scale(1.01)'
                    : 'scale(1)',
                  boxShadow: isHovered
                    ? `0 20px 50px ${svc.accent}20`
                    : 'var(--shadow)',
                }}
              >
                <div className="grid md:grid-cols-[80px_1fr_1fr_220px]">

                  <div
                    className="hidden md:flex items-center justify-center"
                    style={{ backgroundColor: svc.accent }}
                  >
                    <span
                      className="font-black text-lg"
                      style={{
                        color:
                          svc.accent === '#3b82f6'
                            ? '#fff'
                            : '#0d1b2e',
                        writingMode: 'vertical-rl',
                      }}
                    >
                      {svc.number}
                    </span>
                  </div>

                  <div className="px-7 py-8">
                    <h3
                      className="text-2xl font-black whitespace-pre-line"
                      style={{
                        color: isDarkCard
                          ? '#fff'
                          : 'var(--text-primary)',
                      }}
                    >
                      {svc.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: `${svc.accent}22`,
                            color: svc.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-7 py-8">
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{
                        color: isDarkCard
                          ? '#94a3b8'
                          : 'var(--text-secondary)',
                      }}
                    >
                      {svc.description}
                    </p>

                    <ul className="space-y-1">
                      {svc.features.map((item) => (
                        <li
                          key={item}
                          className="text-xs flex gap-2"
                          style={{
                            color: isDarkCard
                              ? '#64748b'
                              : 'var(--text-muted)',
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1"
                            style={{
                              backgroundColor: svc.accent,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 py-8 flex justify-center items-center">
                    <a
                      href="#contacto"
                      className="px-6 py-3 rounded-xl text-xs font-bold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: svc.accent,
                        color:
                          svc.accent === '#3b82f6'
                            ? '#fff'
                            : '#0d1b2e',
                      }}
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