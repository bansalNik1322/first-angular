import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from '../User/user-list/user-list.component';
import { AddEditUserComponent } from '../User/add-edit-user/add-edit-user.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'user/add',
    component: AddEditUserComponent,
  },
];
