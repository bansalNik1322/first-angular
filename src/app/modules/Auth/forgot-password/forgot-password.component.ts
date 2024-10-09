import { Component } from '@angular/core';
import { AuthSharedModule } from '../Auth.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [AuthSharedModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: '../Auth.Component.css',
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {}
}
