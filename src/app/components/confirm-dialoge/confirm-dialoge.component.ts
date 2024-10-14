import { Component } from '@angular/core';
import { UiSharedModule } from '../../Common/UIShared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmationDialogService } from '../../service/confirm-dialoge.service';
import { ToasterService } from '../../service/toaster.service';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-confirm-dialoge',
  standalone: true,
  imports: [UiSharedModule, ToastComponent],
  providers: [
    MessageService,
    UiSharedModule,
    ConfirmationService,
    ConfirmationDialogService,
    ToasterService,
  ],
  styleUrl: './confirm-dialoge.component.css',
  template: ` <button (click)="showSuccess()">Show Success Toast</button> `,
})
export class ConfirmDialogeComponent {
  type = 'delete';

  showSuccess() {
    this.toasterService.showSuccess('This is a success message!');
  }

  constructor(
    private toasterService: ToasterService,
    private messageService: MessageService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  confirm() {
    this.confirmationDialogService.confirm(
      'Are you sure?',
      'Please confirm to proceed.',
      () => {
        // Handle accept
        console.log('Accepted');
      },
      () => {
        // Handle reject
        console.log('Rejected');
      }
    );
  }
}
