import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { UiSharedModule } from '../../../Common/UIShared.module';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [LayoutComponent, UiSharedModule, FileUploadComponent],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css',
})
export class AddEditUserComponent {
  selectedCity = '';

  genderOptions = ['Male', 'Female'];
}
