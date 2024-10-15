import { Routes } from '@angular/router';
import { authRoutes } from './modules/Auth/auth.routes';
import { dashboardRoutes } from './modules/Dashboard/Dashboard.route';
import { ConfirmDialogeComponent } from './components/confirm-dialoge/confirm-dialoge.component';
import { ToastsContainer } from './components/toast/Toast.container.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'dashboard',
    children: dashboardRoutes,
  },
  {
    path: 'loader',
    component: ToastsContainer,
  },
];
