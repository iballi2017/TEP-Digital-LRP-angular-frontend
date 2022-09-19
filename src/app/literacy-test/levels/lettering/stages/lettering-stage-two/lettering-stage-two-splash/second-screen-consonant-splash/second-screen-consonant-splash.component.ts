import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-screen-consonant-splash',
  templateUrl: './second-screen-consonant-splash.component.html',
  styleUrls: ['./second-screen-consonant-splash.component.scss']
})
export class SecondScreenConsonantSplashComponent implements OnInit, OnDestroy {

  statement = 'Audu is spelled A, U, D, U Audu';
  leftLink = '/literacy/lettering/stage-2/lettering-splash';
  rightLink = '/literacy/lettering/stage-2/lettering-splash/third-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_second-screen.mp3';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.srcFile = "";
   }
}
