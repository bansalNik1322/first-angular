import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private data: any = {};

  constructor() {}

  setData(key: string, value: any) {
    this.data[key] = value;
  }

  getData(key: string) {
    return this.data[key];
  }
}
