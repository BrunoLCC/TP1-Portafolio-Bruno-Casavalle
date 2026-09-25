import { useState } from 'react'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section id="sobre-mi" className="seccion">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de la Tecnicatura en Programación y vivo en Tucumán.
        Me interesa tanto el desarrollo frontend, la parte de una aplicación
        que la gente ve y usa, como el backend, donde se manejan los datos y
        la lógica. Me gusta entender cómo funcionan las cosas por dentro y
        ordenar el código para que otros puedan leerlo.
      </p>

      {mostrarMas && (
        <div className="about-extra">
          <h3>Objetivos</h3>
          <ul>
            <li>Conseguir mi primera experiencia laboral como desarrollador.</li>
            <li>Profundizar en React y en buenas prácticas de componentes.</li>
            <li>Participar en proyectos en equipo usando Git.</li>
          </ul>
          <h3>Intereses</h3>
          <p>
            Diseño de interfaces, accesibilidad web, bases de datos y
            videojuegos.
          </p>
        </div>
      )}

      <button className="boton" onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  )
}

export default About
