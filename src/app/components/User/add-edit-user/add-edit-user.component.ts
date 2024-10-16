import { Component, Input } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { UiSharedModule } from '../../../Shared/modules/UIShared.module';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [LayoutComponent, UiSharedModule, FileUploadComponent],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css',
})
export class AddEditUserComponent {
  @Input() edit: boolean = false;

  selectedCity = '';

  genderOptions = ['Male', 'Female'];
}
