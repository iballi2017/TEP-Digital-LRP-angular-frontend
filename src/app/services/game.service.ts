import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { GameSessionData, StartGame } from '../models/types/game';
import { IAppState } from 'src/redux/store';
import { NgRedux } from '@angular-redux/store';
import {
  FETCH_GAME_SESSION,
  FETCH_GAME_SESSION_ERROR,
  FETCH_GAME_SESSION_SUCCESS,
} from 'src/redux/_game.store/game.actions';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  StartGameUrl = baseUrl + '/start-game-session';
  // FetchUserByIdrUrl = baseUrl + '/fetch-user-by-id';
  // UpdatePasswordUrl = baseUrl + '/update-user-password';

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  StartGame(Payload: StartGame) {
    console.log('Start game payload: ', Payload);
    return this._http.post(this.StartGameUrl, Payload);
  }

  LoadGameSession() {
    this.ngRedux.dispatch({ type: FETCH_GAME_SESSION });
    let sessionData = sessionStorage.getItem(GameSessionData.name);
    console.log('sessionData: ', sessionData);
    if (sessionData) {
      let x = JSON.parse(sessionData);
      this.ngRedux.dispatch({ type: FETCH_GAME_SESSION_SUCCESS, payload: x });
    } else {
      this.ngRedux.dispatch({
        type: FETCH_GAME_SESSION_ERROR,
        payload: 'No Session stored',
      });
    }
  }
}
