import { Routes } from '@angular/router';
import { dashboardRoutes } from './modules/Dashboard/Dashboard.route';
import { ToastsContainer } from './components/toast/Toast.container.component';
import { authRoutes } from './modules/Auth/auth.routes';
import { ColumnFilterDilogeComponent } from './components/column-filter-diloge/column-filter-diloge.component';

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
    path: '',
    component: ColumnFilterDilogeComponent,
  },
];
