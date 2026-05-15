import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. IMPORTANTE ESTO

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule], // 2. Y PONERLO AQUÍ
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.scss']
})
export class Nosotros {
  // Tu lógica
}