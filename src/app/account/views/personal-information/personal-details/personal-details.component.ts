import { select } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  @select((s) => s.userDetails.userDetails) userDetails$: any;
  userData: any;
  constructor() {}

  ngOnInit(): void {
    this.userDetails$.subscribe((e: any) => {
      this.userData = e;
    });
  }
}
