import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import AccountingServices from './components/AccountingServices'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyModal from './components/PrivacyModal'

function App() {
  const [language, setLanguage] = useState('es')

  return (
    <div className="site-shell">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <WhyUs language={language} />
      <AccountingServices language={language} />
      <Team language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <PrivacyModal language={language} />
    </div>
  )
}

export default App