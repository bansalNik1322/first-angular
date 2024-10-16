import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../Shared/service/toast.service';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgTemplateOutlet, CommonModule],
  template: `
    <ng-template #successTemplate let-message="message">
      <div class="toast-message">Success: {{ message }}</div>
    </ng-template>

    <ng-template #errorTemplate let-message="message">
      <div class="toast-message">Error: {{ message }}</div>
    </ng-template>

    <ngb-toast
      *ngFor="let toast of toastService.toasts; trackBy: trackByToast"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template
        [ngTemplateOutlet]="toast.template"
        [ngTemplateOutletContext]="{ message: toast.message }"
      ></ng-template>
    </ngb-toast>
  `,
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class ToastsContainer {
  toastService = inject(ToastService);

  @ViewChild('successTemplate', { static: true })
  successTemplate!: TemplateRef<any>;
  @ViewChild('errorTemplate', { static: true })
  errorTemplate!: TemplateRef<any>;

  ngOnInit() {
    ToastService.successTemplate = this.successTemplate;
    ToastService.errorTemplate = this.errorTemplate;
  }

  trackByToast(index: number, toast: any) {
    return toast; // or any unique identifier
  }
}
