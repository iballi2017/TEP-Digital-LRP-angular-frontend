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
  // AddOccupantUrl = baseUrl + '/add-new-occupant';
  // FetchOccupantUrl = baseUrl + '/fetch-occupant-by-id';
  // RemoveOccupantUrl = baseUrl + '/delete-occupant';
  // UpdateOccupantAccountUrl = baseUrl + '/update-occupant-account';
  testUrl = 'http://localhost:3100/reports';

  // fetch-user-game-resultUrl =
  Subscriptions: Subscription[] = [];

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  GetReports(): Observable<any> {
    return this._http.get<any>(this.testUrl).pipe(catchError(handleError));
  }

  LoadReports() {
    this.ngRedux.dispatch({ type: FETCH_REPORTS_LIST });
    this._http
      .get(this.testUrl)
      .pipe(
        map((response: any) => {
          const x: [] = response;
          return x;
        })
      )
      .subscribe({
        next: (response: any) => {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: FETCH_REPORTS_LIST_SUCCESS,
            payload: response,
          });
        },
        error: (err: any) => {
          console.log('Error: ', err);
          this.ngRedux.dispatch({
            type: FETCH_REPORTS_LIST_ERROR,
            payload: err,
          });
        },
      });
  }

  // LoadUserGameResult(): Observable<GameReport> {
  //   return this._http.get<GameReport>(this.GetUserGameResultUrl);
  // }

  LoadUserGameResult() {
    this.ngRedux.dispatch({ type: FETCH_REPORTS_LIST });
    let subscription = this._http
      .get<GameReport>(this.GetUserGameResultUrl)
      .pipe(
        map((result: any) => {
          let reports: any[] = result?.data;
          let reportList: GameReport[] = [];
          if (result) {
            console.log('result!!!: ', result);
            // return result;

            for (let key in reports) {
              let report: GameReport = {
                sessionId: reports[key].session_id,
                fullname: reports[key].occ_name,
                age: reports[key].occ_age,
                gender: reports[key].occ_gender,
                program: reports[key].gms_type,
                status: reports[key].status,
                overallScore: reports[key].total_percent,
              };
              reportList.push({ ...report, key: key });
            }
          }
          console.log('reportList%%%%%: ', reportList);
          return reportList;
        }),
        catchError(handleError)
      )
      .subscribe({
        next: (response: any) => {
          if (response) {
            console.log('xxxxx: ', response);
            this.ngRedux.dispatch({
              type: FETCH_REPORTS_LIST_SUCCESS,
              payload: response,
            });
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error: ', err);
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
          console.log('response details: ', response);
          return response;
        }),
        catchError(handleError)
      )
      .subscribe({
        next: (resultDetails: any) => {
          if (resultDetails) {
            console.log('result details: ', resultDetails);
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
    console.log('sessionId: ', sessionId);
    // return this._http.delete(`${this.testUrl}/${reportId}`);
    return this._http.post(`${this.DeleteUserGameResultUrl}`, sessionId)
    .pipe(catchError(handleError));
  }

  ngOnDestroy(): void {
    console.log('destroyed!!!', this.Subscriptions);
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
