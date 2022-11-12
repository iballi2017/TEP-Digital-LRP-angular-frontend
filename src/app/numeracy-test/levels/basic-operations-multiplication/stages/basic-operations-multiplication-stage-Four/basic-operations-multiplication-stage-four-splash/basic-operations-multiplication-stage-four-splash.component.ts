import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-multiplication-stage-four-splash',
  templateUrl: './basic-operations-multiplication-stage-four-splash.component.html',
  styleUrls: ['./basic-operations-multiplication-stage-four-splash.component.scss']
})
export class BasicOperationsMultiplicationStageFourSplashComponent implements OnInit {
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
