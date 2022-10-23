import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  actionNumbers,
  resultNumbers,
} from 'src/assets/data/numeracy.data/basic-operations-division-stage-2.data';

@Injectable({
  providedIn: 'root',
})
export class BasicOperationsDivisionStageTwoService {
  // StartGameUrl = baseUrl + '/start-game-session';
  // SubmitGameStage_3_Url = baseUrl + '/submit-word-stage-3';

  constructor(private _http: HttpClient) {}

  GetActionNumbers() {
    let numbersList = [...actionNumbers];
    return numbersList;
  }
  GetResultNumbers() {
    let numbersList = { ...resultNumbers };
    return numbersList;
  }

  // GetTestTwoActionsNumbers() {
  //   let numbersList = [...testTwoActionNumbers];
  //   return numbersList;
  // }

  // GetTestTwoResultNumbers() {
  //   let numbersList = { ...testTwoResultNumbers };
  //   return numbersList;
  // }

  // SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
  //   return this._http
  //     .post(`${this.SubmitGameStage_3_Url}`, _GameStageResult)
  //     .pipe(catchError(handleError));
  // }
}
