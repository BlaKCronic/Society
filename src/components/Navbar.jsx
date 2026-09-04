import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#inicio' },
  { label: 'About', href: '#nosotros' },
  { label: 'Services', href: '#servicios' },
  { label: 'Why us?', href: '#elegirnos' },  
  { label: 'Contabilidad', href: '#contabilidad' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

function LanguageSelector({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  const currentLanguage = language === 'en' ? 'English' : 'Español'

  const selectLanguage = (value) => {
    onLanguageChange(value)
    setOpen(false)
  }

  return (
    <div className="language-picker">
      <button
        type="button"
        className={`language-trigger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="language-globe" aria-hidden="true">◎</span>
        <span>{currentLanguage}</span>
      </button>
      {open && (
        <div className="language-menu" role="listbox" aria-label="Seleccionar idioma">
          <button type="button" role="option" aria-selected={language === 'es'} className={language === 'es' ? 'selected' : ''} onClick={() => selectLanguage('es')}>
            <span>ES</span> Español {language === 'es' && <b>✓</b>}
          </button>
          <button type="button" role="option" aria-selected={language === 'en'} className={language === 'en' ? 'selected' : ''} onClick={() => selectLanguage('en')}>
            <span>EN</span> English {language === 'en' && <b>✓</b>}
          </button>
        </div>
      )}
    </div>
  )
}

export default function Navbar({ language, onLanguageChange }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const labels = language === 'en'
    ? ['Home', 'About', 'Services', 'Why us?', 'Accounting', 'Team', 'Contact']
    : ['Inicio', 'Nosotros', 'Servicios', '¿Por qué nosotros?', 'Contabilidad', 'Equipo', 'Contacto']

  return (
    <nav
      className="site-nav fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="brand-mark">YS</div>
          <span className="brand-name">
            Yañez Society
          </span>
        </a>

        <div className="nav-desktop hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${link.label === 'Home' ? 'active' : ''}`}
            >
              {labels[index]}
            </a>
          ))}
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>

        <button
          className="nav-toggle md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu nav-mobile-menu md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link text-sm font-medium"
            >
              {labels[index]}
            </a>
          ))}
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="nav-cta text-sm font-bold rounded-full text-center"
          >
            {language === 'en' ? 'Contact us' : 'Contáctanos'}
          </a>
        </div>
      )}
    </nav>
  )
}