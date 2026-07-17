import { Routes } from '@angular/router';

// Importaciones apuntando exactamente a tus archivos personalizados
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { NosotrosComponent } from './pages/nosotros/nosotros';

export const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  // Rutas por defecto y comodín
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];