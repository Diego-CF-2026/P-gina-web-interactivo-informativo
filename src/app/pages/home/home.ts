import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE: Importar esto

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- IMPORTANTE: Agregarlo aquí
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // Tu lógica de la página
}