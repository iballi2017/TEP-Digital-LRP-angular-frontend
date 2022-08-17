import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss'],
})
export class FirstScreenComponent implements OnInit, OnDestroy {
  statement = 'Hello, my name is Audu';
  leftLink = '';
  rightLink = '/literacy/stage-1/lettering-splash/second-screen';
  audio: any;
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_first-screen.mp3';
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
   this.srcFile = "";
  }

}
