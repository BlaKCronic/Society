export default function PrivacyModal() {
  const close = () => document.getElementById('privacy-modal').close()

  return (
    <dialog
      id="privacy-modal"
      className="rounded-2xl shadow-2xl border border-slate-100 p-0 w-full max-w-lg backdrop:bg-black/40"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100" style={{ backgroundColor: '#0d1b2e' }}>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5b700" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2 className="font-bold text-white text-sm">Política de Privacidad</h2>
          </div>
          <button onClick={close} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="px-6 py-5 overflow-y-auto max-h-96 space-y-5 text-sm text-slate-600 leading-relaxed">

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>1. ¿Quién recopila tus datos?</h3>
            <p>
              <strong>Yañez Society</strong> — equipo de desarrollo de software con sede en Celaya, Guanajuato, México.
              Correo de contacto: <span style={{ color: '#f5b700' }}>Josueyrojas@gmail.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>2. ¿Qué información recopilamos?</h3>
            <p>
              A través del formulario de contacto recopilamos únicamente:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-500">
              <li>Nombre o nombre de empresa</li>
              <li>Correo electrónico</li>
              <li>Servicio de interés</li>
              <li>Mensaje o descripción del proyecto</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>3. ¿Para qué usamos tus datos?</h3>
            <p>
              Tus datos se usan exclusivamente para responder tu solicitud de asesoría y ponernos en contacto contigo. <strong>No los usamos para marketing, publicidad ni los vendemos a terceros.</strong>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>4. ¿Con quién compartimos tus datos?</h3>
            <p>
              Utilizamos <strong>EmailJS</strong> como servicio intermediario para el envío del formulario. Tus datos se transmiten de forma segura y no se almacenan en servidores propios. EmailJS cumple con estándares de seguridad modernos.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>5. ¿Cuánto tiempo guardamos tus datos?</h3>
            <p>
              Tus datos permanecen únicamente en nuestro correo electrónico y se eliminan una vez concluida la comunicación o proyecto, o cuando lo solicites.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>6. Tus derechos</h3>
            <p>
              Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos en cualquier momento. Para ejercer estos derechos escríbenos a{' '}
              <span style={{ color: '#f5b700' }}>Josueyrojas@gmail.com</span>.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1b2e' }}>7. Seguridad</h3>
            <p>
              Implementamos medidas técnicas para proteger tu información, incluyendo protección anti-spam en el formulario. Sin embargo, ningún sistema es 100% infalible.
            </p>
          </div>

          <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={close}
            className="px-5 py-2 rounded-full font-bold text-sm cursor-pointer hover:opacity-90 transition-all"
            style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}
          >
            Entendido
          </button>
        </div>

      </div>
    </dialog>
  )
}