import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 1. Agregamos la propiedad 'detalle' a la interfaz
interface HitoHistorico {
  anio: string;
  atleta: string;
  pais: string;
  medallas: string;
  imagen: string;
  detalle: string; // <-- Nueva propiedad
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  
  mostrarMapa: boolean = false;
  
  // 2. Variable para saber qué hito se le dio clic
  hitoSeleccionado: HitoHistorico | undefined;

  // 3. Base de datos con los detalles de la historia de Rodrigo
  hitos: HitoHistorico[] = [
    { 
      anio: '2019', atleta: 'Rodrigo Santillán', pais: 'Perú', 
      medallas: 'Bronce - Parapanamericanos Lima 2019', 
      imagen: '/images.jpg',
      detalle: 'Compitiendo en casa y con el apoyo de su gente, Rodrigo logró la medalla de bronce en los 100 metros espalda (clase S2). Este evento marcó su explosión internacional y lo consolidó como una de las grandes promesas de la paranatación peruana.'
    },
    { 
      anio: '2021', atleta: 'Rodrigo Santillán', pais: 'Perú', 
      medallas: 'Diploma Paralímpico - Tokio 2020', 
      imagen: '/images.png',
      detalle: 'En sus primeros Juegos Paralímpicos, obtuvo un histórico Diploma Paralímpico al llegar a la gran final de los 100m espalda. Demostró estar en la élite mundial a pesar de su juventud, compitiendo contra los mejores del planeta.'
    },
    { 
      anio: '2022', atleta: 'Rodrigo Santillán', pais: 'Perú', 
      medallas: 'Medalla Mundial - Campeonato Madeira', 
      imagen: '/images1.jpg',
      detalle: 'Logró subir al podio en el Campeonato Mundial de Paranatación celebrado en Portugal. Este logro confirmó que su técnica seguía evolucionando y sirvió como preparación clave para el siguiente ciclo olímpico.'
    },
    { 
      anio: '2023', atleta: 'Rodrigo Santillán', pais: 'Perú', 
      medallas: '3 Medallas de Bronce - Santiago 2023', 
      imagen: '/images2.jpg',
      detalle: 'Fue una de las máximas figuras de la delegación peruana en Chile. Conquistó tres medallas de bronce (100m espalda, 200m libre y 50m espalda), superando sus propias marcas y demostrando una resistencia física increíble.'
    },
    { 
      anio: '2024', atleta: 'Rodrigo Santillán', pais: 'Perú', 
      medallas: 'Diploma Paralímpico - París 2024', 
      imagen: '/images.jpg',
      detalle: 'Alcanzó nuevamente la final paralímpica en los 100m espalda S2 en la capital francesa. Aseguró un nuevo Diploma Paralímpico, confirmando su vigencia ininterrumpida en la élite de la natación adaptada a nivel global.'
    }
  ];

  toggleMapa() {
    this.mostrarMapa = !this.mostrarMapa;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. Funciones para el efecto de expansión
  abrirDetalle(hito: HitoHistorico) {
    this.hitoSeleccionado = hito;
    document.body.style.overflow = 'hidden'; // Evita el scroll de fondo
  }

  cerrarDetalle() {
    this.hitoSeleccionado = undefined;
    document.body.style.overflow = 'auto'; // Restaura el scroll
  }

  // Agrega esto debajo de mostrarMapa = false;
  mostrarDocumental: boolean = false;

  // Agrega esta función debajo de toggleMapa()
  toggleDocumental() {
    this.mostrarDocumental = !this.mostrarDocumental;
    // Ocultamos el mapa por si acaso estaba abierto
    if (this.mostrarDocumental) this.mostrarMapa = false; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Función para abrir enlaces externos en una nueva pestaña
  abrirEnlace(url: string) {
    window.open(url, '_blank');
  }
}