import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-multiplication-stage-two-splash',
  templateUrl: './basic-operations-multiplication-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-multiplication-stage-two-splash.component.scss']
})
export class BasicOperationsMultiplicationStageTwoSplashComponent implements OnInit {
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
