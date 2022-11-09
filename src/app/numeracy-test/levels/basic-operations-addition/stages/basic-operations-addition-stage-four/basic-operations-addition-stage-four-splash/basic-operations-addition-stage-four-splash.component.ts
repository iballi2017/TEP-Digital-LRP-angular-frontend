import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-addition-stage-four-splash',
  templateUrl: './basic-operations-addition-stage-four-splash.component.html',
  styleUrls: ['./basic-operations-addition-stage-four-splash.component.scss']
})
export class BasicOperationsAdditionStageFourSplashComponent implements OnInit {
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
