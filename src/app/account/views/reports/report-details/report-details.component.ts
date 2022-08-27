import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionId } from 'src/app/models/types/game-report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  @select((details) => details.reportsList.gameResultDetails)
  gameResultDetails$: any;
  @select((details) => details.reportsList.isLoading) isLoading$: any;

  title = 'REPORT DETAILS';
  respondentInformation: any;
  reportDetails: any;
  constructor(
    private _route: ActivatedRoute,
    private _reportSvc: ReportService
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

  back() {
    history.back();
  }
}
