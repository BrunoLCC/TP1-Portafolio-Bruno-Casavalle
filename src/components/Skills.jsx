function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="seccion">
      <h2>Habilidades</h2>
      <ul className="skills-lista">
        {habilidades.map((habilidad) => (
          <li key={habilidad.id} className="skill">
            <span className="skill-nombre">{habilidad.nombre}</span>
            <span className="skill-nivel">{habilidad.nivel}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
