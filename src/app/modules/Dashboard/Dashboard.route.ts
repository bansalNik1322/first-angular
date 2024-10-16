import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from '../User/user-list/user-list.component';
import { AddUserComponent } from '../User/add-user/add-user.component';
import { EditUserComponent } from '../User/edit-user/edit-user.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,  
    pathMatch: 'full',
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'add',
        component: AddUserComponent,
      },
      {
        path: 'edit/:userid',
        component: EditUserComponent,
      },
    ],
  },
];
