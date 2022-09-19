import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  SendRegisteredEmailUrl = baseUrl + '/forgot-password';
  constructor(private _http: HttpClient) {}

  SendRegisteredEmail(Email: RegisteredEmail) {
    return this._http.post(this.SendRegisteredEmailUrl, Email)
    .pipe(catchError(handleError));
  }
}

export interface RegisteredEmail {
  usr_email: string;
}
