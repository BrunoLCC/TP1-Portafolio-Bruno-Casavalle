import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import { persona, secciones, habilidades } from './data.js'

function App() {
  return (
    <>
      <Header
        nombre={persona.nombre}
        profesion={persona.profesion}
        secciones={secciones}
      />
      <main className="contenedor">
        <Hero
          nombre={persona.nombre}
          profesion={persona.profesion}
          ubicacion={persona.ubicacion}
        />
        <About />
        <Skills habilidades={habilidades} />
      </main>
      <Footer
        nombre={persona.nombre}
        email={persona.email}
        github={persona.github}
      />
    </>
  )
}

export default App
