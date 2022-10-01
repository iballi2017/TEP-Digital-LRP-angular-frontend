import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-stage-three-splash',
  templateUrl: './paragraph-stage-three-splash.component.html',
  styleUrls: ['./paragraph-stage-three-splash.component.scss']
})
export class ParagraphStageThreeSplashComponent implements OnInit {
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
