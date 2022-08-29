import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionId } from 'src/app/models/types/game-report';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/components/boolean-alert-dialog/boolean-alert-dialog.component';
import { IAppState } from 'src/redux/store';
import {
  REMOVE_REPORT,
  REMOVE_REPORT_ERROR,
  REMOVE_REPORT_SUCCESS,
} from 'src/redux/_report.store/report.actions';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  @select((details) => details.reportsList.gameResultDetails)
  gameResultDetails$: any;
  @select((details) => details.reportsList.isLoading) isLoading$: any;
  primaryBtnTitle = 'Continue';
  dangerBtnTitle = 'Delete Report';
  primaryBtnClasses =
    'edit-btn action-button primary-btn text-bold text-uppercase px-3';
  dangerBtnClasses =
    'btn action-button delete-btn danger-btn text-uppercase px-4';
  primaryBtnStyle = { fontSize: '17px' };
  dangerBtnStyle = { fontSize: '17px' };

  title = 'REPORT DETAILS';
  respondentInformation: any;
  reportDetails: any;
  constructor(
    private _route: ActivatedRoute,
    private _reportSvc: ReportService,
    private ngRedux: NgRedux<IAppState>,
    public dialog: MatDialog,
    public _router: Router
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
    console.log('gameResultDetails??????????????: ', this.gameResultDetails$);
  }

  getRouteParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        if (params) {
          console.log('params: ', params);
          // let x = JSON.parse(params.get('reportId'));
          let x = params.get('sessionId');
          console.log(' x: ', x);
          this.respondentInformation = x;
          this.onGetReportDetails(x);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
  }

  onGetReportDetails(sessionId: SessionId) {
    this._reportSvc.LoadGameResultDetails(sessionId);

    this.gameResultDetails$.subscribe({
      next: (data: any) => {
        if (data) {
          this.reportDetails = data;
        }
      },
      error: (err: any) => {
        if (err) {
          console.log('Error: ', err);
        }
      },
    });
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
      // console.log(`Dialog result: ${result}`);
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
    console.log('_sessionId: ', _sessionId);
    this._reportSvc.RemoveReport(_sessionId).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: REMOVE_REPORT_SUCCESS,
            payload: {
              sessionId: sessionId,
            },
          });
          this._router.navigate(['/account/reports'])
        }
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

  onViewReportDetails(sessionId: string) {}

  back() {
    history.back();
  }
}
