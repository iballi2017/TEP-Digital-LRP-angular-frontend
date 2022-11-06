import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class GameResultRatingService {
  GetUserGameResultUrl = baseUrl + '/fetch-user-game-result-by-session-id';

  constructor(private _http: HttpClient) {}

  GetUserGameResult(SessionId: string) {
    return this._http.get(`${this.GetUserGameResultUrl}/${SessionId}`);
  }
}
