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
export class UserListComponent implements OnInit {
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

  ngOnInit() {
    this.userService.userListData$.subscribe((data) => {
      this.userListData = { ...data };
      this.cols = JSON.parse(JSON.stringify(data.cols));
      this.sortAndPaginationConfig = { ...data.sortAndPaginationConfig };
    });
  }

  private initializeUserData() {
    const { config, users } = this.userService.getUsers();

    this.userListData = {
      title: 'Users',
      cols: JSON.parse(JSON.stringify(this.userService.getUserColumns())),
      data: users,
      sortAndPaginationConfig: JSON.parse(JSON.stringify(config)),
    };

    this.cols = JSON.parse(JSON.stringify(this.userListData.cols));
    this.sortAndPaginationConfig = JSON.parse(
      JSON.stringify(this.userListData.sortAndPaginationConfig)
    );
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
  }

  public hanldleSortChange(column?: string): void {
    if (column) {
      const col = this.userListData.cols.find((i) => i.key === i.key);
      this.userListData.sortAndPaginationConfig = {
        ...this.userListData.sortAndPaginationConfig,
        sortOrder: col?.sortIcon === 'pi pi-sort-amount-up' ? 'DESC' : 'ASC',
        sortKey: col?.key,
      };

      this.userListData.cols.forEach((i) => {
        i.sortIcon =
          i.key === this.userListData.sortAndPaginationConfig.sortKey
            ? this.userListData.sortAndPaginationConfig.sortOrder === 'ASC'
              ? 'pi pi-sort-amount-up'
              : 'pi pi-sort-amount-down'
            : 'pi pi-sort-alt';
      });

      this.userService.updateUserListData(this.userListData);
    } else {
      this.cols.forEach((i) => {
        if (i.key === this.sortAndPaginationConfig.sortKey) {
          console.log(i.key);
          i.sortIcon =
            this.sortAndPaginationConfig.sortOrder === 'ASC'
              ? 'pi pi-sort-amount-up'
              : 'pi pi-sort-amount-down';
        } else {
          i.sortIcon = 'pi pi-sort-alt';
        }
      });
    }
    console.log(this.userListData, this.cols, this.sortAndPaginationConfig);
  }

  public dialogeVisibilityChanges(visibleChanges: any) {
    this.columnFilterDialogeVisible = visibleChanges.visible;

    if (visibleChanges.changes) {
      this.userListData.sortAndPaginationConfig.sortKey =
        this.sortAndPaginationConfig.sortKey;
      this.userListData.sortAndPaginationConfig.sortOrder =
        this.sortAndPaginationConfig.sortOrder;
      this.userListData.sortAndPaginationConfig = this.sortAndPaginationConfig;
      this.userListData.cols = JSON.parse(JSON.stringify(this.cols));
    }
  }

  handleRuleChange(data: any) {
    this.userListData.dataRules = {
      rules: data?.rules?.list,
      rulekey: data?.rules?.key,
      ruleType: data?.rules?.type,
    };
    this.userListData.sortAndPaginationConfig = data?.config;

    console.log(this.userListData, 'fjewrljg');
  }

  handlePagination(paginationData: any) {
    this.userService.updateUserListData({
      ...this.userListData,
      sortAndPaginationConfig: {
        ...this.userListData.sortAndPaginationConfig,
        offset: paginationData?.offset ?? 0,
        pageLength: paginationData?.pageLength ?? 10,
        currentPage: paginationData?.currentPage ?? 1,
      },
    });
    console.log(this.userListData, this.sortAndPaginationConfig);
  }
}
