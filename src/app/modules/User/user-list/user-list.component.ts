import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { TableComponent } from '../../../components/table/table.component';
import { UserService } from '../../../service/user.service';
import {
  Column,
  ListData,
  SortAndPaginationConfig,
} from '../../../Common/interfaces/global.interface';
import { UiSharedModule } from '../../../Common/UIShared.module';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { ConfirmationDialogService } from '../../../service/confirm-dialoge.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    LayoutComponent,
    TableComponent,
    UiSharedModule,
    DialogComponent,
    PaginationComponent,
  ],
  providers: [UserService, ConfirmationDialogService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userListData: ListData = {
    title: 'Users',
    cols: [],
    data: [],
    sortAndPaginationConfig: {},
  };
  columnFilterDialogeVisible: boolean = false;
  sortAndPaginationConfig: SortAndPaginationConfig = {};
  cols: Column[] = [];

  constructor(private userService: UserService) {
    this.initializeUserData();
  }

  private initializeUserData() {
    this.userListData.cols = this.userService.getUserColumns();
    const { config, users } = this.userService.getUsers();
    this.userListData.sortAndPaginationConfig = config;
    this.userListData.data = users;

    this.cols = JSON.parse(JSON.stringify(this.userListData.cols));
    this.sortAndPaginationConfig = this.userListData.sortAndPaginationConfig;
  }

  // Column Filter Dialoge Box Functions
  public openColumnFilterDialoge() {
    this.columnFilterDialogeVisible = !this.columnFilterDialogeVisible;
  }
  public colFilterChange(
    event: any,
    type: 'visible' | 'filtering' | 'sorting',
    col: string
  ): void {
    this.cols.forEach((i) => {
      if (i.key === col) {
        (i as any)[type] = event.target.checked;
      }
    });
    console.log(
      '🚀 ~ UserListComponent ~ this.cols.forEach ~  this.cols:',
      this.cols === this.userListData.cols
    );
  }

  public hanldleSortChange(event: any, type: 'Order' | 'Key'): void {
    this.sortAndPaginationConfig[`sort${type}`] = event.target.value;
  }
  public dialogeVisibilityChanges(visibleChanges: any) {
    this.columnFilterDialogeVisible = visibleChanges.visible;

    if (visibleChanges.changes) {
      this.userListData.sortAndPaginationConfig = this.sortAndPaginationConfig;
      this.userListData.cols = JSON.parse(JSON.stringify(this.cols));
    }
  }

  public sortAndPaginationConfigChange(config: any): void {
    this.userListData.sortAndPaginationConfig = config;
  }

  handleRuleChange(rules: any) {
    console.log('🚀 ~ UserListComponent ~ handleRuleChange ~ rules:', rules);
  }
}
