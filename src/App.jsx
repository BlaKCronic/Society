import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyModal from './components/PrivacyModal'

function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Contact />
      <Footer />
      <PrivacyModal />
    </div>
  )
}

export default App