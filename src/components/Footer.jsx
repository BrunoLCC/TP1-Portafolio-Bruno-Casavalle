function Footer({ nombre, email, github }) {
  const anio = new Date().getFullYear()

  return (
    <footer id="contacto" className="footer">
      <h2>Contacto</h2>
      <p>¿Querés trabajar conmigo o charlar sobre un proyecto? Escribime.</p>
      <ul className="footer-links">
        <li>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          GitHub:{' '}
          <a href={github} target="_blank" rel="noreferrer">
            {github.replace('https://', '')}
          </a>
        </li>
      </ul>
      <p className="footer-legal">
        © {anio} {nombre} · Hecho con React y Vite · TP1 Portfolio
      </p>
    </footer>
  )
}

export default Footer
