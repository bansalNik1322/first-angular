import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthSharedModule } from '../Auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordComponent } from '../../../../components/Common/password/password.component';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { ErrorHandleService } from '../../Shared/Errors/error.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthSharedModule, PasswordComponent, FontAwesomeModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: '../Auth.Component.css',
})
export class LoginComponent {
  constructor(private _errorHandlerService: ErrorHandleService) {}

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
      const errors: any = [];
      Object.keys(this.loginForm.controls).forEach((controlName) => {
        const control = this.loginForm.get(controlName);
        if (control?.invalid) {
          errors.push({ field: controlName, error: control.errors });
        }
      });
      const errorElements = this._errorHandlerService.getErrors(errors);
      console.log(errorElements);
    }
  }
}
