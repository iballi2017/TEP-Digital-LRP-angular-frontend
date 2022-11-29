import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-three-splash',
  templateUrl: './basic-operations-division-stage-three-splash.component.html',
  styleUrls: ['./basic-operations-division-stage-three-splash.component.scss']
})
export class BasicOperationsDivisionStageThreeSplashComponent implements OnInit {
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
