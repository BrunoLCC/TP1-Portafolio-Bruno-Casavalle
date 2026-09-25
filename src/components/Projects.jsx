import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

const categorias = ['Todos', 'Frontend', 'Backend']

function Projects({ proyectos }) {
  const [filtro, setFiltro] = useState('Todos')

  const proyectosFiltrados =
    filtro === 'Todos'
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === filtro)

  return (
    <section id="proyectos" className="seccion">
      <h2>Proyectos</h2>

      <div className="filtros">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoria === filtro ? 'filtro activo' : 'filtro'}
            onClick={() => setFiltro(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {proyectosFiltrados.length === 0 ? (
        <p>No hay proyectos en esta categoría.</p>
      ) : (
        <div className="proyectos-grilla">
          {proyectosFiltrados.map((proyecto) => (
            <ProjectCard
              key={proyecto.id}
              titulo={proyecto.titulo}
              categoria={proyecto.categoria}
              descripcion={proyecto.descripcion}
              detalle={proyecto.detalle}
              tecnologias={proyecto.tecnologias}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
