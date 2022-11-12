import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import {
  actionNumbers,
  resultNumbers,
  testTwoActionNumbers,
  testTwoResultNumbers,
} from 'src/assets/data/numeracy.data/basic-operations-addition-stage-4.data';

@Injectable({
  providedIn: 'root',
})
export class BasicOperationsAdditionStageFourService {
  SubmitBasicOperationsAddGameStage_4_Url =
    baseUrl + '/submit-basic-operations-add-stage-4';

  constructor(private _http: HttpClient) { }

  GetActionNumbers() {
    let numbersList = [...actionNumbers];
    return numbersList;
  }
  GetResultNumbers() {
    let numbersList = { ...resultNumbers };
    return numbersList;
  }

  GetTestTwoActionsNumbers() {
    let numbersList = [...testTwoActionNumbers];
    return numbersList;
  }

  GetTestTwoResultNumbers() {
    let numbersList = { ...testTwoResultNumbers };
    return numbersList;
  }

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitBasicOperationsAddGameStage_4_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }

  SubmitGameStageActivityTwoResult(_GameStageResult: ExerciseAnswer) {
    // console.log('Activity 2 data: ', _GameStageResult);
            alert("completed!!!")
    return this._http
      .post(`${this.SubmitBasicOperationsAddGameStage_4_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
