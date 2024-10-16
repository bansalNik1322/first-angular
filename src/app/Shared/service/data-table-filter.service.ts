import { Injectable } from '@angular/core';
import { SortAndPaginationConfig } from '../../Common/interfaces/global.interface';

@Injectable({
  providedIn: 'root',
})
export class DataTableFilterService {
  public getRuleApplyOptions() {
    return [
      {
        value: 'only',
        key: 'Match Any',
      },
      {
        value: 'all',
        key: 'Match All',
      },
    ];
  }

  public getRuleOptions() {
    return [
      {
        value: 'startsWith',
        key: 'Starts With',
      },
      {
        value: 'contains',
        key: 'Contains',
      },
      {
        value: 'notContains',
        key: 'Not Contains',
      },
      {
        value: 'endsWith',
        key: 'Ends With',
      },
      {
        value: 'equals',
        key: 'Equals',
      },
      {
        value: 'notEquals',
        key: 'Not Equals',
      },
    ];
  }
}
