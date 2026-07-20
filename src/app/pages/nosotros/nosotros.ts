import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface TeamMember {
  id: string;
  nombre: string;
  rol: string;
  imagen: string;
  biografia: string;
  contribucion: string;
  herramientas: string[];
  filosofia: string;
  redes: { linkedin?: string; github?: string; behance?: string; instagram?: string };
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.scss']
})
export class NosotrosComponent {
  
  equipo: TeamMember[] = [
    {
      id: '01',
      nombre: 'MARÍA PÉREZ',
      rol: 'Dirección del Documental',
      imagen: '/Integrante 1.jpg',
      biografia: 'Estudiante de comunicación audiovisual apasionada por el storytelling social y la narrativa documental.',
      contribucion: 'Dirigió las entrevistas en Santiago y estructuró el guion narrativo principal del documental.',
      herramientas: ['Premiere Pro', 'DaVinci Resolve', 'Cámaras Sony'],
      filosofia: '"Cada plano debe contar una historia por sí solo."',
      redes: { instagram: '#', behance: '#' }
    },
    {
      id: '02',
      nombre: 'LUIS GÓMEZ',
      rol: 'Producción de Podcast',
      imagen: '/Integrante 2.jpg',
      biografia: 'Especialista en diseño sonoro y locución, buscando siempre la inmersión a través del audio.',
      contribucion: 'Grabación, limpieza de audio y musicalización de los 5 episodios del podcast en Spotify.',
      herramientas: ['Audition', 'Pro Tools', 'Micrófonos Rode'],
      filosofia: '"El buen sonido es aquel que se siente, pero no se nota."',
      redes: { instagram: '#' }
    },
    {
      id: '03',
      nombre: 'ANA SOFÍA',
      rol: 'Estrategia en TikToks',
      imagen: '/Integrante 3.png',
      biografia: 'Creadora de contenido digital enfocada en formatos verticales y métricas de alcance orgánico.',
      contribucion: 'Planificó el calendario de contenidos y editó las cápsulas virales del entrenamiento.',
      herramientas: ['CapCut', 'Illustrator', 'Métricas de RRSS'],
      filosofia: '"Atrapar la atención en los primeros 3 segundos lo es todo."',
      redes: { linkedin: '#', instagram: '#' }
    },
    {
      id: '04',
      nombre: 'CARLOS RAMÍREZ',
      rol: 'Desarrollo Web Interactivo',
      imagen: '/Integrante 4.png',
      biografia: 'Estudiante de décimo ciclo de ingeniería, enfocado en el desarrollo full-stack y la creación de ecosistemas digitales inmersivos.',
      contribucion: 'Arquitectura y desarrollo de la plataforma web en Angular para unificar todos los formatos del Universo Transmedia.',
      herramientas: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
      filosofia: '"Seriedad absoluta en el código, pero siempre aportando la mayor alegría a la dinámica del equipo."',
      redes: { linkedin: '#', github: '#' }
    }
  ];

  integranteSeleccionado: TeamMember | undefined;

  abrirModal(integrante: TeamMember) {
    this.integranteSeleccionado = integrante;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.integranteSeleccionado = undefined;
    document.body.style.overflow = 'auto';
  }
}