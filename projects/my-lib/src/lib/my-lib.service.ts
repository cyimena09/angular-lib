import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  constructor() {
  }

  getDatas(): string {
    return 'this is the datas';
  }

}
