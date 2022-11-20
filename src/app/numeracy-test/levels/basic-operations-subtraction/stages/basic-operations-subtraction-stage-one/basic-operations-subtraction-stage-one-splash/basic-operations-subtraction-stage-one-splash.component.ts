import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-subtraction-stage-one-splash',
  templateUrl: './basic-operations-subtraction-stage-one-splash.component.html',
  styleUrls: ['./basic-operations-subtraction-stage-one-splash.component.scss'],
})
export class BasicOperationsSubtractionStageOneSplashComponent
  implements OnInit
{
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
