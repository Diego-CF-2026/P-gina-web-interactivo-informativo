import { Routes } from '@angular/router';

// Fíjate que aquí ya no dice ".component" al final de la ruta
import { Nosotros } from './pages/nosotros/nosotros';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: 'nosotros', component: Nosotros },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];