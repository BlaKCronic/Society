import { useState } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué elegirnos', href: '#elegirnos' },
  { label: 'Equipo', href: '#equipo' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#0d1b2e' }}>
            YS
          </div>
          <span className="font-bold text-lg" style={{ color: '#0d1b2e' }}>Yañez Society</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="text-sm font-bold px-5 py-2 rounded-full transition-all hover:opacity-90" style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}>
            Contáctanos
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-slate-600">
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-sm font-bold px-5 py-2 rounded-full text-center" style={{ backgroundColor: '#f5b700', color: '#0d1b2e' }}>
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  )
}