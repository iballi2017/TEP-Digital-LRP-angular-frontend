import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import {
  actionNumbers,
  resultNumbers,
} from 'src/assets/data/numeracy.data/basic-operations-subtraction-stage-2.data';

@Injectable({
  providedIn: 'root',
})
export class BasicOperationsSubtractionStageTwoService {
  SubmitBasicOperationsSubtractionGameStage_2_Url = baseUrl + '/submit-basic-operations-sub-stage-2';

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
      .post(`${this.SubmitBasicOperationsSubtractionGameStage_2_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
