import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-subtraction-stage-two-splash',
  templateUrl: './basic-operations-subtraction-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-subtraction-stage-two-splash.component.scss']
})
export class BasicOperationsSubtractionStageTwoSplashComponent implements OnInit {
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
