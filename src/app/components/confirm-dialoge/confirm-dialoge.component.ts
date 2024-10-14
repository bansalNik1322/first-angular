import { Component, inject, Input } from '@angular/core';
import { UiSharedModule } from '../../Common/UIShared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmationDialogService } from '../../service/confirm-dialoge.service';
import { ToastService } from '../../service/toast.service';
import { ToastsContainer } from '../toast/Toast.container.component';

@Component({
  selector: 'app-confirm-dialoge',
  standalone: true,
  imports: [UiSharedModule, ToastsContainer],
  providers: [
    MessageService,
    UiSharedModule,
    ConfirmationService,
    ToastService,
    ConfirmationDialogService,
  ],
  styleUrl: './confirm-dialoge.component.css',
  templateUrl: './confirm-dialoge.component.html',
})
export class ConfirmDialogeComponent {
  @Input() dialogType: string = ''; // Type of dialog (save/delete)
  @Input() message: { header: string; message: string } = {
    header: '',
    message: '',
  };

  constructor(private confirmationService: ConfirmationService) {}
  toastService = inject(ToastService);

  openDialog() {
    this.confirmationService.confirm({
      header: this.message.header,
      message: this.message.message,
      accept: () => {
        this.toastService.showToast(
          'success',
          'Operation completed successfully!'
        );
        console.log('Accepted');
      },
      reject: () => {
        console.log('Rejected');
        this.toastService.showToast(
          'error',
          'Operation completed successfully!'
        );
      },
    });
  }
}
