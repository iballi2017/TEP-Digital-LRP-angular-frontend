import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-stage-splash',
  templateUrl: './word-stage-splash.component.html',
  styleUrls: ['./word-stage-splash.component.scss']
})
export class WordStageSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'WORD',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
