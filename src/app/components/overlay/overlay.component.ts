import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { OverlayModule } from 'primeng/overlay';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DataTableFilterService } from '../../service/data-table-filter.service';

interface Rule {
  index: number;
  key: string;
  rule: string;
}

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  standalone: true,
  imports: [
    OverlayPanelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule,
    ChipsModule,
    FormsModule,
    CommonModule,
    OverlayModule,
    DropdownModule,
  ],
})
export class OverlayComponent implements OnInit {
  @ViewChild('op') overlayPanel!: OverlayPanel;
  @Output() applyClicked = new EventEmitter<any>();
  @Input() column: any;

  ruleApplyOptions: any = [];
  ruleOptions: any = [];
  selectedRuleApply: string = 'all';
  rules: Rule[] = [];

  ngOnInit() {
    !this.rules.length &&
      this.rules.push({
        index: 1,
        rule: 'startsWith',
        key: '',
      });
  }
  constructor(private _dataTableFilterService: DataTableFilterService) {
    this.ruleApplyOptions = this._dataTableFilterService.getRuleApplyOptions();
    this.ruleOptions = this._dataTableFilterService.getRuleOptions();
  }
  showOverlay(event: MouseEvent) {
    this.overlayPanel.toggle(event);
  }

  onApply() {
    this.applyClicked.emit({
      rules: this.rules,
      ruleType: this.selectedRuleApply,
    });
    if (this.overlayPanel) {
      this.overlayPanel.hide();
    }
  }
  clearFilters() {
    this.rules = [
      {
        index: 1,
        rule: 'startsWith',
        key: '',
      },
    ];
  }

  handleRuleApplyOptionChanges(event: Event, type: string) {
    const selectElement = event.target as HTMLSelectElement;

    this.selectedRuleApply =
      type === 'ruleApply' ? selectElement.value : this.selectedRuleApply;
  }

  addRule() {
    this.rules.push({
      index: this.rules.length
        ? this.rules[this.rules.length - 1].index + 1
        : 1,
      rule: 'startsWith',
      key: '',
    });
  }

  isInputValid(): boolean {
    return this.rules.every((rule) => rule.key && rule.rule);
  }

  removeRule(index: number) {
    this.rules = this.rules.filter((i) => i?.index !== index);
  }

  handleChange(event: Event, type: 'rule' | 'key', index: number) {
    const newValue = (event.target as HTMLSelectElement)?.value;
    const rule = this.rules.find((rule) => rule.index === index);
    if (rule) {
      rule[type] = newValue;
    }
  }
}
