import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  test = new BehaviorSubject<any>('');
  testItem = this.test.asObservable();



  constructor() { }

setTestData(item:any) {
this.test.next(item)
}
 

}
