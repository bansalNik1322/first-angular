import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { IconsModule } from '../../Common/Icon.module';
import { UiSharedModule } from '../../Common/UIShared.module';
import { DialogComponent } from '../dialog/dialog.component';
import { ListData } from '../../Common/interfaces/global.interface';
import { ConfirmDialogeComponent } from '../confirm-dialoge/confirm-dialoge.component';
import { ConfirmationDialogService } from '../../service/confirm-dialoge.service';
import { ConfirmationService } from 'primeng/api';
import { ToastsContainer } from '../toast/Toast.container.component';
import { ToastService } from '../../service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule,
    PaginationComponent,
    OverlayComponent,
    UiSharedModule,
    DialogComponent,
    ConfirmDialogeComponent,
    ToastsContainer,
  ],
  providers: [
    ConfirmationDialogService,
    ConfirmationService,
    ToastService,
    Router,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @ViewChild(OverlayComponent) childComponent!: OverlayComponent;
  @ViewChild(ConfirmDialogeComponent) confirmDialog!: ConfirmDialogeComponent;
  confirmDialogOpen: boolean = false;

  @Output() handleRulesChange = new EventEmitter<any>();
  columnFilterDialogeVisible: boolean = false;
  selectedColumn: any;

  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    private router: Router
  ) {}

  openOverlay(event: MouseEvent, column: string) {
    this.selectedColumn = column;
    this.childComponent.showOverlay(event);
  }

  handleApply(selectedValues: any) {
    this.handleRulesChange.emit({
      rules: selectedValues,
      config: this.listData.sortAndPaginationConfig,
    });
  }
  openColumnFilterDialoge() {
    this.columnFilterDialogeVisible = !this.columnFilterDialogeVisible;
  }

  @Input() listData: ListData = {
    title: '',
    cols: [],
    data: [],
    sortAndPaginationConfig: {},
  };

  hanleSortChange(column: string) {
    console.log('key');
    const col = this.listData.cols.find((i) => i.key === column);
    console.log('🚀 ~ TableComponent ~ hanleSortChange ~ col:', col);
    this.listData.sortAndPaginationConfig = {
      ...this.listData.sortAndPaginationConfig,
      sortOrder: col?.sortIcon === 'pi pi-sort-amount-up' ? 'DESC' : 'ASC',
      sortKey: col?.key,
    };

    this.listData.cols.forEach((i) => {
      i.sortIcon =
        i.key === this.listData.sortAndPaginationConfig.sortKey
          ? this.listData.sortAndPaginationConfig.sortOrder === 'ASC'
            ? 'pi pi-sort-amount-up'
            : 'pi pi-sort-amount-down'
          : 'pi pi-sort-alt';
    });
  }

  editRecord(recordId: string | number) {
    console.log('🚀 ~ TableComponent ~ editRecord ~ number:', recordId);
    this.router.navigate(['/dashboard/user/add']);
  }

  openConfirmDialoge(dialogType: string) {
    console.log('Here ');
    const message = {
      header:
        dialogType === 'delete' ? 'Delete Confirmation' : 'Save Confirmation',
      message:
        dialogType === 'delete'
          ? 'Are you sure you want to delete this item?'
          : 'Do you want to save changes?',
    };

    this.confirmDialog.message = message;
    this.confirmDialog.dialogType = dialogType;

    // Use setTimeout to ensure the view updates
    setTimeout(() => {
      this.confirmDialog.openDialog(); // Show the dialog
      this.confirmDialogOpen = true;
    }, 0);
  }
}
