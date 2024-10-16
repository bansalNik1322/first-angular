import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UiSharedModule } from '../../../Shared/modules/UIShared.module';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [UiSharedModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: '../Auth.Component.css',
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.forgotForm.invalid) {
      this?.forgotForm?.markAllAsTouched();
    }
  }
}
