import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-screen-consonant-splash',
  templateUrl: './first-screen-consonant-splash.component.html',
  styleUrls: ['./first-screen-consonant-splash.component.scss'],
})
export class FirstScreenConsonantSplashComponent implements OnInit, OnDestroy {
  statement = "In this stage, we'll learn consonant letters";
  leftLink = '';
  rightLink = '/literacy/lettering/stage-2/lettering-splash/second-screen';
  audio: any;
  srcFile = '';

  constructor() {}

  ngOnInit(): void {}

  
  ngOnDestroy(): void {
    this.srcFile = "";
   }
}
