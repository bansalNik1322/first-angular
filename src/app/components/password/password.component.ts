import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  passwordVisible = false;
  // Icons
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  @Input() passwordOrConfirm = false;
  @Input() passwordValue = '';
  @Output() passwordValueChange = new EventEmitter<string>();

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.passwordValue = input.value;

    this.passwordValueChange.emit(this.passwordValue);
  }
}
