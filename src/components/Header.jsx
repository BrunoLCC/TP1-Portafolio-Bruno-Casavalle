import { useState } from 'react'

function Header({ nombre, profesion, secciones }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="header">
      <div className="header-marca">
        <strong>{nombre}</strong>
        <span>{profesion}</span>
      </div>

      <button
        className="header-boton-menu"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? 'Cerrar' : 'Menú'}
      </button>

      <nav className={menuAbierto ? 'header-nav abierto' : 'header-nav'}>
        {secciones.map((seccion) => (
          <a
            key={seccion.id}
            href={`#${seccion.id}`}
            onClick={() => setMenuAbierto(false)}
          >
            {seccion.titulo}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
