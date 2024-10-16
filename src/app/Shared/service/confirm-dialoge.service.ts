import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  openConfirmDialoge(
    header: string,
    message: string,
    acceptCallback: () => void,
    rejectCallback: () => void
  ) {
    console.log('🚀 ~ ConfirmationDialogService ~ rejectCallback:');
    this.confirmationService.confirm({
      header: header,
      message: message,
      accept: () => {
        acceptCallback();
      },
      reject: () => {
        rejectCallback();
      },
    });
  }
}
