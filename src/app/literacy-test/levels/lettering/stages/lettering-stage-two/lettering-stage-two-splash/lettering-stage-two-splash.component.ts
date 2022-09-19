import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-two-splash',
  templateUrl: './lettering-stage-two-splash.component.html',
  styleUrls: ['./lettering-stage-two-splash.component.scss']
})
export class LetteringStageTwoSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
