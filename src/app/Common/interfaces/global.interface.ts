export interface Column {
  key: string;
  header: string;
  sorting: boolean;
  filtering: boolean;
  sortIcon?: string;
  type: string;
  actionOptions?: any[];
  tagOptions?: string[];
  visible: boolean;
}

export interface ListData {
  title: string;
  cols: Column[];
  data: any[];
  sortAndPaginationConfig: SortAndPaginationConfig;
  dataRules?: DataRules;
}

export interface SortAndPaginationConfig {
  currentPage?: number;
  pageLength?: number;
  sortKey?: string;
  sortOrder?: 'ASC' | 'DESC';
  searchKey?: string;
}

export interface DataRules {
  ruleType: 'one' | 'all';
  rules: Rule[];
}

interface Rule {
  key: string;
  rule:
    | 'startsWith'
    | 'notContains'
    | 'contains'
    | 'endsWith'
    | 'equals'
    | 'notEquals';
}
