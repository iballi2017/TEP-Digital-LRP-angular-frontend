import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IAppState } from 'src/redux/store';
import { FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST, FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS } from 'src/redux/_game-level-result-and-rating.store/game-level-result-and-rating.actions';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class GameLevelResultAndRatingService {
  // GetUserGameResultUrl = baseUrl + '/fetch-user-game-result-by-session-id';
  // LETERACY
  LetterLevelGameResult_Url = baseUrl + '/letter-level-game-result';
  WordLevelGameResult_Url = baseUrl + '/word-level-game-result';
  ParagraphLevelGameResult_Url = baseUrl + '/paragraph-level-game-result';
  StoryLevelGameResult_Url = baseUrl + '/story-level-game-result';
  // NUMERACY
  NumberRecognition_1_gameResult_Url = baseUrl + '/number-recognition-1-game-result';
  NumberRecognition_2_gameResult_Url = baseUrl + '/number-recognition-2-game-result';
  NumberRecognition_3_gameResult_Url = baseUrl + '/number-recognition-3-game-result';
  PlaceValueLevelGameResult_Url = baseUrl + '/place-value-game-result';
  basicOperationsAddLevelGameResult_Url = baseUrl + '/basic-operation-add-game-result';
  basicOperationsSubtractionLevelGameResult_Url = baseUrl + '/basic-operation-sub-game-result';
  basicOperationsMultiplicationLevelGameResult_Url = baseUrl + '/basic-operation-mul-game-result';
  basicOperationsDivisionLevelGameResult_Url = baseUrl + '/basic-operation-div-game-result';



  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

  // GetUserGameResult(SessionId: string) {
  //   return this._http.get(`${this.GetUserGameResultUrl}/${SessionId}`);
  // }



  // LETERACY
  LoadLetteringGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.LetterLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.letterData;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadWordGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.WordLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.wordData;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadParagraphGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.ParagraphLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.paragraphData;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadStoryGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.StoryLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.storyData;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }


  // NUMERACY
  LoadNumberRecognition_1_gameResult(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.NumberRecognition_1_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognitionData;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadNumberRecognition_2_gameResult(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.NumberRecognition_2_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognition2Data;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadNumberRecognition_3_gameResult(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.NumberRecognition_3_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognition3Data;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  LoadPlaceValueGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.PlaceValueLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.placeValue;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }


  LoadbasicOperationsAddGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.basicOperationsAddLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpAdd;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }



  LoadbasicOperationsSubtractionGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.basicOperationsSubtractionLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpSub;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }


  LoadbasicOperationsMultiplicationGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.basicOperationsMultiplicationLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpMul;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }


  LoadbasicOperationsDivisionGameResultAndRating(SessionId: string) {
    this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
    return this._http.get(`${this.basicOperationsDivisionLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpDiv;
      })
    ).subscribe({
      next: (data: any) => {
        if (data) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
        }
      },
      error: (err: any) => {
        if (err) {
          this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
        }
      }
    })
  }

  

}
