import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-screen-consonant-splash',
  templateUrl: './fifth-screen-consonant-splash.component.html',
  styleUrls: ['./fifth-screen-consonant-splash.component.scss']
})
export class FifthScreenConsonantSplashComponent implements OnInit, OnDestroy {

  // leftLink = '/literacy/lettering/stage-2/lettering-splash/fourth-screen';
  leftLink = '/literacy/lettering/stage-2/pronunciation';
  // rightLink = '/literacy/lettering/stage-2/lettering-splash/fifth-screen';
  rightLink = '/literacy/lettering/stage-2/pronunciation';
  
  srcFile = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.srcFile = '';
  }
}
