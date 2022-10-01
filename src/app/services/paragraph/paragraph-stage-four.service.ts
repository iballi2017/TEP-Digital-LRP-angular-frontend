import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { actionwords, results } from 'src/assets/data/paragraph-stage-four.data';
import { IAppState } from 'src/redux/store';

@Injectable({
  providedIn: 'root',
})
export class ParagraphStageFourService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_4_Url = baseUrl + '/submit-paragraph-stage-4';
  constructor(private ngRedux: NgRedux<IAppState>, private _http: HttpClient) {}

  GetActionWords() {
    let list = [...actionwords];
    return list;
  }

  GetresultList() {
    let list = [...results];
    return list;
  }


  
  
  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_4_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
