import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // For ngModel
import { AuthSharedModule } from '../Auth.module';
import { PasswordComponent } from '../../../../components/Common/password/password.component';
import { FloatLabelModule } from 'primeng/floatlabel'; // Import the FloatLabelModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { passwordMatchValidator } from '../../../Common/Validators';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ButtonModule,
    AuthSharedModule,
    FloatLabelModule,
    FontAwesomeModule,
    PasswordComponent,
    MessagesModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: '../Auth.Component.css',
})
export class RegisterComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  messages: Message[] = [
    {
      severity: 'error',
      detail: 'There was an error processing your request.',
    },
  ];
  password: string = '';
  confirmPassword: string = '';

  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatchValidator('password', 'confirmPassword') }
  );

  onPasswordChange(newPassword: string) {
    this.password = newPassword;
    this.registerForm.get('password')?.setValue(newPassword);
  }
  onConfirmPasswordChange(newPassword: string) {
    this.confirmPassword = newPassword;
    this.registerForm.get('confirmPassword')?.setValue(newPassword);
  }

  onSubmit() {
    if (this.registerForm.valid) {
    }
    console.log(this.registerForm?.errors);
    this.registerForm.markAllAsTouched();
  }
}
