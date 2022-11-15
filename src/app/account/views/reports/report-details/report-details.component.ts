import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionId } from 'src/app/models/types/game-report';
import { GameType } from 'src/app/models/types/game-type';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/components/boolean-alert-dialog/boolean-alert-dialog.component';
import { IAppState } from 'src/redux/store';
import { ADD_GAME_SESSION, ADD_GAME_SESSION_SUCCESS } from 'src/redux/_game.store/game.actions';
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
  }

  getRouteParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        if (params) {
          // let x = JSON.parse(params.get('reportId'));
          let x = params.get('sessionId');

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
          console.error('Error: ', err);
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
        if (response) {
          this.ngRedux.dispatch({
            type: REMOVE_REPORT_SUCCESS,
            payload: {
              sessionId: sessionId,
            },
          });
          this._router.navigate(['/account/reports']);
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

  onContinueReportGame(sessionId: string, GameType:string) {
    this.ngRedux.dispatch({ type: ADD_GAME_SESSION });
    console.log('sessionId: ', sessionId);
    const Payload = {
      id:  new Date().getTime().toString(),
      status: 'success',
      session_id: sessionId,
      game_type: GameType.toLowerCase(),
      message: 'Game initiated successfully',
    };
    console.log('Payload : ', Payload);
    this.ngRedux.dispatch({
      type: ADD_GAME_SESSION_SUCCESS,
      payload: Payload,
    });
    this.routeToGame(Payload.game_type);

    //   {
    //     "id": "1668545287938",
    //     "status": "success",
    //     "session_id": "91269aa8-0891-4a6f9c5f",
    //     "game_type": "literacy",
    //     "message": "Game initiated successfully"
    // }

    // routeToGame(GT: string) {
    // switch (GT) {
    //   case GameType.LITERACY:
    //     this._router.navigate(['/literacy/levels/lettering']);
    //     break;
    //   case GameType.NUMERACY:
    //     this._router.navigate(['/numeracy/levels/number-recognition-one']);
    //     break;
    //   default:
    //     break;
    // }
    // }
  }
  routeToGame(GT: string) {
    console.log('GT : ', GT);
    console.log('GameType.LITERACY : ', GameType.LITERACY);
    console.log('GameType.NUMERACY : ', GameType.NUMERACY);
    switch (GT) {
      case GameType.LITERACY.toLowerCase():
        this._router.navigate(['/literacy/levels/lettering']);
        break;
      case GameType.NUMERACY.toLowerCase():
        this._router.navigate(['/numeracy/levels/number-recognition-one']);
        break;
      default:
        break;
    }
  }

  back() {
    history.back();
  }
}
