export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d1b2e' }} className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: 'rgba(245,183,0,0.2)', border: '1px solid rgba(245,183,0,0.3)' }}>
              YS
            </div>
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
                  <stop offset="0%" stopColor="#f9ce34" />
                  <stop offset="30%" stopColor="#ee2a7b" />
                  <stop offset="65%" stopColor="#6228d7" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-gradient)" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-gradient)" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-gradient)" />
            </svg>
            <span
              style={{
                backgroundImage: 'linear-gradient(90deg, #f9ce34, #ee2a7b 45%, #6228d7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              @yanezsociety_04
            </span>
          </a>
        </div>

        <p className="text-slate-500 text-xs text-center">
          © {new Date().getFullYear()} Yañez Society. Todos los derechos reservados.
        </p>

        <div className="flex gap-6">
          {[['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Contabilidad', '#contabilidad'], ['Equipo', '#equipo'], ['Contacto', '#contacto']].map(([label, href]) => (
            <a key={label} href={href} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}