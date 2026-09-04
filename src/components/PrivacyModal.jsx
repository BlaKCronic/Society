export default function PrivacyModal({ language }) {
  const close = () => document.getElementById('privacy-modal').close()
  const isEnglish = language === 'en'

  return (
    <dialog
      id="privacy-modal"
      className="privacy-modal rounded-2xl shadow-2xl p-0 w-full max-w-lg backdrop:bg-black/70"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="privacy-modal-content">

        {/* Header */}
        <div className="privacy-header flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B9486" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2 className="font-bold text-white text-sm">{isEnglish ? 'Privacy Policy' : 'Política de Privacidad'}</h2>
          </div>
          <button onClick={close} className="privacy-close transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="privacy-body px-6 py-5 overflow-y-auto max-h-96 space-y-5 text-sm leading-relaxed">

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '1. Who collects your data?' : '1. ¿Quién recopila tus datos?'}</h3>
            <p>
              <strong>Yañez Society</strong> — {isEnglish ? 'software development team based in Celaya, Guanajuato, Mexico.' : 'equipo de desarrollo de software con sede en Celaya, Guanajuato, México.'}
              {isEnglish ? ' Contact email: ' : ' Correo de contacto: '}<span className="privacy-accent">Josueyrojas@gmail.com</span>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '2. What information do we collect?' : '2. ¿Qué información recopilamos?'}</h3>
            <p>
              {isEnglish ? 'Through the contact form we only collect:' : 'A través del formulario de contacto recopilamos únicamente:'}
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-500">
              <li>{isEnglish ? 'Name or company name' : 'Nombre o nombre de empresa'}</li><li>{isEnglish ? 'Email address' : 'Correo electrónico'}</li><li>{isEnglish ? 'Service of interest' : 'Servicio de interés'}</li><li>{isEnglish ? 'Message or project description' : 'Mensaje o descripción del proyecto'}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '3. How do we use your data?' : '3. ¿Para qué usamos tus datos?'}</h3>
            <p>
              {isEnglish ? 'We use your data exclusively to answer your request and contact you. ' : 'Tus datos se usan exclusivamente para responder tu solicitud de asesoría y ponernos en contacto contigo. '}<strong>{isEnglish ? 'We do not use it for marketing or sell it to third parties.' : 'No los usamos para marketing, publicidad ni los vendemos a terceros.'}</strong>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '4. Who do we share your data with?' : '4. ¿Con quién compartimos tus datos?'}</h3>
            <p>
              {isEnglish ? <>We use <strong>EmailJS</strong> as an intermediary to deliver the form. Your data is transmitted securely and is not stored on our own servers. EmailJS follows modern security standards.</> : <>Utilizamos <strong>EmailJS</strong> como servicio intermediario para el envío del formulario. Tus datos se transmiten de forma segura y no se almacenan en servidores propios. EmailJS cumple con estándares de seguridad modernos.</>}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '5. How long do we keep your data?' : '5. ¿Cuánto tiempo guardamos tus datos?'}</h3>
            <p>
              {isEnglish ? 'Your data remains only in our email and is deleted when communication or the project ends, or when you request it.' : 'Tus datos permanecen únicamente en nuestro correo electrónico y se eliminan una vez concluida la comunicación o proyecto, o cuando lo solicites.'}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '6. Your rights' : '6. Tus derechos'}</h3>
            <p>
              Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos en cualquier momento. Para ejercer estos derechos escríbenos a{' '}
              <span className="privacy-accent">Josueyrojas@gmail.com</span>.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-1">{isEnglish ? '7. Security' : '7. Seguridad'}</h3>
            <p>
              {isEnglish ? 'We implement technical measures to protect your information, including anti-spam protection in the form. However, no system is 100% infallible.' : 'Implementamos medidas técnicas para proteger tu información, incluyendo protección anti-spam en el formulario. Sin embargo, ningún sistema es 100% infalible.'}
            </p>
          </div>

          <p className="privacy-date text-xs pt-2 border-t">
            {isEnglish ? 'Last updated: ' : 'Última actualización: '}{new Date().toLocaleDateString(isEnglish ? 'en-US' : 'es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Footer */}
        <div className="privacy-actions px-6 py-4 border-t flex justify-end">
          <button
            onClick={close}
            className="px-5 py-2 rounded-full font-bold text-sm cursor-pointer hover:opacity-90 transition-all"
            style={{ backgroundColor: '#9B9486', color: '#2F2E2F' }}
          >
            {isEnglish ? 'Got it' : 'Entendido'}
          </button>
        </div>

      </div>
    </dialog>
  )
}