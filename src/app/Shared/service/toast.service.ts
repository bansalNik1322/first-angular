import { Injectable, TemplateRef } from '@angular/core';

export interface Toast {
  template: TemplateRef<any>;
  classname?: string;
  message?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  static successTemplate: TemplateRef<any>;
  static errorTemplate: TemplateRef<any>;

  show(toast: Toast) {
    this.toasts.push(toast);
  }

  showToast(type: 'success' | 'error', message: string) {
    console.log('In toast service');
    const toast: Toast = {
      template:
        type === 'success'
          ? ToastService.successTemplate
          : ToastService.errorTemplate,
      classname:
        type === 'success' ? 'bg-success text-light' : 'bg-danger text-light',
      message: message,
      delay: 3000,
    };
    this.show(toast);
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
