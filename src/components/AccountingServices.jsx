import { useState } from 'react'

const services = [
  {
    id: 'mensual',
    number: '01',
    title: 'Declaración\nMensual',
    tags: ['IVA', 'ISR'],
    description:
      'Presentación puntual ante el SAT cada mes. Nos encargamos de calcular, revisar y enviar tu declaración sin que tengas que preocuparte por fechas límite.',
    accent: '#9B9486',
    bg: '#2F2E2F',
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
    accent: '#000033',
    bg: '#4D4A47',
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
    accent: '#9B9486',
    bg: '#2F2E2F',
    features: [
      'Emisión de CFDI ilimitada',
      'Revisión de facturas recibidas',
      'Asesoría de régimen óptimo',
      'Atención vía WhatsApp',
    ],
  },
]

export default function AccountingServices({ language }) {
  const [hovered, setHovered] = useState(null)
  const isEnglish = language === 'en'
  const translated = isEnglish ? [
    ['Monthly filing', 'Monthly VAT and income tax calculation, review, and filing with the SAT.', ['Monthly VAT calculation', 'Income tax determination', 'On-time SAT filing', 'Payment receipt included']],
    ['Annual filing', 'We analyze income, deductions, and balances to close the fiscal year and maximize your return.', ['Annual income analysis', 'Authorized deductions', 'Balance due or refund', 'Certificates delivered']],
    ['Billing & advice', 'We issue and review invoices and help you choose the most convenient tax regime for your activity.', ['Unlimited CFDI issuing', 'Review of received invoices', 'Tax regime advice', 'WhatsApp support']],
  ] : null
  const tags = isEnglish ? [['VAT', 'Income tax'], ['FISCAL YEAR END'], ['ISSUE CFDI', 'INVOICE REVIEW', 'BEST TAX REGIME']] : services.map((service) => service.tags)

  return (
    <section
      id="contabilidad"
      className="editorial-section accounting-section py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
            background:
            'radial-gradient(circle, #9B9486 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span
              className="text-xs font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full"
              style={{
                backgroundColor: '#9B9486',
                color: '#2F2E2F',
              }}
            >
              {isEnglish ? 'Tax services' : 'Servicios Fiscales'}
            </span>

            <h2
              className="text-5xl md:text-6xl font-black leading-none mt-5"
              style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              {isEnglish ? 'Accounting' : 'Contabilidad'}
              <br />
              <span style={{ color: '#9B9486' }}>
                {isEnglish ? 'without stress.' : 'sin estrés.'}
              </span>
            </h2>
          </div>

          <div className="md:max-w-xs">
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {isEnglish ? 'Stay compliant with the SAT. We handle the details so you can focus on your business.' : 'Cumple con el SAT puntualmente. Nos encargamos de todo para que tú te concentres en tu negocio.'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {services.map((svc, index) => {
            const content = translated?.[index]
            const isDarkCard = svc.bg === '#2F2E2F'
            const isHovered = hovered === svc.id

            return (
              <div
                key={svc.id}
                onMouseEnter={() => setHovered(svc.id)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: isDarkCard
                    ? '#2F2E2F'
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
                          svc.accent === '#000033'
                            ? '#FDFDFD'
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
                          ? '#FDFDFD'
                          : 'var(--text-primary)',
                      }}
                    >
                      {content?.[0] || svc.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {tags[index].map((tag) => (
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
                          ? '#CBC6BB'
                          : 'var(--text-secondary)',
                      }}
                    >
                      {content?.[1] || svc.description}
                    </p>

                    <ul className="space-y-1">
                      {(content?.[2] || svc.features).map((item) => (
                        <li
                          key={item}
                          className="text-xs flex gap-2"
                          style={{
                            color: isDarkCard
                              ? '#9B9486'
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
                          svc.accent === '#000033'
                            ? '#FDFDFD'
                            : '#2F2E2F',
                      }}
                    >
                        {isEnglish ? 'Request now →' : 'Solicitar ahora →'}
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