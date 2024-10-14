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
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @ViewChild(OverlayComponent) childComponent!: OverlayComponent;
  @Output() handleRulesChange = new EventEmitter<any>();
  columnFilterDialogeVisible: boolean = false;
  selectedColumn: any;

  openOverlay(event: MouseEvent, column: string) {
    this.selectedColumn = column;
    this.childComponent.showOverlay(event);
  }
  handleApply(selectedValues: any) {
    this.handleRulesChange.emit(selectedValues);
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

  openConfirmDialoge(type: 'delete') {
    
  }
}
