import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- 1. Importas esto

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- 2. Lo agregas al arreglo
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
}