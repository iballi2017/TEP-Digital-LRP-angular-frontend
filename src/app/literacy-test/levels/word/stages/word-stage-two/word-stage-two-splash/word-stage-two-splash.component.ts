import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-stage-two-splash',
  templateUrl: './word-stage-two-splash.component.html',
  styleUrls: ['./word-stage-two-splash.component.scss']
})
export class WordStageTwoSplashComponent implements OnInit {
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
