import { Routes } from '@angular/router';

// Importaciones apuntando exactamente a tus archivos personalizados
import { Nosotros } from './pages/nosotros/nosotros';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: 'nosotros', component: Nosotros },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  
  // Rutas por defecto y comodín
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];