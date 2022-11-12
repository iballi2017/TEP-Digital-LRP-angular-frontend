// import { NgRedux } from '@angular-redux/store';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs';
// import { IAppState } from 'src/redux/store';
// import { FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST, FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS } from 'src/redux/_game-level-result-and-rating.store/game-level-result-and-rating.actions';
// import { baseUrl } from '../config/api';

// @Injectable({
//   providedIn: 'root',
// })
// export class LevelGameResultService {
//   LetterLevelGameResult_Url = baseUrl + '/letter-level-game-result';
//   WordLevelGameResult_Url = baseUrl + '/word-level-game-result';

//   constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

//   GetLetterLevelGameResultBySessionId(SessionId: any) {
//     return this._http.get(`${this.LetterLevelGameResult_Url}/${SessionId}`);
//   }




//   LoadUserGameResult(SessionId: string) {
//     this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST })
//     return this._http.get(`${this.LetterLevelGameResult_Url}/${SessionId}`).pipe(
//       map((response: any) => {
//         console.log("response!!!: ", response)
//         return response?.letterData;
//       })
//     ).subscribe({
//       next: (data: any) => {
//         if (data) {
//           this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS, payload: data })
//         }
//       },
//       error: (err: any) => {
//         if (err) {
//           this.ngRedux.dispatch({ type: FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR, payload: err })
//         }
//       }
//     })
//   }
// }
