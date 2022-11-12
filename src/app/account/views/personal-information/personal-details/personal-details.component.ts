import { select } from '@angular-redux/store';
import {
  AfterContentInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  @select((s) => s.userDetails.userDetails) userDetails$: any;
  @select((s) => s.userDetails.isLoading) isLoading$: any;
  userData: any;
  Subscriptions: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    let subscription = this.userDetails$.subscribe((e: any) => {
      if (e) {
        this.userData = e[0];
      }
    });
    this.Subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
