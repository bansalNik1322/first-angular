import { Component } from '@angular/core';
import { AddEditUserComponent } from '../../../components/User/add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [AddEditUserComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {}
