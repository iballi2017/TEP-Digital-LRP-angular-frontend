import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-one-splash',
  templateUrl: './basic-operations-division-stage-one-splash.component.html',
  styleUrls: ['./basic-operations-division-stage-one-splash.component.scss']
})
export class BasicOperationsDivisionStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
