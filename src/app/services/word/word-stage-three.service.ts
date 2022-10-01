import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import {
  actionWords,
  resultLetterWords,
} from 'src/assets/data/word-stage-three.data';

@Injectable({
  providedIn: 'root',
})
export class WordStageThreeService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_3_Url = baseUrl + '/submit-word-stage-3';

  constructor(private _http: HttpClient) {}

  GetActionWords() {
    let alphabetsList = [...actionWords];
    return alphabetsList;
  }
  GetresultLetterWords() {
    let alphabetsList = { ...resultLetterWords };
    return alphabetsList;
  }

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_3_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
