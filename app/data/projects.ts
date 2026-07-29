import { ProjectCategory, type Project } from '~/types/index';

export const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'Mesa de Comedor en Roble',
    description: 'Mesa maciza con acabado natural y bordes irregulares, respetando la morfología del tronco.',
    category: ProjectCategory.CUSTOM_FURNITURE,
    // Sustituimos la imagen unica por un array para alimentar la galeria del popup
    images: [
      '/images/mesa-roble-1.jpg',
      '/images/mesa-roble-2.jpg',
      '/images/mesa-roble-3.jpg'
    ]
  },
  {
    id: '2',
    title: 'Barra para Cafetería de Especialidad',
    description: 'Diseño e instalación integral de barra en madera de nogal con estructura metálica oculta.',
    category: ProjectCategory.COMMERCIAL,
    clientName: 'Cafetería El Grano Artesano',
    images: [
      '/images/barra-cafe-1.jpg',
      '/images/barra-cafe-2.jpg'
    ]
  },
  {
    id: '3',
    title: 'Restauración Cómoda Isabelina',
    description: 'Tratamiento integral antixilófagos, decapado manual y acabado a muñequilla tradicional.',
    category: ProjectCategory.RESTORATION,
    images: [
      '/images/comoda-antigua-1.jpg',
      '/images/comoda-antigua-2.jpg',
      '/images/comoda-antigua-3.jpg'
    ]
  }
];