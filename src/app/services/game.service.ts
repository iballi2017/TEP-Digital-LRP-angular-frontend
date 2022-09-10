import { Injectable } from '@angular/core';
import { baseUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import {
  GameSessionData,
  GameStageResult,
  LetteringStageOneResult,
  StartGame,
} from '../models/types/game';
import { IAppState } from 'src/redux/store';
import { NgRedux } from '@angular-redux/store';
import {
  FETCH_GAME_SESSION,
  FETCH_GAME_SESSION_ERROR,
  FETCH_GAME_SESSION_SUCCESS,
} from 'src/redux/_game.store/game.actions';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LetteringStageOneAnswer } from '../literacy-test/levels/lettering/stages/lettering-stage-one/activity/exercise/exercise.component';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  StartGameUrl = baseUrl + '/start-game-session';
  // FetchUserByIdrUrl = baseUrl + '/fetch-user-by-id';
  // UpdatePasswordUrl = baseUrl + '/update-user-password';
  SubmitGameStage_1_Url = baseUrl + '/submit-letter-stage-1';
  isCorrectAnswerBehaviorSubject: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>, private _router: Router) {}

  sendIsCorrectAnswerBehaviorSubject(data: any) {
    this.isCorrectAnswerBehaviorSubject.next(data);
  }

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
      this._router.navigate(['/test-onboarding']);
    }
  }

  GetGameLevels() {
    let levels = [
      {
        title: 'lettering',
        stages: [
          {
            stageTitle: 1,
            stageUrl: '',
          },
          {
            stageTitle: 2,
            stageUrl: '',
          },
          {
            stageTitle: 3,
            stageUrl: '',
          },
          {
            stageTitle: 4,
            stageUrl: '',
          },
        ],
      },
    ];

    return levels;
  }

  IsGame() {
    let sessionData: any = sessionStorage.getItem(GameSessionData.name);
    let stageResultBook: any = sessionStorage.getItem(GameSessionData.result);
    return sessionData && stageResultBook ? true : false;
  }

  SubmitGameStageResult(_GameStageResult: GameStageResult) {
    return this._http.post(`${this.SubmitGameStage_1_Url}`, _GameStageResult);
  }


  SubmitLetteringStageOneResult(_LetteringStageOneResult: LetteringStageOneAnswer) {
    return this._http.post(`${this.SubmitGameStage_1_Url}`, _LetteringStageOneResult);
  }

  
}
