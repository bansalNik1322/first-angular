import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../../Common/Validators';
import { AuthSharedModule } from '../Auth.module';
import { PasswordComponent } from '../../../../components/Common/password/password.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [AuthSharedModule, PasswordComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: '../Auth.Component.css',
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  resetForm: FormGroup = new FormGroup(
    {
      otp: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') }
  );

  onPasswordChange(newPassword: string) {
    this.password = newPassword;
    this.resetForm.get('password')?.setValue(newPassword);
  }
  onConfirmPasswordChange(newPassword: string) {
    this.confirmPassword = newPassword;
    this.resetForm.get('confirmPassword')?.setValue(newPassword);
  }
  onSubmit() {
    if (this.resetForm.valid) {
    }
    console.log(this.resetForm?.errors);
    this.resetForm.markAllAsTouched();
  }
}
