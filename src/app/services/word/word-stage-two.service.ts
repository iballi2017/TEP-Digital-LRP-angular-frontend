import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { actionwords, resultWords } from 'src/assets/data/word-stage-two.data';

@Injectable({
  providedIn: 'root',
})
export class WordStageTwoService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_2_Url = baseUrl + '/submit-word-stage-2';
  constructor(private _http: HttpClient) {}

  GetActionwords() {
    let wordsList = [...actionwords];
    return wordsList;
  }

  GetResultwords() {
    let wordsList = [...resultWords];
    return wordsList;
  }
  // GetresultLetterWords() {
  //   let wordsList = [...resultLetterWords];
  //   return wordsList;
  // }
  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_2_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
