import { Injectable, TemplateRef } from '@angular/core';

export interface Toast {
  template?: TemplateRef<any>; // Optional template for more complex toasts
  message?: string; // New property for dynamic message
  classname?: string; // CSS class for styling
  delay?: number; // Duration before auto-hiding
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = []; // Array to hold the active toasts

  // Method to show a new toast
  show(toast: Toast) {
    this.toasts.push(toast); // Add the new toast to the array
  }

  // Method to remove a specific toast
  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast); // Filter out the specified toast
  }

  // Method to clear all toasts
  clear() {
    this.toasts.splice(0, this.toasts.length); // Clear the toasts array
  }
}
