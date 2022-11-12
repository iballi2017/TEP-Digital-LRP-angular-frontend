import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import {
  actionAlphabets,
  resultLetterWords,
} from 'src/assets/data/literacy.data/word-stage-one.data';

@Injectable({
  providedIn: 'root',
})
export class WordStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-word-stage-1';
  // SubmitGameStage_2_Url = baseUrl + '/submit-word-stage-2';
  // SubmitGameStage_3_Url = baseUrl + '/submit-word-stage-3';

  constructor(private _http: HttpClient) {}

  GetActionAlphabets() {
    let alphabetsList = [...actionAlphabets];
    return alphabetsList;
  }
  GetresultLetterWords() {
    let alphabetsList = [...resultLetterWords];
    return alphabetsList;
  }

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
