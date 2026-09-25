function Hero({ nombre, profesion, ubicacion }) {
  const primerNombre = nombre.split(' ')[0]

  return (
    <section className="hero">
      <p className="hero-saludo">Hola, soy {primerNombre}</p>
      <h1>{profesion}</h1>
      <p className="hero-texto">
        Construyo interfaces web simples, claras y fáciles de usar. Vivo en{' '}
        {ubicacion} y estoy aprendiendo React.
      </p>
      <div className="hero-acciones">
        <a className="boton" href="#proyectos">
          Ver proyectos
        </a>
        <a className="boton boton-secundario" href="#contacto">
          Contactarme
        </a>
      </div>
    </section>
  )
}

export default Hero
