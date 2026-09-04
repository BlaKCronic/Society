export default function Footer({ language }) {
  const isEnglish = language === 'en'
  return (
    <footer className="site-footer py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="brand-mark">YS</div>
            <span className="text-white font-bold text-sm">Yañez Society</span>
          </div>
          <a
            href="https://www.instagram.com/yanezsociety_04"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9B9486" />
                  <stop offset="100%" stopColor="#000033" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-gradient)" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-gradient)" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-gradient)" />
            </svg>
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #9B9486, #000033)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              @yanezsociety_04
            </span>
          </a>
        </div>

        <p className="footer-muted text-xs text-center">
          © {new Date().getFullYear()} Yañez Society. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>

        <div className="flex gap-6">
          {(isEnglish ? [['Home', '#inicio'], ['Services', '#servicios'], ['Accounting', '#contabilidad'], ['Team', '#equipo'], ['Contact', '#contacto']] : [['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Contabilidad', '#contabilidad'], ['Equipo', '#equipo'], ['Contacto', '#contacto']]).map(([label, href]) => (
            <a key={label} href={href} className="footer-link text-xs transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}