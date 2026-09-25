import { useState } from 'react'

function ProjectCard({ titulo, categoria, descripcion, detalle, tecnologias }) {
  const [verDetalle, setVerDetalle] = useState(false)

  return (
    <article className="proyecto">
      <span className="proyecto-categoria">{categoria}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      {verDetalle && <p className="proyecto-detalle">{detalle}</p>}

      <ul className="proyecto-tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <button
        className="boton-texto"
        onClick={() => setVerDetalle(!verDetalle)}
      >
        {verDetalle ? 'Ocultar detalle' : 'Ver detalle'}
      </button>
    </article>
  )
}

export default ProjectCard
