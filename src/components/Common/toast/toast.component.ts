import { Component, inject, OnDestroy, TemplateRef } from '@angular/core';
import { NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, NgbToastModule, NgbTooltipModule],
  template: `
    <ng-template #dangerTpl let-toast="toast" style="height: 50px;">
      <div *ngIf="toast.message; else customTpl">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        {{ toast.message }}
        <p
          class="text-light"
          style="font-size: 20px;
          cursor: pointer; display:inline; float:right; margin-top:-5px;"
          (click)="removeToast(toast)"
        >
          <i class="fa fa-times" aria-hidden="true"></i>
        </p>
      </div>
      <ng-template #customTpl>
        <p class="text-light" (click)="removeToast(toast)">Close</p>
      </ng-template>
    </ng-template>
    <button class="btn btn-danger" (click)="showDanger()">Danger toast</button>

    <div
      aria-live="polite"
      aria-atomic="true"
      class="toast-container position-fixed top-0 end-0 p-3"
      style="z-index: 1200"
    >
      <ngb-toast
        *ngFor="let toast of toastService.toasts; trackBy: trackToast"
        [class]="toast.classname"
        [autohide]="true"
        [delay]="toast.delay || 5000"
        (hidden)="toastService.remove(toast)"
      >
        <ng-template
          [ngTemplateOutlet]="toast.template || dangerTpl"
          [ngTemplateOutletContext]="{ toast: toast }"
        ></ng-template>
      </ngb-toast>
    </div>
  `,
})
export class ToastComponent implements OnDestroy {
  toastService = inject(ToastService);
  message: string = 'Dynamic MEssage';
  showDanger() {
    this.toastService.show({
      message: this.message, // Pass the dynamic message
      classname: 'bg-danger text-light',
      delay: 10000,
    });
  }

  removeToast(toast: any) {
    this.toastService.remove(toast);
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  trackToast(index: number, toast: any) {
    return toast.id; // or any unique property
  }
}
