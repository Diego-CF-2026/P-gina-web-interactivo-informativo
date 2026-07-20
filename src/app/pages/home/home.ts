import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface HitoHistorico {
  anio: string;
  atleta: string;
  pais: string;
  medallas: string;
  imagen: string;
  detalle: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  
  mostrarMapa: boolean = false;
  mostrarDocumental: boolean = false;
  hitoSeleccionado: HitoHistorico | undefined;

  // CÁMARA ESTILO PVZ2
  mundoActivo: number = 0; 

  // 1. Variable oficial para saber si es celular
  esCelular: boolean = false; 

  // 2. Inyectamos el Router en el constructor
  constructor(private router: Router) {}

  // 3. Comprueba el tamaño apenas carga la página
  ngOnInit() {
    this.verificarPantalla();
  }

  // 4. "Escuchador" que detecta en tiempo real si la pantalla cambia de tamaño
  @HostListener('window:resize')
  onResize() {
    this.verificarPantalla();
  }

  verificarPantalla() {
    // Verificación segura por si usas Angular Universal (SSR)
    if (typeof window !== 'undefined') {
      this.esCelular = window.innerWidth <= 768;
    }
  }

  secciones = [
    { numero: '01', titulo: 'CRONOLOGÍA DEPORTIVA', imagen: '/images.jpg' },
    { numero: '02', titulo: 'DOCUMENTAL', imagen: '/images1.jpg' },
    { numero: '03', titulo: 'PODCAST SPOTIFY', imagen: '/images.png' },
    { numero: '04', titulo: 'TIK TOKS', imagen: '/images2.jpg' }
  ];

  // AQUÍ ESTÁN TUS 5 HITOS COMPLETOS INTACTOS
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
      medallas: 'Medalla Mundial - Campeonato Madeira 2022', 
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

obtenerEstilo(index: number) {
    const offset = index - this.mundoActivo; 
    const direccion = offset > 0 ? 1 : -1;
    const absOffset = Math.abs(offset);

    if (offset === 0) {
      return 'translateX(0px) translateZ(0px) rotateY(0deg) scale(1)';
    }

    // Medimos la pantalla en tiempo real
    const anchoPantalla = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const esModoCelular = anchoPantalla <= 768;

    // MAGIA: En celular la separación X será inmensa (150px) para obligar a que se asomen
    // y reducimos la profundidad Z para que no se hagan invisibles al fondo.
    const separacionX = esModoCelular ? 150 : 320; 
    const profundidadZ = esModoCelular ? -60 : -250; 
    const rotacion = esModoCelular ? -5 : -35; 
    const escala = esModoCelular ? 0.8 : 0.85;

    const transX = offset * separacionX; 
    const transZ = profundidadZ * absOffset; 
    const rotY = rotacion * direccion; 

    return `translateX(${transX}px) translateZ(${transZ}px) rotateY(${rotY}deg) scale(${escala})`;
  }

  // --- FUNCIONES PARA LOS BOTONES MÓVILES ---
  mundoAnterior(event: Event) {
    event.stopPropagation(); // Evita que se abra la tarjeta por accidente
    if (this.mundoActivo > 0) {
      this.mundoActivo--;
    }
  }

  mundoSiguiente(event: Event) {
    event.stopPropagation();
    if (this.mundoActivo < this.secciones.length - 1) {
      this.mundoActivo++;
    }
  }

  obtenerZIndex(index: number) {
    return 100 - Math.abs(index - this.mundoActivo);
  }

  // --- LA LÓGICA DE CLIC ---
  entrarAlMundo(seccion: any, indexClickeado: number) {
    
    if (this.mundoActivo !== indexClickeado) {
      this.mundoActivo = indexClickeado;
      return; 
    }

    switch (seccion.numero) {
      case '01': this.toggleMapa(); break;
      case '02': this.toggleDocumental(); break;
      case '03': this.abrirEnlace('https://open.spotify.com/'); break;
      case '04': this.abrirEnlace('https://www.tiktok.com/'); break;
    }
  }

  toggleMapa() {
    this.mostrarMapa = !this.mostrarMapa;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDocumental() {
    this.mostrarDocumental = !this.mostrarDocumental;
    if (this.mostrarDocumental) this.mostrarMapa = false; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  volverInicio() {
    this.mostrarMapa = false;
    this.mostrarDocumental = false;
    this.mundoActivo = 0; 
    this.cerrarDetalle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/home']); // Reparado: Navega de vuelta al home nativamente
  }

  abrirDetalle(hito: HitoHistorico) {
    this.hitoSeleccionado = hito;
    document.body.style.overflow = 'hidden'; 
  }

  cerrarDetalle() {
    this.hitoSeleccionado = undefined;
    document.body.style.overflow = 'auto'; 
  }

  abrirEnlace(url: string) {
    window.open(url, '_blank');
  }
}