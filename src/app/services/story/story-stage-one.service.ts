import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { actionwords, storyResults, titleResults } from 'src/assets/data/story-stage-one.data';

@Injectable({
  providedIn: 'root'
})
export class StoryStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-story-stage-1';
  
  constructor(private _http: HttpClient) {}

  GetActionWords() {
    let list = [...actionwords];
    return list;
  }

  GetTitleResultList() {
    let list = [...titleResults];
    return list;
  }

  GetStoryResultList() {
    let list = [...storyResults];
    return list;
  }

  
  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
