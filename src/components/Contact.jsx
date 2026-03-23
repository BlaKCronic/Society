import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = 'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all bg-white'

  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#f5b700' }}>Contacto</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5" style={{ color: '#0d1b2e' }}>
              Cuéntanos tu idea, nosotros la hacemos realidad.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              La primera asesoría es completamente gratuita. Agenda una reunión con nosotros y evaluamos juntos cómo podemos ayudarte con tu proyecto.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white flex-shrink-0" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#0d1b2e' }}>Email</div>
                  <div className="text-slate-500 text-sm">contacto@yanezsociety.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white flex-shrink-0" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#0d1b2e' }}>WhatsApp / Teléfono</div>
                  <div className="text-slate-500 text-sm">+52 461 XXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white flex-shrink-0" style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#0d1b2e' }}>Ubicación</div>
                  <div className="text-slate-500 text-sm">Celaya, Guanajuato — reuniones presenciales disponibles</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(245,183,0,0.15)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b700" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#0d1b2e' }}>¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-xl mb-1" style={{ color: '#0d1b2e' }}>Envíanos un mensaje</h3>
                <p className="text-slate-400 text-xs mb-6">Primera asesoría 100% gratuita y sin compromiso.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nombre o Empresa</label>
                    <input type="text" placeholder="Ej: Ferretería El Clavo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Correo Electrónico</label>
                    <input type="email" placeholder="ejemplo@correo.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Servicio de Interés</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass}>
                      <option value="">Selecciona un servicio</option>
                      <option>Desarrollo Web (sitio o tienda en línea)</option>
                      <option>Desarrollo de Software a la medida</option>
                      <option>Migración de Excel a sistema profesional</option>
                      <option>Otro / No sé por dónde empezar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Cuéntanos tu idea o problema</label>
                    <textarea rows={4} placeholder="Ej: Tengo una tienda y quiero un sistema para controlar mi inventario y ventas..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} required />
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 cursor-pointer" style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}>
                    Solicitar asesoría gratuita
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}