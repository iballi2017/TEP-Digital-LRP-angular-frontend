import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import {
  actionNumbers,
  resultNumbers,
} from 'src/assets/data/numeracy.data/basic-operations-division-stage-3.data';

@Injectable({
  providedIn: 'root',
})
export class BasicOperationsDivisionStageThreeService {
  SubmitBasicOperationsDivisionGameStage_3_Url =
    baseUrl + '/submit-basic-operations-div-stage-3';

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

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitBasicOperationsDivisionGameStage_3_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
