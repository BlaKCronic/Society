export default function Hero({ language }) {
  const isEnglish = language === 'en'

  return (
    <section id="inicio" className="hero-stage relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-beam hero-beam-one absolute" />
      <div className="hero-beam hero-beam-two absolute" />
      <div className="hero-line absolute" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="hero-layout">
        <div className="hero-copy max-w-4xl">
          <div className="hero-eyebrow inline-flex items-center gap-2 mb-7">
            <span className="eyebrow-dot" />
            <span className="text-xs font-semibold tracking-widest uppercase">
              {isEnglish ? 'Empowering businesses from Celaya' : 'Impulsamos negocios desde Celaya'}
            </span>
          </div>

          <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-none text-white mb-7">
            {isEnglish ? <>TECHNOLOGY THAT<br /><span>DRIVES YOUR</span><br />BUSINESS.</> : <>SOFTWARE<br /><span>QUE IMPULSA</span><br />TU NEGOCIO.</>}
          </h1>

          <p className="hero-description text-lg max-w-xl mb-10 leading-relaxed">
            {isEnglish ? 'We are Tec de Celaya graduates specialized in web and software development. We build reliable digital solutions that help your business grow, scale, and work smarter.' : 'Construimos soluciones digitales de alto nivel para que tu empresa crezca, escale y trabaje mejor en un mundo que cambia rápido.'}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#nosotros" className="hero-primary flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-90">
              {isEnglish ? 'Get started' : 'Comenzar proyecto'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#servicios" className="hero-secondary px-7 py-3.5 rounded-full font-bold text-sm border text-white transition-all hover:bg-white/10">
              {isEnglish ? 'See our services' : 'Ver nuestros servicios'}
            </a>
          </div>

          <div className="hero-stats flex flex-wrap gap-10">
            {[
              { value: '4+', label: 'Años de formación técnica' },
              { value: '100%', label: 'Compromiso con el cliente' },
              { value: 'TEC', label: 'Celaya — Ingeniería en sistemas' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <div className="text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="code-scene" aria-label="Vista previa de desarrollo y seguridad">
          <div className="code-window code-window-main">
            <div className="window-bar"><span /><span /><span /><div className="window-tools">&#8635; + @</div></div>
            <pre><code><i>document</i>.addEventListener(<b>'DOMContentLoaded'</b>, () =&gt; {'{'}{`\n`}  <i>let</i> count = <em>0</em>;{`\n`}  <i>const</i> button = <i>document</i>.createElement(<b>'button'</b>);{`\n`}  button.textContent = <b>`'Construir futuro'`</b>;{`\n\n`}  button.addEventListener(<b>'click'</b>, () =&gt; {'{'}{`\n`}    count++;{`\n`}    button.textContent = <b>`'Proyecto #'`</b> + count;{`\n`}  {'}'});{`\n\n`}  <i>document</i>.body.appendChild(button);{`\n`}{'}'});</code></pre>
            <div className="editor-footer"><span>Body</span><span>B</span><span><i>I</i></span><span>U</span><span>＋</span></div>
          </div>
          <div className="code-window code-window-css"><pre><code><b>.secure-system</b> {'{'}{`\n`}  font-family: <i>'Fira Code'</i>;{`\n`}  status: <em>reliable</em>;{`\n`}  protection: <em>always-on</em>;{`\n`}{'}'}</code></pre></div>
          <div className="security-node"><span>⌁</span><small>SECURE<br />BY DESIGN</small></div>
          <div className="circuit circuit-one" /><div className="circuit circuit-two" />
        </div>
        </div>
      </div>
    </section>
  )
}