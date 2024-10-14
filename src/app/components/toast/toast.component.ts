import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  imports: [ToastModule],
  standalone: true,
  template: ` <p-toast></p-toast> `,
})
export class ToastComponent {}
