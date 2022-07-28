import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';
import { UserLogin, UserRegister } from '../models/types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // LoginUserUrl = baseUrl + 'LoginUser';
  // RegisterUserUrl = baseUrl + 'RegisterUser';
  LoginUserUrl = baseUrl + '/user-login';
  RegisterUserUrl = baseUrl + '/create-user';

  isRegistrationSending:boolean = false;
  constructor(private _http: HttpClient) {}

  LoginUser(Payload: UserLogin) {
    this.isRegistrationSending = true;
    return this._http.post(this.LoginUserUrl, Payload);
  }

  RegisterUser(Payload: UserRegister) {
    this.isRegistrationSending = true;
    return this._http.post(this.RegisterUserUrl, Payload);
  }
}
