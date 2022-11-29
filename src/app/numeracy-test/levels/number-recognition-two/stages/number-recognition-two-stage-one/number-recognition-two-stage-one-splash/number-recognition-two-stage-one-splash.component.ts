import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-recognition-two-stage-one-splash',
  templateUrl: './number-recognition-two-stage-one-splash.component.html',
  styleUrls: ['./number-recognition-two-stage-one-splash.component.scss']
})
export class NumberRecognitionTwoStageOneSplashComponent implements OnInit {
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
