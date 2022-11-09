import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-addition-stage-three-splash',
  templateUrl: './basic-operations-addition-stage-three-splash.component.html',
  styleUrls: ['./basic-operations-addition-stage-three-splash.component.scss']
})
export class BasicOperationsAdditionStageThreeSplashComponent implements OnInit {
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
