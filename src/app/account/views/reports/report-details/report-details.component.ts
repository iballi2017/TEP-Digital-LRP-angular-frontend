import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  title = 'REPORT DETAILS';
  respondentInformation:any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        if (params) {
          console.log('params: ', params);
          let x = JSON.parse(params.get('reportId'));
          console.log(' x: ', x);
          this.respondentInformation = x
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
  }

  back() {
    history.back();
  }
}
