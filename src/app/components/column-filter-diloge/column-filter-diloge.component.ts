import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UiSharedModule } from '../../Shared/modules/UIShared.module';

@Component({
  selector: 'app-column-filter-diloge',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule, UiSharedModule],
  templateUrl: './column-filter-diloge.component.html',
  styleUrl: './column-filter-diloge.component.css',
})
export class ColumnFilterDilogeComponent {
  @Input() visible = false;
  @Input() userListData: any;
  @Output() visibleChange = new EventEmitter();
  @Output() dataChanged = new EventEmitter();
  @Output() sortAndPaginationConfigChanged = new EventEmitter();
  @Output() columnFilterChangesOrNot = new EventEmitter();

  constructor() {
    this.cols = this.cols.map((i: any) => {
      name: i?.header;
      code: i?.key;
    });
  }

  ngOnChanges(): void {
    console.log(this.visible, 'fsg');
  }
  @Input() cols: any = [];

  showDialog() {
    this.visible = true;
  }

  applyChanges() {
    this.handleDialogHide(true);
  }

  handleDialogHide(type: boolean) {
    this.visible = false;
    this.visibleChange.emit({ visible: this.visible, changes: type });
  }
}
