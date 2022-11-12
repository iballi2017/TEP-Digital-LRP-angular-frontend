import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class LevelGameResultService {
  LetterLevelGameResult_Url = baseUrl + '/letter-level-game-result';
  WordLevelGameResult_Url = baseUrl + '/word-level-game-result';

  constructor(private _http: HttpClient) {}

  GetLetterLevelGameResultBySessionId(SessionId: any) {
    return this._http.get(`${this.LetterLevelGameResult_Url}/${SessionId}`);
  }
}
