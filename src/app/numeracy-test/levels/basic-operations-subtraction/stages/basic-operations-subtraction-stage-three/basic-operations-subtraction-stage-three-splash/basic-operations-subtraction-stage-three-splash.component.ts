import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-subtraction-stage-three-splash',
  templateUrl: './basic-operations-subtraction-stage-three-splash.component.html',
  styleUrls: ['./basic-operations-subtraction-stage-three-splash.component.scss']
})
export class BasicOperationsSubtractionStageThreeSplashComponent implements OnInit {
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
