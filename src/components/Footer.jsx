export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d1b2e' }} className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: 'rgba(245,183,0,0.2)', border: '1px solid rgba(245,183,0,0.3)' }}>
              YS
            </div>
            <span className="text-white font-bold text-sm">Yañez Society</span>
          </div>
          <p className="text-slate-500 text-xs">Tecnológico de Celaya · Celaya, Guanajuato</p>
        </div>

        <p className="text-slate-500 text-xs text-center">
          © {new Date().getFullYear()} Yañez Society. Todos los derechos reservados.
        </p>

        <div className="flex gap-6">
          {[['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Equipo', '#equipo'], ['Contacto', '#contacto']].map(([label, href]) => (
            <a key={label} href={href} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}