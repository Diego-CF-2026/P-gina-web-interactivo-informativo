import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {  // <--- ¡Aquí está el cambio! Antes decía AppComponent
  title = 'pruebaAngular';
}