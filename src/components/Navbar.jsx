import { useState } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué elegirnos', href: '#elegirnos' },  
  { label: 'Contabilidad', href: '#contabilidad' },
  { label: 'Equipo', href: '#equipo' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: 'var(--bg-dark)' }}
          >
            YS
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
            Yañez Society
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-bold px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', color: '#0d1b2e' }}
          >
            Contáctanos
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
          <span className={`block w-5 h-0.5 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'var(--text-primary)' }} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-bold px-5 py-2 rounded-full text-center"
            style={{ backgroundColor: 'var(--accent)', color: '#0d1b2e' }}
          >
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  )
}