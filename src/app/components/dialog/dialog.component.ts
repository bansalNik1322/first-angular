import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { UiSharedModule } from '../../Shared/modules/UIShared.module';
import { Column } from '../../Common/interfaces/global.interface';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule, UiSharedModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements OnChanges {
  @Input() visible = false;
  @Input() sortAndPaginationConfig: any;
  @Output() visibleChange = new EventEmitter();
  @Output() dataChanged = new EventEmitter();
  @Output() sortAndPaginationConfigChanged = new EventEmitter();
  @Output() columnFilterChangesOrNot = new EventEmitter();

  ngOnChanges(): void {
    console.log(this.visible, 'fsg');
  }
  @Input() cols: Column[] = [];

  showDialog() {
    this.visible = true;
  }

  applyChanges() {
    this.dataChanged.emit({
      cols: this.cols,
      config: this.sortAndPaginationConfig,
    });
    this.handleDialogHide(true);
  }

  handleDialogHide(type: boolean) {
    this.visible = false;
    this.visibleChange.emit({ visible: this.visible, changes: type });
  }
}
