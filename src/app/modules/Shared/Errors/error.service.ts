import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  getErrors(errorElements: any) {
    for(const error of errorElements){
        
    }
    return errorElements;
  }
}
