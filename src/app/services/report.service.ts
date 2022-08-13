import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { IAppState } from 'src/redux/store';
import {
  FETCH_REPORTS_LIST,
  FETCH_REPORTS_LIST_ERROR,
  FETCH_REPORTS_LIST_SUCCESS,
} from 'src/redux/_report.store/report.actions';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  // GetOccupantUrl = baseUrl + '/fetch-account-occupants';
  // AddOccupantUrl = baseUrl + '/add-new-occupant';
  // FetchOccupantUrl = baseUrl + '/fetch-occupant-by-id';
  // RemoveOccupantUrl = baseUrl + '/delete-occupant';
  // UpdateOccupantAccountUrl = baseUrl + '/update-occupant-account';
  testUrl = 'http://localhost:3000/reports';
  Subscriptions: Subscription[] = [];

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  GetReports(): Observable<any> {
    return this._http.get<any>(this.testUrl);
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

  RemoveReport(reportId: string) {
    return this._http.delete(`${this.testUrl}/${reportId}`);
  }
}
