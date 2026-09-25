export const persona = {
  nombre: 'Bruno Casavalle',
  profesion: 'Estudiante de Tecnicatura en Programación',
  ubicacion: 'Tucumán, Argentina',
  email: 'bcasavalle@gmail.com',
  github: 'https://github.com/BrunoLCC',
}

export const secciones = [
  { id: 'sobre-mi', titulo: 'Sobre mí' },
  { id: 'habilidades', titulo: 'Habilidades' },
  { id: 'proyectos', titulo: 'Proyectos' },
  { id: 'contacto', titulo: 'Contacto' },
]

export const habilidades = [
  { id: 1, nombre: 'HTML', nivel: 'Avanzado' },
  { id: 2, nombre: 'CSS', nivel: 'Avanzado' },
  { id: 3, nombre: 'JavaScript', nivel: 'Intermedio' },
  { id: 4, nombre: 'React', nivel: 'Inicial' },
  { id: 5, nombre: 'Git y GitHub', nivel: 'Intermedio' },
  { id: 6, nombre: 'SQL', nivel: 'Intermedio' },
]

export const proyectos = [
  {
    id: 1,
    titulo: 'Sistema de ventas',
    categoria: 'Backend',
    descripcion:
      'API para gestionar productos, clientes y ventas de un pequeño comercio.',
    detalle:
      'Incluye controladores para cada entidad, validación de datos y conexión a una base de datos SQL.',
    tecnologias: ['C#', '.NET', 'SQL Server'],
  },
  {
    id: 2,
    titulo: 'Tiendas en Shopify',
    categoria: 'Frontend',
    descripcion:
      'Creación de tiendas online en Shopify con páginas de productos para dropshipping.',
    detalle:
      'Personalizo los temas con Liquid, el lenguaje de plantillas de Shopify, para armar páginas de producto simples y claras.',
    tecnologias: ['Shopify', 'Liquid', 'HTML', 'CSS'],
  },
  {
    id: 3,
    titulo: 'Este portfolio',
    categoria: 'Frontend',
    descripcion:
      'Portfolio de una sola página hecho con React y Vite para el TP1.',
    detalle:
      'Dividido en componentes que reciben datos por props, con listas generadas con map() y estado manejado con useState.',
    tecnologias: ['React', 'Vite', 'CSS'],
  },
]
