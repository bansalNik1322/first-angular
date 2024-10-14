import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { PasswordComponent } from '../../../components/password/password.component';
import { UiSharedModule } from '../../../Common/UIShared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UiSharedModule, PasswordComponent, UiSharedModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: '../Auth.Component.css',
})
export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  profileImage: string = 'assets/img/download.jpeg';
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
      this.loginForm?.markAllAsTouched();
    }
  }
}
