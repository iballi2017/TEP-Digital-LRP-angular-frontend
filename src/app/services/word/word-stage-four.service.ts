import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { actionwords, results } from 'src/assets/data/literacy.data/word-stage-four.data';

@Injectable({
  providedIn: 'root',
})
export class WordStageFourService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_4_Url = baseUrl + '/submit-word-stage-4';
  // alphabetsList: any = [];

  constructor(private _http: HttpClient) {}

  GetActionWords() {
    let list = [...actionwords];
    return list;
  }

  GetresultList() {
    let list = [...results];
    return list;
  }

  // GetExerciseAlphabetForStageThree() {
  //   this.alphabetsList = [...exerciseAlphabets];
  //   return this.alphabetsList;
  // }


  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_4_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
