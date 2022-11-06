import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionId } from 'src/app/models/types/game-report';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/components/boolean-alert-dialog/boolean-alert-dialog.component';
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
  filterDropdownList = [
    FilterDropdown?.ASCENDING,
    FilterDropdown?.DESCENDING,
    FilterDropdown?.AGE,
    FilterDropdown?.LOWEST_SCORE,
    FilterDropdown?.HIGHEST_SCORE,
  ];
  Subscriptions: Subscription[] = [];
  reports: any;
  primaryBtnTitle = 'View';
  dangerBtnTitle = 'Delete';
  SortItem: any;
  constructor(
    private _reportSvc: ReportService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetReportList();
    this._reportSvc.LoadUserGameResult();
  }

  onGetReportList() {
    let subscription = this.reportsList$.subscribe({
      next: (response: any) => {
        this.reports = response;
      },
    });
    this.Subscriptions.push(subscription);

    this._reportSvc.LoadReports();
  }
  onViewReportDetails(item: any) {
    this._router.navigate([`account/reports/details/${item}`]);
  }

  onRemoveReport(sessionId: string) {
    this.openDialog(sessionId);
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // 
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }

  onDeleteOccupant(sessionId: string) {
    this.ngRedux.dispatch({ type: REMOVE_REPORT });
    const _sessionId: SessionId = {
      session_id: sessionId,
    };
    
    this._reportSvc.RemoveReport(_sessionId).subscribe({
      next: (response: any) => {
        
        this.ngRedux.dispatch({
          type: REMOVE_REPORT_SUCCESS,
          payload: {
            sessionId: sessionId,
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

  onEditReport() {}
  FilterForm!: any;
  sortReportListBy(FilterForm:any) {
    let SortItem = FilterForm.value.Filter;
    switch (SortItem) {
      case FilterDropdown.ASCENDING:
        this.reports.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? 1 : -1
        );
        break;

      case FilterDropdown.DESCENDING:
        this.reports.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? -1 : 1
        );
        break;

      case FilterDropdown.AGE:
        this.reports.sort((a: any, b: any) => {
          
          let x = parseInt(a['age']);
          let y = parseInt(b['age']);
          return x > y ? 1 : -1;
        });
        break;

      case FilterDropdown.HIGHEST_SCORE:
        this.reports.sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? -1 : 1;
        });
        break;

      case FilterDropdown.LOWEST_SCORE:
        this.reports.sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? 1 : -1;
        });
        break;

      default:
        return this.reports;
    }
  }

  ngOnDestroy(): void {
    
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

export enum FilterDropdown {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
  AGE = 'AGE',
  HIGHEST_SCORE = 'HIGHEST SCORE',
  LOWEST_SCORE = 'LOWEST SCORE',
}
