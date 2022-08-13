import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReportService } from 'src/app/services/report.service';
import { IAppState } from 'src/redux/store';
import {
  REMOVE_REPORT,
  REMOVE_REPORT_ERROR,
  REMOVE_REPORT_SUCCESS,
} from 'src/redux/_report.store/report.actions';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  @select((s) => s.reportsList.reportsList) reportsList$!: any;
  @select((s) => s.reportsList.isLoading) isLoading$!: any;
  // reportList: any[] = [1, 2, 3];
  filterDropdownList = [FilterDropdown?.first, FilterDropdown?.second];
  Subscriptions: Subscription[] = [];
  reports: any;
  constructor(
    private _reportSvc: ReportService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.onGetReportList();
  }

  onGetReportList() {
    // let subscription = this._reportSvc.GetReports().subscribe({
    //   next: (response: any) => {
    //     console.log('reports: ', response);
    //     this.reportList = response;
    //   },
    // });
    // this.Subscriptions.push(subscription);

    let subscription = this.reportsList$.subscribe({
      next: (response: any) => {
        console.log('reports: ', response);
        this.reports = response;
      },
    });
    this.Subscriptions.push(subscription);

    this._reportSvc.LoadReports();
  }


  onViewReport(item: any) {
    let x = JSON.stringify(item)
    // this._router.navigate([`account/reports/${item?.id}`]);
    this._router.navigate([`account/reports/${x}`]);
  }

  onRemoveReport(reportId: string) {
    this.ngRedux.dispatch({ type: REMOVE_REPORT });
    this._reportSvc.RemoveReport(reportId).subscribe({
      next: (response: any) => {
        console.log('response: ', response);
        this.ngRedux.dispatch({
          type: REMOVE_REPORT_SUCCESS,
          payload: {
            id: reportId,
          },
        });
      },
      error: (err: any) => {
        console.warn('Error: ', err);
        this.ngRedux.dispatch({
          type: REMOVE_REPORT_ERROR,
          payload: err,
        });
      },
    });
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

export enum FilterDropdown {
  first = 'Ascending',
  second = 'Descending',
}
