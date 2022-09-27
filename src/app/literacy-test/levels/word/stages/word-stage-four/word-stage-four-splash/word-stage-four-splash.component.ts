import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-stage-four-splash',
  templateUrl: './word-stage-four-splash.component.html',
  styleUrls: ['./word-stage-four-splash.component.scss']
})
export class WordStageFourSplashComponent implements OnInit {
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