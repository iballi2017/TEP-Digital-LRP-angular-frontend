import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/redux/store';
import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_SUCCESS,
} from 'src/redux/_userDetails.store/user-details.actions';
import { IdentityService } from './services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tep-digital-lrp';
  constructor(
    private _identitySvc: IdentityService,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    // this.onGetUserDetails();
  }
  onGetUserDetails() {
    // this._identitySvc.getUserById();
  }
}
