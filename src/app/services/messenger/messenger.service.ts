import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  openSideNavitionMessageBehaviorSubjet: BehaviorSubject<boolean> = new BehaviorSubject<any>(null);
  constructor() { }

  
  sendOpenSideNavitionMessageBehaviorSubject(msg: boolean) {
    return this.openSideNavitionMessageBehaviorSubjet.next(msg);
  }
}
