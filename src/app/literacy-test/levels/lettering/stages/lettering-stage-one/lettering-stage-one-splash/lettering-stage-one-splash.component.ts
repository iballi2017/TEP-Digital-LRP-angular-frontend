import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-one-splash',
  templateUrl: './lettering-stage-one-splash.component.html',
  styleUrls: ['./lettering-stage-one-splash.component.scss']
})
export class LetteringStageOneSplashComponent implements OnInit {
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
