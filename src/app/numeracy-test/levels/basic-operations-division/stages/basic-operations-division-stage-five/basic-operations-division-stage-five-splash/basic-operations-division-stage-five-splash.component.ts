import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-five-splash',
  templateUrl: './basic-operations-division-stage-five-splash.component.html',
  styleUrls: ['./basic-operations-division-stage-five-splash.component.scss']
})
export class BasicOperationsDivisionStageFiveSplashComponent implements OnInit {
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
