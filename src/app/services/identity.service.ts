import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from 'src/redux/store';
import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_SUCCESS,
} from 'src/redux/_userDetails.store/user-details.actions';
import { baseUrl } from '../config/api';
import { UpdatePassword, UpdateUserModel } from '../models/types/user';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  UpdateUserUrl = baseUrl + '/update-user-profile';
  FetchUserByIdrUrl = baseUrl + '/fetch-user-by-id';
  UpdatePasswordUrl = baseUrl + '/update-user-password';

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private ngRedux: NgRedux<IAppState>
  ) {}

  getLoggedInUserData() {
    let data: any = localStorage.getItem('currentUserData');
    if (!data) {
      this._router.navigate(['/auth']);
    }
    let userData = JSON.parse(data);
    return userData;
  }

  getUserById() {
    // return this._http.get(`${this.FetchUserByIdrUrl}/${userId}`)
    let userData: any;
    let storedData = this.getLoggedInUserData();
    console.log('  userData: ', userData);
    this.ngRedux.dispatch({ type: FETCH_USER_DETAILS });
    this._http.get(`${this.FetchUserByIdrUrl}/${storedData.user_id}`).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          userData = response?.data;
          this.ngRedux.dispatch({
            type: FETCH_USER_DETAILS_SUCCESS,
            payload: userData,
          });
          // return userData;
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });

    // this.ngRedux.dispatch({ type: FETCH_USER_DETAILS });
    // let loggedInUser = this._identitySvc.getLoggedInUserData();
    // this.ngRedux.dispatch({
    //   type: FETCH_USER_DETAILS_SUCCESS,
    //   payload: loggedInUser,
    // });
  }

  UpdateUserDetails(payload: UpdateUserModel) {
    console.log('payload: ', payload);
    return this._http.post(this.UpdateUserUrl, payload);
  }

  UpdateUserPassword(Payload: UpdatePassword) {
    return this._http.post(`${this.UpdatePasswordUrl}`, Payload);
  }
}
