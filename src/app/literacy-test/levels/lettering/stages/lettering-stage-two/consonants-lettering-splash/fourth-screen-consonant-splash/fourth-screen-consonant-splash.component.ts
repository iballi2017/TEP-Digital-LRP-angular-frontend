import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-screen-consonant-splash',
  templateUrl: './fourth-screen-consonant-splash.component.html',
  styleUrls: ['./fourth-screen-consonant-splash.component.scss']
})
export class FourthScreenConsonantSplashComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-2/lettering-splash/third-screen';
  rightLink = '/literacy/lettering/stage-2/lettering-splash/fifth-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_fourth-screen.mp3';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.srcFile = '';
  }
}
