import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthSharedModule } from '../Auth.module';
import { PasswordComponent } from '../../../../components/Common/password/password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthSharedModule, PasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: '../Auth.Component.css',
})
export class LoginComponent {
  profileImage: string = 'assets/img/user-profile.png';
  password: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onPasswordChange(newPassword: string) {
    this.password = newPassword;
    this.loginForm.get('password')?.setValue(newPassword);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
