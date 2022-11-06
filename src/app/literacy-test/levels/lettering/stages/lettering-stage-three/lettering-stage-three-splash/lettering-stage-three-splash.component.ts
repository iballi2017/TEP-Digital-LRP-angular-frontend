import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-three-splash',
  templateUrl: './lettering-stage-three-splash.component.html',
  styleUrls: ['./lettering-stage-three-splash.component.scss']
})
export class LetteringStageThreeSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 3',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
