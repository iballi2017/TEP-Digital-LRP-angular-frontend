import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, map, Observable, Subscription } from 'rxjs';
import { IAppState } from 'src/redux/store';
import {
  FETCH_GAME_RESULT_DETAILS,
  FETCH_GAME_RESULT_DETAILS_ERROR,
  FETCH_GAME_RESULT_DETAILS_SUCCESS,
  FETCH_REPORTS_LIST,
  FETCH_REPORTS_LIST_ERROR,
  FETCH_REPORTS_LIST_SUCCESS,
} from 'src/redux/_report.store/report.actions';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';
import { GameReport, SessionId } from '../models/types/game-report';

@Injectable({
  providedIn: 'root',
})
export class ReportService implements OnDestroy {
  GetUserGameResultUrl = baseUrl + '/fetch-user-game-result';
  DeleteUserGameResultUrl = baseUrl + '/delete-game-result';
  GetUserGameResultDetailsUrl = baseUrl + '/fetch-game-result-details';

  Subscriptions: Subscription[] = [];

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  LoadUserGameResult() {
    this.ngRedux.dispatch({ type: FETCH_REPORTS_LIST });
    let subscription = this._http
      .get<GameReport>(this.GetUserGameResultUrl)
      .pipe(
        map((result: any) => {
          console.log('result: ', result);
          let reports: any[] = result?.data;
          let reportList: GameReport[] = [];
          if (result) {
            // return result;

            // gms_type: 'Literacy';
            // occ_age: '9';
            // occ_gender: 'Male';
            // occ_name: 'Taye Taiwo';
            // score_percent: '0.00%';
            // session_id: 'e075b69c-f539-44128f5b';
            // status: 'Incomplete';
            // total_score: 0;

            for (let key in reports) {
              let report: GameReport = {
                sessionId: reports[key].session_id,
                fullname: reports[key].occ_name,
                age: reports[key].occ_age,
                gender: reports[key].occ_gender,
                program: reports[key].gms_type,
                status: reports[key].status,
                overallScore: reports[key].total_score,
                scorePercent: reports[key].score_percent
              };
              reportList.push({ ...report, key: key });
            }
          }
          return reportList;
        }),
        catchError(handleError)
      )
      .subscribe({
        next: (response: any) => {
          console.log('response: ', response);
          if (response) {
            this.ngRedux.dispatch({
              type: FETCH_REPORTS_LIST_SUCCESS,
              payload: response,
            });
          }
        },
        error: (err: any) => {
          if (err) {
            this.ngRedux.dispatch({
              type: FETCH_REPORTS_LIST_ERROR,
              payload: err,
            });
          }
        },
      });
    this.Subscriptions.push(subscription);
  }

  LoadGameResultDetails(sessionId: SessionId) {
    this.ngRedux.dispatch({ type: FETCH_GAME_RESULT_DETAILS });
    let subscription = this._http
      .get(`${this.GetUserGameResultDetailsUrl}/${sessionId}`)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(handleError)
      )
      .subscribe({
        next: (resultDetails: any) => {
          if (resultDetails) {
            this.ngRedux.dispatch({
              type: FETCH_GAME_RESULT_DETAILS_SUCCESS,
              payload: resultDetails?.data,
            });
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Eror: ', err);
            this.ngRedux.dispatch({
              type: FETCH_GAME_RESULT_DETAILS_ERROR,
              payload: err,
            });
          }
        },
      });
    this.Subscriptions.push(subscription);
  }

  RemoveReport(sessionId: SessionId) {
    // return this._http.delete(`${this.testUrl}/${reportId}`);
    return this._http
      .post(`${this.DeleteUserGameResultUrl}`, sessionId)
      .pipe(catchError(handleError));
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
