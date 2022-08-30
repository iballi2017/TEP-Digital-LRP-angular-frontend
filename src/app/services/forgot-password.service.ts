import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  SendRegisteredEmailUrl = baseUrl + '/forgot-password';
  constructor(private _http: HttpClient) {}

  SendRegisteredEmail(Email: RegisteredEmail) {
    return this._http.post(this.SendRegisteredEmailUrl, Email);
  }
}

export interface RegisteredEmail {
  usr_email: string;
}
