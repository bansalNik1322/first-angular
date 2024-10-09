import { Routes } from '@angular/router';
import { authRoutes } from './modules/Auth/auth.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
];
