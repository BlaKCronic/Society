import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_cu5xvlr'
const EMAILJS_TEMPLATE_ID = 'template_vvudrdf'
const EMAILJS_PUBLIC_KEY  = 'BnLS5UJKjpfP3re7b'

// ─── RATE LIMITING ────────────────────────────────────────────────────────────
const RATE_LIMIT_KEY   = 'ys_form_submissions'
const MAX_SUBMISSIONS  = 3
const WINDOW_MS        = 60 * 60 * 1000 // 1 hora

function getRemainingAttempts() {
  try {
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]')
    const now = Date.now()
    const recent = stored.filter((ts) => now - ts < WINDOW_MS)
    return MAX_SUBMISSIONS - recent.length
  } catch {
    return MAX_SUBMISSIONS
  }
}

function registerSubmission() {
  try {
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]')
    const now = Date.now()
    const recent = stored.filter((ts) => now - ts < WINDOW_MS)
    recent.push(now)
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent))
  } catch {
    // si localStorage no está disponible, continuar sin rate limiting
  }
}

function getMinutesUntilReset() {
  try {
    const stored = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]')
    const now = Date.now()
    const recent = stored.filter((ts) => now - ts < WINDOW_MS)
    if (recent.length === 0) return 0
    const oldest = Math.min(...recent)
    return Math.ceil((WINDOW_MS - (now - oldest)) / 60000)
  } catch {
    return 0
  }
}

// ─── VALIDACIÓN DE INPUTS ─────────────────────────────────────────────────────
const MAX_LENGTHS = { name: 100, email: 150, message: 1000 }

// Elimina etiquetas HTML y caracteres peligrosos
function sanitize(str) {
  return str
    .replace(/<[^>]*>/g, '')           // quita etiquetas HTML
    .replace(/[<>"'`]/g, '')           // quita caracteres peligrosos
    .replace(/javascript:/gi, '')      // quita intentos de JS injection
    .replace(/on\w+\s*=/gi, '')        // quita event handlers (onclick=, etc.)
    .trim()
}

function validateForm(form) {
  const errors = {}

  const name = sanitize(form.name)
  if (!name) errors.name = 'El nombre es obligatorio.'
  else if (name.length < 2) errors.name = 'El nombre debe tener al menos 2 caracteres.'
  else if (name.length > MAX_LENGTHS.name) errors.name = `Máximo ${MAX_LENGTHS.name} caracteres.`

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  if (!form.email) errors.email = 'El correo es obligatorio.'
  else if (!emailRegex.test(form.email)) errors.email = 'Ingresa un correo válido.'
  else if (form.email.length > MAX_LENGTHS.email) errors.email = 'El correo es demasiado largo.'

  const message = sanitize(form.message)
  if (!message) errors.message = 'El mensaje es obligatorio.'
  else if (message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.'
  else if (message.length > MAX_LENGTHS.message) errors.message = `Máximo ${MAX_LENGTHS.message} caracteres.`

  return errors
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef  = useRef(null)
  const [form, setForm]       = useState({ name: '', email: '', service: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus]   = useState('idle')

  const remaining = getRemainingAttempts()
  const isBlocked = remaining <= 0

  const handleChange = (field, value) => {
    // Limitar longitud en tiempo real
    const max = MAX_LENGTHS[field]
    if (max && value.length > max) return
    setForm({ ...form, [field]: value })
    // Limpiar error del campo al escribir
    if (errors[field]) setErrors({ ...errors, [field]: null })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. Honeypot
    if (honeypot) return

    // 2. Rate limiting
    if (isBlocked) return

    // 3. Validación
    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      registerSubmission()
      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
      setErrors({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputBase = 'w-full rounded-xl border px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all bg-white'
  const inputOk   = `${inputBase} border-slate-200 focus:ring-yellow-400`
  const inputErr  = `${inputBase} border-red-300 focus:ring-red-300 bg-red-50`

  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Info lateral */}
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
                  <div className="text-slate-500 text-sm">Josueyrojas@gmail.com</div>
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
                  <div className="text-slate-500 text-sm">+52 461 234 6857</div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(245,183,0,0.15)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f5b700" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#0d1b2e' }}>¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm mb-6">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                <button onClick={() => setStatus('idle')} className="text-xs font-semibold underline underline-offset-2" style={{ color: '#f5b700' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-xl" style={{ color: '#0d1b2e' }}>Envíanos un mensaje</h3>
                  {/* Indicador de intentos restantes */}
                  {!isBlocked && remaining < MAX_SUBMISSIONS && (
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100 flex-shrink-0 ml-3 mt-0.5">
                      {remaining} envío{remaining !== 1 ? 's' : ''} restante{remaining !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-xs mb-6">Primera asesoría 100% gratuita y sin compromiso.</p>

                {/* Bloqueado por rate limit */}
                {isBlocked && (
                  <div className="mb-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 text-xs">
                    <strong>Límite alcanzado.</strong> Has enviado {MAX_SUBMISSIONS} mensajes en la última hora. Podrás enviar otro en aproximadamente <strong>{getMinutesUntilReset()} minutos</strong>.<br />
                    Si es urgente escríbenos a <strong>Josueyrojas@gmail.com</strong>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs">
                    Ocurrió un error al enviar. Escríbenos directamente a <strong>Josueyrojas@gmail.com</strong>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                  {/* Honeypot invisible */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                    <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex="-1" autoComplete="off" />
                  </div>

                  {/* Nombre */}
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-600">Nombre o Empresa</label>
                      <span className="text-xs text-slate-400">{form.name.length}/{MAX_LENGTHS.name}</span>
                    </div>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Ej: Ferretería El Clavo"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={errors.name ? inputErr : inputOk}
                      disabled={isBlocked}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Correo Electrónico</label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="ejemplo@correo.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={errors.email ? inputErr : inputOk}
                      disabled={isBlocked}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Servicio de Interés</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputOk}
                      disabled={isBlocked}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option>Desarrollo Web (sitio o tienda en línea)</option>
                      <option>Desarrollo de Software a la medida</option>
                      <option>Migración de Excel a sistema profesional</option>
                      <option>Otro / No sé por dónde empezar</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-600">Cuéntanos tu idea o problema</label>
                      <span className="text-xs text-slate-400">{form.message.length}/{MAX_LENGTHS.message}</span>
                    </div>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Ej: Tengo una tienda y quiero un sistema para controlar mi inventario y ventas..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`${errors.message ? inputErr : inputOk} resize-none`}
                      disabled={isBlocked}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending' || isBlocked}
                    className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                        </svg>
                        Enviando...
                      </>
                    ) : isBlocked ? (
                      'Límite de envíos alcanzado'
                    ) : (
                      'Solicitar asesoría gratuita'
                    )}
                  </button>

                  {/* Badge de seguridad */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <p className="text-xs text-slate-400">
                      Tu información está protegida y nunca será compartida.{' '}
                      <button
                        type="button"
                        onClick={() => document.getElementById('privacy-modal').showModal()}
                        className="underline underline-offset-2 hover:text-slate-600 transition-colors cursor-pointer"
                      >
                        Política de privacidad
                      </button>
                    </p>
                  </div>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}