import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-addition-stage-two-splash',
  templateUrl: './basic-operations-addition-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-addition-stage-two-splash.component.scss']
})
export class BasicOperationsAdditionStageTwoSplashComponent implements OnInit {
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
