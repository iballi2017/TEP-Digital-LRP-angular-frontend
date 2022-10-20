import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actionNumbers, resultNumbers } from 'src/assets/data/numeracy.data/basic-operations-multiplication-stage-1.data';

@Injectable({
  providedIn: 'root'
})
export class BasicOperationsMultiplicationStageOneService {

  // StartGameUrl = baseUrl + '/start-game-session';
  // SubmitGameStage_3_Url = baseUrl + '/submit-word-stage-3';

  constructor(private _http: HttpClient) {}

  GetActionNumbers() {
    let numbersList = [...actionNumbers];
    return numbersList;
  }
  GetresultNumbers() {
    let numbersList = { ...resultNumbers };
    return numbersList;
  }

  // SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
  //   return this._http
  //     .post(`${this.SubmitGameStage_3_Url}`, _GameStageResult)
  //     .pipe(catchError(handleError));
  // }
}
