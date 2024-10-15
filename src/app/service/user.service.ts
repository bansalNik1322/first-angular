import { Injectable } from '@angular/core';
import {
  Column,
  ListData,
  SortAndPaginationConfig,
} from '../Common/interfaces/global.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private userListDataSubject = new BehaviorSubject<ListData>(
    this.getInitialUserData()
  );

  private getInitialUserData(): ListData {
    const { config, users } = this.getUsers();
    return {
      title: 'Users',
      cols: this.getUserColumns(),
      data: users,
      sortAndPaginationConfig: config,
    };
  }

  updateUserListData(data: ListData): void {
    this.userListDataSubject.next(data);
  }

  userListData$ = this.userListDataSubject.asObservable();
  public getUserColumns() {
    const userColumns: Column[] = [
      {
        header: 'S. No.',
        key: 'id',
        sortIcon: 'pi pi-sort-alt',
        filtering: false,
        sorting: false,
        type: 'text',
        visible: true,
      },
      {
        header: 'Name',
        key: 'name',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        type: 'text',
        visible: true,
      },
      {
        header: 'Phone',
        key: 'phone',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        visible: true,
        type: 'text',
      },
      {
        header: 'Email',
        key: 'email',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        visible: true,
        type: 'text',
      },
      {
        header: 'Username',
        key: 'username',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        visible: true,
        type: 'text',
      },
      {
        header: 'Status',
        key: 'status',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        type: 'tag',
        visible: false,
        tagOptions: ['active', 'inactive', 'deleted'],
      },
      {
        header: 'Country',
        key: 'country',
        sortIcon: 'pi pi-sort-alt',
        visible: false,
        filtering: true,
        sorting: true,
        type: 'text',
      },
      {
        header: 'State',
        key: 'state',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        visible: false,
        sorting: false,
        type: 'text',
      },
      {
        header: 'City',
        key: 'city',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        type: 'text',
        visible: false,
      },
      {
        header: 'Since',
        key: 'since',
        visible: false,
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        type: 'text',
      },
      {
        header: 'Last Login',
        key: 'last_login',
        sortIcon: 'pi pi-sort-alt',
        filtering: true,
        sorting: true,
        visible: false,
        type: 'text',
      },
      {
        header: 'Action',
        key: 'action',
        type: 'action',
        filtering: false,
        visible: true,
        sorting: false,
        actionOptions: [
          { icon: 'pi pi-pencil text-primary', value: 'Edit' },
          { icon: 'pi pi-trash text-danger', value: 'Delete' },
        ],
      },
    ];
    return userColumns;
  }

  public getUsers() {
    const users = [
      {
        name: 'Paul Young',
        phone: '555-1314',
        email: 'paul.young@example.com',
        username: 'pauly',
        status: 'Active',
        country: 'USA',
        state: 'Pennsylvania',
        city: 'Philadelphia',
        since: '2022-07-27',
        last_login: '2024-10-02',
      },
      {
        name: 'Quinn King',
        phone: '555-1415',
        email: 'quinn.king@example.com',
        username: 'quinnk',
        status: 'Active',
        country: 'USA',
        state: 'Minnesota',
        city: 'Minneapolis',
        since: '2021-11-14',
        last_login: '2024-09-29',
      },
      {
        name: 'Rachel Scott',
        phone: '555-1516',
        email: 'rachel.scott@example.com',
        username: 'rachels',
        status: 'Inactive',
        country: 'USA',
        state: 'Tennessee',
        city: 'Nashville',
        since: '2019-03-22',
        last_login: '2023-05-10',
      },
      {
        name: 'Steve Adams',
        phone: '555-1617',
        email: 'steve.adams@example.com',
        username: 'stevea',
        status: 'Active',
        country: 'USA',
        state: 'Kentucky',
        city: 'Louisville',
        since: '2021-12-08',
        last_login: '2024-09-25',
      },
      {
        name: 'Tina Brown',
        phone: '555-1718',
        email: 'tina.brown@example.com',
        username: 'tinab',
        status: 'Active',
        country: 'USA',
        state: 'Nevada',
        city: 'Las Vegas',
        since: '2020-05-15',
        last_login: '2024-10-06',
      },
    ];
    const config: SortAndPaginationConfig = {
      currentPage: 1,
      pageLength: 10,
      sortKey: 'id',
      sortOrder: 'ASC',
      totalRecords: 50,
      searchKey: '',
    };

    return { users, config };
  }
}
