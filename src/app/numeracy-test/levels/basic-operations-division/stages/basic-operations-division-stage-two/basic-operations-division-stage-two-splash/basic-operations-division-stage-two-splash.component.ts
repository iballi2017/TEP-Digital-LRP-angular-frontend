import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-two-splash',
  templateUrl: './basic-operations-division-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-division-stage-two-splash.component.scss']
})
export class BasicOperationsDivisionStageTwoSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
