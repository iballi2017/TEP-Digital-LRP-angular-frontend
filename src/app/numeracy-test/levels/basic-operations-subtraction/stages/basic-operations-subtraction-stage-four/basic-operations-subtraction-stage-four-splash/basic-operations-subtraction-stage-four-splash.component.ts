import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-subtraction-stage-four-splash',
  templateUrl: './basic-operations-subtraction-stage-four-splash.component.html',
  styleUrls: ['./basic-operations-subtraction-stage-four-splash.component.scss']
})
export class BasicOperationsSubtractionStageFourSplashComponent implements OnInit {
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
