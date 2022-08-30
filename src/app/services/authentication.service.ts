import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap } from 'rxjs';
import { baseUrl } from '../config/api';
import { UserLogin, UserRegister, UserTokenModel } from '../models/types/user';
import { handleError } from '../helpers/errorHandler';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // LoginUserUrl = baseUrl + '/LoginUser';
  // RegisterUserUrl = baseUrl + '/RegisterUser';
  LoginUserUrl = baseUrl + '/user-login';
  RegisterUserUrl = baseUrl + '/create-user';
  ResetUserPasswordUrl = baseUrl + '/create-user';

  RefreshTokenUrl = baseUrl + 'api/Identity/refresh-token/****';
  isRegistrationSending: boolean = false;
  constructor(private _http: HttpClient, private _router: Router) {}

  // LoginUser(Payload: UserLogin) {
  //   this.isRegistrationSending = true;
  //   return this._http.post(this.LoginUserUrl, Payload);
  // }

  LoginUser(Payload: UserLogin): Observable<any> {
    this.isRegistrationSending = true;
    return this._http.post<any>(this.LoginUserUrl, Payload).pipe(
      tap((res: any) => {
        // authentication and local storage code can go here
        // console.log('tap respone: ', res);
        if (res) {
          // console.log('auth-user | login-user: ', res);
          // console.log(res.Role[0]);
          this._router.navigate([`/test-onboarding`]);
        }
      }),
      map((response: any) => {
        console.log('from map', response);
        this.setToken(response.jwt);
        this.RefreshToken(response.RefreshToken);
        localStorage.setItem('RefreshToken', response.RefreshToken);
        //
        let token: string = response.jwt;
        let decoded: any = jwt_decode(token);
        console.log(decoded);
        const userData = {
          accessToken: token,
          expiration: decoded.exp,
          usr_created_at: decoded.usr_created_at,
          usr_email: decoded.usr_email,
          usr_fullname: decoded.usr_fullname,
          usr_gender: decoded.usr_gender,
          usr_id: decoded.usr_id,
          usr_party: decoded.usr_party,
        };
        this.setUserData(userData);
        //
        return response;
      }, catchError(handleError))
    );
  }

  setUserData(userData: any) {
    JSON.stringify(userData);
    localStorage.setItem('currentUserData', JSON.stringify(userData));
  }

  RegisterUser(Payload: UserRegister) {
    this.isRegistrationSending = true;
    return this._http.post(this.RegisterUserUrl, Payload);
  }

  isLogin() {
    if (localStorage.getItem('token') === null) {
      return false;
    } else {
      return true;
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  RefreshToken(refreshtoken: any) {
    return this._http
      .post<UserTokenModel>(this.RefreshTokenUrl, {
        refreshtoken,
      })
      .pipe(
        map((UserModel) => {
          console.log('NEW DATA UserModel: ', UserModel);
          this.setToken(UserModel.AccessToken);
          localStorage.setItem('RefreshToken', UserModel.RefreshToken);
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {
    return localStorage.getItem('RefreshToken');
  }


  resetUserPassword(ChangePasswordData:ChangePasswordData){
return this._http.post(this.ResetUserPasswordUrl, ChangePasswordData);
  }

  logoutUser() {
    localStorage.clear();
    this._router.navigate(['/auth']);
  }
}


export interface ChangePasswordData{
  reset_selector: string,
  usr_password: string,
}