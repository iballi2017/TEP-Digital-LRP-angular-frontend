import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-screen-consonant-splash',
  templateUrl: './third-screen-consonant-splash.component.html',
  styleUrls: ['./third-screen-consonant-splash.component.scss'],
})
export class ThirdScreenConsonantSplashComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-2/lettering-splash/second-screen';
  rightLink = '/literacy/lettering/stage-2/lettering-splash/fourth-screen';
  // srcFile =
  //   '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_third-screen.mp3';
  srcFile = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.srcFile = '';
  }
}
